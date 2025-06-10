"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // 스크롤 방향 감지
      if (currentScrollY > lastScrollY) {
        // 아래로 스크롤
        setIsVisible(false)
      } else {
        // 위로 스크롤
        setIsVisible(true)
      }

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

  const handleNavigation = (section: string) => {
    if (pathname !== '/') {
      // 현재 페이지가 메인 페이지가 아닌 경우, 메인 페이지로 이동 후 해당 섹션으로 스크롤
      window.location.href = `/#${section}`
    } else {
      // 현재 페이지가 메인 페이지인 경우, 해당 섹션으로 스크롤
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header 
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-40">
            {/* 로고 이미지가 없는 경우 텍스트로 대체 */}
            <span className="text-2xl font-bold text-primary-600">온맘동행</span>
          </div>
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => handleNavigation('services')} className="text-gray-700 hover:text-primary-600 font-medium">
            서비스 소개
          </button>
          <button onClick={() => handleNavigation('benefits')} className="text-gray-700 hover:text-primary-600 font-medium">
            서비스 혜택
          </button>
          <button onClick={() => handleNavigation('process')} className="text-gray-700 hover:text-primary-600 font-medium">
            이용 방법
          </button>
          <Link href="/testimonials" className="text-gray-700 hover:text-primary-600 font-medium">
            이용후기
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-primary-600 font-medium">
            자주 묻는 질문
          </Link>
          <button onClick={() => handleNavigation('contact')} className="text-gray-700 hover:text-primary-600 font-medium">
            문의하기
          </button>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                onClick={() => {
                  handleNavigation('services')
                  setIsMobileMenuOpen(false)
                }}
                className="text-gray-700 hover:text-primary-600 font-medium block py-2 border-b border-gray-100 text-left"
              >
                서비스 소개
              </button>
              <button 
                onClick={() => {
                  handleNavigation('benefits')
                  setIsMobileMenuOpen(false)
                }}
                className="text-gray-700 hover:text-primary-600 font-medium block py-2 border-b border-gray-100 text-left"
              >
                서비스 혜택
              </button>
              <button 
                onClick={() => {
                  handleNavigation('process')
                  setIsMobileMenuOpen(false)
                }}
                className="text-gray-700 hover:text-primary-600 font-medium block py-2 border-b border-gray-100 text-left"
              >
                이용 방법
              </button>
              <Link 
                href="/testimonials" 
                className="text-gray-700 hover:text-primary-600 font-medium block py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                이용후기
              </Link>
              <Link 
                href="/faq" 
                className="text-gray-700 hover:text-primary-600 font-medium block py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                자주 묻는 질문
              </Link>
              <button 
                onClick={() => {
                  handleNavigation('contact')
                  setIsMobileMenuOpen(false)
                }}
                className="text-gray-700 hover:text-primary-600 font-medium block py-2 border-b border-gray-100 text-left"
              >
                문의하기
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header