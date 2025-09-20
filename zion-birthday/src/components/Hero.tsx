import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import '../swiper.css'

const Hero = () => {

  // Hero images - using actual uploaded photos
  const heroImages = [
    {
      src: '/assets/carousels/header/LBP07629.jpg',
      alt: 'Zion the Lion King',
      fallback: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/header/LBP07697.jpg',
      alt: 'Safari Birthday Celebration',
      fallback: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80'
    },
    {
      src: '/assets/carousels/header/LBP07755.jpg',
      alt: 'Birthday Party Setup',
      fallback: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    },
    {
      src: '/assets/carousels/header/LBP07788.jpg',
      alt: 'Zion Adventures',
      fallback: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/header/LBP07893.jpg',
      alt: 'Zion Growing Up',
      fallback: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-10">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={1000}
          allowTouchMove={false}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet bg-white/40 w-3 h-3 mx-1',
            bulletActiveClass: 'swiper-pagination-bullet-active bg-safari-500 scale-125',
          }}
          onSlideChange={() => {}}
          className="h-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = image.fallback;
                        }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 via-earth-900/20 to-earth-900/50" />
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-safari-500/10 via-transparent to-jungle-500/10 animate-pulse mix-blend-soft-light" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            background: 'linear-gradient(45deg, #f59e0b, #22c55e, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: 'cursive, serif',
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))',
            textStroke: '1px rgba(255, 255, 255, 0.1)',
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)'
          }}
        >
          ZION
        </motion.h1>
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-lion-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              King of the Jungle
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-2 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Turning 1!
            </motion.p>
            <motion.div 
              className="flex items-center justify-center space-x-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.span 
                className="text-2xl sm:text-3xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                🦁
              </motion.span>
              <span className="text-base sm:text-lg font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                #ZionTheLion
              </span>
            </motion.div>
            
            {/* Memory Note - Always Visible */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-sm sm:text-base font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                📸 Share your memories with us using #ZionTheLion
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-4"
          >
            <p className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              Hear ye, hear ye! Our little lion king turns one! 
              Join the pride for a magical safari adventure filled with 
              joy, laughter, and celebration.
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10">Join the Celebration</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-safari-400 to-jungle-400 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Modern floating elements - Optimized */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 rounded-full opacity-5 will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? '#f59e0b' : '#22c55e'
              }, transparent)`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.03, 0.1, 0.03],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
