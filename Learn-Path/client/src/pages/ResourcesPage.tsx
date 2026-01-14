import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Video, Headphones, FileText, Code, Globe, Download, ExternalLink } from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    {
      category: "Study Materials",
      icon: BookOpen,
      color: "text-blue-600 bg-blue-100",
      items: [
        {
          title: "GCSE Mathematics Complete Guide",
          type: "PDF",
          subjects: ["Mathematics"],
          description: "Comprehensive study guide covering all GCSE Math topics",
          size: "12.5 MB",
        },
        {
          title: "English Literature Essay Templates",
          type: "PDF",
          subjects: ["English"],
          description: "10 proven essay structures for literature analysis",
          size: "2.1 MB",
        },
        {
          title: "Science Practicals Guide",
          type: "PDF",
          subjects: ["Science"],
          description: "Step-by-step guides for all required practicals",
          size: "8.7 MB",
        },
      ],
    },
    {
      category: "Video Tutorials",
      icon: Video,
      color: "text-red-600 bg-red-100",
      items: [
        {
          title: "Algebra Masterclass Series",
          type: "VIDEO",
          subjects: ["Mathematics"],
          description: "12-part video series on algebraic equations",
          duration: "4.5 hours",
        },
        {
          title: "Shakespeare Analysis Workshop",
          type: "VIDEO",
          subjects: ["English"],
          description: "Deep dive into Shakespeare's major works",
          duration: "3 hours",
        },
        {
          title: "Chemistry Reactions Explained",
          type: "VIDEO",
          subjects: ["Science"],
          description: "Visual explanations of complex chemical reactions",
          duration: "2.5 hours",
        },
      ],
    },
    {
      category: "Interactive Tools",
      icon: Code,
      color: "text-purple-600 bg-purple-100",
      items: [
        {
          title: "Grammar Checker Tool",
          type: "TOOL",
          subjects: ["English"],
          description: "AI-powered grammar and style improvement",
          access: "Online",
        },
        {
          title: "Math Problem Solver",
          type: "TOOL",
          subjects: ["Mathematics"],
          description: "Step-by-step solutions for math problems",
          access: "Online",
        },
        {
          title: "Periodic Table Explorer",
          type: "TOOL",
          subjects: ["Science"],
          description: "Interactive periodic table with element properties",
          access: "Online",
        },
      ],
    },
    {
      category: "Podcasts & Audio",
      icon: Headphones,
      color: "text-orange-600 bg-orange-100",
      items: [
        {
          title: "History in 10 Minutes",
          type: "PODCAST",
          subjects: ["History"],
          description: "Daily history podcast covering key events",
          episodes: "200+",
        },
        {
          title: "Science Weekly",
          type: "PODCAST",
          subjects: ["Science"],
          description: "Latest scientific discoveries explained simply",
          episodes: "150+",
        },
        {
          title: "Literature Discussions",
          type: "PODCAST",
          subjects: ["English"],
          description: "Authors discussing famous literary works",
          episodes: "85+",
        },
      ],
    },
  ];

  const subjects = [
    "All",
    "Mathematics",
    "English",
    "Science",
    "History",
    "Geography",
    "Computer Science",
  ];

  return (
    <Layout>
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Learning Resources</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access a comprehensive library of study materials, videos, interactive tools, and podcasts to enhance your learning journey.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Resource Categories */}
        <div className="space-y-12">
          {resources.map((category, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h2 className="font-heading text-2xl font-bold">{category.category}</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item, i) => (
                  <Card key={i} className="flex flex-col hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">{item.type}</Badge>
                        {item.subjects && (
                          <div className="flex flex-wrap gap-1 justify-end">
                            {item.subjects.map((subj) => (
                              <Badge key={subj} variant="outline" className="text-xs">{subj}</Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="text-sm text-muted-foreground mb-4">
                        {(item as any).size && `Size: ${(item as any).size}`}
                        {(item as any).duration && `Duration: ${(item as any).duration}`}
                        {(item as any).episodes && `Episodes: ${(item as any).episodes}`}
                        {(item as any).access && `Access: ${(item as any).access}`}
                      </div>
                    </CardContent>
                    <div className="p-4 border-t">
                      <Button className="w-full gap-2" size="sm" variant="outline">
                        {item.type === "PDF" ? (
                          <>
                            <Download className="h-4 w-4" /> Download
                          </>
                        ) : (
                          <>
                            <ExternalLink className="h-4 w-4" /> Access
                          </>
                        )}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Resources */}
        <div className="mt-16 pt-12 border-t">
          <h2 className="font-heading text-2xl font-bold mb-6">Top Resources This Month</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Free Online Courses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Enroll in free comprehensive courses from top educators around the world.
                </p>
                <Button variant="outline" className="w-full gap-2">
                  Explore Courses <ExternalLink className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-secondary-foreground" />
                  Past Papers & Model Answers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Access years of past exam papers with detailed solutions.
                </p>
                <Button variant="outline" className="w-full gap-2">
                  View Papers <ExternalLink className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
