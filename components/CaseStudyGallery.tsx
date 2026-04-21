'use client'

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function CaseStudyGallery({ images, name }: { images: string[]; name: string }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  if (images.length === 0) return null

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Campaign Gallery</h2>
      <div className="relative rounded-lg overflow-hidden bg-gray-100 h-[500px]">
        <Image
          src={images[activeImageIndex]}
          alt={`${name} - Image ${activeImageIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4 mt-4">
          {images.slice(0, 4).map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`relative rounded-lg overflow-hidden h-24 ${
                index === activeImageIndex ? 'ring-2 ring-primary' : ''
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 16vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
