"use client"

import React from 'react'
import Button from '@/components/Button'

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="container relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              <span className="block">부모님의</span>
              <span className="block"><span className="text-primary-600">서울/경기</span> 병원 방문길,</span>
              <span className="block">이제 <span className="text-primary-600">걱정 없이</span> 마음 놓으세요.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              온맘동행이 KTX역/터미널 도착부터 귀가까지<br />
              모든 여정을 안전하고 편안하게 함께합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto"
              >
                서비스 문의하기
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto"
              >
                서비스 알아보기
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-xl h-80 md:h-96 lg:h-[500px]">
            <div className="absolute inset-0 bg-black/20 z-10 flex items-end justify-center pb-8">
              <div className="bg-white/80 p-6 rounded-lg max-w-sm text-center backdrop-blur-sm">
                <p className="text-lg font-semibold text-primary-500 mb-2">
                  60대 이상 어르신 맞춤형
                </p>
                <h3 className="text-2xl font-bold mb-2 text-gray-700">
                  병원 동행 서비스
                </h3>
                <p className="text-gray-500">
                  지방 거주 어르신들의 서울/경기 대형병원 진료를 위한 전문 케어 서비스
                </p>
              </div>
            </div>
            <img
              src="/images/main-banner.jpg"
              alt="병원 동행 서비스"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* 파도 모양 디자인 */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,128C840,128,960,160,1080,160C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection