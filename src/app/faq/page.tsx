'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | string[];
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: '📋 서비스 이용 관련',
    question: '온맘동행은 어떤 서비스인가요?',
    answer: '온맘동행은 지방에 거주하시는 60대 이상 어르신들이 서울/경기 지역의 병원을 방문하실 때, 교통 허브(KTX역, 버스터미널 등)에서의 픽업부터 병원 동행, 그리고 다시 교통 허브까지의 전 과정을 전문 매니저가 함께하는 병원 동행 서비스입니다.'
  },
  {
    category: '📋 서비스 이용 관련',
    question: '어떤 분들이 이용할 수 있나요?',
    answer: [
      '지방에 거주하시는 60대 이상 어르신',
      '서울/경기 지역 병원 방문이 필요하신 분',
      '혼자서 병원 방문이 어려우신 분',
      '자녀분들이 직접 동행하기 어려운 상황의 어르신'
    ]
  },
  {
    category: '📋 서비스 이용 관련',
    question: '서비스 이용 시간은 어떻게 되나요?',
    answer: '평일 오전 9시부터 오후 6시까지 운영하며, 어르신의 진료 일정에 맞춰 유연하게 조정 가능합니다. 주말 및 공휴일 서비스는 별도 문의 바랍니다.'
  },
  {
    category: '🚗 교통 및 이동 관련',
    question: '어떤 교통 허브에서 픽업이 가능한가요?',
    answer: [
      '서울역, 용산역 (KTX/SRT)',
      '강남고속터미널, 동서울터미널, 센트럴시티터미널 (고속/시외버스)',
      '김포공항, 인천공항 (항공편)',
      '기타 서울/경기 지역 주요 교통 허브'
    ]
  },
  {
    category: '🚗 교통 및 이동 관련',
    question: '지방에서 서울까지 어떻게 오는 것이 좋을까요?',
    answer: [
      '경상권: KTX/SRT → 서울역, 또는 고속버스 → 강남터미널',
      '전라권: KTX → 용산역, 또는 고속버스 → 센트럴시티',
      '충청권: KTX → 서울역, 또는 고속버스 → 동서울터미널',
      '강원권: ITX → 청량리역, 또는 고속버스 → 동서울터미널'
    ]
  },
  {
    category: '🚗 교통 및 이동 관련',
    question: '차량은 어떤 것을 이용하나요?',
    answer: '어르신 전용 승합차 또는 세단을 이용하며, 차량 내부는 항상 청결하게 관리됩니다. 필요시 휠체어 탑승 가능한 차량도 준비 가능합니다.'
  },
  {
    category: '🏥 병원 동행 관련',
    question: '어떤 병원까지 동행이 가능한가요?',
    answer: '서울/경기 지역의 모든 상급종합병원 및 주요 종합병원으로 동행 가능합니다: 서울아산병원, 삼성서울병원, 서울대병원, 세브란스병원, 서울성모병원, 강남세브란스병원, 분당서울대병원 등'
  },
  {
    category: '🏥 병원 동행 관련',
    question: '병원에서 구체적으로 어떤 도움을 받을 수 있나요?',
    answer: [
      '접수 및 수납 업무 지원',
      '진료실, 검사실 위치 안내 및 이동 동행',
      '대기 시간 동안 편의 제공',
      '처방전 수령 및 약국 방문 동행',
      '진료 내용 정리 (필요시)'
    ]
  },
  {
    category: '🏥 병원 동행 관련',
    question: '진료 시간이 길어지면 어떻게 하나요?',
    answer: '예상보다 진료나 검사 시간이 길어져도 동행 매니저가 끝까지 함께 대기하며 도와드립니다. 추가 비용 없이 당일 일정이 모두 완료될 때까지 동행합니다.'
  },
  {
    category: '💰 비용 및 예약 관련',
    question: '서비스 비용은 얼마인가요?',
    answer: [
      '기본 서비스: 픽업 → 병원 동행 → 샌딩 (하루 종일)',
      '비용은 방문 병원, 출발 교통 허브, 소요 시간에 따라 달라집니다',
      '정확한 비용은 상담 시 안내해드리며, 투명하게 사전 고지됩니다',
      '별도 교통비나 주차비 등의 숨겨진 비용은 없습니다'
    ]
  },
  {
    category: '💰 비용 및 예약 관련',
    question: '예약은 언제까지 해야 하나요?',
    answer: '원활한 서비스 제공을 위해 최소 2-3일 전 예약을 권장합니다. 급한 경우 당일 예약도 가능하나, 매니저 배정이 어려울 수 있습니다.'
  },
  {
    category: '💰 비용 및 예약 관련',
    question: '예약 취소나 변경은 가능한가요?',
    answer: [
      '24시간 전 취소: 무료 취소 가능',
      '24시간 이내 취소: 취소 수수료 발생',
      '일정 변경: 가능한 한 수용하되, 매니저 일정에 따라 조정'
    ]
  },
  {
    category: '👨‍⚕️ 매니저 및 안전 관련',
    question: '동행 매니저는 어떤 분들인가요?',
    answer: [
      '의료 동행 서비스 경험이 풍부한 전문 매니저',
      '어르신 케어 교육을 이수한 숙련된 인력',
      '친절하고 세심한 성격의 매니저 엄선',
      '정기적인 서비스 교육 및 평가 실시'
    ]
  },
  {
    category: '👨‍⚕️ 매니저 및 안전 관련',
    question: '매니저의 신원은 확실한가요?',
    answer: '모든 매니저는 신원 확인, 범죄경력 조회, 건강검진을 완료한 검증된 인력입니다. 서비스 전 매니저 정보를 사전에 알려드립니다.'
  },
  {
    category: '👨‍⚕️ 매니저 및 안전 관련',
    question: '응급상황이 발생하면 어떻게 하나요?',
    answer: [
      '모든 매니저는 응급처치 교육을 받았습니다',
      '즉시 119 신고 및 응급실 이동 조치',
      '보호자께 즉시 연락 및 상황 전파',
      '병원과의 신속한 연계 처리'
    ]
  },
  {
    category: '📞 소통 및 기타 관련',
    question: '가족들이 진행 상황을 알 수 있나요?',
    answer: '안심콜 서비스를 통해 실시간으로 진행 상황을 알려드립니다: 픽업 완료 알림, 병원 도착 알림, 진료 시작/완료 알림, 귀가 출발 알림'
  },
  {
    category: '📞 소통 및 기타 관련',
    question: '진료 내용도 알려주시나요?',
    answer: '어르신의 동의 하에 진료 내용을 간단히 정리하여 보호자께 전달해드립니다. 다만, 의료진이 아니므로 정확한 의학적 설명보다는 전달사항 위주로 안내합니다.'
  },
  {
    category: '📞 소통 및 기타 관련',
    question: '식사나 간식은 어떻게 하나요?',
    answer: [
      '긴 대기시간의 경우 병원 내 식당 이용 안내',
      '어르신 건강상태에 맞는 식단 고려',
      '필요시 간단한 간식이나 음료 준비'
    ]
  },
  {
    category: '📞 소통 및 기타 관련',
    question: '휠체어나 보조기구가 필요한 경우에도 이용 가능한가요?',
    answer: [
      '휠체어 이용 가능한 차량 준비',
      '병원 내 휠체어 대여 안내',
      '보조기구 사용에 따른 동선 계획'
    ]
  },
  {
    category: '📞 소통 및 기타 관련',
    question: '서비스 품질에 불만이 있을 때는 어떻게 하나요?',
    answer: [
      '서비스 완료 후 만족도 조사 실시',
      '불만사항 즉시 접수 및 처리',
      '재발 방지를 위한 개선 조치',
      '필요시 서비스 재제공 또는 환불 조치'
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const categories = Array.from(new Set(faqData.map(item => item.category)));

  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          온맘동행 자주 묻는 질문 (FAQ)
        </h1>

        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {category}
            </h2>
            <div className="space-y-4">
              {faqData
                .filter(item => item.category === category)
                .map((item, index) => {
                  const globalIndex = faqData.findIndex(
                    faq => faq.question === item.question
                  );
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={item.question}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-medium text-gray-900">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <Minus className="h-5 w-5 text-primary" />
                          ) : (
                            <Plus className="h-5 w-5 text-primary" />
                          )}
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-4 bg-gray-50">
                              {Array.isArray(item.answer) ? (
                                <ul className="list-disc pl-5 space-y-2">
                                  {item.answer.map((point, i) => (
                                    <li key={i} className="text-gray-700">
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-gray-700">{item.answer}</p>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}

        <div className="mt-12 p-6 bg-primary/5 rounded-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            📞 문의 및 예약
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>전화:</strong> 010-1234-5678 (평일 09:00-18:00)
            </p>
            <p>
              <strong>이메일:</strong> contact@onmam.kr
            </p>
            <p>
              <strong>카카오톡:</strong> @온맘동행
            </p>
          </div>
          <p className="mt-4 text-gray-600">
            더 궁금한 사항이 있으시면 언제든 연락주세요. 어르신의 편안한 병원
            방문을 위해 온맘동행이 함께하겠습니다.
          </p>
        </div>
      </div>
    </main>
  );
} 