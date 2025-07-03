"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Volume2, Mic } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayDemo = () => {
    setIsPlaying(!isPlaying)
    // In a real app, this would trigger audio playback
  }

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience Collection in Action</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Listen to a real conversation between a student and our AI tutor. Hear how natural and engaging the learning
            experience can be.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black border-green-500/20 p-8">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Button
                      onClick={handlePlayDemo}
                      className="w-20 h-20 rounded-full bg-white text-green-600 hover:bg-gray-100"
                    >
                      {isPlaying ? <Volume2 className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                    </Button>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Interactive Demo</h3>
                  <p className="text-gray-300">3 minutes • AI Fundamentals Lesson</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Mic className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3 flex-1">
                      <p className="text-sm">"Can you explain what machine learning is in simple terms?"</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Volume2 className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-green-900/30 rounded-lg p-3 flex-1">
                      <p className="text-sm">
                        "Think of machine learning like teaching a computer to recognize patterns, just like how you
                        learned to recognize your friends' faces..."
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Mic className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3 flex-1">
                      <p className="text-sm">"That makes sense! Can you give me a real-world example?"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Why Our Voice AI is Different</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-green-400">Natural Conversation Flow</h4>
                  <p className="text-gray-300">No robotic responses - our AI maintains context and speaks naturally.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-green-400">Adaptive Explanations</h4>
                  <p className="text-gray-300">Explanations adjust to your knowledge level and learning style.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-green-400">Emotional Intelligence</h4>
                  <p className="text-gray-300">
                    Recognizes frustration, excitement, and confusion to provide appropriate support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-green-400">Multi-Modal Learning</h4>
                  <p className="text-gray-300">Combines voice with visual aids, examples, and interactive exercises.</p>
                </div>
              </div>
            </div>

            <Button className="bg-green-600 hover:bg-green-700 text-white">Try Free Demo</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
