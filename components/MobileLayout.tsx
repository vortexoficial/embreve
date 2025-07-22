import { motion } from 'framer-motion'
import { K2Logo } from './K2Logo'
import { VideoPlayer } from './VideoPlayer'
import { SocialIcons } from './SocialIcons'

interface MobileLayoutProps {
  showContent: boolean
}

export function MobileLayout({ showContent }: MobileLayoutProps) {
  return (
    <div className="lg:hidden flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col justify-center px-6 py-8">
        
        {/* Logo Mobile */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : -30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <K2Logo />
        </motion.div>

        {/* Text Content Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl leading-none tracking-tight">
            <span className="text-[#d4af5d] block font-extrabold">Eventos</span>
            <span className="text-white block font-extrabold">Presenciais</span>
            <span className="text-white block font-extrabold">e Online</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-4"
          >
            <p className="text-[#d4af5d] text-lg md:text-xl">em breve...</p>
          </motion.div>
        </motion.div>

        {/* Video Player Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full max-w-sm mx-auto"
        >
          <VideoPlayer />
        </motion.div>

      </div>

      {/* Footer Mobile with Social Icons */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 2.1 }}
        className="pb-6 px-6"
      >
        {/* Social Icons Mobile */}
        <SocialIcons 
          showContent={showContent} 
          delay={1.8} 
          className="justify-center mb-3" 
        />

        {/* Copyright */}
        <p className="text-white/40 text-xs text-center">
          © Copyright 2025 K2 Business. Todos os direitos reservados.
        </p>
      </motion.footer>
    </div>
  )
}