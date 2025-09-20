import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaHome, 
  FaImages, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaBaby
} from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Account for fixed navbar height
      const yOffset = -64
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'hero', icon: FaHome, label: 'Home' },
    { id: 'newborn', icon: FaBaby, label: 'Newborn' },
    { id: 'gallery', icon: FaImages, label: 'Gallery' },
    { id: 'rsvp', icon: FaEnvelope, label: 'RSVP' },
    { id: 'map', icon: FaMapMarkerAlt, label: 'Location' },
  ]

  return (
    <>
      {/* Always Expanded Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg' 
            : 'bg-gradient-to-b from-earth-900/40 via-earth-900/20 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <span className="text-2xl">🦁</span>
              <span className={`font-bold text-lg ${isScrolled ? 'text-jungle-800' : 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]'}`}>#ZionTheLion</span>
            </motion.div>

            {/* Always Visible Navigation - All Screen Sizes */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative p-2 sm:p-3 rounded-full transition-all duration-300 group overflow-hidden ${isScrolled ? 'hover:bg-jungle-100' : 'hover:bg-white/10'}`}
                  title={item.label}
                >
                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-jungle-400/20 to-forest-400/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  
                  {/* Icon with smooth color transition */}
                  <motion.div
                    className="relative z-10 flex items-center"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${isScrolled ? 'text-jungle-700 group-hover:text-jungle-800' : 'text-white group-hover:text-white'}`} />
                    {/* Show label on larger screens with slide animation */}
                    <motion.span 
                      className={`hidden lg:inline-block ml-2 text-sm font-medium transition-all duration-300 ${isScrolled ? 'text-jungle-700 group-hover:text-jungle-800' : 'text-white group-hover:text-white'}`}
                      initial={{ x: 0 }}
                      whileHover={{ x: 2 }}
                    >
                      {item.label}
                    </motion.span>
                  </motion.div>
                  
                  {/* Underline animation */}
                  <motion.div
                    className={`absolute bottom-0 left-1/2 h-0.5 w-0 ${isScrolled ? 'bg-jungle-500' : 'bg-white'}`}
                    initial={{ width: 0, x: '-50%' }}
                    whileHover={{ width: '80%', x: '-50%' }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar
