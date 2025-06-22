'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  title: string;
  name: string;
  age: number;
  location: string;
  route: string;
  hospital: string;
  rating: number;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: 'KTX역 픽업으로 할머니 혼자 와도 마음 놓여요',
    name: '정○○',
    age: 39,
    location: '인천',
    route: '순천 → 서울역 → 강남세브란스병원',
    hospital: '강남세브란스병원',
    rating: 5.0,
    content: '85세 할머니가 혈압약 조절 때문에 정밀검사를 받으셔야 했는데, 신혼 1년차라 아내가 임신 중이어서 제가 순천까지 내려갈 수가 없었어요. 할머니는 거동에 문제없으시지만 서울역에서 강남까지 지하철 두 번 갈아타며 가시기엔 너무 복잡하잖아요. 온맘동행 간호사님이 서울역 도착 게이트에서 할머니 성함이 적힌 피켓 들고 기다리고 계시더라고요. 강남세브란스까지 전용차량으로 편안하게 모셔다주시고, 검사 끝나면 다시 서울역까지 안전하게 배웅해주셔서 정말 안심이었어요. 할머니께서도 "간호사 선생님이 손자 같더라. 혼자 갔으면 얼마나 헤맸을까" 하시며 너무 만족해하셨습니다!'
  },
  {
    id: 2,
    title: '김포공항에서 바로 픽업, 아버지도 저도 편해요',
    name: '한○○',
    age: 44,
    location: '성남',
    route: '제주 → 김포공항 → 서울대병원',
    hospital: '서울대병원',
    rating: 5.0,
    content: '중학교 교사라 학기 중엔 휴가가 정말 어려운데 제주 아버지가 정기 건강검진차 서울대병원에 오셔야 했어요. 70세시지만 건강하셔서 김포공항까지는 혼자 오실 수 있는데, 공항에서 관악구 병원까지 대중교통으로 가시기엔 너무 복잡하시죠. 온맘동행에서 김포공항 도착 로비에서 픽업해서 병원 접수, 검진 동행, 결과 상담까지 완벽하게 케어해주셔서 아버지는 편안하게 검진받으시고 저는 학생들 수업에만 집중할 수 있었어요. 간호사님이 검진 결과도 자세히 설명해주시고 다음 검진 일정까지 챙겨주시니 정말 든든했습니다!'
  },
  {
    id: 3,
    title: '복잡한 서울 지하철, 이제 걱정 끝',
    name: '김○○',
    age: 47,
    location: '서울',
    route: '안동 → 동대구역 → 서울역 → 서울성모병원',
    hospital: '서울성모병원',
    rating: 5.0,
    content: '안동 장모님이 무릎 관절 정기검진으로 서울성모병원에 오셔야 했는데, 의사인 저도 병원 스케줄 때문에 매번 픽업하기 어려웠어요. 75세 장모님은 걸으시는 데 문제없으시지만 서울역에서 여의도까지 지하철 환승하며 가시기엔 부담스럽잖아요. 온맘동행 간호사님이 서울역 광장에서 장모님 이름 적힌 손팻말 들고 기다리고 계시더라고요. 병원 접수부터 진료실 동행, 처방전 설명, 다시 서울역 KTX 승차 도움까지 마치 친딸이 모시는 것처럼 세심하게 케어해주셔서 정말 감동이었어요. 같은 의료진으로서도 전문성을 인정할 만큼 체계적이고 안전한 서비스였습니다!'
  },
  {
    id: 4,
    title: '고속버스터미널 픽업으로 부모님 걱정 덜었어요',
    name: '박○○',
    age: 52,
    location: '부천',
    route: '광주 → 센트럴시티터미널 → 삼성서울병원',
    hospital: '삼성서울병원',
    rating: 5.0,
    content: '광주 계신 78세 어머니가 심장 정밀검사를 받으셔야 했는데, 코로나 이후로 대중교통 이용이 더 걱정되시더라고요. 센트럴시티터미널에서 강남 삼성병원까지는 버스 환승도 복잡하고... 온맘동행 간호사님이 터미널 도착층에서 어머니를 픽업해서 깨끗한 전용차량으로 모셔가시더라고요. 차 안에서도 혈압 체크해주시고, 병원에서는 심장내과 진료까지 함께 들어가서 의사 선생님 설명을 꼼꼼히 메모해주셨어요. 어머니가 "딸보다 더 세심하다"며 칭찬을 아끼지 않으세요!'
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 sm:mb-8 text-center">
          온맘동행 이용후기
        </h1>
        
        <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          온맘동행을 이용하신 고객님들의 진솔한 이야기를 들어보세요. 
          어르신의 안전하고 편안한 병원 방문을 위해 온맘동행이 함께합니다.
        </p>

        {/* 이용후기 목록 */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1 mb-3 sm:mb-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 leading-tight">
                      {testimonial.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-600 mb-3 space-y-1 sm:space-y-0">
                      <span className="font-medium">{testimonial.name}님 ({testimonial.age}세, {testimonial.location} 거주)</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-primary-600 font-medium">{testimonial.hospital}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 bg-gray-50 px-3 py-2 rounded-md">
                      {testimonial.route}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 sm:ml-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-600">
                      {testimonial.rating}/5.0
                    </span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <blockquote className="text-gray-700 leading-relaxed italic text-sm sm:text-base whitespace-pre-line">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 온맘동행만의 특별함 */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
            💝 온맘동행만의 특별함
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6 bg-white">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">교통허브에서 만나는 안심</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                KTX역, 고속버스터미널, 공항... 어디든 픽업 가능합니다. 
                어르신이 도착하는 순간부터 안전하게 모셔드립니다.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6 bg-white">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">간호사와 함께하는 안전</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                의료 전문성으로 어르신의 컨디션을 실시간 체크하고, 
                안전한 병원 동행을 보장합니다.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6 bg-white">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">어르신 전용 프리미엄 차량</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                넓고 편안한 좌석, 승하차 보조 스텝 완비된 
                어르신 전용 차량으로 편안한 이동을 제공합니다.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6 bg-white">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">가족 실시간 안심 서비스</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                픽업부터 배웅까지 모든 과정을 실시간으로 공유하여 
                가족들의 마음을 안심시켜드립니다.
              </p>
            </div>
          </div>
        </div>

        {/* 문의 및 예약 */}
        <div className="p-4 sm:p-6 bg-primary/5 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4 text-center">
            📞 문의 및 예약
          </h2>
          <div className="space-y-2 text-gray-700 mb-4 text-sm sm:text-base">
            <p className="text-center">
              <strong>전화:</strong> 010-1234-5678 (평일 09:00-18:00)
            </p>
            <p className="text-center">
              <strong>이메일:</strong> contact@onmam.kr
            </p>
            <p className="text-center">
              <strong>카카오톡:</strong> @온맘동행
            </p>
          </div>
          <p className="text-gray-600 mb-6 text-sm sm:text-base text-center leading-relaxed">
            "부모님은 편안하게, 자녀는 안심하게" 이것이 온맘동행의 약속입니다. 
            어르신의 안전한 서울 병원 방문을 위해 온맘동행이 함께하겠습니다.
          </p>
          <div className="flex justify-center">
            <a 
              href="/#contact" 
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center text-base sm:text-lg shadow-lg w-full sm:w-auto"
            >
              서비스 문의하기
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 