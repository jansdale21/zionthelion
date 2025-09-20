import { motion } from 'framer-motion'
import JourneyCarousel from './JourneyCarousel'

const NewGallery = () => {
  // 12 Months Journey Images
  const journey12Months = [
    {
      src: '/assets/carousels/12-months/month-1.jpg',
      alt: 'Month 1 - Newborn',
      caption: 'Month 1: First smiles and coos',
      fallback: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/12-months/month-2.jpg',
      alt: 'Month 2 - Growing strong',
      caption: 'Month 2: Discovering the world',
      fallback: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80'
    },
    {
      src: '/assets/carousels/12-months/month-3.jpg',
      alt: 'Month 3 - First laughs',
      caption: 'Month 3: First giggles and laughs',
      fallback: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    },
    {
      src: '/assets/carousels/12-months/month-4.jpg',
      alt: 'Month 4 - Rolling over',
      caption: 'Month 4: First roll over!',
      fallback: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/12-months/month-5.jpg',
      alt: 'Month 5 - Sitting up',
      caption: 'Month 5: Sitting up like a big boy',
      fallback: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/12-months/month-6.jpg',
      alt: 'Month 6 - First foods',
      caption: 'Month 6: First solid foods',
      fallback: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/12-months/month-7.jpg',
      alt: 'Month 7 - Crawling',
      caption: 'Month 7: On the move!',
      fallback: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/12-months/month-8.jpg',
      alt: 'Month 8 - Standing',
      caption: 'Month 8: Pulling up to stand',
      fallback: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80'
    },
    {
      src: '/assets/carousels/12-months/month-9.jpg',
      alt: 'Month 9 - First words',
      caption: 'Month 9: First words - Mama!',
      fallback: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    },
    {
      src: '/assets/carousels/12-months/month-10.jpg',
      alt: 'Month 10 - Walking',
      caption: 'Month 10: First steps!',
      fallback: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/12-months/month-11.jpg',
      alt: 'Month 11 - Running',
      caption: 'Month 11: Running around everywhere',
      fallback: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/12-months/month-12.jpg',
      alt: 'Month 12 - Birthday boy',
      caption: 'Month 12: Ready for the big day!',
      fallback: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  // 1-Year-Old Photography Images
  const oneYearOld = [
    {
      src: '/assets/carousels/1yr-old/1yr-1.jpg',
      alt: '1st Birthday Portrait',
      caption: 'Official 1st birthday portrait',
      fallback: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/1yr-2.jpg',
      alt: 'Safari Theme Photo',
      caption: 'Safari theme photoshoot',
      fallback: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/1yr-3.jpg',
      alt: 'Cake Smash',
      caption: 'Cake smash session',
      fallback: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/1yr-4.jpg',
      alt: 'Family Portrait',
      caption: 'Family portrait session',
      fallback: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/1yr-5.jpg',
      alt: 'Outdoor Adventure',
      caption: 'Outdoor adventure photos',
      fallback: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/1yr-old/1yr-6.jpg',
      alt: 'Candid Moments',
      caption: 'Candid everyday moments',
      fallback: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-forest-50 via-jungle-50 to-forest-100 relative overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl font-bold text-jungle-800 mb-6">
            Zion's Journey
          </h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed">
            From our little cub's first moments to becoming the king of our hearts. 
            Here's a glimpse into Zion's amazing first year!
          </p>
        </motion.div>

        {/* 12 Months Journey Carousel */}
        <JourneyCarousel
          title="12 Months of Growth 🌱"
          description="Watch our little lion grow month by month through his first year of life. Each month brought new discoveries, milestones, and endless joy."
          folder="12-months"
          images={journey12Months}
          nextButtonClass="journey-next"
          prevButtonClass="journey-prev"
        />

        {/* 1-Year-Old Photography Carousel */}
        <JourneyCarousel
          title="1-Year-Old Photography 📸"
          description="Professional photoshoots capturing Zion's personality, milestones, and the pure joy of being one year old."
          folder="1yr-old"
          images={oneYearOld}
          nextButtonClass="photography-next"
          prevButtonClass="photography-prev"
        />

        {/* Memory Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-jungle-100 to-forest-100 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-jungle-800 mb-4">
              Share Your Memories 📸
            </h3>
            <p className="text-lg text-forest-700 mb-4">
              We'd love to see your photos from Zion's birthday celebration!
            </p>
            <p className="text-xl font-bold text-jungle-800">
              Use <span className="text-2xl">#ZionTheLion</span> to share your memories with us
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewGallery
