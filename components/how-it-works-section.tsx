"use client"
import { motion } from "framer-motion"
import { Mic, Brain, BookOpen, TrendingUp } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Mic className="h-12 w-12" />,
      title: "Speak Naturally",
      description:
        "Simply start talking to your AI tutor in your natural voice. Ask questions, request explanations, or begin a lesson on any topic.",
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "AI Understands",
      description:
        "Our advanced AI processes your speech, understands context, and analyzes your learning needs to provide personalized responses.",
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Learn Interactively",
      description:
        "Engage in dynamic conversations, receive instant feedback, and explore topics through guided discussions and exercises.",
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Track Progress",
      description:
        "Monitor your learning journey with detailed analytics, achievements, and personalized recommendations for continued growth.",
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
          <h2 className="text-4xl font-bold mb-4">How Collection Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of learning with our simple, intuitive process that adapts to your unique learning
            style.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto text-white">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
