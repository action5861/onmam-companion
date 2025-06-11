import React from 'react'
import ServiceCard from '@/components/ServiceCard'

const BenefitsSection = () => {
  return (
    <section className="section bg-gray-50" id="benefits">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-4">온맘동행의 특별한 혜택</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            전문적인 케어와 세심한 서비스로 어르신의 병원 방문을 더욱 편안하게 만들어 드립니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <ServiceCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              imageUrl={benefit.imageUrl}
              imageAlt={benefit.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const benefits = [
  {
    title: '전문 매니저의 케어',
    description: '의료 동행 경험이 풍부한 전문 매니저가 어르신의 상태와 필요에 맞는 맞춤형 서비스를 제공합니다.',
    imageUrl: '/images/woman.png',
    imageAlt: '전문 케어 서비스'
  },
  {
    title: '안전한 이동',
    description: '전용 차량을 이용하여 어르신을 병원 문 앞까지 편안하고 안전하게 모셔다 드립니다.',
    imageUrl: '/images/transportation.png',
    imageAlt: '안전 이동 서비스'
  },
  {
    title: '효율적인 병원 이용',
    description: '접수, 수납, 진료실 안내, 검사 이동, 약국 방문 등 병원 내 복잡한 절차를 동행 매니저가 함께하며 도와드립니다.',
    imageUrl: '/images/pharmacy.png',
    imageAlt: '병원 이용 지원'
  }
]

export default BenefitsSection