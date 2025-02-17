'use client'
import { motion } from 'framer-motion'

const skills = [
  {
    category: "Frontend",
    description: "Building responsive and interactive user interfaces",
    items: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-original-wordmark colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" }
    ]
  },
  {
    category: "Backend",
    description: "Creating robust and scalable server-side solutions",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Go", icon: "devicon-go-original-wordmark colored" }
    ]
  },
  {
    category: "Tools",
    description: "Utilizing modern development tools and platforms",
    items: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" }
    ]
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

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build modern, scalable, and user-friendly applications
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={item}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 h-full border border-gray-800 hover:border-emerald-500/50 transition-colors duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
                    {category.category}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex flex-col items-center group/skill"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="relative w-16 h-16 flex items-center justify-center mb-3">
                        <div className="absolute inset-0 bg-emerald-500/10 rounded-full group-hover/skill:bg-emerald-500/20 transition-colors duration-300" />
                        <i className={`${skill.icon} text-3xl relative z-10 text-emerald-400 group-hover/skill:text-emerald-300 transition-colors duration-300`} />
                      </div>
                      <span className="text-gray-300 text-sm font-medium group-hover/skill:text-emerald-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
