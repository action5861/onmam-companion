"use client"

import React, { useState } from 'react'
import Button from '@/components/Button'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    patientName: '',
    patientAge: '',
    hospital: '',
    date: '',
    time: '',
    departure: '',
    message: '',
    agreement: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: checked }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSubmitResult({
          success: true,
          message: result.message
        })
        
        // 폼 초기화
        setFormData({
          name: '',
          phone: '',
          email: '',
          patientName: '',
          patientAge: '',
          hospital: '',
          date: '',
          time: '',
          departure: '',
          message: '',
          agreement: false
        })
        
        // 성공 시 페이지 상단으로 스크롤
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSubmitResult({
          success: false,
          message: result.message || '문의 접수 중 오류가 발생했습니다.'
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitResult({
        success: false,
        message: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      })
    } finally {
      setIsSubmitting(false)
      
      // 5초 후 메시지 제거
      setTimeout(() => {
        setSubmitResult(null)
      }, 5000)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-custom p-8">
      <h3 className="text-2xl font-semibold mb-6">서비스 문의하기</h3>
      
      {submitResult && (
        <div className={`p-4 mb-6 rounded-lg ${
          submitResult.success 
            ? 'bg-green-50 text-green-700 border border-green-200' 
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {submitResult.message}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 신청자 정보 */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">신청자 이름 <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
            placeholder="예: 홍길동"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone" className="form-label">연락처 <span className="text-red-500">*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
            required
            placeholder="예: 010-1234-5678"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder="예: example@gmail.com"
          />
        </div>
        
        {/* 환자 정보 */}
        <div className="form-group">
          <label htmlFor="patientName" className="form-label">환자 이름 <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            className="input"
            required
            placeholder="예: 김철수"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="patientAge" className="form-label">환자 나이</label>
          <input
            type="text"
            id="patientAge"
            name="patientAge"
            value={formData.patientAge}
            onChange={handleChange}
            className="input"
            placeholder="예: 75"
          />
        </div>
        
        {/* 병원 정보 */}
        <div className="form-group">
          <label htmlFor="hospital" className="form-label">방문 병원 <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="hospital"
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            className="input"
            required
            placeholder="예: 서울아산병원"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="date" className="form-label">방문 예정일 <span className="text-red-500">*</span></label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input"
            required
            min={new Date().toISOString().split('T')[0]} // 오늘 이후 날짜만 선택 가능
          />
        </div>

        <div className="form-group">
          <label htmlFor="time" className="form-label">진료 예약시간 <span className="text-red-500">*</span></label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="input"
            required
          >
            <option value="">시간을 선택해주세요</option>
            <option value="09:00">오전 9:00</option>
            <option value="09:30">오전 9:30</option>
            <option value="10:00">오전 10:00</option>
            <option value="10:30">오전 10:30</option>
            <option value="11:00">오전 11:00</option>
            <option value="11:30">오전 11:30</option>
            <option value="12:00">오후 12:00</option>
            <option value="12:30">오후 12:30</option>
            <option value="13:00">오후 1:00</option>
            <option value="13:30">오후 1:30</option>
            <option value="14:00">오후 2:00</option>
            <option value="14:30">오후 2:30</option>
            <option value="15:00">오후 3:00</option>
            <option value="15:30">오후 3:30</option>
            <option value="16:00">오후 4:00</option>
            <option value="16:30">오후 4:30</option>
            <option value="17:00">오후 5:00</option>
            <option value="17:30">오후 5:30</option>
          </select>
          <small className="text-gray-500 text-xs mt-1 block">
            ※ 실제 예약 가능 여부는 별도 확인 후 안내드립니다
          </small>
        </div>
        
        <div className="form-group">
          <label htmlFor="departure" className="form-label">출발 지역 <span className="text-red-500">*</span></label>
          <select
            id="departure"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
            className="input"
            required
          >
            <option value="">지역을 선택해주세요</option>
            <option value="경상권">경상권 (부산/대구/울산/경북/경남)</option>
            <option value="전라권">전라권 (광주/전남/전북)</option>
            <option value="충청권">충청권 (대전/세종/충남/충북)</option>
            <option value="강원권">강원권</option>
            <option value="제주권">제주권</option>
            <option value="기타">기타</option>
          </select>
        </div>
      </div>
      
      {/* 추가 메시지 */}
      <div className="form-group mt-4">
        <label htmlFor="message" className="form-label">추가 문의사항</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input h-32 resize-none"
          placeholder="필요한 서비스나 특별히 요청하실 사항이 있으면 알려주세요."
        />
      </div>
      
      {/* 개인정보 동의 */}
      <div className="form-group mt-6">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="agreement"
              name="agreement"
              type="checkbox"
              checked={formData.agreement}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="agreement" className="font-medium text-gray-700">개인정보 수집 및 이용 동의 <span className="text-red-500">*</span></label>
            <p className="text-gray-500">문의 접수 및 답변을 위한 최소한의 개인정보만 수집합니다. 자세한 내용은 개인정보처리방침을 확인해주세요.</p>
          </div>
        </div>
      </div>
      
      {/* 제출 버튼 */}
      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? '접수 중...' : '문의하기'}
        </Button>
      </div>
    </form>
  )
}

export default ContactForm