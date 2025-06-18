import React, { useState, useEffect } from 'react'
import ServiceCard from '@/components/ServiceCard'
import Image from 'next/image'

const ServicesSection = () => {
  const [currentKakaoImage, setCurrentKakaoImage] = useState(1)
  const [currentImImage, setCurrentImImage] = useState(1)
  const [isKakaoTransitioning, setIsKakaoTransitioning] = useState(false)
  const [isImTransitioning, setIsImTransitioning] = useState(false)

  useEffect(() => {
    const kakaoInterval = setInterval(() => {
      setIsKakaoTransitioning(true)
      setTimeout(() => {
        setCurrentKakaoImage(prev => prev === 1 ? 2 : 1)
        setIsKakaoTransitioning(false)
      }, 800)
    }, 5500)

    const imInterval = setInterval(() => {
      setIsImTransitioning(true)
      setTimeout(() => {
        setCurrentImImage(prev => prev === 1 ? 2 : 1)
        setIsImTransitioning(false)
      }, 800)
    }, 5500)

    return () => {
      clearInterval(kakaoInterval)
      clearInterval(imInterval)
    }
  }, [])

  return (
    <section className="section bg-gray-50" id="services">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-4">어르신 맞춤형 프리미엄 병원 동행 서비스</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            온맘동행은 단순한 이동 지원을 넘어, 어르신께서 병원 방문 전 과정에서 불편함 없이 
            진료에만 집중하실 수 있도록 세심한 서비스를 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>

        {/* 어르신 전용차량 소개 섹션 */}
        <div className="mt-16 bg-white rounded-2xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 border border-gray-100">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">어르신 전용차량 소개</h2>
            <p className="text-base md:text-xl text-gray-600">
              넓은 실내공간을 통해 어르신들을 교통허브에서 병원까지 안전하게 모십니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="group bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:-translate-y-1">
              <div className="relative h-48 md:h-64 mb-3 md:mb-4 overflow-hidden">
                <div className={`absolute inset-0 transition-all duration-500 transform ${isKakaoTransitioning ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
                  <Image
                    src={`/images/kakao-${currentKakaoImage}.webp`}
                    alt="카카오 벤티"
                    fill
                    className="object-contain rounded-xl"
                    priority
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300 text-center">카카오 벤티</h3>
            </div>
            <div className="group bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:-translate-y-1">
              <div className="relative h-48 md:h-64 mb-3 md:mb-4 overflow-hidden">
                <div className={`absolute inset-0 transition-all duration-500 transform ${isImTransitioning ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
                  <Image
                    src={`/images/im-${currentImImage}.webp`}
                    alt="IM 택시"
                    fill
                    className="object-contain rounded-xl"
                    priority
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300 text-center">IM 택시</h3>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 border border-gray-100">
          <div className="mb-6 md:mb-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-primary-600 mb-2 md:mb-4">가족 소통 서비스</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">안심콜</h2>
            <p className="text-base md:text-xl text-gray-600">
              진행 상황을 실시간으로 알려드려 멀리서도 안심하실 수 있습니다
            </p>
          </div>
          <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-3 md:gap-4 bg-gray-50 p-3 md:p-4 rounded-xl">
              <span className="text-3xl md:text-4xl flex-shrink-0">📱</span>
              <p className="text-base md:text-lg text-gray-700">픽업 완료, 병원 도착, 진료 후 출발 등 진행 상황을 문자로 알려드립니다</p>
            </div>
            <div className="flex items-start gap-3 md:gap-4 bg-gray-50 p-3 md:p-4 rounded-xl">
              <span className="text-3xl md:text-4xl flex-shrink-0">📝</span>
              <p className="text-base md:text-lg text-gray-700">필요시 진료 내용도 정리하여 전달해 드립니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    title: '교통 허브 안심 마중 (픽업)',
    description: 'KTX/SRT 기차역, 고속/시외버스 터미널, 공항 등 약속된 장소에서 어르신을 안전하게 맞이합니다.',
    imageUrl: '/images/pickup-service.webp',
    imageAlt: '교통 허브 픽업 서비스'
  },
  {
    title: '병원까지 편안한 이동 (차량 지원)',
    description: '전용 차량을 이용하여 어르신을 병원 문 앞까지 편안하고 안전하게 모셔다 드립니다.',
    imageUrl: '/images/transportation.webp',
    imageAlt: '병원 이동 서비스'
  },
  {
    title: '병원 내 모든 과정 밀착 동행 (진료 지원)',
    description: '접수, 수납, 진료실 안내, 검사 이동, 약국 방문 등 병원 내 복잡한 절차를 동행 매니저가 함께하며 도와드립니다.',
    imageUrl: '/images/hospital-accompany.webp',
    imageAlt: '병원 내 동행 서비스'
  },
  {
    title: '교통 허브까지 안전한 배웅 (샌딩)',
    description: '모든 진료가 끝난 후, 다시 출발하셨던 교통 허브까지 안전하게 모셔다 드립니다.',
    imageUrl: '/images/sanding.webp',
    imageAlt: '귀가 이동 서비스'
  },
  {
    title: '권역별 최적 교통 허브 안내',
    description: '지방 거주지에서 서울/경기 병원까지 가장 효율적인 교통편과 환승 지점을 추천해 드립니다.',
    imageUrl: '/images/threetransportation.webp',
    imageAlt: '교통 허브 추천 서비스'
  },
  {
    title: '전문 매니저의 세심한 케어',
    description: '의료 동행 경험이 풍부한 전문 매니저가 어르신의 상태와 필요에 맞는 맞춤형 서비스를 제공합니다.',
    imageUrl: '/images/communication.webp',
    imageAlt: '전문 케어 서비스'
  }
]

export default ServicesSection