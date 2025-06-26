"use client"

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHomePage, setIsHomePage] = useState(true)

  useEffect(() => {
    setIsHomePage(window.location.pathname === '/')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // 스크롤 위치에 따른 스타일 변경
      if (currentScrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleNavigation = useCallback((section: string) => {
    // 이용후기와 자주묻는질문은 별도 페이지로 이동
    if (section === 'testimonials') {
      router.push('/testimonials')
      return
    }
    if (section === 'faq') {
      router.push('/faq')
      return
    }

    // 현재 페이지가 홈페이지가 아닌 경우 홈페이지로 이동
    if (window.location.pathname !== '/') {
      router.push(`/#${section}`)
      return
    }

    // 홈페이지인 경우 스크롤 이동
    const element = document.getElementById(section)
    if (element) {
      // 스크롤 이벤트 충돌 방지를 위한 약간의 지연
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [router])

  const handleMobileNavigation = useCallback((section: string) => {
    // 이용후기와 자주묻는질문은 별도 페이지로 이동
    if (section === 'testimonials') {
      router.push('/testimonials')
      setIsMobileMenuOpen(false)
      return
    }
    if (section === 'faq') {
      router.push('/faq')
      setIsMobileMenuOpen(false)
      return
    }

    handleNavigation(section)
    // 네비게이션 후 메뉴 닫기
    setTimeout(() => {
      setIsMobileMenuOpen(false)
    }, 300)
  }, [handleNavigation, router])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-auto min-w-[96px]">
              {/* 로고 이미지가 없는 경우 텍스트로 대체 */}
              <span className="text-2xl font-bold text-primary-600">온맘동행</span>
            </div>
          </Link>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('services')} 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              서비스 소개
            </button>
            <button 
              onClick={() => handleNavigation('benefits')} 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              서비스 혜택
            </button>
            <button 
              onClick={() => handleNavigation('process')} 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              이용 방법
            </button>
            <button 
              onClick={() => handleNavigation('testimonials')} 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              이용후기
            </button>
            <button 
              onClick={() => handleNavigation('faq')} 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              자주 묻는 질문
            </button>
            <button 
              onClick={() => handleNavigation('contact')} 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              문의하기
            </button>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden text-gray-700 focus:outline-none w-12 h-12 flex items-center justify-center z-20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 열기"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* 모바일 메뉴 */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
              <div className="flex flex-col p-4 space-y-3">
                <button 
                  onClick={() => handleMobileNavigation('services')}
                  className="text-gray-700 hover:text-primary-600 font-medium block py-2 border-b border-gray-100 text-left transition-colors duration-200"
                >
                  서비스 소개
                </button>
                <button 
                  onClick={() => handleMobileNavigation('benefits')}
                  className="text-gray-700 hover:text-primary-600 font-medium block py-2 border-b border-gray-100 text-left transition-colors duration-200"
                >
                  서비스 혜택
                </button>
                <button 
                  onClick={() => handleMobileNavigation('process')}
                  className="text-gray-700 hover:text-primary-600 font-medium block py-2 border-b border-gray-100 text-left transition-colors duration-200"
                >
                  이용 방법
                </button>
                <button 
                  onClick={() => handleMobileNavigation('testimonials')}
                  className="text-gray-700 hover:text-primary-600 font-medium block py-2 border-b border-gray-100 text-left transition-colors duration-200"
                >
                  이용후기
                </button>
                <button 
                  onClick={() => handleMobileNavigation('faq')}
                  className="text-gray-700 hover:text-primary-600 font-medium block py-2 border-b border-gray-100 text-left transition-colors duration-200"
                >
                  자주 묻는 질문
                </button>
                <button 
                  onClick={() => handleMobileNavigation('contact')}
                  className="text-gray-700 hover:text-primary-600 font-medium block py-2 border-b border-gray-100 text-left transition-colors duration-200"
                >
                  문의하기
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="pt-[72px]">
        {/* 페이지 컨텐츠가 여기에 들어갑니다 */}
      </div>
    </>
  )
}

export default Header