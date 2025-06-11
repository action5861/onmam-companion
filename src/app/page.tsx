import HeroSection from '@/sections/HeroSection'
import PainPointsSection from '@/sections/PainPointsSection'
import ServicesSection from '@/sections/ServicesSection'
import BenefitsSection from '@/sections/BenefitsSection'
import ContactSection from '@/sections/ContactSection'
import ServiceStepsSection from '@/sections/ServiceStepsSection'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Home to Home 서비스 소개 */}
            <div className="bg-white rounded-2xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">Home to Home Services</h3>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">집에서 집까지, 완벽한 프리미엄 케어</h2>
                <p className="text-xl text-gray-600">
                  마치 가족이 모시는 것처럼, 집에서 병원 그리고 다시 집까지
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                  <span className="text-4xl flex-shrink-0">👩</span>
                  <p className="text-lg text-gray-700">전문메니저가 집까지 간후 어르신을 모시고</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                  <span className="text-4xl flex-shrink-0">🏥</span>
                  <p className="text-lg text-gray-700">병원까지 안전하게 모든 일을 함께 합니다.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                  <span className="text-4xl flex-shrink-0">🔄</span>
                  <p className="text-lg text-gray-700">그리고 안전하게 다시 집까지</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                  <span className="text-4xl flex-shrink-0">💝</span>
                  <p className="text-lg text-gray-700">아무 걱정없이 맡기세요</p>
                </div>
              </div>
            </div>

            {/* 교통허브 병원동행 서비스 소개 */}
            <div className="bg-white rounded-2xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">교통허브 Services</h3>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">스마트한 선택, 경제적이면서도 편안하게</h2>
                <p className="text-xl text-gray-600">
                  KTX역/터미널/공항에서 만나 병원까지 함께
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                  <span className="text-4xl flex-shrink-0">🚌</span>
                  <p className="text-lg text-gray-700">지방에서 오시는 길은 경제적인 대중교통으로,</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                  <span className="text-4xl flex-shrink-0">🚗</span>
                  <p className="text-lg text-gray-700">서울/경기 병원 방문은 프리미엄 차량으로!</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                  <span className="text-4xl flex-shrink-0">✨</span>
                  <p className="text-lg text-gray-700">필요한 구간에만 최고의 서비스를 적용한</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                  <span className="text-4xl flex-shrink-0">💡</span>
                  <p className="text-lg text-gray-700">온맘동행만의 똑똑한 하이브리드 솔루션입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 어르신 전용차량 소개 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">어르신 전용차량 소개</h2>
              <p className="text-base md:text-xl text-gray-600">
                넓은 실내공간을 통해 어르신들을 교통허브에서 병원까지 안전하게 모십니다
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="group bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:-translate-y-1">
                <div className="relative h-48 md:h-64 mb-3 md:mb-4">
                  <Image
                    src="/images/kakao-1.png"
                    alt="카카오 벤티"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300 text-center">카카오 벤티</h3>
              </div>
              <div className="group bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:-translate-y-1">
                <div className="relative h-48 md:h-64 mb-3 md:mb-4">
                  <Image
                    src="/images/im-1.png"
                    alt="IM 택시"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300 text-center">IM 택시</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PainPointsSection />
      <ServicesSection />
      <ServiceStepsSection />
      <BenefitsSection />
      <ContactSection />
    </>
  )
}