import { motion } from 'framer-motion'
import { K2Logo } from './K2Logo'

export function Loader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A2B3D] to-[#0F1924] flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <K2Logo />
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-[#d4af5d] to-[#E6C875] rounded-full mx-auto max-w-xs"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/60 mt-4"
        >
          Carregando...
        </motion.p>
      </div>
    </div>
  )
}