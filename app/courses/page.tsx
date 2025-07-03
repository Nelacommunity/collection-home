import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, BookOpen } from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  const courses = [
    {
      title: "AI Fundamentals",
      description:
        "Learn the basics of artificial intelligence and machine learning through interactive voice lessons.",
      duration: "6 weeks",
      students: "2.5k",
      rating: 4.9,
      level: "Beginner",
      topics: ["Machine Learning", "Neural Networks", "Data Science"],
    },
    {
      title: "Voice Technology Mastery",
      description: "Master voice recognition, synthesis, and natural language processing technologies.",
      duration: "8 weeks",
      students: "1.8k",
      rating: 4.8,
      level: "Intermediate",
      topics: ["Speech Recognition", "NLP", "Voice UI"],
    },
    {
      title: "Advanced AI Applications",
      description: "Build real-world AI applications with hands-on projects and expert guidance.",
      duration: "12 weeks",
      students: "950",
      rating: 4.9,
      level: "Advanced",
      topics: ["Deep Learning", "Computer Vision", "Robotics"],
    },
    {
      title: "Business AI Strategy",
      description: "Learn how to implement AI solutions in business environments and drive digital transformation.",
      duration: "4 weeks",
      students: "3.2k",
      rating: 4.7,
      level: "Beginner",
      topics: ["AI Strategy", "Digital Transformation", "ROI Analysis"],
    },
    {
      title: "Ethics in AI",
      description: "Explore the ethical implications of AI technology and responsible development practices.",
      duration: "3 weeks",
      students: "1.5k",
      rating: 4.8,
      level: "All Levels",
      topics: ["AI Ethics", "Bias Detection", "Responsible AI"],
    },
    {
      title: "AI for Healthcare",
      description: "Discover how AI is revolutionizing healthcare with practical applications and case studies.",
      duration: "10 weeks",
      students: "800",
      rating: 4.9,
      level: "Intermediate",
      topics: ["Medical AI", "Diagnostics", "Healthcare Analytics"],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-600/20 text-green-400"
      case "Intermediate":
        return "bg-yellow-600/20 text-yellow-400"
      case "Advanced":
        return "bg-red-600/20 text-red-400"
      default:
        return "bg-blue-600/20 text-blue-400"
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <CanvasRevealEffect
            animationSpeed={1.8}
            containerClassName="bg-black"
            colors={[
              [0, 160, 0],
              [0, 200, 0],
              [50, 255, 50],
            ]}
            dotSize={2.5}
            opacities={[0.15, 0.25, 0.35, 0.45, 0.55]}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">AI-Powered Courses</h1>
          <p className="text-xl text-gray-300">
            Explore our comprehensive collection of AI and voice technology courses, designed to take you from beginner
            to expert with personalized learning paths.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl mb-3">{course.title}</CardTitle>
                  <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {course.topics.map((topic, topicIndex) => (
                        <Badge
                          key={topicIndex}
                          variant="outline"
                          className="text-xs border-green-500/30 text-green-400"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href="collection.acyrx.com">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">   
                    <BookOpen className="h-4 w-4 mr-2" />
                    Start Learning
                  </Button>
                  </Link>
                 
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your AI Journey?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of learners who are already mastering AI with Collection's voice-powered learning platform.
          </p>
          <Link href="collection.acyrx.com">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Start Your Courses
          </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
