import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GraduationCap, Briefcase, DollarSign, Building } from "lucide-react";

export default function CareersPage() {
  const bursaries = [
    {
      title: "STEM Excellence Grant",
      provider: "TechFuture Foundation",
      amount: "$5,000",
      deadline: "Oct 15, 2025",
      tags: ["Engineering", "Technology"]
    },
    {
      title: "Future Educators Scholarship",
      provider: "Global Teach Initiative",
      amount: "$3,500",
      deadline: "Nov 01, 2025",
      tags: ["Education", "Teaching"]
    },
    {
      title: "Arts & Culture Bursary",
      provider: "Creative Arts Council",
      amount: "$2,000",
      deadline: "Dec 10, 2025",
      tags: ["Arts", "Design"]
    }
  ];

  const careers = [
    {
      title: "Software Developer",
      industry: "Technology",
      growth: "High (+22%)",
      salary: "$80k - $150k",
      education: "B.Sc. Computer Science"
    },
    {
      title: "Data Analyst",
      industry: "Business / Tech",
      growth: "Very High (+25%)",
      salary: "$65k - $110k",
      education: "Statistics / Mathematics"
    },
    {
      title: "Environmental Scientist",
      industry: "Science",
      growth: "Steady (+8%)",
      salary: "$50k - $90k",
      education: "B.Sc. Environmental Science"
    }
  ];

  const universities = [
    { name: "Tech State University", location: "New York", type: "Public" },
    { name: "Global Institute of Technology", location: "Online / Hybrid", type: "Private" },
    { name: "City Arts College", location: "London", type: "Public" },
    { name: "Business Leadership School", location: "Chicago", type: "Private" }
  ];

  return (
    <Layout>
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Career & Education Hub</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Your gateway to opportunities. Explore bursaries, discover career paths, and apply to top institutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="bursaries" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-2xl grid-cols-3">
              <TabsTrigger value="bursaries">Bursaries</TabsTrigger>
              <TabsTrigger value="careers">Career Options</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="bursaries" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">Available Bursaries</h2>
              <p className="text-muted-foreground">Financial aid opportunities to support your studies.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {bursaries.map((item, i) => (
                <Card key={i} className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                        <DollarSign className="h-5 w-5" />
                      </div>
                      <Badge variant="outline">{item.amount}</Badge>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.provider}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.map(tag => <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>)}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-3 border-t pt-4 bg-muted/20">
                    <p className="text-xs text-muted-foreground w-full">Deadline: <span className="font-medium text-foreground">{item.deadline}</span></p>
                    <Button className="w-full" size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="careers" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">Career Explorer</h2>
              <p className="text-muted-foreground">Discover high-growth career paths and their requirements.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {careers.map((item, i) => (
                <Card key={i} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">{item.industry}</span>
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Avg. Salary</p>
                        <p className="font-semibold">{item.salary}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Growth</p>
                        <p className="font-semibold text-green-600">{item.growth}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">Recommended Education</p>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <GraduationCap className="h-4 w-4" /> {item.education}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">University Applications</h2>
              <p className="text-muted-foreground">Direct links to application portals for top institutions.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {universities.map((uni, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border bg-card hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground font-bold">
                      {uni.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold">{uni.name}</h4>
                      <p className="text-xs text-muted-foreground">{uni.location} • {uni.type}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-2">
                    Apply <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl text-center">
              <h3 className="font-bold text-blue-800 mb-2">Need help with your application?</h3>
              <p className="text-blue-600 text-sm mb-4">Our career counselors can review your essays and application forms.</p>
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-100">Contact Counselor</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
