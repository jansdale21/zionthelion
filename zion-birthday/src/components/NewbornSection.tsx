import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { FaCalendarAlt, FaWeight, FaBaby, FaHeart, FaRuler, FaClock } from 'react-icons/fa'
import '../swiper.css'

const NewbornSection = () => {
  // Newborn images - replace with actual newborn photos
  const newbornImages = [
    {
      src: '/assets/carousels/newborn/newborn-1.jpg',
      alt: 'Zion as a newborn',
      caption: 'First moments in the world',
      fallback: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/newborn/newborn-2.jpg',
      alt: 'Tiny hands and feet',
      caption: 'Perfect little fingers and toes',
      fallback: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80'
    },
    {
      src: '/assets/carousels/newborn/newborn-3.jpg',
      alt: 'Sleeping peacefully',
      caption: 'Sweet dreams, little lion',
      fallback: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    },
    {
      src: '/assets/carousels/newborn/newborn-4.jpg',
      alt: 'First family photo',
      caption: 'The pride is complete',
      fallback: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/newborn/newborn-5.jpg',
      alt: 'First bath',
      caption: 'Splish splash, little cub',
      fallback: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  const birthDetails = [
    {
      icon: FaCalendarAlt,
      label: 'Birth Date',
      value: 'October 23, 2024',
      color: 'text-jungle-600'
    },
    {
      icon: FaWeight,
      label: 'Weight',
      value: '7 lbs 8 oz',
      color: 'text-forest-600'
    },
    {
      icon: FaRuler,
      label: 'Length',
      value: '20 inches',
      color: 'text-jungle-600'
    },
    {
      icon: FaClock,
      label: 'Time of Birth',
      value: '3:45 PM',
      color: 'text-forest-600'
    },
    {
      icon: FaBaby,
      label: 'First Cry',
      value: 'Strong & Healthy',
      color: 'text-jungle-600'
    },
    {
      icon: FaHeart,
      label: 'Heart Rate',
      value: 'Perfect',
      color: 'text-forest-600'
    }
  ]

  return (
    <section id="newborn" className="py-20 bg-gradient-to-b from-jungle-50 to-forest-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-jungle-200/20 via-forest-300/20 to-jungle-400/20"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-jungle-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-forest-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-jungle-800 mb-6"
            animate={{ 
              textShadow: [
                "0 0 10px rgba(34, 197, 94, 0.3)",
                "0 0 20px rgba(16, 185, 129, 0.3)",
                "0 0 10px rgba(34, 197, 94, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Hello World, I'm Finally Here! 🌍
          </motion.h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed">
            The moment our little lion cub entered the world and changed everything forever. 
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
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: '.newborn-next',
                prevEl: '.newborn-prev',
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet bg-white/40 w-3 h-3 mx-1',
                bulletActiveClass: 'swiper-pagination-bullet-active bg-jungle-500 scale-125',
              }}
              spaceBetween={30}
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
            <button className="newborn-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-jungle-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="newborn-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-jungle-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95">
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
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-jungle-100/60"
        >
          <h3 className="text-3xl font-bold text-jungle-800 mb-8 text-center">
            Birth Details 👶
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {birthDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-jungle-100 to-forest-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <detail.icon className={`w-8 h-8 ${detail.color}`} />
                </motion.div>
                <h4 className="font-semibold text-jungle-800 mb-2">{detail.label}</h4>
                <p className={`text-lg font-bold ${detail.color}`}>{detail.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default NewbornSection
