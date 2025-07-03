import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Brain, Users, Zap, Target, Award, Globe, Rocket } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <CanvasRevealEffect
            animationSpeed={1.5}
            containerClassName="bg-black"
            colors={[
              [0, 150, 0],
              [0, 200, 0],
            ]}
            dotSize={2}
            opacities={[0.1, 0.2, 0.3, 0.4, 0.5]}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Collection</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Collection is revolutionizing education through AI-powered voice interaction. Launched in 2024, our platform
            combines cutting-edge artificial intelligence with natural voice processing to create personalized learning
            experiences that adapt to each student's unique needs.
          </p>
        </div>
      </div>

      {/* Founders Section */}
      <div className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Founders</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* CEO */}
            <Card className="bg-gray-800 border-green-500/20">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-400 to-green-600 mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">BM</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-white">Brown Mafuru</h3>
                  <p className="text-green-400 font-medium mb-4">Co-Founder & CEO</p>
                  <p className="text-gray-300 mb-6">
                    With a background in AI research and educational technology, Brown leads Collection's vision to
                    democratize education through voice-powered AI. His passion for accessible learning drives our
                    mission to create personalized educational experiences for everyone.
                  </p>
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="text-white"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="text-white"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTO */}
            <Card className="bg-gray-800 border-green-500/20">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-600 to-green-400 mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">AV</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-white">Aaron Victor</h3>
                  <p className="text-green-400 font-medium mb-4">Co-Founder & CTO</p>
                  <p className="text-gray-300 mb-6">
                    Aaron brings extensive expertise in voice recognition technology and machine learning to Collection.
                    His innovative approach to AI development has been instrumental in creating our adaptive learning
                    platform that responds to each user's unique needs and learning style.
                  </p>
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="text-white"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="text-white"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4">The Beginning</h3>
              <p className="text-gray-300 leading-relaxed">
                Collection was born from a shared vision between Brown Mafuru and Aaron Victor in late 2024. Both had
                experienced firsthand the limitations of traditional education and saw the potential for AI to create
                more personalized, accessible learning experiences. After months of research and development, they
                officially launched Collection in mid 2025.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4">2025 Launch</h3>
              <p className="text-gray-300 leading-relaxed">
                In July 2025, Collection debuted its revolutionary voice-powered AI learning platform. Within just
                months of launch, we've achieved remarkable growth, onboarding over 100+ users. Our rapid success demonstrates the
                significant demand for more intuitive, personalized learning solutions.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
              <p className="text-gray-300 leading-relaxed">
                Though we're just getting started, our vision extends far beyond our current offerings. We're actively
                developing new features, expanding our course library, and refining our AI to better understand diverse
                learning needs. By the end of 2025, we aim to reach 1 million learners and expand our language support
                to over 75 languages.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Goals Section */}
      <div className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Goals</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To democratize education by making high-quality, personalized learning accessible to everyone through
                the power of voice-enabled AI. We believe that education should adapt to the learner, not the other way
                around.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Make education accessible across language barriers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Personalize learning to individual needs and styles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Create learning experiences that feel natural and engaging</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2025 Goals</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                As a newly launched company, we've set ambitious goals for our first year of operation. We're committed
                to rapid growth while maintaining the highest standards of educational quality and user experience.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Reach 1 million active users by December 2025</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Expand our course library to cover 200+ subjects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Achieve 75+ language support for global accessibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Partner with 50 universities and educational institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Launch enterprise solutions for businesses and schools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Early Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-900 border-green-500/20">
              <CardHeader>
                <Award className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Tech Innovator Award</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Recognized as "Most Promising EdTech Startup" at the 2024 Global AI Summit within our first quarter of
                  operation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-green-500/20">
              <CardHeader>
                <Users className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Rapid User Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Achieved 100,000+ active users within the first three months, with a 92% user retention rate.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-green-500/20">
              <CardHeader>
                <Globe className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Expanded to 15 countries and established partnerships with 12 leading educational institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-green-500/20">
              <CardHeader>
                <Brain className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">AI Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Achieved 99.5% voice recognition accuracy across diverse accents and speaking patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-green-500/20">
              <CardHeader>
                <Mic className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Voice Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Pioneered emotional intelligence algorithms that detect and respond to learner emotions in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-green-500/20">
              <CardHeader>
                <Zap className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Learning Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Users report 40% faster comprehension of complex topics compared to traditional learning methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg border-t-4 border-green-500">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Accessibility</h3>
              <p className="text-gray-300">
                We believe education should be available to everyone, regardless of background, location, or
                circumstances. Our platform is designed to break down barriers to learning.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border-t-4 border-green-500">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Innovation</h3>
              <p className="text-gray-300">
                We continuously push the boundaries of what's possible with AI and voice technology to create
                increasingly natural and effective learning experiences.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border-t-4 border-green-500">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Personalization</h3>
              <p className="text-gray-300">
                We recognize that every learner is unique. Our AI adapts to individual learning styles, paces, and
                preferences to optimize educational outcomes.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border-t-4 border-green-500">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Integrity</h3>
              <p className="text-gray-300">
                We maintain the highest standards of data privacy, educational accuracy, and ethical AI development in
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us CTA */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Journey</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            As a newly launched company with ambitious goals, we're just beginning our journey to transform education.
            We invite you to be part of this exciting chapter as we work to make personalized, voice-powered learning
            accessible to everyone around the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Contact Us
            </a>
            <a
              href="/careers"
              className="bg-transparent border border-green-500 text-green-400 hover:bg-green-900/30 px-8 py-3 rounded-lg font-semibold"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
