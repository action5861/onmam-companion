'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  emoji: string;
  title: string;
  name: string;
  age: number;
  location: string;
  relativeLocation: string;
  hospital: string;
  rating: number;
  content: string;
}

interface CustomerVoice {
  content: string;
  author: string;
}

interface PickupLocation {
  category: string;
  emoji: string;
  locations: string[];
}

interface TargetUser {
  category: string;
  emoji: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    emoji: '💝',
    title: '서울역 픽업 서비스로 할머니 혼자 와도 안심',
    name: '정○○',
    age: 39,
    location: '인천',
    relativeLocation: '순천',
    hospital: '강남세브란스병원',
    rating: 5.0,
    content: '"85세 할머니가 혈압약 조절 때문에 정밀검사를 받으셔야 했는데, 신혼 1년차라 아내가 임신 중이어서 제가 순천까지 내려갈 수가 없었어요. 할머니는 거동에 문제없으시지만 서울역에서 병원까지 지하철 환승하며 가시기엔 너무 복잡하잖아요. 온맘동행에서 서울역 픽업해서 강남세브란스까지 모셔다주시고 검사 끝나면 다시 서울역까지 배웅해주셔서 정말 안심이었어요. 할머니께서도 \'혼자 갔으면 얼마나 헤맸을까\' 하시며 만족해하셨습니다!"'
  },
  {
    id: 2,
    emoji: '💙',
    title: '김포공항에서 바로 픽업해주니 정말 편해요',
    name: '한○○',
    age: 44,
    location: '성남',
    relativeLocation: '제주',
    hospital: '서울대병원',
    rating: 5.0,
    content: '"중학교 교사라 학기 중엔 휴가가 정말 어려운데 제주 아버지가 정기 건강검진차 서울대병원에 오셔야 했어요. 70세시지만 건강하셔서 김포공항까지는 혼자 오실 수 있는데, 공항에서 병원까지 대중교통 이용하시기엔 너무 번거로우시죠. 온맘동행에서 김포공항 도착 게이트에서 픽업해서 병원 동행까지 완벽하게 해주셔서 아버지는 편안하게 검진받으시고 저는 수업에만 집중할 수 있었어요. 검진 결과도 양호하다고 하시니 정말 다행이었습니다!"'
  },
  {
    id: 3,
    emoji: '🌸',
    title: '복잡한 서울 길 찾아가는 스트레스가 없어졌어요',
    name: '김○○',
    age: 47,
    location: '서울',
    relativeLocation: '안동',
    hospital: '서울성모병원',
    rating: 5.0,
    content: '"안동 장모님이 무릎 관절 정기검진으로 서울성모병원에 오셔야 했는데, 의사인 저도 병원 스케줄 때문에 매번 픽업하기 어려웠어요. 75세 장모님은 걸으시는 데 문제없으시지만 서울역에서 병원까지 복잡한 길을 혼자 찾아가시기엔 부담스럽잖아요. 온맘동행 매니저분이 서울역에서 픽업해서 병원 접수부터 진료, 다시 서울역 배웅까지 완벽하게 케어해주셔서 정말 만족했어요. 같은 의료진으로서도 전문성을 인정할 만큼 체계적인 서비스였습니다!"'
  }
];

const customerVoices: CustomerVoice[] = [
  { content: '"서울역 픽업 서비스로 할머니 혼자 와도 안심"', author: '정○○님' },
  { content: '"김포공항에서 바로 픽업해주니 정말 편해요"', author: '한○○님' },
  { content: '"복잡한 서울 길 찾아가는 스트레스가 없어졌어요"', author: '김○○님' },
  { content: '"거동 가능한 어르신에게 딱 맞는 서비스"', author: '박○○님' },
  { content: '"교통허브에서 병원까지만 도와줘도 충분해요"', author: '이○○님' }
];

const pickupLocations: PickupLocation[] = [
  {
    category: 'KTX/기차역',
    emoji: '🚄',
    locations: ['서울역', '용산역', '청량리역']
  },
  {
    category: '버스터미널',
    emoji: '🚌',
    locations: ['강남고속터미널', '동서울터미널', '센트럴시티']
  },
  {
    category: '공항',
    emoji: '✈️',
    locations: ['김포공항', '인천공항']
  },
  {
    category: '서비스 가능 병원',
    emoji: '🏥',
    locations: ['서울/경기 모든 상급종합병원']
  }
];

const targetUsers: TargetUser[] = [
  {
    category: '거동 가능한 어르신',
    emoji: '👴👵',
    description: '혼자 서울까지 오실 수 있지만 병원 찾아가기는 부담스러운 분들'
  },
  {
    category: '바쁜 직장인 자녀',
    emoji: '👨‍💼',
    description: '픽업은 어렵지만 어르신 안전은 걱정되는 분들'
  },
  {
    category: '정기검진 환자',
    emoji: '🏥',
    description: '수술이나 응급상황이 아닌 일반 진료/검진 목적'
  },
  {
    category: '대중교통 이용 부담',
    emoji: '🚇',
    description: '서울 지하철/버스 환승이 복잡하다고 느끼시는 어르신들'
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          온맘동행 이용후기
        </h1>

        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          서울 교통허브 픽업으로 해결된 자녀들의 고민
        </h2>

        {/* 이용후기 섹션 */}
        <div className="space-y-12 mb-16">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{testimonial.emoji}</span>
                <h3 className="text-xl font-semibold">{testimonial.title}</h3>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-medium">
                  {testimonial.name}님 ({testimonial.age}세, {testimonial.location} 거주)
                </h4>
                <p className="text-gray-600">
                  {testimonial.relativeLocation} | {testimonial.hospital}
                </p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                  <span className="ml-2 text-gray-600">{testimonial.rating}/5.0</span>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>

        {/* 고객 만족도 섹션 */}
        <div className="bg-primary/5 rounded-lg p-6 mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">📊 고객 만족도</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-lg font-medium mb-2">⭐ 평균 평점</p>
              <p className="text-2xl font-bold text-primary">4.9/5.0</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium mb-2">🔄 재이용률</p>
              <p className="text-2xl font-bold text-primary">89%</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium mb-2">👍 추천의향</p>
              <p className="text-2xl font-bold text-primary">97%</p>
            </div>
          </div>
        </div>

        {/* 생생한 고객 목소리 섹션 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">💬 생생한 고객 목소리</h2>
          <div className="space-y-4">
            {customerVoices.map((voice, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 mb-2">{voice.content}</p>
                <p className="text-gray-500 text-right">- {voice.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 주요 픽업 지점 섹션 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">🚉 주요 픽업 지점</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pickupLocations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{location.emoji}</span>
                  <h3 className="text-lg font-medium">{location.category}</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600">
                  {location.locations.map((loc, i) => (
                    <li key={i}>{loc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 이런 분들께 딱! 섹션 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">🎯 이런 분들께 딱!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetUsers.map((user, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{user.emoji}</span>
                  <h3 className="text-lg font-medium">{user.category}</h3>
                </div>
                <p className="text-gray-600">{user.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 문의 및 예약 섹션 */}
        <div className="bg-primary/5 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">🌟 간편하고 안전한 병원 동행</h2>
          <p className="text-lg font-medium mb-6">"교통허브에서 병원까지, 딱 필요한 만큼만"</p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <strong>전화:</strong> 010-1234-5678
            </p>
            <p className="text-gray-700">
              <strong>카카오톡:</strong> @온맘동행
            </p>
          </div>
          <p className="mt-4 text-gray-600 italic">
            어르신의 안전한 서울 병원 방문을 위해 온맘동행이 함께합니다.
          </p>
        </div>
      </div>
    </main>
  );
} 