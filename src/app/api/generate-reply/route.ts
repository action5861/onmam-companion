import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { inquiryData } = await request.json()
    
    const {
      name,
      phone,
      email,
      patientName,
      patientAge,
      hospital,
      date,
      time,
      departure,
      message,
      serviceType,
      inquiryNumber,
      serviceDuration
    } = inquiryData

    // 서비스 타입별 맞춤 정보
    const serviceInfo = getServiceTypeInfo(serviceType, departure, hospital)
    
    // 예상 비용 계산
    const estimatedCost = calculateEstimatedCost(serviceType, departure, hospital, serviceDuration)
    
    // 개인화된 답변 초안 생성
    const replyDraft = generatePersonalizedReply({
      name,
      patientName,
      patientAge,
      hospital,
      date,
      time,
      departure,
      message,
      serviceType,
      inquiryNumber,
      serviceInfo,
      estimatedCost,
      serviceDuration,
      phone
    })

    return NextResponse.json({
      success: true,
      replyDraft,
      serviceInfo,
      estimatedCost
    })

  } catch (error) {
    console.error('답변 초안 생성 중 오류:', error)
    return NextResponse.json(
      { success: false, message: '답변 초안 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

// 서비스 타입별 정보 제공
function getServiceTypeInfo(serviceType: string, departure: string, hospital: string) {
  const baseInfo = {
    homeToHome: {
      pickupLocation: '고객님 자택',
      description: 'Home to Home 서비스',
      additionalServices: [
        '자택에서 픽업',
        '병원까지 직접 이동',
        '병원 내 전 과정 동행',
        '자택까지 안전 귀가'
      ]
    },
    hub: {
      pickupLocation: getRecommendedHub(departure),
      description: '교통허브 서비스',
      additionalServices: [
        '교통허브에서 픽업',
        '병원까지 편안한 이동',
        '병원 내 전 과정 동행',
        '교통허브까지 안전 이송'
      ]
    }
  }

  return baseInfo[serviceType as keyof typeof baseInfo] || baseInfo.hub
}

// 예상 비용 계산
function calculateEstimatedCost(serviceType: string, departure: string, hospital: string, serviceDuration: string) {
  const BASE_HOURLY_RATE = 30000 // 시간당 기본 요금
  const duration = parseInt(serviceDuration)
  
  // 기본 서비스 비용 (이용시간 * 시간당 요금)
  const baseServiceCost = duration * BASE_HOURLY_RATE
  
  // 초과 시간에 대한 안내 메시지
  const overtimeMessage = `
• 기본 이용시간: ${duration}시간
• 초과 시간 발생 시 시간당 30,000원 추가
• 교통비는 별도 부담 (실제 발생 비용 기준)`

  return {
    min: baseServiceCost,
    max: baseServiceCost,
    base: baseServiceCost,
    overtimeMessage
  }
}

// 출발지역별 추천 교통허브
function getRecommendedHub(departure: string): string {
  const hubMap: { [key: string]: string } = {
    '경상권': 'KTX 서울역 또는 용산역',
    '전라권': 'KTX 용산역 또는 서울역',
    '충청권': 'KTX 서울역 또는 광명역',
    '강원권': '동서울터미널 또는 서울역',
    '제주권': '김포공항 또는 인천공항'
  }
  return hubMap[departure] || 'KTX 서울역'
}

// 개인화된 답변 초안 생성
function generatePersonalizedReply(data: any) {
  const {
    name,
    patientName,
    patientAge,
    hospital,
    date,
    time,
    departure,
    message,
    serviceType,
    inquiryNumber,
    serviceInfo,
    estimatedCost,
    serviceDuration,
    phone
  } = data

  // 환자 나이에 따른 특별 케어 멘트
  const ageBasedCare = patientAge && parseInt(patientAge) >= 80 
    ? `${patientAge}세 고령이신 점을 고려하여 더욱 세심한 케어를 제공하겠습니다.`
    : patientAge 
    ? `${patientAge}세 어르신의 편의를 최우선으로 고려하겠습니다.`
    : '어르신의 편의를 최우선으로 고려하겠습니다.'

  // 특별 요청사항에 대한 응답
  const messageResponse = message 
    ? `\n\n💬 고객님께서 요청해주신 사항들을 검토해보겠습니다:\n"${message}"\n위 내용들을 서비스에 반영하여 맞춤형 케어를 제공하겠습니다.`
    : ''

  // 병원별 특화 정보
  const hospitalInfo = getHospitalSpecificInfo(hospital)

  return `
안녕하세요 ${name}님,

온맘동행에 소중한 문의를 주셔서 진심으로 감사드립니다.
${patientName}님의 ${hospital} 방문 건으로 연락드립니다.

📋 문의 내용 확인
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 문의번호: ${inquiryNumber}
• 서비스 유형: ${serviceInfo.description}
• 방문 일정: ${date} ${time}
• 이용 시간: ${serviceDuration}시간
• 출발 지역: ${departure}
• 픽업 장소: ${serviceInfo.pickupLocation}

🏥 ${hospital} 방문 관련 안내
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${hospitalInfo}

👥 맞춤형 서비스 제공
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${ageBasedCare}

포함 서비스:
${serviceInfo.additionalServices.map((service: string) => `• ${service}`).join('\n')}
• 실시간 진행상황 문자 알림 (보호자님께)
• 진료 내용 요약 정리 (요청시)
• 24시간 응급상황 대응${messageResponse}

💰 예상 서비스 비용
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 기본 서비스 비용: ${estimatedCost.base.toLocaleString()}원
${estimatedCost.overtimeMessage}

📞 다음 단계 안내
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. 전화 상담 일정 조율 (${phone})
2. 서비스 세부사항 협의 및 맞춤 플랜 제안
3. 예약 확정 및 동행 매니저 배정
4. 서비스 당일까지 사전 점검

⚠️ 예약 관련 중요 안내
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• ${date} 일정으로 예약 가능 여부를 우선 확인하겠습니다
• 인기 일정은 조기 마감될 수 있어 빠른 예약을 권해드립니다
• 서비스 3일 전까지는 무료 일정 변경이 가능합니다

🔔 긴급 연락처
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 24시간 상담: 02-1234-5678
• 카카오톡: @온맘동행
• 이메일: contact@onmam.com

${name}님의 소중한 가족을 저희 온맘동행이 정성을 다해 모시겠습니다.
빠른 시일 내에 연락드려 자세한 상담을 진행하겠습니다.

감사합니다.

온맘동행 고객상담팀
담당자: [담당자명]
직통전화: [담당자번호]
  `.trim()
}

// 병원별 특화 정보 제공
function getHospitalSpecificInfo(hospital: string): string {
  const hospitalInfoMap: { [key: string]: string } = {
    '서울아산병원': `
• 주차: 지하주차장 이용 (동행매니저가 주차 처리)
• 접수: 1층 중앙접수대 (카드/현금 결제 가능)
• 특이사항: 규모가 크므로 건물 내 이동시간을 충분히 고려
• 식사: 지하 1층 푸드코트 이용 가능`,
    
    '삼성서울병원': `
• 주차: 본관 지하주차장 이용
• 접수: 1층 통합접수센터
• 특이사항: 예약 확인서 필수 지참
• 편의시설: 1층 카페, 편의점 이용 가능`,
    
    '세브란스병원': `
• 주차: 본관 또는 별관 주차장
• 접수: 1층 원무과 접수
• 특이사항: 신촌 지역 교통체증 고려한 여유시간 필요
• 식사: 지하 1층 식당가 이용 가능`
  }

  // 병원명에서 키워드 매칭
  for (const [key, info] of Object.entries(hospitalInfoMap)) {
    if (hospital.includes(key.replace('병원', ''))) {
      return info
    }
  }

  return `
• 해당 병원의 접수, 주차, 편의시설 정보를 사전에 확인하겠습니다
• 병원별 특성에 맞는 최적의 동선으로 안내해드리겠습니다
• 필요한 서류나 준비사항을 미리 안내해드리겠습니다`
} 