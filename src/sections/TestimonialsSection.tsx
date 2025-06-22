import React from 'react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "김영희",
      age: "68세",
      location: "부산",
      content: "딸이 바빠서 함께 올 수 없었는데, 온맘동행 간호사님이 딸처럼 정성스럽게 모셔주셨어요. 병원에서도 모든 일을 도와주시고, 돌아가는 길에도 안전하게 모셔주셔서 정말 감사했습니다.",
      service: "서울대병원 정밀검사"
    },
    {
      id: 2,
      name: "박철수",
      age: "72세",
      location: "대구",
      content: "처음에는 혼자 갈 수 있을까 걱정했는데, 간호사님이 전문적으로 모든 것을 도와주셔서 편안하게 진료받을 수 있었어요. 다음에도 꼭 이용하고 싶습니다.",
      service: "삼성서울병원 진료"
    },
    {
      id: 3,
      name: "이순자",
      age: "65세",
      location: "광주",
      content: "아들이 일이 바빠서 함께 올 수 없었는데, 온맘동행 서비스 덕분에 안전하고 편안하게 병원 다녀왔어요. 간호사님이 정말 친절하고 전문적이셨어요.",
      service: "세브란스병원 검사"
    },
    {
      id: 4,
      name: "최만수",
      age: "70세",
      location: "인천",
      content: "큰 병원은 복잡해서 혼자 가기 어려웠는데, 온맘동행 간호사님이 모든 과정을 도와주셔서 정말 편했어요. 마치 가족이 함께 온 것 같았습니다.",
      service: "고려대병원 진료"
    }
  ]

  return (
    <section className="section bg-white" id="testimonials">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            이용 후기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            온맘동행을 이용하신 고객님들의 생생한 후기를 들어보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.age} • {testimonial.location}</p>
                  </div>
                  <div className="text-4xl">💝</div>
                </div>
                <div className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium inline-block">
                  {testimonial.service}
                </div>
              </div>
              
              <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="mt-6 flex justify-center">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">더 많은 후기를 보고 싶으시다면?</h3>
            <p className="text-lg mb-6 opacity-90">
              온맘동행을 이용하신 모든 고객님들의 생생한 후기를 확인해보세요
            </p>
            <a 
              href="/testimonials" 
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              전체 후기 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
