import React, { useState } from 'react'
import ServiceCard from '@/components/ServiceCard'

const BenefitsSection = () => {
  // 현재 표시할 혜택 인덱스 (0-2)
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0)

  // 다음 혜택으로 이동
  const handleNextBenefit = () => {
    setCurrentBenefitIndex(prev => (prev + 1) % 3)
  }

  // 이전 혜택으로 이동
  const handlePrevBenefit = () => {
    setCurrentBenefitIndex(prev => prev === 0 ? 2 : prev - 1)
  }

  return (
    <section className="section bg-gray-50" id="benefits">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-4">온맘동행의 특별한 혜택</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            전문적인 케어와 세심한 서비스로 어르신의 병원 방문을 더욱 편안하게 만들어 드립니다
          </p>
        </div>
        
        {/* 혜택 안내 텍스트 */}
        <div className="text-center mt-8 mb-6">
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold text-primary-600">3가지 특별한 혜택</span>을 확인해보세요
          </p>
          <p className="text-sm text-gray-500">
            화살표를 클릭하여 다음 혜택을 확인하세요
          </p>
        </div>

        {/* 혜택 카드 섹션 */}
        <div className="relative max-w-2xl mx-auto">
          <ServiceCard
            title={benefits[currentBenefitIndex].title}
            description={benefits[currentBenefitIndex].description}
            imageUrl={benefits[currentBenefitIndex].imageUrl}
            imageAlt={benefits[currentBenefitIndex].imageAlt}
          />
          
          {/* 이전 버튼 */}
          <button
            onClick={handlePrevBenefit}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white hover:bg-gray-50 text-gray-600 hover:text-primary-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-10 border border-gray-200"
            aria-label="이전 혜택"
          >
            <svg 
              className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>
          
          {/* 다음 버튼 */}
          <button
            onClick={handleNextBenefit}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white hover:bg-gray-50 text-gray-600 hover:text-primary-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-10 border border-gray-200"
            aria-label="다음 혜택"
          >
            <svg 
              className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>

        {/* 현재 혜택 인디케이터 */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
            <span className="text-sm text-gray-600">혜택</span>
            <span className="text-lg font-bold text-primary-600">{currentBenefitIndex + 1}</span>
            <span className="text-sm text-gray-400">/ 3</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const benefits = [
  {
    title: '전문 매니저의 케어',
    description: '의료 동행 경험이 풍부한 전문 매니저가 어르신의 상태와 필요에 맞는 맞춤형 서비스를 제공합니다.',
    imageUrl: '/images/woman.webp',
    imageAlt: '전문 케어 서비스'
  },
  {
    title: '안전한 이동',
    description: '전용 차량을 이용하여 어르신을 병원 문 앞까지 편안하고 안전하게 모셔다 드립니다.',
    imageUrl: '/images/transportation.webp',
    imageAlt: '안전 이동 서비스'
  },
  {
    title: '효율적인 병원 이용',
    description: '접수, 수납, 진료실 안내, 검사 이동, 약국 방문 등 병원 내 복잡한 절차를 동행 매니저가 함께하며 도와드립니다.',
    imageUrl: '/images/pharmacy.webp',
    imageAlt: '병원 이용 지원'
  }
]

export default BenefitsSection