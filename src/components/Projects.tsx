'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useEffect, useState } from 'react'

const projects = [
  {
    title: "PostFlow",
    description: "A modern social media platform built with cutting-edge technologies. Features include real-time updates, responsive design, and seamless user experience.",
    tech: ["NextJs", "Nodejs", "NeonDb", "TypeScript"],
    github: "https://github.com/Neko705/PortFolio-Nextjs",
    demo: "https://post-flow-next-js.vercel.app/",
    featured: true
  },
  {
    title: "StarLens",
    description: "An innovative platform that leverages the power of Next.js and TypeScript to deliver a fast, type-safe, and maintainable application.",
    tech: ["React Native", "ConvexDB", "TypeScript", ""],
    github: "https://github.com/username/project2",
    demo: "https://project2.com",
    featured: true
  },
  {
    title: "Vibe WebApp",
    description: "A full-stack application showcasing modern development practices, clean architecture, and seamless integration with various APIs.",
    tech: ["socket.io", "React", "MongoDB", "Express", "Nodejs"],
    github: "https://github.com/username/project3",
    demo: "https://project3.com",
    featured: false
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

function ProjectTitle({ title }: { title: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Main text container */}
      <div className="relative">
        {/* Gradient text */}
        <motion.span 
          className="text-4xl font-black text-center relative inline-block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text"
          animate={isHovered ? {
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundSize: '200% 100%'
          }}
        >
          {title}
        </motion.span>

        {/* Animated underline */}
        <motion.div
          className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
          initial={{ width: '0%' }}
          animate={isHovered ? { 
            width: '100%',
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          } : { 
            width: '0%',
            transition: {
              duration: 0.2,
              ease: "easeIn"
            }
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work, featuring full-stack applications and innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 2,
                translateZ: 20
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 h-full shadow-lg hover:shadow-emerald-500/20">
                <div className="h-40 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-600/10 via-teal-600/10 to-cyan-600/10 opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                  
                  <div className="relative z-10 w-full">
                    <ProjectTitle title={project.title} />
                  </div>

                  <motion.div 
                    className="absolute top-4 right-4 flex gap-3 z-20"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900/80 p-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900/80 p-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>
                <div className="p-6 backdrop-blur-sm bg-gray-900/50">
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                      }
                    }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          show: { opacity: 1, scale: 1 }
                        }}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs border border-blue-500/20
                                 hover:bg-blue-500/20 hover:border-blue-500/40 hover:scale-105 transform transition-all duration-300
                                 hover:shadow-sm hover:shadow-blue-500/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
