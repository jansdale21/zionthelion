import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaMusic } from 'react-icons/fa'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [showControls, setShowControls] = useState(false)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const hasTriedFallbackRef = useRef(false)

  // Auto-play music after user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      setHasUserInteracted(true)
      // Auto-play music after user interaction
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(() => {
          console.log('Autoplay blocked by browser')
        })
        setIsPlaying(true)
      }
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }

    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('keydown', handleUserInteraction)

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }
  }, [isPlaying])

  // Listen for a custom event from the invitation accept button
  useEffect(() => {
    const onStartMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {})
      }
    }
    window.addEventListener('start-music', onStartMusic as EventListener)
    return () => window.removeEventListener('start-music', onStartMusic as EventListener)
  }, [])

  // Keep UI state in sync with the real audio element state
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('ended', onEnded)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  // Handle audio playback
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    if (!hasUserInteracted) {
      setHasUserInteracted(true)
    }
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log('Autoplay blocked by browser')
        })
      }
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  return (
    <>
      {/* Music Player Widget */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="fixed bottom-24 right-2 sm:right-4 z-[110]"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onTouchStart={() => setShowControls(!showControls)}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-3 sm:p-4">
          {/* Main Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              isPlaying 
                ? 'bg-jungle-500 text-white animate-pulse' 
                : 'bg-jungle-100 text-jungle-600 hover:bg-jungle-200'
            }`}
          >
            {isPlaying ? <FaPause className="w-4 h-4 sm:w-5 sm:h-5" /> : <FaPlay className="w-4 h-4 sm:w-5 sm:h-5" />}
          </motion.button>

          {/* Expanded Controls */}
            <AnimatePresence>
              {showControls && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: 10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-3 min-w-[180px] sm:min-w-[200px]"
                >
                  {/* Music Info */}
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 text-jungle-600 mb-2">
                      <FaMusic className="w-4 h-4" />
                      <span className="text-sm font-semibold">Safari Sounds</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      {isPlaying ? 'Now Playing' : 'Paused'}
                    </p>
                  </div>

                  {/* Volume Control */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Volume</span>
                      <button
                        onClick={toggleMute}
                        className="text-jungle-600 hover:text-jungle-700 transition-colors"
                      >
                        {isMuted ? <FaVolumeMute className="w-4 h-4" /> : <FaVolumeUp className="w-4 h-4" />}
                      </button>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-full h-2 bg-jungle-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  {/* Play/Pause Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={togglePlay}
                    className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${
                      isPlaying
                        ? 'bg-jungle-500 text-white hover:bg-jungle-600'
                        : 'bg-jungle-100 text-jungle-600 hover:bg-jungle-200'
                    }`}
                  >
                    {isPlaying ? 'Pause Music' : 'Play Music'}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
      </motion.div>

      {/* Initial Music Prompt */}
      <AnimatePresence>
        {!hasUserInteracted && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ delay: 3, duration: 0.6 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[110]"
          >
            <div className="bg-jungle-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg mx-4">
              <div className="flex items-center space-x-2">
                <FaMusic className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-semibold">Tap to play safari music!</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        muted={isMuted}
        style={{ display: 'none' }}
        src="/assets/music/safari-birthday.mp3"
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          // Try a public fallback once if local file is missing
          if (audioRef.current && !hasTriedFallbackRef.current) {
            hasTriedFallbackRef.current = true
            audioRef.current.src = 'https://www.bensound.com/bensound-music/bensound-ukulele.mp3'
            audioRef.current.play().catch(() => {})
          } else {
            console.log('Audio file could not be loaded')
            setIsPlaying(false)
          }
        }}
      />

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #22c55e;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #22c55e;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </>
  )
}

export default MusicPlayer
