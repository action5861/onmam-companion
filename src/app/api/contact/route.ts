import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // 데이터 검증
    const {
      name,
      phone,
      email,
      patientName,
      patientAge,
      hospital,
      date,
      departure,
      message,
      agreement
    } = formData

    // 필수 필드 검증
    if (!name || !phone || !patientName || !hospital || !date || !departure || !agreement) {
      return NextResponse.json(
        { success: false, message: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      )
    }

    // 이메일 전송 설정
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // 관리자에게 보낼 이메일
    const adminEmailContent = `
      새로운 서비스 문의가 접수되었습니다.

      === 신청자 정보 ===
      이름: ${name}
      연락처: ${phone}
      이메일: ${email || '미제공'}

      === 환자 정보 ===
      환자 이름: ${patientName}
      환자 나이: ${patientAge || '미제공'}

      === 서비스 정보 ===
      출발 지역: ${departure}
      방문 병원: ${hospital}
      방문 예정일: ${date}

      === 추가 문의사항 ===
      ${message || '없음'}

      접수 시간: ${new Date().toLocaleString('ko-KR')}
    `

    // 고객에게 보낼 확인 이메일
    const customerEmailContent = `
      안녕하세요 ${name}님,

      온맘동행 서비스 문의가 정상적으로 접수되었습니다.

      접수 내용:
      - 환자명: ${patientName}
      - 방문 병원: ${hospital}
      - 방문 예정일: ${date}

      담당자가 영업시간 내에 연락드릴 예정입니다.
      추가 문의사항이 있으시면 010-1234-5678로 연락 부탁드립니다.

      감사합니다.
      온맘동행 드림
    `

    // 관리자에게 이메일 전송
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `[온맘동행] 새로운 서비스 문의 - ${name}님`,
      text: adminEmailContent,
    })

    // 고객에게 확인 이메일 전송 (이메일 제공시에만)
    if (email) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: '[온맘동행] 서비스 문의 접수 확인',
        text: customerEmailContent,
      })
    }

    return NextResponse.json({
      success: true,
      message: '문의가 성공적으로 접수되었습니다. 곧 담당자가 연락드릴 예정입니다.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    )
  }
} 