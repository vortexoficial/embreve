import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoClick = () => {
    togglePlay()
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handlePlay = () => setIsPlaying(true)
      const handlePause = () => setIsPlaying(false)
      const handleEnded = () => setIsPlaying(false)

      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)
      video.addEventListener('ended', handleEnded)

      return () => {
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
        video.removeEventListener('ended', handleEnded)
      }
    }
  }, [])

  return (
    <div 
      className="aspect-[9/16] bg-black rounded-2xl lg:rounded-3xl overflow-hidden relative group shadow-2xl cursor-pointer"
      onClick={handleVideoClick}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(true)}
    >
      {/* Placeholder for now - will be replaced when video is provided */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60" />
      
      {/* Video element - hidden for now until MP4 is provided */}
      {/* <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        preload="metadata"
        poster=""
      >
        <source src="assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      
      {/* Play Button - Disappears when playing */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: isPlaying ? 0 : 1,
          scale: isPlaying ? 0.8 : 1 
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ pointerEvents: isPlaying ? 'none' : 'auto' }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[#d4af5d]/30 transition-all duration-300"
        >
          <Play className="w-7 h-7 lg:w-9 lg:h-9 xl:w-11 xl:h-11 text-[#d4af5d] ml-1" fill="currentColor" />
        </motion.div>
      </motion.div>
    </div>
  )
}