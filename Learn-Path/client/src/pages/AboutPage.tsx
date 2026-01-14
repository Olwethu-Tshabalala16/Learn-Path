import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Shield, User, Award } from "lucide-react";

export default function AboutPage() {
  // Mock Admin Data
  const adminInfo = {
    name: "Dr. Sarah Johnson",
    role: "System Administrator & Founder",
    email: "admin@learnpath.com",
    bio: "Dr. Sarah Johnson founded LearnPath with a vision to democratize access to quality education resources. With over 15 years of experience in EdTech, she oversees the platform's strategic direction and ensures data integrity and user safety.",
    credentials: ["Ph.D. in Educational Technology", "M.Sc. Computer Science", "Certified Systems Architect"]
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl font-bold mb-4">About LearnPath</h1>
            <p className="text-lg text-muted-foreground">
              We are dedicated to bridging the gap between potential and opportunity through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-card rounded-xl border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Secure & Private</h3>
              <p className="text-sm text-muted-foreground">Your data privacy is our top priority with enterprise-grade security.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border shadow-sm">
              <div className="w-12 h-12 bg-secondary/20 text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">User Focused</h3>
              <p className="text-sm text-muted-foreground">Built with feedback from real teachers and students.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border shadow-sm">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quality First</h3>
              <p className="text-sm text-muted-foreground">Curated resources ensuring the highest educational standards.</p>
            </div>
          </div>

          <Card className="overflow-hidden border-primary/20 shadow-lg">
            <div className="bg-primary h-32 relative">
              <div className="absolute -bottom-12 left-8">
                <Avatar className="h-24 w-24 border-4 border-background shadow-md">
                  <AvatarImage src="https://github.com/shadcn.png" /> {/* Placeholder */}
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CardContent className="pt-16 pb-8 px-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold font-heading">{adminInfo.name}</h2>
                  <p className="text-primary font-medium">{adminInfo.role}</p>
                </div>
                <Button variant="outline" className="mt-4 md:mt-0 gap-2">
                  <Mail className="h-4 w-4" /> Contact Admin
                </Button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">About</h3>
                  <p className="leading-relaxed">{adminInfo.bio}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Credentials</h3>
                  <div className="flex flex-wrap gap-2">
                    {adminInfo.credentials.map((cred, index) => (
                      <Badge key={index} variant="secondary">{cred}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
