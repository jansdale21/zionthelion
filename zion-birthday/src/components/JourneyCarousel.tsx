import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import '../swiper.css'

interface JourneyCarouselProps {
  title: string
  description: string
  folder: string
  images: Array<{
    src: string
    alt: string
    caption: string
    fallback: string
  }>
  nextButtonClass: string
  prevButtonClass: string
}

const JourneyCarousel = ({ title, description, images, nextButtonClass, prevButtonClass }: JourneyCarouselProps) => {
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
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: `.${nextButtonClass}`,
            prevEl: `.${prevButtonClass}`,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet bg-white/40 w-3 h-3 mx-1',
            bulletActiveClass: 'swiper-pagination-bullet-active bg-jungle-500 scale-125',
          }}
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
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
        <button className={`${prevButtonClass} absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-jungle-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className={`${nextButtonClass} absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-jungle-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  )
}

export default JourneyCarousel
