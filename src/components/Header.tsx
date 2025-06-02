"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

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
          <NavLink href="#services">서비스 소개</NavLink>
          <NavLink href="#benefits">서비스 혜택</NavLink>
          <NavLink href="#process">이용 방법</NavLink>
          <NavLink href="#testimonials">이용 후기</NavLink>
          <NavLink href="#contact">문의하기</NavLink>
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
              <MobileNavLink href="#services" onClick={() => setIsMobileMenuOpen(false)}>
                서비스 소개
              </MobileNavLink>
              <MobileNavLink href="#benefits" onClick={() => setIsMobileMenuOpen(false)}>
                서비스 혜택
              </MobileNavLink>
              <MobileNavLink href="#process" onClick={() => setIsMobileMenuOpen(false)}>
                이용 방법
              </MobileNavLink>
              <MobileNavLink href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>
                이용 후기
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                문의하기
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-700 hover:text-primary-600 font-medium">
    {children}
  </Link>
)

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick?: () => void; 
  children: React.ReactNode 
}) => (
  <Link 
    href={href} 
    className="text-gray-700 hover:text-primary-600 font-medium block py-2 border-b border-gray-100"
    onClick={onClick}
  >
    {children}
  </Link>
)

export default Header