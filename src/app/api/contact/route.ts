import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
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
      agreement,
      serviceType,
      serviceDuration = '4' // 기본값 4시간
    } = formData

    // 필수 필드 검증
    if (!name || !phone || !email || !patientName || !hospital || !date || !time || !departure || !agreement || !serviceType) {
      return NextResponse.json(
        { success: false, message: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      )
    }

    // 문의 번호 생성
    const inquiryNumber = `INQ-${new Date().toISOString().slice(0,10).replace(/-/g, '')}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`

    // 답변 초안 생성
    const replyResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/generate-reply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inquiryData: {
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
        }
      })
    })

    if (!replyResponse.ok) {
      throw new Error('답변 초안 생성 실패')
    }

    const { replyDraft } = await replyResponse.json()

    // Gmail 설정 (2단계 인증 + 앱 비밀번호)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: true,
      logger: true,
      debug: true,
    })

    // 서비스 타입에 따른 설명
    const serviceTypeDescription = serviceType === 'homeToHome' 
      ? 'Home to Home 서비스 (집에서 집까지)' 
      : '교통허브 서비스 (KTX역/터미널/공항에서 병원까지)'

    // 관리자용 이메일 내용
    const adminEmailContent = `
🔔 새로운 온맘동행 서비스 문의

📋 문의번호: ${inquiryNumber}
📅 접수시간: ${new Date().toLocaleString('ko-KR')}

👤 신청자 정보
━━━━━━━━━━━━━━━━━
• 이름: ${name}
• 연락처: ${phone}
• 이메일: ${email || '미제공'}

🏥 환자 정보  
━━━━━━━━━━━━━━━━━
• 환자명: ${patientName}
• 나이: ${patientAge || '미제공'}

🚗 서비스 정보
━━━━━━━━━━━━━━━━━
• 서비스 유형: ${serviceTypeDescription}
• 출발지역: ${departure}
• 방문병원: ${hospital}
• 희망날짜: ${date}
• 진료시간: ${time}

💬 추가 요청사항
━━━━━━━━━━━━━━━━━
${message || '특별한 요청사항 없음'}

⚡ 처리 필요 사항
━━━━━━━━━━━━━━━━━
1. 24시간 내 고객 연락 (${phone})
2. 해당 날짜/시간 서비스 가능 여부 확인
3. 견적 산출 및 상세 상담 진행
4. 예약 확정 처리

📝 답변 초안
━━━━━━━━━━━━━━━━━
${replyDraft}

고객 연락처: ${phone}
    `.trim()

    // 고객용 이메일 내용
    const customerEmailContent = `
안녕하세요 ${name}님,

온맘동행에 소중한 문의를 주셔서 감사합니다.

📋 문의 접수 완료
━━━━━━━━━━━━━━━━━
• 문의번호: ${inquiryNumber}
• 접수시간: ${new Date().toLocaleString('ko-KR')}

📝 문의하신 내용
━━━━━━━━━━━━━━━━━
• 서비스 유형: ${serviceTypeDescription}
• 환자명: ${patientName}
• 방문병원: ${hospital}
• 희망날짜: ${date}
• 진료시간: ${time}
• 출발지역: ${departure}

💌 안내사항
━━━━━━━━━━━━━━━━━
1. 담당자가 24시간 이내에 연락드리겠습니다.
2. 문의하신 내용에 대해 상세한 상담을 진행해드리겠습니다.
3. 추가 문의사항이 있으시면 아래 연락처로 문의해 주세요.

📞 문의전화: 02-1234-5678
✉️ 이메일: contact@onmam.com

감사합니다.
온맘동행 드림
    `.trim()

    // 이메일 전송
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
        subject: `[온맘동행] 새로운 서비스 문의 (${inquiryNumber})`,
        text: adminEmailContent,
      })

      if (email) {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: '[온맘동행] 문의 접수 완료',
          text: customerEmailContent,
        })
      }
      
      console.log('✅ Gmail 이메일 전송 성공')
    } catch (emailError) {
      console.error('❌ 이메일 전송 실패:', emailError)
      throw emailError
    }

    return NextResponse.json({
      success: true,
      message: '문의가 성공적으로 접수되었습니다.',
      inquiryNumber,
      replyDraft
    })

  } catch (error) {
    console.error('문의 접수 중 오류 발생:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: '문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' 
      },
      { status: 500 }
    )
  }
} 