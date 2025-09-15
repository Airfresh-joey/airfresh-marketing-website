import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Calendar, 
  FileText, 
  Link2, 
  Star, 
  RefreshCw, 
  Database,
  BarChart,
  Settings,
  Lock,
  LogOut
} from "lucide-react";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // Check if already authenticated in session
    const authStatus = sessionStorage.getItem("adminAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/admin/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${password}`
        }
      });

      if (response.ok) {
        setIsAuthenticated(true);
        sessionStorage.setItem("adminAuthenticated", "true");
        sessionStorage.setItem("adminPassword", password);
        toast({
          title: "Success",
          description: "Logged in successfully"
        });
      } else {
        toast({
          title: "Error",
          description: "Invalid password",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to authenticate",
        variant: "destructive"
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuthenticated");
    sessionStorage.removeItem("adminPassword");
    setPassword("");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully"
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Lock className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Admin Dashboard
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Enter your admin password to continue
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                data-testid="input-admin-password"
              />
            </div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4"
              data-testid="button-admin-login"
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    );
  }

  const adminTools = [
    {
      title: "Content Calendar",
      description: "Manage scheduled content for LinkedIn, blogs, and case studies",
      icon: Calendar,
      href: "/content-calendar",
      color: "text-blue-600"
    },
    {
      title: "Case Study Admin",
      description: "Create and manage case studies with images and content",
      icon: FileText,
      href: "/admin/case-studies",
      color: "text-green-600"
    },
    {
      title: "Content Repurpose",
      description: "Convert content for LinkedIn, Instagram, and video scripts",
      icon: RefreshCw,
      href: "/repurpose",
      color: "text-purple-600"
    },
    {
      title: "Backlinks & Outreach",
      description: "Generate press releases and manage partner badges",
      icon: Link2,
      href: "/backlinks",
      color: "text-orange-600"
    },
    {
      title: "Reviews Management",
      description: "Track and manage customer reviews across platforms",
      icon: Star,
      href: "/reviews-dashboard",
      color: "text-yellow-600"
    },
    {
      title: "Blog Editor",
      description: "Create and edit blog posts with SEO optimization",
      icon: FileText,
      href: "/blog/editor",
      color: "text-indigo-600"
    },
    {
      title: "Database Management",
      description: "View and manage contact submissions",
      icon: Database,
      href: "/api/contacts",
      color: "text-red-600",
      external: true
    },
    {
      title: "Analytics",
      description: "View website analytics and performance metrics",
      icon: BarChart,
      href: "/analytics",
      color: "text-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="mt-2 text-gray-600">Manage all backend tools and features</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2"
            data-testid="button-admin-logout"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card 
                key={tool.href} 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                data-testid={`card-admin-${tool.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon className={`h-8 w-8 ${tool.color}`} />
                    {tool.external && (
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">External</span>
                    )}
                  </div>
                  <CardTitle className="mt-4">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {tool.external ? (
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button 
                        className="w-full"
                        data-testid={`button-open-${tool.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        Open Tool
                      </Button>
                    </a>
                  ) : (
                    <Link href={tool.href}>
                      <Button 
                        className="w-full"
                        data-testid={`button-navigate-${tool.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        Open Tool
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Generate GMB CSV</p>
                <p className="text-sm text-gray-600">Export Google My Business data</p>
              </div>
              <a href="/api/gmb/csv" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" data-testid="button-generate-gmb">
                  Download
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Export Calendar</p>
                <p className="text-sm text-gray-600">Download content calendar ICS</p>
              </div>
              <a href="/api/calendar/export-ics" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" data-testid="button-export-calendar">
                  Export
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
              <div>
                <p className="font-medium">View Contact Submissions</p>
                <p className="text-sm text-gray-600">See all form submissions</p>
              </div>
              <a href="/api/contacts" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" data-testid="button-view-contacts">
                  View
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Test Email Reminders</p>
                <p className="text-sm text-gray-600">Send test reminder email</p>
              </div>
              <Button 
                size="sm" 
                variant="outline"
                onClick={async () => {
                  const adminPassword = sessionStorage.getItem("adminPassword");
                  const response = await fetch("/api/calendar/test-email", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${adminPassword}`
                    }
                  });
                  if (response.ok) {
                    toast({ title: "Success", description: "Test email sent (check console)" });
                  } else {
                    toast({ title: "Error", description: "Failed to send test email", variant: "destructive" });
                  }
                }}
                data-testid="button-test-email"
              >
                Test
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Admin Dashboard • AirFresh Marketing</p>
          <p className="mt-2">
            Access URL: <code className="bg-gray-100 px-2 py-1 rounded">/admin</code>
          </p>
        </div>
      </div>
    </div>
  );
}