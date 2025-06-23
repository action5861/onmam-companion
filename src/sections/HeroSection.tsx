"use client"

import React, { useState, useRef, useEffect } from 'react'
import Button from '@/components/Button'
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

const HeroSection = () => {
  const [showAfterTyping, setShowAfterTyping] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // 모바일 감지 (더 큰 브레이크포인트 사용)
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // 모바일에서는 바로 애니메이션 완료 상태로 설정
    if (window.innerWidth <= 1024) {
      setIsTypingComplete(true);
      setShowAfterTyping(true);
      return;
    }
    
    const typewriterElement = typewriterRef.current;
    if (!typewriterElement) return;

    const handleAnimationEnd = () => {
      setIsTypingComplete(true);
      setShowAfterTyping(true);
    };

    typewriterElement.addEventListener('animationend', handleAnimationEnd);

    return () => {
      typewriterElement.removeEventListener('animationend', handleAnimationEnd);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-r from-blue-50 to-teal-50 pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-28">
      {/* 표준 컨테이너 - FAQ처럼 안정적 구조 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
          
          {/* 왼쪽 콘텐츠 영역 */}
          <div className="text-center lg:text-left">
            
            {/* 프리미엄 서비스 배지 */}
            <div className="flex justify-center lg:justify-start mb-6 lg:mb-8">
              <div className="group relative flex items-center justify-center rounded-full px-4 py-2 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
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
                <AnimatedGradientText className="text-sm md:text-base lg:text-lg font-medium whitespace-nowrap">
                  프리미엄 병원동행 서비스
                </AnimatedGradientText>
              </div>
            </div>
            
            {/* 타이핑 텍스트 - 단일 구조로 간소화 */}
            <div className="mb-8 lg:mb-12">
              {!isMobile ? (
                // 데스크톱: 타이핑 애니메이션
                <div className="relative">
                  <span
                    ref={typewriterRef}
                    className={`inline-block text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-primary-50 px-6 py-4 rounded-lg ${inter.className} typewriter-text`}
                  >
                    "멀리 있어도 괜찮습니다."
                  </span>
                </div>
              ) : (
                // 모바일: 바로 표시
                <div className="bg-primary-50 px-4 py-4 rounded-lg inline-block">
                  <span className={`text-lg md:text-xl ${inter.className} leading-relaxed`}>
                    "멀리 있어도<br />괜찮습니다."
                  </span>
                </div>
              )}
            </div>
            
            {/* 메인 제목 */}
            <div className={`transition-all duration-500 ${showAfterTyping || isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 lg:mb-8">
                <span className="block text-gray-800">
                  이제 <span className="text-primary-600 font-extrabold">온맘동행</span>에 맡기고
                </span>
                <span className="block text-gray-800 mt-2">
                  <span className="text-primary-600 font-extrabold">안심</span>하세요.
                </span>
              </h1>
              
              {/* 설명 텍스트 */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                지방 거주 어르신의 서울/경기 대형병원 방문을 위해<br className="hidden sm:block" />
                <span className="block sm:inline">공항·KTX역·터미널 마중부터 병원 진료, 안전 귀가까지</span><br className="hidden sm:block" />
                <span className="block sm:inline">모든 과정을 전문 매니저가 함께합니다</span>
              </p>
              
              {/* 버튼 그룹 */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto text-sm sm:text-base"
                >
                  서비스 문의하기
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto text-sm sm:text-base"
                >
                  서비스 알아보기
                </Button>
              </div>
            </div>
          </div>
          
          {/* 오른쪽 이미지 영역 */}
          <div className={`relative transition-all duration-1000 ease-out
            ${showAfterTyping || isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}`}>
            <div className="relative rounded-xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px]">
              <div className="absolute inset-0 bg-black/20 z-10 flex items-end justify-center pb-6">
                <div className="bg-white/70 p-4 rounded-lg max-w-[85%] text-center backdrop-blur-sm">
                  <p className="text-xs sm:text-sm font-semibold text-primary-500 mb-1">
                    60대 이상 어르신 맞춤형
                  </p>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 text-gray-700">
                    병원 동행 서비스
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                    지방 거주 어르신들의 서울/경기 대형병원 진료를 위한 전문 케어 서비스
                  </p>
                </div>
              </div>
              <Image
                src="/images/main-banner.webp"
                alt="병원 동행 서비스"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* 하단 파도 모양 디자인 */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full block">
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