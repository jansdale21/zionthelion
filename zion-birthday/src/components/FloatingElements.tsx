import { motion } from 'framer-motion'

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {/* Modern geometric shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        >
          <div 
            className={`w-2 h-2 rounded-full ${
              i % 4 === 0 ? 'bg-safari-500' : 
              i % 4 === 1 ? 'bg-jungle-500' : 
              i % 4 === 2 ? 'bg-lion-500' : 'bg-earth-500'
            }`}
          />
        </motion.div>
      ))}

      {/* Subtle gradient orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? '#f97316' : 
              i % 3 === 1 ? '#22c55e' : '#78716c'
            }, transparent)`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating safari animals - Optimized for performance */}
      {['🎂','🦒','🦓','🐘','🦜','🦏','🐅','🐆'].map((emoji, i) => (
        <motion.div
          key={`animal-${i}`}
          className="absolute text-2xl sm:text-3xl lg:text-4xl opacity-25 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] will-change-transform"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0], // Reduced movement
            x: [0, (i % 2 === 0 ? 10 : -10), 0], // Reduced horizontal movement
            rotate: [0, (i % 2 === 0 ? 4 : -4), 0], // Reduced rotation
            opacity: [0.2, 0.35, 0.2], // Reduced opacity change
          }}
          transition={{
            duration: 10 + i * 0.5, // Reduced duration
            repeat: Infinity,
            delay: Math.random() * 2, // Reduced delay
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements
