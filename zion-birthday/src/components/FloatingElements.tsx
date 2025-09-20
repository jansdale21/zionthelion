import { motion } from 'framer-motion'

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {/* OPTIMIZED: Reduced animations and elements for better performance */}
      
      {/* Static background elements - no animation */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`static-${i}`}
          className="absolute rounded-full opacity-5"
          style={{
            left: `${20 + i * 25}%`,
            top: `${20 + i * 20}%`,
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            background: `radial-gradient(circle, ${
              i % 2 === 0 ? '#22c55e' : '#f97316'
            }, transparent)`,
          }}
        />
      ))}

      {/* OPTIMIZED: Only 3 floating animals with minimal animation */}
      {['🎂','🦒','🦓'].map((emoji, i) => (
        <motion.div
          key={`animal-${i}`}
          className="absolute text-2xl sm:text-3xl opacity-20 will-change-transform"
          style={{
            left: `${30 + i * 30}%`,
            top: `${40 + i * 20}%`,
            maxWidth: '40px',
            maxHeight: '40px',
          }}
          animate={{
            y: [0, -15, 0], // Minimal movement
            opacity: [0.15, 0.25, 0.15], // Subtle opacity change
          }}
          transition={{
            duration: 15, // Slower, less CPU intensive
            repeat: Infinity,
            delay: i * 2,
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
