import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import '../swiper.css'

const MonthlyJourney = () => {
  // 12-month journey images with proper captions
  const monthlyImages = [
    {
      src: '/assets/carousels/12-months/1ST .heic',
      alt: 'Zion at 1 month old',
      caption: '1st Month - Welcome to the world!',
      fallback: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/12-months/2ND.heic',
      alt: 'Zion at 2 months old',
      caption: '2nd Month - Growing stronger every day',
      fallback: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80'
    },
    {
      src: '/assets/carousels/12-months/3RD.jpg',
      alt: 'Zion at 3 months old',
      caption: '3rd Month - First smiles and giggles',
      fallback: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    },
    {
      src: '/assets/carousels/12-months/4TH.jpg',
      alt: 'Zion at 4 months old',
      caption: '4th Month - Discovering the world around',
      fallback: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/12-months/5TH.JPG',
      alt: 'Zion at 5 months old',
      caption: '5th Month - Sitting up like a big boy',
      fallback: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/12-months/6TH.heic',
      alt: 'Zion at 6 months old',
      caption: '6th Month - Half a year of pure joy',
      fallback: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/12-months/7TH.jpg',
      alt: 'Zion at 7 months old',
      caption: '7th Month - Crawling adventures begin',
      fallback: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80'
    },
    {
      src: '/assets/carousels/12-months/8TH.jpg',
      alt: 'Zion at 8 months old',
      caption: '8th Month - Standing tall and proud',
      fallback: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    },
    {
      src: '/assets/carousels/12-months/9TH.JPG',
      alt: 'Zion at 9 months old',
      caption: '9th Month - Almost ready to walk',
      fallback: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/12-months/10TH.jpg',
      alt: 'Zion at 10 months old',
      caption: '10th Month - Taking first steps',
      fallback: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  return (
    <section id="monthly-journey" className="py-20 bg-gradient-to-b from-forest-50 to-jungle-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-forest-200/20 via-jungle-300/20 to-forest-400/20"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-forest-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-jungle-400/10 rounded-full blur-3xl"></div>
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
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-forest-800 mb-6"
            animate={{ 
              textShadow: [
                "0 0 10px rgba(16, 185, 129, 0.3)",
                "0 0 20px rgba(34, 197, 94, 0.3)",
                "0 0 10px rgba(16, 185, 129, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            A Year of Growth & Wonder 🌱
          </motion.h2>
          <p className="text-xl text-jungle-600 max-w-3xl mx-auto leading-relaxed">
            Watch our little lion cub grow from a tiny newborn to a curious, 
            adventurous one-year-old. Each month brought new milestones and magical moments.
          </p>
        </motion.div>

        {/* Monthly Journey Carousel */}
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
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: '.monthly-next',
                prevEl: '.monthly-prev',
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet bg-white/40 w-3 h-3 mx-1',
                bulletActiveClass: 'swiper-pagination-bullet-active bg-forest-500 scale-125',
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
              {monthlyImages.map((image, index) => (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg">
                        {image.caption}
                      </p>
                    </div>
                    {/* Always visible caption overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm font-semibold text-center">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button className="monthly-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-forest-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="monthly-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-forest-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Milestone Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-forest-100/60"
        >
          <h3 className="text-3xl font-bold text-forest-800 mb-8 text-center">
            Amazing Milestones Achieved! 🎯
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { milestone: 'First Smile', emoji: '😊' },
              { milestone: 'First Laugh', emoji: '😂' },
              { milestone: 'First Roll', emoji: '🔄' },
              { milestone: 'First Sit', emoji: '🧘' },
              { milestone: 'First Crawl', emoji: '🐛' },
              { milestone: 'First Stand', emoji: '🦵' },
              { milestone: 'First Steps', emoji: '👶' },
              { milestone: 'First Words', emoji: '🗣️' }
            ].map((item, index) => (
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
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-forest-100 to-jungle-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-2xl">{item.emoji}</span>
                </motion.div>
                <h4 className="font-semibold text-forest-800">{item.milestone}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MonthlyJourney
