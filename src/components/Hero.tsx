'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiGithub } from 'react-icons/fi'
import { useRef, useState, useEffect } from 'react'
import ParticleBackground from './ParticleBackground'

const floatingIcons = [
  { icon: "devicon-react-original", style: { top: '20%', left: '10%' } },
  { icon: "devicon-typescript-plain", style: { top: '30%', right: '15%' } },
  { icon: "devicon-nextjs-original", style: { bottom: '25%', left: '15%' } },
  { icon: "devicon-nodejs-plain", style: { bottom: '35%', right: '10%' } },
  { icon: "devicon-python-plain", style: { top: '45%', left: '25%' } },
  { icon: "devicon-tailwindcss-plain", style: { bottom: '45%', right: '25%' } },
  { icon: "devicon-github-original", style: { bottom: '15%', left: '35%' } }
]

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />
      
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black to-black pointer-events-none" />
      
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.i
          key={index}
          className={`${item.icon} text-4xl text-blue-400/30 absolute`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 0.3,
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: index * 0.2,
            x: { duration: 0.2 },
            y: { duration: 0.2 }
          }}
          style={item.style}
        />
      ))}

      <motion.div 
        className="container px-4 mx-auto relative z-10"
        style={{ y: backgroundY, opacity }}
      >
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <motion.span 
              className="text-xl md:text-2xl text-emerald-400 font-semibold tracking-wider"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #34D399, #10B981, #059669)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                backgroundSize: '200% 100%',
                color: 'transparent'
              }}
            >
              Hi, I'm Akhilesh Wankhede
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 drop-shadow-lg">
              Crafting Digital
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 relative">
              Experiences
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Full-stack developer passionate about creating beautiful, functional, 
            and user-friendly applications that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 ease-in-out rounded-full overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-white opacity-10 group-hover:rotate-90 ease"></span>
              <span className="relative flex items-center gap-2">
                View Projects <FiArrowRight className="inline-block" />
              </span>
            </motion.a>

            <motion.a
              href="https://github.com/Neko705"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-emerald-400 transition-all duration-300 ease-in-out rounded-full overflow-hidden border-2 border-emerald-400/50 hover:text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
              <span className="relative flex items-center gap-2">
                GitHub <FiGithub className="inline-block" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
