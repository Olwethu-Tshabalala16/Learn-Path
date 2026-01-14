import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Book, Search, Target, Award, Clock, ArrowRight } from "lucide-react";

export default function StudentServicesPage() {
  const services = [
    {
      title: "Interactive Learning",
      description: "Access video tutorials, quizzes, and interactive simulations for various subjects.",
      icon: Book,
      color: "text-emerald-600 bg-emerald-100",
      features: ["Video Library", "Practice Quizzes", "Virtual Labs"]
    },
    {
      title: "Career Guidance",
      description: "Explore potential career paths based on your interests and strengths.",
      icon: Search,
      color: "text-blue-600 bg-blue-100",
      features: ["Career Aptitude Tests", "Job Profiles", "Industry Insights"]
    },
    {
      title: "Goal Tracking",
      description: "Set academic goals and track your progress throughout the semester.",
      icon: Target,
      color: "text-amber-600 bg-amber-100",
      features: ["Goal Setting Wizard", "Progress Dashboard", "Milestone Rewards"]
    },
    {
      title: "Bursary Finder",
      description: "Automatically match with bursaries and scholarships you qualify for.",
      icon: Award,
      color: "text-purple-600 bg-purple-100",
      features: ["Smart Matching", "Application Tracker", "Deadline Alerts"]
    },
    {
      title: "Study Planner",
      description: "Create personalized study schedules to prepare for exams efficiently.",
      icon: Clock,
      color: "text-pink-600 bg-pink-100",
      features: ["Exam Countdown", "Daily Tasks", "Study Reminders"]
    },
    {
      title: "College Applications",
      description: "Streamline your university and college application process.",
      icon: GraduationCap,
      color: "text-indigo-600 bg-indigo-100",
      features: ["Requirement Lists", "Document Storage", "Status Tracker"]
    }
  ];

  return (
    <Layout>
      <div className="bg-secondary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90">For Students</Badge>
          <h1 className="font-heading text-4xl font-bold mb-4">Student Solutions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take control of your future with resources designed to help you excel academically and navigate your career path with confidence.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${service.color}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full justify-between group-hover:bg-secondary/10 group-hover:text-foreground">
                  Start Now <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
