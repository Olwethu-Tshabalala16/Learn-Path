import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, BookOpen, GraduationCap, Users, CheckCircle, MessageCircle } from "lucide-react";
import { useState } from "react";
import heroImage from "@assets/generated_images/hero_illustration_for_learnpath_education_platform.png";
import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { ChatbotGeneral } from "@/components/ChatbotGeneral";

export default function HomePage() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <AnimatedBackground />
      <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 pb-32 lg:pt-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Unlock Your Potential with <span className="text-primary">LearnPath</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                The comprehensive platform bridging the gap between students, educators, and future careers. Discover resources, tools, and opportunities tailored just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/login">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Start Learning
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button size="lg" variant="outline">
                    Explore Resources
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card p-2">
                 <img 
                  src={heroImage} 
                  alt="Students learning with digital tools" 
                  className="rounded-xl w-full h-auto object-cover"
                />
                {/* Floating Elements for decor */}
                <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-lg hidden md:block">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span className="font-bold">50k+ Users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">Tailored Solutions</h2>
            <p className="text-muted-foreground">
              Whether you are teaching the next generation or preparing for your own future, we have the tools you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Student Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">For Students</h3>
              <p className="text-muted-foreground mb-6">
                Access study materials, track your progress, and explore career paths and bursaries designed to launch your future.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-secondary" /> <span>Personalized Study Plans</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-secondary" /> <span>Bursary Applications</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-secondary" /> <span>Career Guidance</span>
                </li>
              </ul>
              <Link href="/services/student">
                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                  Explore Student Tools
                </Button>
              </Link>
            </div>

            {/* Teacher Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20 text-secondary-foreground">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">For Teachers</h3>
              <p className="text-muted-foreground mb-6">
                Streamline lesson planning, manage classroom resources, and access professional development opportunities.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" /> <span>Lesson Plan Builder</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" /> <span>Student Analytics</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" /> <span>Resource Library</span>
                </li>
              </ul>
              <Link href="/services/teacher">
                <Button variant="outline" className="w-full group-hover:border-secondary group-hover:text-secondary-foreground">
                  Explore Teacher Tools
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chatbot Button */}
      {!showChatbot && (
        <button
          onClick={() => setShowChatbot(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center z-40"
          data-testid="button-chatbot-open"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chatbot Panel */}
      {showChatbot && (
        <div className="fixed bottom-6 right-6 w-96 h-96 rounded-xl shadow-2xl z-50 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="bg-primary text-primary-foreground p-3 flex justify-between items-center">
              <span className="font-bold">LearPath Help</span>
              <button
                onClick={() => setShowChatbot(false)}
                className="hover:opacity-80"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <ChatbotGeneral />
            </div>
          </div>
        </div>
      )}
    </Layout>
    </>
  );
}
