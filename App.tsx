'use client'

import { useState, useEffect } from 'react'
import { Loader } from './components/Loader'
import { MobileLayout } from './components/MobileLayout'
import { DesktopLayout } from './components/DesktopLayout'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simula o carregamento
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setShowContent(true), 200)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A2B3D] to-[#0F1924]">
      <MobileLayout showContent={showContent} />
      <DesktopLayout showContent={showContent} />
    </div>
  )
}