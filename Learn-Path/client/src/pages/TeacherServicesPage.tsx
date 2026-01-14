import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Users, FileText, BarChart, Settings, ArrowRight } from "lucide-react";

export default function TeacherServicesPage() {
  const services = [
    {
      title: "Classroom Management",
      description: "Organize student records, attendance, and behavior tracking in one central dashboard.",
      icon: Users,
      color: "text-blue-600 bg-blue-100",
      features: ["Attendance Tracking", "Behavior Logs", "Student Profiles"]
    },
    {
      title: "Lesson Planning",
      description: "Create, store, and share comprehensive lesson plans aligned with curriculum standards.",
      icon: BookOpen,
      color: "text-orange-600 bg-orange-100",
      features: ["Curriculum Mapping", "Resource Attachment", "Collaboration Tools"]
    },
    {
      title: "Assessment & Analytics",
      description: "Track student performance with visual analytics and generate automated progress reports.",
      icon: BarChart,
      color: "text-purple-600 bg-purple-100",
      features: ["Gradebook", "Performance Graphs", "Report Card Generation"]
    },
    {
      title: "Schedule & Events",
      description: "Manage your timetable, exam schedules, and school events efficiently.",
      icon: Calendar,
      color: "text-green-600 bg-green-100",
      features: ["Interactive Calendar", "Exam Scheduler", "Event Reminders"]
    },
    {
      title: "Professional Development",
      description: "Access training modules and resources to enhance your teaching skills.",
      icon: FileText,
      color: "text-red-600 bg-red-100",
      features: ["Webinars", "Certification Courses", "Peer Community"]
    },
    {
      title: "Admin Tools",
      description: "Quick access to administrative requests, leave applications, and policy documents.",
      icon: Settings,
      color: "text-slate-600 bg-slate-100",
      features: ["Leave Management", "Policy Library", "Help Desk"]
    }
  ];

  return (
    <Layout>
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">For Educators</Badge>
          <h1 className="font-heading text-4xl font-bold mb-4">Teacher Solutions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empower your teaching journey with tools designed to reduce administrative workload and focus on what matters most—your students.
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
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/5 group-hover:text-primary">
                  Access Tool <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
