"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Brain, MessageSquare, Zap, Globe, Shield, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Advanced Voice Recognition",
      description:
        "State-of-the-art speech recognition that understands natural language, accents, and context with 99.5% accuracy.",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Adaptive AI Learning",
      description:
        "Our AI learns your learning style, pace, and preferences to create personalized educational experiences.",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Natural Conversations",
      description:
        "Engage in fluid, natural conversations with AI tutors that feel like talking to a knowledgeable friend.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Feedback",
      description: "Get immediate corrections, explanations, and encouragement to accelerate your learning progress.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multi-Language Support",
      description: "Learn in over 50 languages with native pronunciation guides and cultural context.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy & Security",
      description:
        "Enterprise-grade encryption ensures your learning data and conversations remain completely private.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Availability",
      description: "Your AI tutor never sleeps - access personalized learning anytime, anywhere in the world.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Learning",
      description: "Connect with other learners, share progress, and learn together in our global community.",
      status: "On Production", // 👈 New field
    },
  ]

  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Powerful Capabilities</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collection combines cutting-edge AI technology with intuitive voice interaction to deliver an unparalleled
            learning experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-green-500/20 hover:border-green-400/40 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="text-green-400 mb-4">{capability.icon}</div>
                  <CardTitle className="text-white text-lg">{capability.title}</CardTitle>
                  
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 text-sm">{capability.description}</p>
                </CardContent>
                {capability.status && (
                    <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full ml-2 w-fit">
                      {capability.status}
                    </span>
                  )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
