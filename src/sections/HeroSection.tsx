"use client"

import React, { useState } from 'react'
import Button from '@/components/Button'
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

const inter = Inter({ subsets: ['latin'] })

const HeroSection = () => {
  const [showAfterTyping, setShowAfterTyping] = useState(false);

  // 타이핑 효과가 끝나면 호출되는 함수
  const handleTypingEnd = () => {
    setTimeout(() => {
      setShowAfterTyping(true);
    }, 500); // 1초(1000ms) 딜레이 후 표시
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="container relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in text-center">
              <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] mb-8">
                <span
                  className={cn(
                    "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                  )}
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitClipPath: "padding-box",
                  }}
                />
                <AnimatedGradientText className="text-2xl md:text-3xl lg:text-4xl font-medium">
                  프리미엄 병원동행 서비스
                </AnimatedGradientText>
              </div>
              <div className="relative w-full max-w-[24em] mx-auto">
                <div className="typewriter-container">
                  <span
                    className={`block text-4xl md:text-5xl lg:text-6xl mb-12 bg-primary-50 px-6 py-4 rounded-lg ${inter.className} whitespace-nowrap text-center typewriter-text`}
                    onAnimationEnd={handleTypingEnd}
                  >
                    "멀리 있어도 괜찮습니다."
                  </span>
                </div>
              </div>
              {showAfterTyping && (
                <>
                  <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-800 text-center font-bold">
                    이제 <span className="text-primary-600 font-extrabold">온맘동행</span>에 맡기고<br />
                    <span className="text-primary-600 font-extrabold">안심</span>하세요.
                  </span>
                  <p className="text-xl text-gray-600 mb-8 mt-10 animate-slide-up">
                    지방 거주 어르신의 서울/경기 대형병원 방문을 위해<br />
                    공항·KTX역·터미널 마중부터 병원 진료 동행, 안전한 귀가까지<br />
                    모든 과정을 전문 매니저가 함께합니다
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
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
                </>
              )}
            </h1>
          </div>
          
          <div className={`relative rounded-xl overflow-hidden shadow-xl h-80 md:h-96 lg:h-[500px] transition-all duration-1000 ease-out
            ${showAfterTyping ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}`}>
            <div className="absolute inset-0 bg-black/20 z-10 flex items-end justify-center pb-4 md:pb-8">
              <div className="bg-white/70 p-3 md:p-4 rounded-lg max-w-[85%] md:max-w-[320px] text-center backdrop-blur-sm">
                <p className="text-sm md:text-base font-semibold text-primary-500 mb-1">
                  60대 이상 어르신 맞춤형
                </p>
                <h3 className="text-lg md:text-xl font-bold mb-1 text-gray-700">
                  병원 동행 서비스
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  지방 거주 어르신들의 서울/경기 대형병원 진료를 위한 전문 케어 서비스
                </p>
              </div>
            </div>
            <img
              src="/images/main-banner.png"
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