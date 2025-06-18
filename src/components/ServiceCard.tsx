import React, { memo } from 'react'
import Image from 'next/image'

type ServiceCardProps = {
  icon?: string
  title: string
  description: string
  imageUrl?: string
  imageAlt?: string
  className?: string
}

const ServiceCard = memo(({
  icon,
  title,
  description,
  imageUrl,
  imageAlt = '서비스 이미지',
  className = '',
}: ServiceCardProps) => {
  return (
    <div className={`group bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:-translate-y-1 ${className}`}>
      {imageUrl && (
        <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU4Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojr/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}, (prevProps, nextProps) => {
  // 불필요한 리렌더링 방지를 위한 비교 함수
  return (
    prevProps.title === nextProps.title &&
    prevProps.description === nextProps.description &&
    prevProps.imageUrl === nextProps.imageUrl &&
    prevProps.icon === nextProps.icon &&
    prevProps.className === nextProps.className
  )
})

ServiceCard.displayName = 'ServiceCard'

export default ServiceCard