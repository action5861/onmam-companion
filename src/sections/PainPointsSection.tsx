import React from 'react'

const PainPointsSection = () => {
  return (
    <section className="section bg-white" id="pain-points">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-4">혹시 이런 걱정을 하고 계신가요?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            지방에 계신 부모님의 서울 대형병원 방문, 많은 걱정이 되시죠?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            먼 길 오시는 어르신의 병원 방문, 자녀분들의 걱정과 염려를 저희 온맘동행이 잘 알고 있습니다. 
            부모님을 생각하는 그 마음, 이제 온맘동행이 대신하여 정성을 다하겠습니다.
          </p>
        </div>
      </div>
    </section>
  )
}

type PainPointCardProps = {
  icon: string
  title: string
  description: string
}

const PainPointCard = ({ icon, title, description }: PainPointCardProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 transition-all hover:shadow-md">
      <div className="text-4xl text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

const painPoints = [
  {
    icon: '🚶‍♂️',
    title: '이동의 어려움',
    description: '지방에 계신 부모님, 서울 큰 병원까지 어떻게 모셔야 할까요?'
  },
  {
    icon: '🏥',
    title: '복잡한 병원 절차',
    description: '혼자서는 복잡한 병원 절차를 잘 해내실 수 있을까 걱정되시나요?'
  },
  {
    icon: '⏰',
    title: '시간적 부담',
    description: '바쁜 직장 생활 때문에 직접 모시지 못해 마음이 무거우신가요?'
  },
  {
    icon: '😟',
    title: '심리적 불안',
    description: '낯선 곳에서 어르신 혼자 힘드시지 않을까 걱정되시나요?'
  }
]

export default PainPointsSection