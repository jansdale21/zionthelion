import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaBirthdayCake, 
  FaGift, 
  FaGamepad, 
  FaMusic, 
  FaCamera, 
  FaUtensils,
  FaClock,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa'

const Timeline = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const timelineEvents = [
    {
      time: '3:00 PM',
      title: 'Welcome & Arrival',
      description: 'Join us as we welcome our little lion king and all his guests!',
      icon: FaCamera,
      color: 'from-jungle-400 to-jungle-500',
      details: [
        'Welcome drinks and light refreshments',
        'Photo booth with safari props',
        'Meet and greet with the birthday boy'
      ]
    },
    {
      time: '3:30 PM',
      title: 'Safari Adventure Games',
      description: 'Fun activities and games for all ages in our safari theme!',
      icon: FaGamepad,
      color: 'from-forest-400 to-forest-500',
      details: [
        'Lion cub scavenger hunt',
        'Animal charades',
        'Safari obstacle course',
        'Pin the tail on the lion'
      ]
    },
    {
      time: '4:00 PM',
      title: 'Story Time & Music',
      description: 'Gather around for magical stories and sing-along songs!',
      icon: FaMusic,
      color: 'from-jungle-500 to-jungle-600',
      details: [
        'Lion King story reading',
        'Interactive sing-along',
        'Musical instruments for kids',
        'Dance party with safari beats'
      ]
    },
    {
      time: '4:30 PM',
      title: 'Cake & Treats',
      description: 'Time for the main event - Zion\'s first birthday cake!',
      icon: FaBirthdayCake,
      color: 'from-forest-500 to-forest-600',
      details: [
        'Special lion-themed birthday cake',
        'Cupcakes for all guests',
        'Healthy snack options',
        'Candle blowing ceremony'
      ]
    },
    {
      time: '5:00 PM',
      title: 'Gift Opening',
      description: 'Watch Zion discover all his wonderful presents!',
      icon: FaGift,
      color: 'from-jungle-600 to-jungle-700',
      details: [
        'Gift presentation ceremony',
        'Thank you cards for guests',
        'Photo opportunities',
        'Special keepsakes'
      ]
    },
    {
      time: '5:30 PM',
      title: 'Dinner & Farewell',
      description: 'Enjoy a delicious meal before we say goodbye!',
      icon: FaUtensils,
      color: 'from-forest-600 to-forest-700',
      details: [
        'Safari-themed dinner buffet',
        'Vegetarian and allergy-friendly options',
        'Goodie bags for all children',
        'Thank you and farewell'
      ]
    }
  ]

  const toggleExpanded = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index)
  }

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-white to-jungle-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-jungle-800 mb-4">
            Party Schedule
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for a day filled with fun, laughter, and celebration! 
            Here's what we have planned for Zion's special day.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-jungle-200 to-forest-200 rounded-full hidden md:block"></div>

          {/* Timeline Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-white border-4 border-jungle-400 rounded-full z-10 hidden md:block"></div>

                {/* Event Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-0 md:ml-16 card p-6 cursor-pointer transition-all duration-300 ${
                    expandedItem === index ? 'shadow-2xl' : 'hover:shadow-xl'
                  }`}
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      {/* Time */}
                      <div className="flex items-center space-x-2 text-jungle-600 font-semibold min-w-[80px]">
                        <FaClock className="w-4 h-4" />
                        <span className="text-sm">{event.time}</span>
                      </div>

                      {/* Event Icon */}
                      <div className={`p-3 rounded-full bg-gradient-to-r ${event.color} text-white`}>
                        <event.icon className="w-6 h-6" />
                      </div>

                      {/* Event Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-jungle-800 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {event.description}
                        </p>

                        {/* Expandable Details */}
                        <AnimatePresence>
                          {expandedItem === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-jungle-200 pt-4 mt-4">
                                <h4 className="font-semibold text-jungle-700 mb-3">
                                  What to expect:
                                </h4>
                                <ul className="space-y-2">
                                  {event.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex items-start space-x-2 text-gray-600">
                                      <span className="text-jungle-500 mt-1">•</span>
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Expand Button */}
                    <button className="ml-4 p-2 hover:bg-jungle-100 rounded-full transition-colors">
                      {expandedItem === index ? (
                        <FaChevronUp className="w-4 h-4 text-jungle-600" />
                      ) : (
                        <FaChevronDown className="w-4 h-4 text-jungle-600" />
                      )}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card p-8 bg-gradient-to-r from-jungle-100 to-forest-100">
            <h3 className="text-2xl font-bold text-jungle-800 mb-4">
              Important Notes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-jungle-700 mb-2">Dress Code</h4>
                <p className="text-gray-600">
                  Safari theme encouraged! Think earth tones, animal prints, 
                  or your best jungle explorer outfit. Comfortable shoes recommended.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-jungle-700 mb-2">Parking</h4>
                <p className="text-gray-600">
                  Free parking available on-site. Additional street parking 
                  available nearby. Carpooling encouraged!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
