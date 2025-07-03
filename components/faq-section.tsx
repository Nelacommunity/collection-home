"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How does Collection's voice AI technology work?",
      answer:
        "Collection uses advanced natural language processing and machine learning algorithms to understand your speech, analyze your learning patterns, and provide personalized responses. Our AI can detect emotions, understand context, and adapt its teaching style to match your preferences and pace.",
    },
    {
      question: "Do I need any special equipment to use Collection?",
      answer:
        "No special equipment needed! Collection works with any device that has a microphone and speakers - your smartphone, tablet, laptop, or desktop computer. We recommend using headphones for the best audio experience, but it's not required.",
    },
    {
      question: "What subjects and topics can I learn with Collection?",
      answer:
        "Collection offers courses in AI, machine learning, data science, programming, business strategy, and more. Our AI tutor can discuss virtually any topic and adapt explanations to your knowledge level. We're constantly adding new subjects based on user demand.",
    },
    {
      question: "How does Collection adapt to my learning style?",
      answer:
        "Our AI analyzes your interactions, questions, response patterns, and progress to understand how you learn best. It adjusts explanation complexity, pacing, examples, and teaching methods in real-time. The more you use Collection, the better it becomes at personalizing your experience.",
    },
    {
      question: "Is my voice data and learning information secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption for all data transmission and storage. Your voice data is processed securely and never shared with third parties. You can delete your data at any time, and we comply with GDPR, CCPA, and other privacy regulations.",
    },
    {
      question: "Can I use Collection offline?",
      answer:
        "Collection requires an internet connection for the full AI experience, but we don't offer offline mode but is in production to create an offline mode for reviewing previously downloaded lessons and materials. Your progress syncs automatically when you reconnect to the internet.",
    },
    {
      question: "How much does Collection cost?",
      answer:
        "We offer a free tier with basic features and limited monthly usage. Premium plans start at $19/month for unlimited access to all courses and features. Try our free trial to experience the full platform.",
    },
    {
      question: "What languages does Collection support?",
      answer:
        "Collection currently supports over 50 languages for both input and output. You can speak in your native language and learn in another, or have the AI explain concepts in your preferred language. We're continuously adding support for more languages.",
    },
    {
      question: "How accurate is the voice recognition?",
      answer:
        "Our voice recognition achieves 99.5% accuracy across different accents and speaking styles. The AI is trained on diverse voice patterns and continues to improve with use. If there's ever a misunderstanding, you can simply clarify, and the AI will learn from the interaction.",
    },
    {
      question: "Can Collection help with homework and assignments?",
      answer:
        "Collection is designed to help you understand concepts and learn skills rather than complete assignments for you. It will guide you through problem-solving processes, explain concepts, and help you develop critical thinking skills to tackle your homework independently.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about Collection's AI-powered learning platform.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-green-500/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-900 hover:bg-gray-800 transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-green-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-green-400" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-950 border-t border-green-500/10">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a href="/contact" className="text-green-400 hover:text-green-300 font-semibold underline">
            Contact our support team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
