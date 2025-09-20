import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import '../swiper.css'

const OneYearOld = () => {
  // 1-year-old photos - using actual uploaded photos
  const oneYearImages = [
    {
      src: '/assets/carousels/1yr-old/LBP07623.jpg',
      alt: 'Zion at 1 year old',
      caption: 'Happy and healthy at one!',
      fallback: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/LBP07627.jpg',
      alt: 'Zion playing',
      caption: 'Playtime adventures',
      fallback: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/LBP07629.jpg',
      alt: 'Zion exploring',
      caption: 'Curious little explorer',
      fallback: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/LBP07634.jpg',
      alt: 'Zion smiling',
      caption: 'That infectious smile!',
      fallback: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/LBP07642.jpg',
      alt: 'Zion with family',
      caption: 'Surrounded by love',
      fallback: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/LBP07648.jpg',
      alt: 'Zion learning',
      caption: 'Learning new things every day',
      fallback: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/LBP07649.jpg',
      alt: 'Zion playing with toys',
      caption: 'Toy time fun',
      fallback: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/LBP07650.jpg',
      alt: 'Zion being cute',
      caption: 'Just being adorable',
      fallback: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/LBP07658.jpg',
      alt: 'Zion outdoors',
      caption: 'Outdoor adventures',
      fallback: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/LBP07678.jpg',
      alt: 'Zion laughing',
      caption: 'Pure joy and laughter',
      fallback: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/LBP07690.jpg',
      alt: 'Zion with expressions',
      caption: 'Full of personality',
      fallback: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/LBP07697.jpg',
      alt: 'Zion being playful',
      caption: 'Playful and energetic',
      fallback: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/LBP07714.jpg',
      alt: 'Zion moments',
      caption: 'Precious moments captured',
      fallback: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/LBP07739.jpg',
      alt: 'Zion growing up',
      caption: 'Growing up so fast',
      fallback: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/LBP07740.jpg',
      alt: 'Zion milestones',
      caption: 'Reaching new milestones',
      fallback: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  return (
    <section id="one-year-old" className="py-20 bg-gradient-to-b from-jungle-50 to-forest-100 relative overflow-hidden">
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
            One Year of Pure Joy! 🎉
          </motion.h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed">
            Our little lion has grown into such a happy, curious, and amazing one-year-old. 
            Every day brings new adventures and endless smiles.
          </p>
        </motion.div>

        {/* One Year Old Photo Gallery */}
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
                nextEl: '.oneyear-next',
                prevEl: '.oneyear-prev',
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
              {oneYearImages.map((image, index) => (
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
            <button className="oneyear-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-jungle-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="oneyear-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-jungle-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* One Year Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-jungle-100/60"
        >
          <h3 className="text-3xl font-bold text-jungle-800 mb-8 text-center">
            What an Amazing Year! 🌟
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { achievement: 'Walking independently', emoji: '🚶‍♂️', description: 'Taking steps with confidence' },
              { achievement: 'Saying first words', emoji: '🗣️', description: 'Communicating with the world' },
              { achievement: 'Playing with others', emoji: '👥', description: 'Social skills developing' },
              { achievement: 'Eating solid foods', emoji: '🍎', description: 'Exploring new tastes' },
              { achievement: 'Sleeping through night', emoji: '😴', description: 'Growing and resting well' },
              { achievement: 'Showing personality', emoji: '😊', description: 'Unique little individual' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group bg-gradient-to-br from-jungle-50 to-forest-50 p-6 rounded-2xl border border-jungle-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-jungle-100 to-forest-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-2xl">{item.emoji}</span>
                </motion.div>
                <h4 className="font-semibold text-jungle-800 mb-2">{item.achievement}</h4>
                <p className="text-sm text-forest-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OneYearOld
