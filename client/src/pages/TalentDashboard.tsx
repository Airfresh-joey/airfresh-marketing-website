import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Play, 
  Clock, 
  BookOpen, 
  CheckCircle, 
  Award,
  Video,
  Globe,
  FileText,
  Brain,
  GraduationCap,
  LogOut
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import SEO from "@/components/SEO";
const airFreshLogo = "/images/airfresh-logo.svg";
import { motion } from "framer-motion";

interface Course {
  id: string;
  clientId: string;
  title: string;
  description: string;
  thumbnailUrl: string | null;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedDuration: number;
  isActive: boolean;
  sortOrder: number;
}

interface Client {
  id: string;
  name: string;
  slug: string;
  description: string;
  logoUrl: string | null;
  primaryColor: string;
  isActive: boolean;
}

interface UserProgress {
  courseId: string;
  progressPercent: number;
  completedModules: number;
  totalModules: number;
}

export default function TalentDashboard() {
  const { clientSlug } = useParams<{ clientSlug: string }>();
  const { user, logout } = useAuth();

  const { data: client, isLoading: clientLoading } = useQuery<Client>({
    queryKey: [`/api/training/clients/${clientSlug}`],
    enabled: !!clientSlug,
  });

  const { data: courses = [], isLoading: coursesLoading } = useQuery<Course[]>({
    queryKey: [`/api/training/courses/${clientSlug}`],
    enabled: !!clientSlug,
  });

  const { data: userProgress = [] } = useQuery<UserProgress[]>({
    queryKey: ["/api/training/progress"],
    enabled: !!user,
  });

  const getModuleIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-5 h-5" />;
      case 'website': return <Globe className="w-5 h-5" />;
      case 'quiz': return <Brain className="w-5 h-5" />;
      case 'interactive': return <Play className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCourseProgress = (courseId: string) => {
    const progress = userProgress.find((p) => p.courseId === courseId);
    return progress?.progressPercent || 0;
  };

  if (clientLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-white/70">Loading client information...</p>
        </div>
      </div>
    );
  }

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Client Not Found</h2>
          <Link href="/training">
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
              data-testid="button-back-to-clients"
            >
              Back to Clients
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${client.name} Training | AirFresh Marketing`}
        description={`Access ${client.name} training courses and materials.`}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="bg-white/5 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/training">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-2 text-white/70 hover:text-white hover:bg-white/10" 
                    data-testid="button-back"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Clients
                  </Button>
                </Link>
                <div className="flex items-center gap-3">
                  {client.logoUrl ? (
                    <img 
                      src={client.logoUrl} 
                      alt={`${client.name} Logo`}
                      className="w-10 h-10 object-contain rounded-full"
                    />
                  ) : (
                    <img 
                      src={airFreshLogo} 
                      alt="AirFresh Marketing" 
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <div>
                    <h1 className="text-2xl font-bold text-white">
                      {client.name}
                    </h1>
                    <p className="text-white/60">Training Dashboard</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {user && (
                  <div className="text-right">
                    <p className="text-sm text-white/60">Welcome back,</p>
                    <p className="font-semibold text-white">{user.firstName || user.email || 'User'}</p>
                  </div>
                )}
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => logout()}
                  className="border-white/20 bg-white/5 hover:bg-white/10 text-white"
                  data-testid="button-logout"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Training Courses</h2>
            <p className="text-white/70">
              Enhance your knowledge with {client.name} specialized training programs
            </p>
          </motion.div>

          {coursesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="bg-white/5 backdrop-blur-md border-white/10 animate-pulse">
                  <CardHeader>
                    <div className="w-full h-32 bg-white/10 rounded-md mb-4"></div>
                    <div className="h-6 bg-white/10 rounded-md mb-2"></div>
                    <div className="h-4 bg-white/10 rounded-md"></div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : courses.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-24 h-24 text-white/20 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-2">No Courses Available</h3>
              <p className="text-white/60">Check back later for available training courses.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course: Course, index: number) => {
                const progress = getCourseProgress(course.id);
                const isCompleted = progress >= 100;
                
                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Card 
                      className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden group h-full"
                      data-testid={`card-course-${course.id}`}
                    >
                      <CardHeader className="pb-4">
                        {course.thumbnailUrl ? (
                          <div className="w-full h-32 bg-white/5 rounded-md mb-4 overflow-hidden">
                            <img 
                              src={course.thumbnailUrl} 
                              alt={course.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-md mb-4 flex items-center justify-center">
                            <BookOpen className="w-12 h-12 text-cyan-400" />
                          </div>
                        )}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <CardTitle className="text-lg leading-tight text-white">{course.title}</CardTitle>
                          {isCompleted && (
                            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                          )}
                        </div>
                        <CardDescription className="line-clamp-2 text-white/60">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge className={getDifficultyColor(course.difficulty)}>
                            {course.difficulty}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-white/60">
                            <Clock className="w-4 h-4" />
                            <span>{course.estimatedDuration} min</span>
                          </div>
                        </div>

                        {progress > 0 && (
                          <div className="mb-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-white/60">Progress</span>
                              <span className="font-medium text-white">{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-2 bg-white/10" />
                          </div>
                        )}

                        <Link href={`/training/course/${course.id}`}>
                          <Button 
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                            data-testid={`button-start-course-${course.id}`}
                          >
                            {isCompleted ? (
                              <>
                                <Award className="w-4 h-4 mr-2" />
                                Review Course
                              </>
                            ) : progress > 0 ? (
                              <>
                                <Play className="w-4 h-4 mr-2" />
                                Continue
                              </>
                            ) : (
                              <>
                                <Play className="w-4 h-4 mr-2" />
                                Start Course
                              </>
                            )}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
