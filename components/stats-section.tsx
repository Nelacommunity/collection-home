"use client"
import { motion } from "framer-motion"
import { Users, BookOpen, Globe, Clock } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "100+",
      label: "Active Learners",
      description: "Students worldwide using Collection daily",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      number: "100+",
      label: "Lessons Completed",
      description: "Interactive voice lessons delivered",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: "50+",
      label: "Languages Supported",
      description: "Learn in your native language",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "99.2%",
      label: "Satisfaction Rate",
      description: "Users who recommend Collection",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-green-900 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Trusted by Learners Worldwide</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Join hundreds of thousands of learners who have transformed their education with Collection's AI-powered
            voice learning platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-green-200">{stat.icon}</div>
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <p className="text-green-100 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
