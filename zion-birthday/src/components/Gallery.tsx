import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Thumbs } from 'swiper/modules'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../swiper.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  // Gallery images - replace with your actual images
  const galleryImages = [
    {
      src: '/assets/images/gallery-1.jpg',
      alt: 'Zion as a newborn',
      caption: 'Our little lion cub arrives!',
      fallback: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/images/gallery-2.jpg',
      alt: 'First smile',
      caption: 'That first magical smile',
      fallback: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80'
    },
    {
      src: '/assets/images/gallery-3.jpg',
      alt: 'First steps',
      caption: 'Taking those first brave steps',
      fallback: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    },
    {
      src: '/assets/images/gallery-4.jpg',
      alt: 'Playing with toys',
      caption: 'Discovering the world through play',
      fallback: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/images/gallery-5.jpg',
      alt: 'Family moments',
      caption: 'Precious family moments',
      fallback: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/images/gallery-6.jpg',
      alt: 'Birthday preparation',
      caption: 'Getting ready for the big day!',
      fallback: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  // Photography carousel images (replace with your actual images)
  const photographyImages = [
    { src: '/assets/images/photo-1.jpg', alt: 'Zion portrait 1', fallback: 'https://images.unsplash.com/photo-1542038282531-6372a3c8682c?w=1200&q=80' },
    { src: '/assets/images/photo-2.jpg', alt: 'Zion portrait 2', fallback: 'https://images.unsplash.com/photo-1542147619-74c03647c464?w=1200&q=80' },
    { src: '/assets/images/photo-3.jpg', alt: 'Zion portrait 3', fallback: 'https://images.unsplash.com/photo-1543353071-087092ec393e?w=1200&q=80' },
    { src: '/assets/images/photo-4.jpg', alt: 'Zion portrait 4', fallback: 'https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?w=1200&q=80' },
  ]

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-forest-50 via-jungle-50 to-forest-100 relative overflow-hidden">
      {/* Professional Safari Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-jungle-200/20 via-forest-300/20 to-jungle-400/20"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-jungle-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-jungle-400/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest-800 mb-4">
            Zion's Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed">
            From our little cub's first moments to becoming the king of our hearts. 
            Here's a glimpse into Zion's amazing first year!
          </p>
        </motion.div>

    {/* Photography Carousel */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-forest-800">Photography Highlights</h3>
        <p className="text-forest-600">A few favorite shots from Zion's 1st birthday session</p>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        navigation
        className="rounded-2xl overflow-hidden shadow-2xl"
      >
        {photographyImages.map((image, index) => (
          <SwiperSlide key={`photo-${index}`}>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[520px]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = image.fallback
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>

        {/* Milestones Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Swiper
            modules={[Autoplay, Navigation, Thumbs]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop
            navigation={{
              nextEl: '.gallery-next',
              prevEl: '.gallery-prev',
            }}
            thumbs={{ swiper: thumbsSwiper }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = image.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm sm:text-base md:text-lg font-semibold">{image.caption}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button 
            className="gallery-prev absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-jungle-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ pointerEvents: 'auto' }}
          >
            <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button 
            className="gallery-next absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-jungle-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ pointerEvents: 'auto' }}
          >
            <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>

        {/* Milestones Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={3}
            breakpoints={{
              480: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 12,
              },
            }}
            className="rounded-xl overflow-x-auto"
            style={{ overflowX: 'auto' }}
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-16 sm:h-20 cursor-pointer group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-200" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <p className="text-lg font-semibold">{galleryImages[selectedImage].caption}</p>
              </div>

              {/* Navigation in lightbox */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
