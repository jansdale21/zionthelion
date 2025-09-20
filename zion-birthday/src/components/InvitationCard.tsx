import { motion } from 'framer-motion'
import { FaCrown, FaHeart } from 'react-icons/fa'

interface InvitationCardProps {
  onAccept: () => void
  onDecline: () => void
}

const InvitationCard = ({ onAccept, onDecline }: InvitationCardProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[120] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center relative overflow-hidden shadow-2xl border-4 border-jungle-300"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 50%, #dcfce7 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(34, 197, 94, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
        }}
      >
        {/* Interactive decorative elements */}
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
      
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-jungle-800 mb-4"
            animate={{ 
              textShadow: [
                "0 0 10px rgba(34, 197, 94, 0.4)",
                "0 0 20px rgba(16, 185, 129, 0.4)",
                "0 0 10px rgba(34, 197, 94, 0.4)"
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
              textShadow: "0 0 25px rgba(34, 197, 94, 0.6)"
            }}
          >
            You're Invited!
          </motion.h1>
          
          <div className="mb-6">
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-jungle-800 mb-2"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
            >
              Zion's 1st Birthday
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-forest-600 mb-2"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              King of the Jungle Celebration
            </motion.p>
            <motion.p 
              className="text-sm text-jungle-600 font-semibold"
              animate={{ 
                scale: [1, 1.05, 1],
                color: ["#16a34a", "#22c55e", "#16a34a"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
            >
              #ZionTheLion
            </motion.p>
          </div>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.p 
              className="text-forest-700 text-base sm:text-lg leading-relaxed"
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
              Hear ye, hear ye! Our little lion king turns one! 
              Join the pride for a magical safari adventure filled with 
              joy, laughter, and celebration.
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)",
                rotate: [0, 1, -1, 0]
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onAccept}
              className="w-full bg-gradient-to-r from-jungle-500 to-forest-600 hover:from-jungle-600 hover:to-forest-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
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
                className="inline-block mr-2"
              >
                🦁
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
              onClick={onDecline}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Maybe Next Time
            </motion.button>
          </div>
        </motion.div>

        {/* Envelope flap effect */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-jungle-300"></div>
        
        {/* Envelope seal */}
        <div className="absolute top-2 right-2 w-8 h-8 bg-jungle-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">Z</span>
        </div>
        
        {/* Interactive floating decorative elements */}
        <motion.div 
          className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-jungle-200 to-jungle-300 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            y: [0, -10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-forest-200 to-forest-300 rounded-full opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            y: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        
        {/* Additional interactive elements */}
        <motion.div
          className="absolute top-1/2 -left-4 w-8 h-8 bg-jungle-300 rounded-full opacity-30"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/3 -right-6 w-6 h-6 bg-forest-300 rounded-full opacity-40"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 0.5, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        />
      </motion.div>
    </div>
  )
}

export default InvitationCard
