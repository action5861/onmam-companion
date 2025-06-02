import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '온맘동행 | 지방 거주 어르신 서울/경기 병원 동행 서비스',
  description: '지방에 거주하는 60대 이상 노인 분들의 서울/경기 지역 병원 방문을 위한 전문 동행 서비스, 교통 허브 픽업부터 병원 동행까지 어르신의 든든한 동반자가 되어드립니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}