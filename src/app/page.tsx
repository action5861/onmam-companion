'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/sections/HeroSection'
import Image from 'next/image'

// 동적 임포트로 변경
const PainPointsSection = dynamic(() => import('@/sections/PainPointsSection'), {
  loading: () => <div className="h-96 flex items-center justify-center">로딩중...</div>
});

const ServicesSection = dynamic(() => import('@/sections/ServicesSection'), {
  loading: () => <div className="h-96 flex items-center justify-center">로딩중...</div>
});

const ServiceStepsSection = dynamic(() => import('@/sections/ServiceStepsSection'), {
  loading: () => <div className="h-96 flex items-center justify-center">로딩중...</div>
});

const BenefitsSection = dynamic(() => import('@/sections/BenefitsSection'), {
  loading: () => <div className="h-96 flex items-center justify-center">로딩중...</div>
});

const ContactSection = dynamic(() => import('@/sections/ContactSection'), {
  loading: () => <div className="h-96 flex items-center justify-center">로딩중...</div>
});

export default function Home() {
  const [currentKakaoImage, setCurrentKakaoImage] = useState(1);
  const [currentImImage, setCurrentImImage] = useState(1);
  const [isKakaoTransitioning, setIsKakaoTransitioning] = useState(false);
  const [isImTransitioning, setIsImTransitioning] = useState(false);
  
  useEffect(() => {
    const kakaoInterval = setInterval(() => {
      setIsKakaoTransitioning(true);
      setTimeout(() => {
        setCurrentKakaoImage(prev => prev === 1 ? 2 : 1);
        setIsKakaoTransitioning(false);
      }, 400);
    }, 4500);

    const imInterval = setInterval(() => {
      setIsImTransitioning(true);
      setTimeout(() => {
        setCurrentImImage(prev => prev === 1 ? 2 : 1);
        setIsImTransitioning(false);
      }, 600);
    }, 4500);

    return () => {
      clearInterval(kakaoInterval);
      clearInterval(imInterval);
    };
  }, []);

  return (
    <>
      <HeroSection />
      
      {/* 회사소개 섹션 */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent mb-4">
                  우리가 시작한 이유
                </h2>
                <div className="w-full h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
                자매 간호사의 진심 어린 온맘동행 이야기
              </p>
            </div>
            
            {/* 창업 배경 스토리 */}
            <div className="mb-12 p-6 sm:p-8 bg-white rounded-2xl shadow-lg border-l-4 border-primary-600">
              <div className="space-y-6 text-base sm:text-lg text-gray-700 text-center">
                <div>
                  <h4 className="font-semibold text-primary-600 mb-3">"딸아, 위에 혹이 보인다고 하네..."</h4>
                  <p className="mb-2">평생 건강하셨던 아버지의 떨리는 목소리.</p>
                  <p>"서울 대학병원에서 정밀검사 받아보라는데..."</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-600 mb-3">간호사인 우리가 함께 갈 수 없었던 현실</h4>
                  <p className="mb-2">"아버지, 제가 시간 되는 날 함께..."</p>
                  <p className="mb-2">"괜찮다, 나 혼자도 잘 할 수 있어."</p>
                  <p className="mb-2">병원 업무 때문에 시간을 낼 수 없었고,</p>
                  <p>아버지는 우리를 배려하며 혼자 가겠다고 하셨습니다.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-600 mb-3">17시간의 긴 여정</h4>
                  <p className="mb-2"><strong>새벽 5시</strong> 집 출발</p>
                  <p className="mb-2"><strong>오전 9시</strong> 서울 도착, 병원 접수</p>
                  <p className="mb-2"><strong>오후 3시</strong> 드디어 진료</p>
                  <p className="mb-2"><strong>밤 10시</strong> 집 도착</p>
                  <p>혼자서 감당하기엔 너무 긴 하루였습니다.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-600 mb-3">그날 밤, 자매의 다짐</h4>
                  <p className="mb-2">"내가 시간을 내서 모시고 왔어야 하는데..."</p>
                  <p className="mb-2"><strong>간호사면서도 정작 우리 아버지는 제대로 돌봐드리지 못했다는 미안함.</strong></p>
                  <p className="mb-2">그리고 깨달았습니다.</p>
                  <p>우리만의 이야기가 아니라는 것을.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-600 mb-3">첫 번째 어르신의 한 마디</h4>
                  <p className="mb-2">"고맙습니다. 우리 딸이 함께 온 것 같네요."</p>
                  <p className="mb-2">그 순간 확신했습니다.</p>
                  <p className="mb-2"><strong>모든 자식들이 우리처럼 미안해하지 않도록,</strong></p>
                  <p><strong>모든 어르신이 우리 아버지처럼 혼자 고생하지 않도록.</strong></p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-600 mb-3">온맘동행의 약속</h4>
                  <p className="mb-2"><strong>자식이 함께하지 못하는 미안함,</strong></p>
                  <p className="mb-2"><strong>부모님이 혼자 감당해야 하는 어려움.</strong></p>
                  <p className="mb-2"><strong>이 모든 것을 우리가 해결해드리겠습니다.</strong></p>
                  <p className="font-semibold text-primary-600"><em>이것이 온맘동행이 시작된 진짜 이유입니다.</em></p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              {/* 전문 자격증 섹션 */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">📜 전문 자격증</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-8 text-center">
                간호사의 전문성과 신뢰성을 보장하는 자격증을 갖고 있습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 간호사 자격증 */}
                <div className="bg-white border-2 border-primary-100 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-lg sm:text-xl font-bold text-primary-600 mb-6 flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl">👩‍⚕️</span>
                    간호사 자격증
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="w-16 h-20 sm:w-20 sm:h-24 bg-gray-200 rounded border-2 border-dashed border-gray-300 mx-auto mb-3 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">자격증<br/>이미지</span>
                      </div>
                      <p className="text-sm sm:text-base font-medium text-gray-700">간호사 자격증 1</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="w-16 h-20 sm:w-20 sm:h-24 bg-gray-200 rounded border-2 border-dashed border-gray-300 mx-auto mb-3 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">자격증<br/>이미지</span>
                      </div>
                      <p className="text-sm sm:text-base font-medium text-gray-700">간호사 자격증 2</p>
                    </div>
                  </div>
                </div>

                {/* 요양보호사 자격증 */}
                <div className="bg-white border-2 border-primary-100 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-lg sm:text-xl font-bold text-primary-600 mb-6 flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl">👨‍⚕️</span>
                    요양보호사 자격증
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="w-16 h-20 sm:w-20 sm:h-24 bg-gray-200 rounded border-2 border-dashed border-gray-300 mx-auto mb-3 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">자격증<br/>이미지</span>
                      </div>
                      <p className="text-sm sm:text-base font-medium text-gray-700">요양보호사 자격증 1</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="w-16 h-20 sm:w-20 sm:h-24 bg-gray-200 rounded border-2 border-dashed border-gray-300 mx-auto mb-3 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">자격증<br/>이미지</span>
                      </div>
                      <p className="text-sm sm:text-base font-medium text-gray-700">요양보호사 자격증 2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  KTX역/터미널/공항에서 만나 병원 진료 후 다시 교통허브로
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

      {/* 어르신 전용차량 소개 섹션 제거 */}

      {/* 서비스 이용 절차 섹션 */}
      <PainPointsSection />
      <ServicesSection />
      <ServiceStepsSection />
      <BenefitsSection />
      <ContactSection />
    </>
  )
}