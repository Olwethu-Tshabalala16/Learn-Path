import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { BookOpen, RotateCcw, Play, BarChart3, LogOut, ArrowRight, Send, MessageCircle, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { ChatbotLearner } from "@/components/ChatbotLearner";

export default function DashboardPage() {
  const [, setLocation] = useLocation();
  const [userType, setUserType] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [subject, setSubject] = useState<string>("");

  useEffect(() => {
    const type = localStorage.getItem("userType");
    const name = localStorage.getItem("username");
    const subj = localStorage.getItem("subject");

    if (!type || !name) {
      setLocation("/login");
      return;
    }

    setUserType(type);
    setUsername(name);
    setSubject(subj || "");
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("userType");
    localStorage.removeItem("username");
    localStorage.removeItem("subject");
    setLocation("/login");
  };

  if (!userType) return null;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="font-heading text-4xl font-bold mb-2">
              Welcome back, <span className="text-primary">{username}</span>!
            </h1>
            <p className="text-muted-foreground">
              {userType === "teacher" 
                ? `Teaching ${subject}` 
                : "Continue your personalized learning journey"}
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        </div>

        {userType === "learner" ? (
          <LearnerDashboard username={username} />
        ) : (
          <TeacherDashboard username={username} subject={subject} />
        )}
      </div>
    </Layout>
  );
}

function LearnerDashboard({ username }: { username: string }) {
  const [subjects] = useState([
    {
      name: "Mathematics",
      progress: 65,
      currentTopic: "Algebra & Quadratic Equations",
      nextTopic: "Calculus Fundamentals",
      suggestedMarks: 78,
      currentMarks: 62,
    },
    {
      name: "English Literature",
      progress: 72,
      currentTopic: "Shakespeare Analysis",
      nextTopic: "Modern Poetry",
      suggestedMarks: 85,
      currentMarks: 75,
    },
    {
      name: "Biology",
      progress: 58,
      currentTopic: "Cell Structure & Function",
      nextTopic: "Photosynthesis & Respiration",
      suggestedMarks: 80,
      currentMarks: 60,
    },
    {
      name: "History",
      progress: 81,
      currentTopic: "Industrial Revolution",
      nextTopic: "World War II Era",
      suggestedMarks: 88,
      currentMarks: 85,
    },
  ]);


  return (
    <div className="space-y-8">
      {/* Overall Stats */}
      <motion.div 
        className="grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">72%</div>
            <p className="text-xs text-muted-foreground mt-1">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Target Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary-foreground">82%</div>
            <p className="text-xs text-muted-foreground mt-1">Based on your report</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">68%</div>
            <p className="text-xs text-muted-foreground mt-1">Through learning path</p>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Learning Paths */}
        <div className="lg:col-span-2 space-y-6" data-testid="section-learning-paths">
          <h2 className="font-heading text-2xl font-bold" data-testid="heading-learning-paths">Your Learning Paths</h2>
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{subject.name}</CardTitle>
                      <CardDescription>
                        Currently learning: <span className="font-medium text-foreground">{subject.currentTopic}</span>
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{subject.progress}% Complete</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{subject.progress}%</span>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-2">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Current Performance</p>
                      <p className="text-lg font-bold text-primary">{subject.currentMarks}%</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Target After Path</p>
                      <p className="text-lg font-bold text-secondary-foreground">{subject.suggestedMarks}%</p>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <Button className="flex-1 gap-2 bg-primary hover:bg-primary/90">
                      <Play className="h-4 w-4" /> Resume Learning
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2">
                      <RotateCcw className="h-4 w-4" /> Revise
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground pt-2">
                    Next: {subject.nextTopic}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Study Assistant Chatbot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-full"
        >
          <ChatbotLearner
            learnerName={username}
            subjects={["Mathematics", "English Literature", "Biology", "History"]}
            weakSubjects={["Mathematics", "Biology"]}
            currentMarks={72}
            targetMarks={82}
          />
        </motion.div>
      </div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              AI-Powered Recommendations
            </CardTitle>
            <CardDescription>
              Based on your school report and learning progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p>Focus on Mathematics fundamentals - this will unlock better performance across sciences</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p>Allocate 45 minutes daily to Mathematics and 30 minutes to Biology for optimal improvement</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p>Your History performance is excellent - maintain this momentum while boosting weaker areas</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function TeacherDashboard({ username, subject }: { username: string; subject: string }) {
  const [uploadedVideos, setUploadedVideos] = useState([
    {
      id: 1,
      title: "Introduction to Quadratic Equations",
      date: "Dec 10, 2024",
      rating: 4.5,
      views: 156,
    },
    {
      id: 2,
      title: "Solving Linear Systems",
      date: "Dec 5, 2024",
      rating: 4.8,
      views: 203,
    },
  ]);

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Create Lesson Plans
              </CardTitle>
              <CardDescription>Build and organize lesson plans for {subject}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Design comprehensive lesson plans with resources, objectives, and assessment methods.
              </p>
              <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                New Lesson Plan <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-secondary-foreground" />
                View Student Progress
              </CardTitle>
              <CardDescription>Monitor student performance and engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Track grades, attendance, and progress reports for your {subject} students.
              </p>
              <Button variant="outline" className="w-full gap-2">
                View Dashboard <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
              <CardDescription>Your teaching overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Active Students</span>
                <span className="font-bold text-xl">28</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Lesson Plans Created</span>
                <span className="font-bold text-xl">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Pending Assignments</span>
                <span className="font-bold text-xl">5</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Resources for {subject}</CardTitle>
              <CardDescription>Access teaching materials and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  Sample Lesson Plans
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  Assessment Templates
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  Professional Development
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Uploaded Videos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="font-heading text-2xl font-bold mb-4">Your Uploaded Videos</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {uploadedVideos.map((video) => (
            <Card key={video.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{video.title}</CardTitle>
                <CardDescription>{video.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-bold text-secondary-foreground">★ {video.rating}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Views</span>
                    <span className="font-bold">{video.views}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
