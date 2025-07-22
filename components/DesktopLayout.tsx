import { motion } from 'framer-motion'
import { K2Logo } from './K2Logo'
import { VideoPlayer } from './VideoPlayer'
import { SocialIcons } from './SocialIcons'

interface DesktopLayoutProps {
  showContent: boolean
}

export function DesktopLayout({ showContent }: DesktopLayoutProps) {
  return (
    <div className="hidden lg:flex lg:items-center lg:justify-center lg:min-h-screen lg:px-12 xl:px-16">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* Left Column - Logo, Text Content and Social Icons Desktop */}
          <div className="flex flex-col items-start text-left space-y-8">
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-start"
            >
              <K2Logo />
            </motion.div>

            {/* Text Content Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-left"
            >
              <h1 className="text-6xl xl:text-7xl 2xl:text-8xl leading-none tracking-tight">
                <span className="text-[#d4af5d] block font-extrabold">Eventos</span>
                <span className="text-white block font-extrabold">Presenciais</span>
                <span className="text-white block font-extrabold">e Online</span>
              </h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-6 xl:mt-8"
              >
                <p className="text-[#d4af5d] text-2xl xl:text-3xl">em breve...</p>
              </motion.div>
            </motion.div>

            {/* Social Icons Desktop */}
            <SocialIcons 
              showContent={showContent} 
              delay={1.8} 
              className="justify-start gap-8" 
            />

          </div>

          {/* Right Column - Video Player Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md xl:max-w-lg">
              <VideoPlayer />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}