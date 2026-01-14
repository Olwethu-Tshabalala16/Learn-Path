import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

const TEACHER_SUBJECTS = [
  "Mathematics",
  "English Language",
  "Science (Biology)",
  "Science (Chemistry)",
  "Science (Physics)",
  "History",
  "Geography",
  "Computer Science",
  "Economics",
  "Business Studies",
  "Physical Education",
  "Art & Design",
];

export default function LoginPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [userType, setUserType] = useState<"learner" | "teacher" | null>(null);

  if (!userType) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-muted/30 py-12 px-4">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="font-heading text-3xl font-bold text-primary mb-2">Welcome to LearnPath</h1>
              <p className="text-muted-foreground">Choose your role to continue</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setUserType("learner")}
                className="p-6 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="text-3xl mb-2">👨‍🎓</div>
                <h3 className="font-bold">Learner</h3>
                <p className="text-xs text-muted-foreground mt-1">Student Account</p>
              </button>
              <button
                onClick={() => setUserType("teacher")}
                className="p-6 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="text-3xl mb-2">👨‍🏫</div>
                <h3 className="font-bold">Teacher</h3>
                <p className="text-xs text-muted-foreground mt-1">Educator Account</p>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-muted/30 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <button 
              onClick={() => setUserType(null)}
              className="text-sm text-primary hover:underline mb-4"
            >
              ← Back
            </button>
            <h1 className="font-heading text-3xl font-bold text-primary mb-2">
              {userType === "learner" ? "Learner Account" : "Teacher Account"}
            </h1>
            <p className="text-muted-foreground">Sign in or create a new account</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <LoginForm userType={userType} />
            </TabsContent>
            
            <TabsContent value="signup">
              {userType === "learner" ? (
                <LearnerSignupForm />
              ) : (
                <TeacherSignupForm />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

function LoginForm({ userType }: { userType: "learner" | "teacher" }) {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      toast({
        title: "Missing fields",
        description: "Please enter email and password",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("userType", userType);
      localStorage.setItem("username", email.split("@")[0]);
      if (userType === "teacher") {
        localStorage.setItem("subject", "Mathematics"); // Default, would be set during signup
      }
      toast({
        title: "Welcome back!",
        description: `Logging in as ${userType}...`,
      });
      setLocation("/dashboard");
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button 
          className="w-full bg-primary" 
          onClick={handleLogin} 
          disabled={loading || !email || !password}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          Don't have an account? Use the Sign Up tab
        </p>
      </CardFooter>
    </Card>
  );
}

function LearnerSignupForm() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [reportFile, setReportFile] = useState<File | null>(null);

  const handleSignup = () => {
    if (!fullName || !email || !password || !schoolName || !reportFile) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields and upload your school report",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("userType", "learner");
      localStorage.setItem("username", fullName);
      toast({
        title: "Account created!",
        description: "Analyzing your school report and creating your learning path...",
      });
      setLocation("/dashboard");
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Sign up and upload your school report to get personalized learning recommendations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="learner-fullname">Full Name</Label>
          <Input 
            id="learner-fullname" 
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="learner-email">Email Address</Label>
          <Input 
            id="learner-email" 
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="learner-password">Password</Label>
          <Input 
            id="learner-password" 
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="school-name">School Name</Label>
          <Input 
            id="school-name" 
            placeholder="Your school name"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="school-report">Upload School Report Card</Label>
          <Input 
            id="school-report" 
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={(e) => setReportFile(e.target.files?.[0] || null)}
          />
          <p className="text-xs text-muted-foreground">
            PDF, Word, or image files (max 10MB)
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-primary" 
          onClick={handleSignup} 
          disabled={loading || !fullName || !email || !password || !schoolName || !reportFile}
        >
          {loading ? "Creating account..." : "Create Account & Analyze Report"}
        </Button>
      </CardFooter>
    </Card>
  );
}

function TeacherSignupForm() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");

  const handleSignup = () => {
    if (!fullName || !email || !password || !subject) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields and select a subject",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("userType", "teacher");
      localStorage.setItem("username", fullName);
      localStorage.setItem("subject", subject);
      toast({
        title: "Account created!",
        description: `Welcome ${fullName}! Teaching ${subject}`,
      });
      setLocation("/dashboard");
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Sign up as an educator and select your subject specialization
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="teacher-fullname">Full Name</Label>
          <Input 
            id="teacher-fullname" 
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="teacher-email">Email Address</Label>
          <Input 
            id="teacher-email" 
            type="email"
            placeholder="your.email@school.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="teacher-password">Password</Label>
          <Input 
            id="teacher-password" 
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject Specialization</Label>
          <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger id="subject">
              <SelectValue placeholder="Select your subject" />
            </SelectTrigger>
            <SelectContent>
              {TEACHER_SUBJECTS.map((subj) => (
                <SelectItem key={subj} value={subj}>
                  {subj}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-primary" 
          onClick={handleSignup} 
          disabled={loading || !fullName || !email || !password || !subject}
        >
          {loading ? "Creating account..." : "Create Account"}
        </Button>
      </CardFooter>
    </Card>
  );
}
