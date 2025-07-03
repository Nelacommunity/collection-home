"use client";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Mic,
  MessageSquare,
  BookOpen,
  TrendingUp,
  Globe,
  Clock,
  Shield,
  Smartphone,
  Star,
  Trophy,
  Target,
  Zap,
  Play,
  Pause,
  Volume2,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Brain,
  Users,
  Heart,
  Gamepad2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [userLevel, setUserLevel] = useState(1);
  const [xp, setXp] = useState(250);
  const [achievements, setAchievements] = useState(3);

  // Simulate progress animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Voice Recognition",
      description:
        "Advanced speech recognition that understands natural language and accents",
      badge: "Core Feature",
      level: 5,
      interactive: true,
      demo: "voice",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Interactive Conversations",
      description:
        "Engage in natural dialogue with AI tutors that respond contextually",
      badge: "Popular",
      level: 4,
      interactive: true,
      demo: "chat",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Adaptive Curriculum",
      description:
        "Personalized learning paths that adjust to your progress and goals",
      badge: "Smart",
      level: 5,
      interactive: true,
      demo: "curriculum",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Progress Tracking",
      description: "Detailed analytics and insights into your learning journey",
      badge: "Analytics",
      level: 3,
      interactive: true,
      demo: "analytics",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multi-Language Support",
      description:
        "Learn in your preferred language with support for 50+ languages",
      badge: "Global",
      level: 4,
      interactive: false,
      demo: null,
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Availability",
      description:
        "Access your AI tutor anytime, anywhere, at your convenience",
      badge: "Always On",
      level: 5,
      interactive: false,
      demo: null,
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy First",
      description:
        "Your data is encrypted and secure with enterprise-grade protection",
      badge: "Secure",
      level: 5,
      interactive: false,
      demo: null,
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Cross-Platform",
      description:
        "Seamless experience across desktop, mobile, and tablet devices",
      badge: "Universal",
      level: 4,
      interactive: false,
      demo: null,
    },
  ];

  const gamificationFeatures = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Achievement System",
      description: "Unlock badges and trophies as you master new skills",
      progress: 75,
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Learning Streaks",
      description: "Maintain daily learning streaks to boost your XP",
      progress: 60,
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Skill Levels",
      description: "Level up your expertise in different subjects",
      progress: 85,
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Leaderboards",
      description: "Compete with friends and global learners",
      progress: 40,
    },
  ];

  const getLevelColor = (level: number) => {
    if (level >= 5) return "text-yellow-400";
    if (level >= 4) return "text-green-400";
    if (level >= 3) return "text-blue-400";
    return "text-gray-400";
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Core Feature":
        return "bg-red-600/20 text-red-400";
      case "Popular":
        return "bg-purple-600/20 text-purple-400";
      case "Smart":
        return "bg-blue-600/20 text-blue-400";
      case "Analytics":
        return "bg-orange-600/20 text-orange-400";
      case "Global":
        return "bg-green-600/20 text-green-400";
      case "Always On":
        return "bg-cyan-600/20 text-cyan-400";
      case "Secure":
        return "bg-yellow-600/20 text-yellow-400";
      default:
        return "bg-gray-600/20 text-gray-400";
    }
  };

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    if (features[index].interactive) {
      setXp((prev) => prev + 10);
      if (xp + 10 >= userLevel * 100) {
        setUserLevel((prev) => prev + 1);
        setAchievements((prev) => prev + 1);
      }
    }
  };

  const renderDemo = (demoType: string | null) => {
    switch (demoType) {
      case "voice":
        return (
          <div className="bg-gray-800 rounded-lg p-4 mt-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-400">Voice Demo</span>
              <Button
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-green-600 hover:bg-green-700"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Volume2 className="h-4 w-4 text-green-400" />
              <div className="flex-1 bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-green-400 h-2 rounded-full"
                  animate={{ width: isPlaying ? "100%" : "0%" }}
                  transition={{
                    duration: 3,
                    repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                  }}
                />
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              "Hello Collection, can you explain machine learning?"
            </p>
          </div>
        );
      case "chat":
        return (
          <div className="bg-gray-800 rounded-lg p-4 mt-4 space-y-2">
            <div className="bg-blue-600/20 rounded-lg p-2 text-sm">
              <span className="text-blue-400">You:</span> What is AI?
            </div>
            <div className="bg-green-600/20 rounded-lg p-2 text-sm">
              <span className="text-green-400">AI:</span> AI is like teaching
              computers to think...
            </div>
          </div>
        );
      case "curriculum":
        return (
          <div className="bg-gray-800 rounded-lg p-4 mt-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>AI Basics</span>
                <span className="text-green-400">100%</span>
              </div>
              <Progress value={100} className="h-2" />
              <div className="flex justify-between text-sm">
                <span>Machine Learning</span>
                <span className="text-yellow-400">75%</span>
              </div>
              <Progress value={75} className="h-2" />
              <div className="flex justify-between text-sm">
                <span>Deep Learning</span>
                <span className="text-gray-400">25%</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>
          </div>
        );
      case "analytics":
        return (
          <div className="bg-gray-800 rounded-lg p-4 mt-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">87%</div>
                <div className="text-xs text-gray-400">Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">24h</div>
                <div className="text-xs text-gray-400">Study Time</div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Gamification */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <CanvasRevealEffect
            animationSpeed={2.5}
            containerClassName="bg-black"
            colors={[
              [0, 180, 0],
              [50, 220, 50],
            ]}
            dotSize={3}
            opacities={[0.2, 0.3, 0.4, 0.5, 0.6]}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Interactive Features</h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the cutting-edge capabilities that make Collection the
              most advanced AI-powered learning platform available today.
            </p>

            {/* User Progress Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">L{userLevel}</span>
                  </div>
                  <div>
                    <div className="font-semibold">Explorer Level</div>
                    <div className="text-sm text-gray-400">{xp} XP</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-400" />
                  <span className="text-yellow-400">{achievements}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to Level {userLevel + 1}</span>
                  <span>{xp % 100}/100 XP</span>
                </div>
                <Progress value={xp % 100} className="h-2" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Features Tabs */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900">
              <TabsTrigger
                value="features"
                className="data-[state=active]:bg-green-600"
              >
                Core Features
              </TabsTrigger>
              <TabsTrigger
                value="gamification"
                className="data-[state=active]:bg-green-600"
              >
                Gamification
              </TabsTrigger>
              <TabsTrigger
                value="interactive"
                className="data-[state=active]:bg-green-600"
              >
                Interactive Demo
              </TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="cursor-pointer"
                    onClick={() => handleFeatureClick(index)}
                  >
                    <Card
                      className={`bg-gray-900 border-green-500/20 h-full transition-all duration-300 ${
                        activeFeature === index
                          ? "border-green-400 shadow-lg shadow-green-400/20"
                          : "hover:border-green-400/40"
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <motion.div
                            className="text-green-400"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {feature.icon}
                          </motion.div>
                          <div className="flex items-center space-x-2">
                            <Badge className={getBadgeColor(feature.badge)}>
                              {feature.badge}
                            </Badge>
                            {feature.interactive && (
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                }}
                              >
                                <Sparkles className="h-4 w-4 text-yellow-400" />
                              </motion.div>
                            )}
                          </div>
                        </div>
                        <CardTitle className="text-white text-lg flex items-center justify-between">
                          {feature.title}
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < feature.level
                                    ? getLevelColor(feature.level)
                                    : "text-gray-600"
                                } ${i < feature.level ? "fill-current" : ""}`}
                              />
                            ))}
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm mb-4">
                          {feature.description}
                        </p>

                        <AnimatePresence>
                          {activeFeature === index && feature.demo && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {renderDemo(feature.demo)}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {feature.interactive && (
                          <div className="flex items-center justify-between mt-4">
                            <span className="text-xs text-green-400">
                              Interactive
                            </span>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-green-400 hover:text-green-300 hover:bg-black"
                            >
                              Try Now <ArrowRight className="h-3 w-3 ml-1" />
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gamification" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Gamepad2 className="h-8 w-8 text-green-400 mr-3" />
                    Gamified Learning Experience
                  </h3>

                  {gamificationFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-900 rounded-lg p-6 border border-green-500/20"
                    >
                      <div className="flex items-center mb-4">
                        <div className="text-green-400 mr-3">
                          {feature.icon}
                        </div>
                        <h4 className="font-semibold text-lg">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="text-gray-300 mb-4">
                        {feature.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="text-green-400">
                            {feature.progress}%
                          </span>
                        </div>
                        <Progress value={feature.progress} className="h-2" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-6">
                  {/* Achievement Showcase */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-lg p-6 border border-yellow-500/30"
                  >
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <Award className="h-6 w-6 text-yellow-400 mr-2" />
                      Recent Achievements
                    </h4>
                    <div className="space-y-3">
                      {[
                        {
                          name: "First Steps",
                          desc: "Complete your first lesson",
                          earned: true,
                        },
                        {
                          name: "Streak Master",
                          desc: "7-day learning streak",
                          earned: true,
                        },
                        {
                          name: "Voice Pioneer",
                          desc: "Use voice features 50 times",
                          earned: true,
                        },
                        {
                          name: "Knowledge Seeker",
                          desc: "Complete 10 courses",
                          earned: false,
                        },
                      ].map((achievement, i) => (
                        <motion.div
                          key={i}
                          className={`flex items-center space-x-3 p-3 rounded-lg ${
                            achievement.earned
                              ? "bg-green-600/20"
                              : "bg-gray-800/50"
                          }`}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              achievement.earned
                                ? "bg-yellow-400"
                                : "bg-gray-600"
                            }`}
                          >
                            {achievement.earned ? (
                              <CheckCircle className="h-4 w-4 text-black" />
                            ) : (
                              <Trophy className="h-4 w-4 text-gray-400" />
                            )}
                          </div>
                          <div>
                            <div
                              className={`font-medium ${
                                achievement.earned
                                  ? "text-white"
                                  : "text-gray-400"
                              }`}
                            >
                              {achievement.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {achievement.desc}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Live Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-lg p-6 border border-green-500/20"
                  >
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <TrendingUp className="h-6 w-6 text-green-400 mr-2" />
                      Live Progress
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <motion.div
                          className="text-3xl font-bold text-green-400"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          {progress}%
                        </motion.div>
                        <div className="text-sm text-gray-400">
                          Current Lesson
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400">
                          {userLevel}
                        </div>
                        <div className="text-sm text-gray-400">
                          Current Level
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="interactive" className="mt-8">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-900 rounded-lg p-8 border border-green-500/20"
                >
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Interactive AI Tutor Demo
                  </h3>

                  <div className="space-y-6">
                    {/* Simulated Chat Interface */}
                    <div className="bg-gray-800 rounded-lg p-6 h-64 overflow-y-auto">
                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Brain className="h-4 w-4 text-white" />
                          </div>
                          <div className="bg-green-600/20 rounded-lg p-3 max-w-xs">
                            <p className="text-sm">
                              Hello! I'm your AI tutor. What would you like to
                              learn today?
                            </p>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 }}
                          className="flex items-start space-x-3 justify-end"
                        >
                          <div className="bg-blue-600/20 rounded-lg p-3 max-w-xs">
                            <p className="text-sm">
                              Can you explain machine learning in simple terms?
                            </p>
                          </div>
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold">You</span>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Brain className="h-4 w-4 text-white" />
                          </div>
                          <div className="bg-green-600/20 rounded-lg p-3 max-w-xs">
                            <p className="text-sm">
                              Think of machine learning like teaching a child to
                              recognize animals. You show them many pictures,
                              and eventually they learn to identify cats, dogs,
                              and birds on their own!
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Interactive Controls */}
                    <div className="flex justify-center space-x-4">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Mic className="h-4 w-4 mr-2" />
                        Start Voice Chat
                      </Button>
                      <Button
                        variant="outline"
                        className="border-green-500 text-green-400 bg-transparent"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Type Message
                      </Button>
                    </div>

                    {/* Feature Highlights */}
                    <div className="grid md:grid-cols-3 gap-4 mt-8">
                      {[
                        {
                          icon: <Heart className="h-5 w-5" />,
                          title: "Emotional AI",
                          desc: "Detects your mood and adapts",
                        },
                        {
                          icon: <Zap className="h-5 w-5" />,
                          title: "Instant Response",
                          desc: "Real-time conversation flow",
                        },
                        {
                          icon: <Target className="h-5 w-5" />,
                          title: "Personalized",
                          desc: "Adapts to your learning style",
                        },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gray-800 rounded-lg p-4 text-center"
                        >
                          <div className="text-green-400 mb-2 flex justify-center">
                            {item.icon}
                          </div>
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-400">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Technical Specs with Animations */}
      <div className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Technical Specifications
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                AI Capabilities
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Natural Language Processing (NLP)",
                  "Machine Learning Adaptation",
                  "Real-time Speech Recognition",
                  "Contextual Understanding",
                  "Emotional Intelligence",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Platform Features
              </h3>
              <ul className="space-y-2 text-gray-300">
                {["Cloud-based Infrastructure", "Enterprise SSO"].map(
                  (item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {item}
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
