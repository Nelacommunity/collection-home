"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Mic, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-400 text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8" />
              <Mic className="h-10 w-10" />
              <Sparkles className="h-8 w-8" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Learning?</h2>

          <p className="text-xl mb-8 text-black/80 max-w-2xl mx-auto">
            Join over 100+ learners who have discovered the power of AI-driven voice education. Start your
            personalized learning journey today with Collection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold bg-transparent"
            >
              Watch Demo
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-black/70">
            <div className="flex items-center">
              <span className="text-2xl mr-2">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">✓</span>
              <span>free trial</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
