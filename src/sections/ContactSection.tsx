import React from 'react'
import ContactForm from '@/components/ContactForm'

const ContactSection = () => {
  return (
    <section className="section bg-gray-50" id="contact">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-4">문의하기</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            어르신의 편안한 병원 방문을 위해 온맘동행이 도와드리겠습니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div className="bg-white rounded-xl shadow-custom p-8">
            <h3 className="text-2xl font-semibold mb-6">연락처 안내</h3>
            
            <div className="space-y-6">
              <ContactInfoCard
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                }
                title="전화 문의"
                content="010-1234-5678"
                subContent="(평일 09:00 - 18:00)"
              />
              
              <ContactInfoCard
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                }
                title="이메일 문의"
                content="contact@onmam.kr"
              />
              
              <ContactInfoCard
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                  </svg>
                }
                title="카카오톡 채널"
                content="@온맘동행"
                action={{
                  text: "채널 추가하기",
                  url: "#"
                }}
              />
              
              <div className="pt-6 mt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-3">서비스 가능 지역</h4>
                <p className="text-gray-700">
                  <span className="font-medium">병원:</span> 서울/경기 지역 상급종합병원 및 주요 종합병원
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">출발지:</span> 전국 모든 지역 (교통 허브에서 픽업)
                </p>
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
  action?: {
    text: string
    url: string
  }
}

const ContactInfoCard = ({ icon, title, content, subContent, action }: ContactInfoCardProps) => {
  return (
    <div>
      <div className="flex items-start">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
          {icon}
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-gray-700">{content}</p>
          {subContent && <p className="text-gray-500 text-sm mt-1">{subContent}</p>}
          {action && (
            <a 
              href={action.url} 
              className="text-primary-600 hover:text-primary-700 inline-flex items-center mt-2 font-medium"
            >
              {action.text}
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactSection