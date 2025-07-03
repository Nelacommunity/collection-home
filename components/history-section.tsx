"use client"
import { motion } from "framer-motion"
import { Calendar, Users, Award, Rocket } from "lucide-react"

export default function HistorySection() {
  const milestones = [
    {
      year: "2024",
      icon: <Rocket className="h-6 w-6" />,
      title: "The Vision Begins",
      description:
        "Founded by AI students with a mission to democratize education through voice technology.",
    },
    {
      year: "2025",
      icon: <Users className="h-6 w-6" />,
      title: "First Prototype",
      description:
        "Launched our first voice-powered learning prototype with 100 beta users, achieving 95% satisfaction rates.",
    },
    {
      year: "Scale year",
      icon: <Award className="h-6 w-6" />,
      title: "AI Breakthrough",
      description:
        "Developed proprietary emotional intelligence algorithms that can detect and respond to learner emotions in real-time.",
    },
    {
      year: "Scale year",
      icon: <Calendar className="h-6 w-6" />,
      title: "Global Expansion",
      description: "Reached 50,000 active learners across 25 countries, with support for 15 languages and counting.",
    },
    {
      year: "Scale year",
      icon: <Users className="h-6 w-6" />,
      title: "Community Milestone",
      description:
        "Surpassed 250,000 registered users and launched collaborative learning features for peer-to-peer education.",
    },
    {
      year: "Scale year",
      icon: <Award className="h-6 w-6" />,
      title: "Industry Recognition",
      description:
        "Won 'Best AI Education Platform' at TechCrunch Disrupt and secured partnerships with leading universities.",
    },
  ]

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From a small research project to a global platform transforming how millions learn. Here's how Collection
            evolved to become the world's leading voice-powered AI education platform.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-500/30"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-black z-10"></div>

                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-gray-900 rounded-lg p-6 border border-green-500/20">
                    <div className={`flex items-center mb-3 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                      <div className="text-green-400 mr-2">{milestone.icon}</div>
                      <span className="text-2xl font-bold text-green-400">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-black">The Future is Now</h3>
            <p className="text-black/80 mb-6">
              We're just getting started. Join us as we continue to push the boundaries of AI-powered education and make
              learning accessible to everyone, everywhere.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
