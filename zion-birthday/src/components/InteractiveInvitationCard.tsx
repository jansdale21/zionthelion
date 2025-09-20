import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCrown, FaHeart, FaEnvelope, FaStar } from 'react-icons/fa'

interface InteractiveInvitationCardProps {
  onAccept: () => void
  onDecline: () => void
}

const InteractiveInvitationCard = ({ onAccept, onDecline }: InteractiveInvitationCardProps) => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(true)
  const [isCardVisible, setIsCardVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showSparkles, setShowSparkles] = useState(true)

  const handleEnvelopeClick = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setIsEnvelopeOpen(true)
    
    // Delay card appearance for smooth animation
    setTimeout(() => {
      setIsCardVisible(true)
      setShowSparkles(true)
      setIsAnimating(false)
    }, 600)
  }

  const handleAccept = () => {
    setShowSparkles(true)
    setTimeout(() => {
      onAccept()
    }, 1000)
  }

  const handleDecline = () => {
    onDecline()
  }

  // Reset animation on component mount
  useEffect(() => {
    setIsEnvelopeOpen(false)
    setIsCardVisible(false)
    setIsAnimating(false)
    setShowSparkles(false)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-jungle-100 via-lion-50 to-forest-100 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-safari-200/20 via-jungle-300/20 to-earth-400/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-safari-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-jungle-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Sparkles - Optimized */}
      <AnimatePresence>
        {showSparkles && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-yellow-400 will-change-transform"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ 
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                  rotate: 180,
                  y: [0, -30, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  delay: Math.random() * 0.3,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeOut"
                }}
              >
                <FaStar className="w-3 h-3" />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-4 sm:mx-6 lg:mx-8">
        {/* Envelope Container */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Envelope Back - Only show when closed */}
          {!isEnvelopeOpen && (
            <motion.div
              className="relative bg-gradient-to-br from-jungle-200 to-forest-300 rounded-2xl p-8 shadow-2xl cursor-pointer hover:shadow-3xl"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleEnvelopeClick}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
            {/* Envelope Seal */}
            <motion.div
              className="absolute top-4 right-4 w-12 h-12 bg-jungle-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                scale: isEnvelopeOpen ? 0 : 1,
                rotate: isEnvelopeOpen ? 180 : 0
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="text-white text-lg font-bold">Z</span>
            </motion.div>

            {/* Envelope Content */}
            <div className="text-center">
              <motion.div
                className="mb-6"
                animate={{ 
                  opacity: isEnvelopeOpen ? 0 : 1,
                  y: isEnvelopeOpen ? -30 : 0,
                  scale: isEnvelopeOpen ? 0.95 : 1
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <FaEnvelope className="w-16 h-16 text-jungle-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-jungle-800 mb-2">
                  You're Invited!
                </h2>
                <p className="text-jungle-600">
                  Tap to open your special invitation
                </p>
              </motion.div>

              {/* Tap to Open Indicator */}
              <motion.div
                className="flex items-center justify-center space-x-2 text-jungle-600"
                animate={{ 
                  opacity: isEnvelopeOpen ? 0 : 1,
                  y: isEnvelopeOpen ? -30 : 0,
                  scale: isEnvelopeOpen ? 0.95 : 1
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  👆
                </motion.div>
                <span className="text-sm font-medium">Tap to Open</span>
              </motion.div>
            </div>
            </motion.div>
          )}

          {/* Invitation Card - Slides out from envelope */}
          <AnimatePresence>
            {isCardVisible && (
              <motion.div
                className="relative bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl w-full"
                initial={{ 
                  y: 200, 
                  opacity: 0,
                  scale: 0.9,
                  rotateX: 45
                }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  scale: 1,
                  rotateX: 0
                }}
                exit={{ 
                  y: 200, 
                  opacity: 0,
                  scale: 0.9
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 120,
                  damping: 15
                }}
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 30%, #dcfce7 70%, #bbf7d0 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(34, 197, 94, 0.2)'
                }}
              >
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 text-jungle-400">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "linear",
                      scale: { duration: 2, repeat: Infinity }
                    }}
                    whileHover={{ scale: 1.3, rotate: 180 }}
                  >
                    <FaCrown className="text-2xl" />
                  </motion.div>
                </div>
                <div className="absolute top-4 right-4 text-jungle-400">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      y: { duration: 1.5, repeat: Infinity }
                    }}
                    whileHover={{ scale: 1.4, y: -10 }}
                  >
                    <FaHeart className="text-2xl" />
                  </motion.div>
                </div>

                {/* Main Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 min-h-full"
                >
                  {/* Magical Header */}
                  <div className="space-y-2">
                    <motion.h1 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-magical text-jungle-700 mb-2"
                      animate={{ 
                        textShadow: [
                          "0 0 15px rgba(34, 197, 94, 0.5)",
                          "0 0 25px rgba(16, 185, 129, 0.6)",
                          "0 0 15px rgba(34, 197, 94, 0.5)"
                        ],
                        scale: [1, 1.02, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        scale: { duration: 2, repeat: Infinity }
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        textShadow: "0 0 30px rgba(34, 197, 94, 0.8)"
                      }}
                    >
                      You're Invited!
                    </motion.h1>
                    
                    <motion.div 
                      className="w-24 h-1 bg-gradient-to-r from-jungle-400 to-forest-500 mx-auto rounded-full"
                      animate={{ 
                        scaleX: [0.8, 1.2, 0.8],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  
                  {/* Event Details */}
                  <div className="space-y-2">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-elegant font-semibold text-jungle-800"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      whileHover={{ scale: 1.05 }}
                    >
                      Zion's 1st Birthday
                    </motion.h2>
                    
                    <motion.p 
                      className="text-sm sm:text-base md:text-lg lg:text-xl font-script text-forest-600"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      King of the Jungle Celebration
                    </motion.p>
                    
                    <motion.div 
                      className="flex items-center justify-center space-x-2"
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.span 
                        className="text-2xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        🦁
                      </motion.span>
                      <motion.p 
                        className="text-lg font-bold text-jungle-600"
                        animate={{ 
                          color: ["#16a34a", "#22c55e", "#16a34a"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        #ZionTheLion
                      </motion.p>
                      <motion.span 
                        className="text-2xl"
                        animate={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                      >
                        🦁
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Invitation Message */}
                  <motion.div 
                    className="bg-gradient-to-r from-jungle-50 to-forest-50 rounded-xl p-4 border border-jungle-200 w-full max-w-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <motion.p 
                      className="text-forest-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-elegant italic"
                      animate={{ 
                        textShadow: [
                          "0 0 5px rgba(34, 197, 94, 0.1)",
                          "0 0 10px rgba(34, 197, 94, 0.2)",
                          "0 0 5px rgba(34, 197, 94, 0.1)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      whileHover={{ 
                        scale: 1.02,
                        textShadow: "0 0 15px rgba(34, 197, 94, 0.3)"
                      }}
                    >
                      "Hear ye, hear ye! Our little lion king turns one! 
                      Join the pride for a magical safari adventure filled with 
                      joy, laughter, and celebration."
                    </motion.p>
                  </motion.div>

                  {/* Event Details */}
                  <motion.div 
                    className="space-y-2 text-center w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-jungle-600">📅</span>
                      <span className="font-semibold text-forest-700 text-sm sm:text-base">October 25, 2025</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-jungle-600">🕒</span>
                      <span className="font-semibold text-forest-700 text-sm sm:text-base">3:00 PM onwards</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-jungle-600">📍</span>
                      <span className="font-semibold text-forest-700 text-sm sm:text-base">Galano's Farm</span>
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="space-y-2 pt-2 w-full max-w-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)",
                        rotate: [0, 1, -1, 0]
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleAccept}
                      className="w-full bg-gradient-to-r from-jungle-500 to-forest-600 hover:from-jungle-600 hover:to-forest-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden font-elegant text-sm sm:text-base"
                      animate={{
                        boxShadow: [
                          "0 4px 15px rgba(34, 197, 94, 0.2)",
                          "0 8px 25px rgba(34, 197, 94, 0.3)",
                          "0 4px 15px rgba(34, 197, 94, 0.2)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.span
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="inline-block mr-3 text-xl"
                      >
                        🎉
                      </motion.span>
                      Accept Invitation
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(107, 114, 128, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDecline}
                      className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-elegant text-xs sm:text-sm"
                    >
                      Decline
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Floating Decorative Elements */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-jungle-200 to-jungle-300 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-forest-200 to-forest-300 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -180, -360],
                    y: [0, 10, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                ></motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default InteractiveInvitationCard
