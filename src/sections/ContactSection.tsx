import React from 'react'
import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => (
    <div className="h-96 bg-gray-50 rounded-xl animate-pulse">
      <div className="h-full flex items-center justify-center">
        <div className="w-full max-w-md space-y-4 p-4">
          <div className="h-10 bg-gray-200 rounded-lg"></div>
          <div className="h-10 bg-gray-200 rounded-lg"></div>
          <div className="h-32 bg-gray-200 rounded-lg"></div>
          <div className="h-10 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false
})

const ContactSection = () => {
  return (
    <section className="section bg-gray-50" id="contact">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="section-title text-center">
          <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold">문의하기</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            어르신의 편안한 병원 방문을 위해 온맘동행이 도와드리겠습니다
          </p>
        </div>
        
        <div className="space-y-6 md:space-y-8 mt-8 md:mt-12">
          {/* 서비스 문의하기 폼 */}
          <ContactForm />
          
          {/* 연락처 안내 박스 */}
          <div className="bg-white rounded-xl shadow-custom p-4 md:p-8 border border-gray-200">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                연락처 안내
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                언제든지 편리한 방법으로 문의해 주세요
              </p>
            </div>
            
            {/* 연락처 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <ContactInfoCard
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                }
                title="전화 문의"
                content="010-1234-5678"
                subContent="(평일 09:00 - 18:00)"
                color="blue"
                action={{
                  text: "전화하기",
                  url: "tel:010-1234-5678"
                }}
              />
              
              <ContactInfoCard
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                }
                title="이메일 문의"
                content="contact@onmam.kr"
                color="green"
                action={{
                  text: "메일 보내기",
                  url: "mailto:contact@onmam.kr"
                }}
              />
              
              <ContactInfoCard
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                  </svg>
                }
                title="카카오톡 채널"
                content="@온맘동행"
                color="yellow"
                action={{
                  text: "채널 추가하기",
                  url: "#"
                }}
              />
            </div>
            
            {/* 서비스 가능 지역 정보 */}
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-primary-100 rounded-full flex items-center justify-center mr-2 md:mr-3">
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h4 className="text-sm md:text-base font-bold text-gray-900">서비스 가능 지역</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-start space-x-2 md:space-x-3">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900 text-xs md:text-sm">병원</p>
                    <p className="text-gray-700 text-xs md:text-sm">서울/경기 지역 상급종합병원 및 주요 종합병원</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 md:space-x-3">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900 text-xs md:text-sm">출발지</p>
                    <p className="text-gray-700 text-xs md:text-sm">전국 모든 지역 (교통 허브에서 픽업)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type ContactInfoCardProps = {
  icon: React.ReactNode
  title: string
  content: string
  subContent?: string
  color: 'blue' | 'green' | 'yellow'
  action?: {
    text: string
    url: string
  }
}

const ContactInfoCard = ({ icon, title, content, subContent, color, action }: ContactInfoCardProps) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      icon: 'bg-blue-100 text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700 text-white'
    },
    green: {
      bg: 'bg-green-50',
      icon: 'bg-green-100 text-green-600',
      button: 'bg-green-600 hover:bg-green-700 text-white'
    },
    yellow: {
      bg: 'bg-yellow-50',
      icon: 'bg-yellow-100 text-yellow-600',
      button: 'bg-yellow-600 hover:bg-yellow-700 text-white'
    }
  }

  const classes = colorClasses[color]

  return (
    <div className={`${classes.bg} rounded-lg p-3 md:p-5 border border-gray-200`}>
      {/* 아이콘 */}
      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${classes.icon} flex items-center justify-center mb-3 md:mb-4`}>
        {icon}
      </div>
      
      {/* 내용 */}
      <div className="space-y-1 md:space-y-2 mb-3 md:mb-4">
        <h4 className="text-sm md:text-base font-bold text-gray-900">{title}</h4>
        <p className="text-gray-800 text-sm md:text-base font-semibold break-words">{content}</p>
        {subContent && (
          <p className="text-gray-600 text-xs md:text-sm">{subContent}</p>
        )}
      </div>
      
      {/* 액션 버튼 */}
      {action && (
        <a 
          href={action.url} 
          className={`inline-flex items-center px-2 py-1.5 md:px-3 md:py-2 rounded-md ${classes.button} font-medium text-xs md:text-sm`}
        >
          <span>{action.text}</span>
          <svg className="ml-1 w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      )}
    </div>
  )
}

export default ContactSection