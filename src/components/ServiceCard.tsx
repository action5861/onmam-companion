import React from 'react'
import Image from 'next/image'

type ServiceCardProps = {
  icon?: string
  title: string
  description: string
  imageUrl?: string
  imageAlt?: string
  className?: string
}

const ServiceCard = ({
  icon,
  title,
  description,
  imageUrl,
  imageAlt = '서비스 이미지',
  className = '',
}: ServiceCardProps) => {
  return (
    <div className={`card service-card-hover ${className}`}>
      {imageUrl && (
        <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      )}
      
      <div className="flex items-start">
        {icon && (
          <div className="mr-4 text-primary-600">
            <i className={icon}></i>
          </div>
        )}
        
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard