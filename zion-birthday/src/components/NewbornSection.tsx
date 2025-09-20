import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaCalendarAlt, FaWeight, FaBaby, FaHeart, FaRuler, FaClock, FaTimes } from 'react-icons/fa'
import { useState, useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import '../swiper.css'

const NewbornSection = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string, caption: string} | null>(null)
  const swiperRef = useRef<SwiperType | null>(null)

  // Newborn images - using actual uploaded photos
  const newbornImages = [
    {
      src: '/assets/carousels/newborn/NEWBORN.jpg',
      alt: 'Zion as a newborn',
      caption: 'Welcome to the world, little Zion!',
      fallback: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/newborn/CHRISTENING 2.JPEG',
      alt: 'Zion christening',
      caption: 'Blessed and beautiful',
      fallback: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80'
    },
    {
      src: '/assets/carousels/newborn/CHRISTENING 2ND.JPEG',
      alt: 'Zion christening second',
      caption: 'Pure innocence and love',
      fallback: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    }
  ]

  // Birth details
  const birthDetails = [
    {
      icon: FaCalendarAlt,
      label: 'Birth Date',
      value: 'October 25, 2024',
      color: 'text-safari-600'
    },
    {
      icon: FaWeight,
      label: 'Birth Weight',
      value: '7.2 lbs',
      color: 'text-jungle-600'
    },
    {
      icon: FaRuler,
      label: 'Birth Length',
      value: '20 inches',
      color: 'text-forest-600'
    },
    {
      icon: FaClock,
      label: 'Birth Time',
      value: '2:30 PM',
      color: 'text-earth-600'
    }
  ]

  return (
    <section id="newborn" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-safari-50 to-jungle-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-jungle-800 mb-6">
            Hello World! 👶
          </h2>
          <p className="text-lg sm:text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed">
            The day our little lion king entered the world, bringing endless joy and love. 
            Here's a glimpse into Zion's very first days.
          </p>
        </motion.div>

        {/* Newborn Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-jungle-800 mb-4">
              First Days of Magic
            </h3>
            <p className="text-lg text-forest-600 max-w-3xl mx-auto">
              From the moment Zion entered our world, he brought pure joy and wonder. 
              These precious newborn moments capture the beginning of an incredible journey.
            </p>
          </div>

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
                bulletActiveClass: 'swiper-pagination-bullet-active bg-jungle-500 scale-125',
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
              {newbornImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group">
                    <div 
                      className="aspect-square overflow-hidden rounded-xl cursor-pointer"
                      onClick={() => setSelectedImage(image)}
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-jungle-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-jungle-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Birth Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-jungle-800 text-center mb-8">
              Birth Details
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {birthDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-safari-100 to-jungle-100 rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300">
                    <detail.icon className={`w-8 h-8 mx-auto mb-4 ${detail.color}`} />
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">
                      {detail.label}
                    </h4>
                    <p className="text-lg font-bold text-jungle-800">
                      {detail.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Special Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-safari-100 to-jungle-100 rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center mb-4">
              <FaHeart className="w-6 h-6 text-red-500 mr-2" />
              <FaBaby className="w-6 h-6 text-jungle-600" />
            </div>
            <p className="text-lg text-jungle-800 font-medium">
              "Every child is a different kind of flower, and all together, they make this world a beautiful garden."
            </p>
            <p className="text-sm text-forest-600 mt-2 italic">
              - Unknown
            </p>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
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
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = selectedImage.fallback;
                }}
              />
              {selectedImage.caption && (
                <p className="text-white text-center mt-4 text-lg font-medium">
                  {selectedImage.caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default NewbornSection