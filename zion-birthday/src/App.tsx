import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import InteractiveInvitationCard from './components/InteractiveInvitationCard'
import Hero from './components/Hero'
import NewbornSection from './components/NewbornSection'
import NewGallery from './components/NewGallery'
import RSVPForm from './components/RSVPForm'
import InteractiveMap from './components/InteractiveMap'
import Countdown from './components/Countdown'
import Footer from './components/Footer'
import FloatingElements from './components/FloatingElements'
import MusicPlayer from './components/MusicPlayer'
import AdminPage from './pages/Admin'

function App() {
  const [invitationAccepted, setInvitationAccepted] = useState<boolean | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }
    
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Handle admin page routing
  if (currentPath === '/admin') {
    return <AdminPage />
  }

  useEffect(() => {
    // Check if user has already accepted invitation (commented out to always show invitation)
    // const accepted = localStorage.getItem('zion-invitation-accepted')
    // if (accepted === 'true') {
    //   setInvitationAccepted(true)
    // }
  }, [])

  const handleInvitationAccept = () => {
    setInvitationAccepted(true)
    localStorage.setItem('zion-invitation-accepted', 'true')
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
    // Signal music player to start after accepting with a small delay
    setTimeout(() => {
      window.dispatchEvent(new Event('start-music'))
    }, 500)
  }

  const handleInvitationDecline = () => {
    setInvitationAccepted(false)
    localStorage.setItem('zion-invitation-accepted', 'false')
  }

  if (invitationAccepted === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-jungle-100 via-lion-50 to-forest-100 flex items-center justify-center relative overflow-hidden">
        {/* Professional Safari Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-safari-200/20 via-jungle-300/20 to-earth-400/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-safari-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-jungle-400/10 rounded-full blur-3xl"></div>
        </div>
        <InteractiveInvitationCard 
          onAccept={handleInvitationAccept}
          onDecline={handleInvitationDecline}
        />
      </div>
    )
  }

  if (invitationAccepted === false) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-jungle-100 via-lion-50 to-forest-100 flex items-center justify-center relative overflow-hidden">
        {/* Professional Safari Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-safari-200/20 via-jungle-300/20 to-earth-400/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-safari-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-jungle-400/10 rounded-full blur-3xl"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-8 text-center max-w-md mx-4 relative z-10"
        >
          <h2 className="text-2xl font-bold text-forest-800 mb-4">We'll Miss You!</h2>
          <p className="text-earth-600 mb-6">
            We understand you can't make it to Zion's special day. 
            We'll be thinking of you and hope to celebrate together soon!
          </p>
          <button 
            onClick={() => setInvitationAccepted(null)}
            className="btn-primary"
          >
            Change My Mind
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 relative">
      {/* Professional Safari Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-jungle-200/30 via-lion-300/30 to-forest-400/30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-safari-300/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-jungle-400/25 rounded-full blur-3xl"></div>
      </div>
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50"
          >
            <div className="confetti-container">
              {/* OPTIMIZED: Reduced confetti count for better performance */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400"
                  initial={{ 
                    x: '50vw', 
                    y: '100vh',
                    rotate: 0
                  }}
                  animate={{ 
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                    y: -100,
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 2, // Faster animation
                    delay: i * 0.1 // Staggered delay
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <FloatingElements />
      <MusicPlayer />
      
      <main>
        {/* Countdown at the very top */}
        <Countdown dateIso="2025-10-25T14:00:00+08:00" />

        <Hero />
        {/* Newborn Section - Hello World */}
        <NewbornSection />
        {/* Gallery with separate carousels */}
        <NewGallery />
        <InteractiveMap />
        {/* RSVP moved to the bottom of the page content */}
        <RSVPForm />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
