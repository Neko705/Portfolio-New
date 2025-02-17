'use client'
import { motion } from 'framer-motion'

const CodeBlock = () => {
  const lines = [
    { width: "70%", delay: 0 },
    { width: "90%", delay: 0.2 },
    { width: "60%", delay: 0.4 },
    { width: "85%", delay: 0.6 },
    { width: "40%", delay: 0.8 }
  ];

  return (
    <div className="relative bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="space-y-2">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className="h-2 rounded bg-gradient-to-r from-emerald-400 to-teal-400"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: line.width, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: line.delay,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[300px] rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm p-8 flex flex-col justify-center"
        >
          <div className="relative z-10 space-y-6">
            <CodeBlock />
            <motion.div
              className="flex gap-4 flex-wrap justify-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">About Me</h2>
          <p className="text-gray-300 mb-6">
            I am a passionate developer with expertise in building modern web applications.
            My journey in software development started with a curiosity for creating
            interactive and user-friendly experiences.
          </p>
          <p className="text-gray-300 mb-6">
            I specialize in frontend development with React and Next.js, while also having
            strong backend skills with Node.js and Python. I love learning new technologies
            and solving complex problems.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center font-medium"
              whileHover={{ 
                scale: 1.05,
                backgroundImage: 'linear-gradient(to right, #10B981, #14B8A6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="https://neko705.github.io/Resume/"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-emerald-400 transition-all duration-300 ease-in-out rounded-full overflow-hidden border-2 border-emerald-400/50 hover:text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
              <span className="relative flex items-center gap-2">
                Show Resume <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
