import { motion } from 'framer-motion'
import { FaCalendarAlt, FaWeight, FaBaby, FaHeart, FaRuler, FaClock } from 'react-icons/fa'
import StandardCarousel from './StandardCarousel'

const NewbornSection = () => {
  // Newborn images - using actual uploaded photos
  const newbornImages = [
    {
      src: '/assets/carousels/newborn/NEWBORN.jpg',
      alt: 'Zion as a newborn',
      caption: 'Welcome to the world, little Zion!',
      fallback: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/newborn/NEWBORN2.jpg',
      alt: 'Zion newborn moments',
      caption: 'Tiny fingers, tiny toes, infinite love',
      fallback: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80'
    },
    {
      src: '/assets/carousels/newborn/NEWBORN3.jpg',
      alt: 'Zion first days',
      caption: 'First days of pure magic',
      fallback: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    },
    {
      src: '/assets/carousels/newborn/NEWBORN4.jpg',
      alt: 'Zion sleeping peacefully',
      caption: 'Sweet dreams, little lion',
      fallback: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/newborn/NEWBORN5.jpg',
      alt: 'Zion with family',
      caption: 'Surrounded by love from day one',
      fallback: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/assets/carousels/newborn/NEWBORN6.jpg',
      alt: 'Zion first smile',
      caption: 'That first smile that melted our hearts',
      fallback: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
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

        {/* Newborn Carousel */}
        <StandardCarousel
          images={newbornImages}
          title="First Days of Magic"
          description="From the moment Zion entered our world, he brought pure joy and wonder. These precious newborn moments capture the beginning of an incredible journey."
          bulletColor="jungle-500"
          buttonColor="jungle-600"
          showModal={true}
        />

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
    </section>
  )
}

export default NewbornSection