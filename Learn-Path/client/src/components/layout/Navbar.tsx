import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { BookOpen, GraduationCap, School, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 font-heading text-xl font-bold text-primary">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <BookOpen className="h-5 w-5" />
            </div>
            LearnPath
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <Link href="/">
            <a className={cn("text-sm font-medium transition-colors hover:text-primary", isActive("/") ? "text-primary" : "text-muted-foreground")}>
              Home
            </a>
          </Link>
          
          <Link href="/resources">
            <a className={cn("text-sm font-medium transition-colors hover:text-primary", isActive("/resources") ? "text-primary" : "text-muted-foreground")}>
              Resources
            </a>
          </Link>

          <Link href="/services/student">
            <a className={cn("text-sm font-medium transition-colors hover:text-primary", isActive("/services/student") ? "text-primary" : "text-muted-foreground")}>
              For Students
            </a>
          </Link>

          <Link href="/services/teacher">
            <a className={cn("text-sm font-medium transition-colors hover:text-primary", isActive("/services/teacher") ? "text-primary" : "text-muted-foreground")}>
              For Teachers
            </a>
          </Link>

          <Link href="/careers">
            <a className={cn("text-sm font-medium transition-colors hover:text-primary", isActive("/careers") ? "text-primary" : "text-muted-foreground")}>
              Careers
            </a>
          </Link>

          <Link href="/about">
            <a className={cn("text-sm font-medium transition-colors hover:text-primary", isActive("/about") ? "text-primary" : "text-muted-foreground")}>
              About Us
            </a>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm">Log In</Button>
          </Link>
          <Link href="/login">
            <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-b bg-background md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/">
              <a className="text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            </Link>
            <Link href="/resources">
              <a className="text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Resources</a>
            </Link>
            <Link href="/services/student">
              <a className="text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Student Services</a>
            </Link>
            <Link href="/services/teacher">
              <a className="text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Teacher Services</a>
            </Link>
            <Link href="/careers">
              <a className="text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
            </Link>
            <Link href="/about">
              <a className="text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Link href="/login">
                <Button className="w-full" variant="outline" onClick={() => setIsMobileMenuOpen(false)}>Log In</Button>
              </Link>
              <Link href="/login">
                <Button className="w-full bg-secondary text-secondary-foreground" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
