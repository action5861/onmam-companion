"use client"

import React from 'react'
import Button from '@/components/Button'

const ServiceStepsSection = () => {
  return (
    <section className="section bg-primary-50" id="process">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-4">온맘동행 서비스, 이렇게 이용하세요</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            간단한 4단계로 어르신의 편안한 병원 방문을 준비하실 수 있습니다
          </p>
        </div>
        
        <div className="relative mt-16">
          {/* 연결선 */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-300 -translate-x-1/2 z-0"></div>
          
          {/* 단계별 카드 */}
          <div className="space-y-12 md:space-y-24 relative z-10">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            어르신의 편안하고 안전한 병원 방문, 지금 바로 온맘동행에 문의하세요!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              서비스 문의하기
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              카카오톡 상담
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

type StepCardProps = {
  number: number
  title: string
  description: string
  reverse?: boolean
}

const StepCard = ({ number, title, description, reverse = false }: StepCardProps) => {
  return (
    <div className={`flex flex-col items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="w-full md:w-5/12">
        <div className={`bg-white rounded-xl p-6 shadow-custom ${reverse ? 'md:ml-8' : 'md:mr-8'}`}>
          <h3 className="text-2xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
      
      <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-xl my-4 md:my-0">
        {number}
      </div>
      
      <div className="w-full md:w-5/12"></div>
    </div>
  )
}

const steps = [
  {
    title: '상담 및 예약',
    description: '전화 또는 온라인 채널을 통해 방문 일정, 병원, 어르신 정보 등을 알려주시면 친절하게 상담해 드립니다. 최적의 교통 허브와 이동 계획을 함께 상담해 드립니다.'
  },
  {
    title: '예약 확정',
    description: '서비스 내용 및 비용 안내 후 예약을 확정합니다. 진료 예약 확인과 함께 어르신의 특별한 요구사항이 있는지 체크합니다. 필요시 병원 진료 예약도 도와드립니다.'
  },
  {
    title: '서비스 진행',
    description: '약속된 장소에서 동행 매니저가 어르신을 만나 서비스를 시작합니다. 병원 방문부터 귀가까지 전 과정을 안전하게 동행하며, 보호자분께 진행 상황을 알려드립니다.'
  },
  {
    title: '결과 공유',
    description: '서비스 완료 후 보호자께 서비스 진행 상황 및 결과를 공유합니다. 진료 내용 요약 및 다음 방문 계획 등을 함께 안내해 드립니다.'
  }
]

export default ServiceStepsSection