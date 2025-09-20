import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { useState, useRef } from 'react'
import { FaTimes } from 'react-icons/fa'
import type { Swiper as SwiperType } from 'swiper'
import '../swiper.css'

interface CarouselImage {
  src: string
  alt: string
  caption: string
  fallback: string
}

interface StandardCarouselProps {
  images: CarouselImage[]
  title: string
  description: string
  bulletColor?: string
  buttonColor?: string
  showModal?: boolean
}

const StandardCarousel = ({ 
  images, 
  title, 
  description, 
  bulletColor = 'jungle-500',
  buttonColor = 'jungle-600',
  showModal = true
}: StandardCarouselProps) => {
  const [selectedImage, setSelectedImage] = useState<CarouselImage | null>(null)
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      {/* Section Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-jungle-800 mb-4">
          {title}
        </h3>
        <p className="text-lg text-forest-600 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet bg-white/40 w-3 h-3 mx-1',
            bulletActiveClass: `swiper-pagination-bullet-active bg-${bulletColor} scale-125`,
          }}
          loop={true}
          loopAdditionalSlides={2}
          initialSlide={0}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="rounded-2xl overflow-hidden shadow-2xl relative z-20"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative group">
                <div 
                  className="aspect-square overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => showModal && setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = image.fallback;
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button 
          onClick={() => swiperRef.current?.slidePrev()}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-${buttonColor} p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => swiperRef.current?.slideNext()}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-${buttonColor} p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Image Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <img
              src={selectedImage?.src || ''}
              alt={selectedImage?.alt || ''}
              className="w-full h-full object-contain rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = selectedImage?.fallback || '';
              }}
            />
            {selectedImage?.caption && (
              <p className="text-white text-center mt-4 text-lg font-medium">
                {selectedImage.caption}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default StandardCarousel
