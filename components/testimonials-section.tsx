"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Reagan John",
      role: "Computer Science Student",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Collection completely transformed how I learn AI concepts. The voice interaction feels so natural, and the AI tutor explains complex topics in ways I actually understand. I've learned more in 3 months than I did in a full semester!",
      emotion: "🤩 Amazed",
    },
    {
      name: "Jacob Emanuel",
      role: "Software Engineer",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "As someone who learns better through conversation, Collection is a game-changer. I can ask follow-up questions naturally, and the AI remembers our previous discussions. It's like having a personal tutor available 24/7.",
      emotion: "💡 Enlightened",
    },
    // {
    //   name: "Dr. Emily Watson",
    //   role: "University Professor",
    //   avatar: "/placeholder.svg?height=60&width=60",
    //   rating: 5,
    //   text: "I've been teaching for 20 years, and Collection's approach to personalized learning is revolutionary. My students who use it show 40% better comprehension rates. The emotional intelligence of the AI is remarkable.",
    //   emotion: "🎯 Impressed",
    // },
    {
      name: "Abdallah Hassan",
      role: "High School Student",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "I used to struggle with traditional textbooks, but Collection makes learning feel like having a conversation with a friend. The AI picks up when I'm confused and explains things differently. My grades have improved dramatically!",
      emotion: "🚀 Motivated",
    },
    // {
    //   name: "Lisa Park",
    //   role: "Career Changer",
    //   avatar: "/placeholder.svg?height=60&width=60",
    //   rating: 5,
    //   text: "Switching careers at 35 felt overwhelming until I found Collection. The AI adapts to my busy schedule and learning pace. I'm now confident in my new tech skills and landed my dream job in AI development!",
    //   emotion: "🌟 Confident",
    // },
    // {
    //   name: "James Thompson",
    //   role: "Retired Engineer",
    //   avatar: "/placeholder.svg?height=60&width=60",
    //   rating: 5,
    //   text: "At 68, I thought learning new technology would be impossible. Collection's patient AI tutor never makes me feel rushed or stupid. I'm now building my own AI projects and loving every minute of it!",
    //   emotion: "❤️ Grateful",
    // },
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
          <h2 className="text-4xl font-bold mb-4">What Our Learners Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from real people whose lives have been transformed by Collection's AI-powered learning
            experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-green-500/20 h-full hover:border-green-400/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-6 w-6 text-green-400 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-400 font-medium">{testimonial.emotion}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Join thousands of satisfied learners</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white font-semibold">4.9/5</span>
            <span className="text-gray-400">from 12,000+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
