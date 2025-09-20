import { motion } from 'framer-motion'
import { FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-jungle-900 to-forest-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-4xl">🦁</span>
              <div>
                <h3 className="text-2xl font-bold text-white">#ZionTheLion</h3>
                <p className="text-white/80">King of the Jungle</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 max-w-md">
              Thank you for being part of Zion's special day! Your presence made 
              our little lion king's first birthday celebration truly magical.
            </p>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/princess.yusi.03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:princess.yusi1203@gmail.com"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#hero" 
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#newborn" 
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('newborn')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Newborn
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#rsvp" 
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  RSVP
                </a>
              </li>
              <li>
                <a 
                  href="#map" 
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Location
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-jungle-400 mt-1" />
                <div>
                  <p className="text-white/80 text-sm">
                    Galano's Farm<br />
                    5MJ2+2MV, Unnamed Road, Mexico, Pampanga
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-jungle-400" />
                <a 
                  href="tel:+639324140498" 
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  +63 932 414 0498
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-jungle-400" />
                <a 
                  href="mailto:princess.yusi1203@gmail.com" 
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  princess.yusi1203@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hashtag Note Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 mb-8"
        >
          <div className="bg-gradient-to-r from-jungle-700 to-forest-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">📸 Share Your Memories!</h3>
            <p className="text-white/80 mb-4 max-w-2xl mx-auto">
              If you happen to take a picture or memory of our little Zion, please don't hesitate to post with the hashtag 
              <span className="font-bold text-white"> #ZionTheLion</span> or email us at{' '}
              <a 
                href="mailto:princess.yusi1203@gmail.com" 
                className="text-yellow-300 hover:text-yellow-200 font-semibold underline"
              >
                princess.yusi1203@gmail.com
              </a>
            </p>
            <div className="flex items-center justify-center space-x-2 text-white">
              <span className="text-2xl">🦁</span>
              <span className="text-lg font-semibold">#ZionTheLion</span>
              <span className="text-2xl">🦁</span>
            </div>
            
            {/* Hidden admin link - only visible if you know where to look */}
            <div className="mt-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <a 
                href="/admin" 
                className="text-white/50 text-xs hover:text-white/80 transition-colors"
                title="Admin Dashboard"
              >
                Admin
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8"
        >
          <div className="text-center">
            <div className="text-white/80 text-sm">
              © {currentYear} Zion's First Birthday. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
