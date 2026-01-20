import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Play,
  Globe,
  FileText,
  Brain,
  Video,
  GraduationCap,
  Menu,
  X,
  LogOut
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { apiRequest } from "@/lib/queryClient";
import SEO from "@/components/SEO";
import airFreshLogo from "@assets/airfresh_circle_logo.png";
import { motion } from "framer-motion";

interface CourseModule {
  id: string;
  courseId: string;
  title: string;
  type: 'video' | 'website' | 'quiz' | 'interactive' | 'document';
  content: Record<string, any> | null;
  videoUrl: string | null;
  websiteUrl: string | null;
  duration: number;
  sortOrder: number;
  isRequired: boolean;
}

interface Course {
  id: string;
  clientId: string;
  title: string;
  description: string;
  thumbnailUrl: string | null;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedDuration: number;
  isActive: boolean;
  modules: CourseModule[];
}

export default function TalentCourseViewer() {
  const { courseId } = useParams<{ courseId: string }>();
  const { user, logout } = useAuth();
  const queryClient = useQueryClient();
  
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const { data: course, isLoading } = useQuery<Course>({
    queryKey: [`/api/training/course/${courseId}`],
    enabled: !!courseId,
  });

  const updateProgressMutation = useMutation({
    mutationFn: async (data: { moduleId: string; completed: boolean }) => {
      await apiRequest("POST", "/api/training/progress/module", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/training/progress"] });
    },
  });

  const currentModule = course?.modules[currentModuleIndex];
  const progressPercent = course?.modules.length 
    ? Math.round((completedModules.size / course.modules.length) * 100) 
    : 0;

  const handleModuleComplete = async () => {
    if (!currentModule || !user) return;

    const newCompleted = new Set(completedModules);
    newCompleted.add(currentModule.id);
    setCompletedModules(newCompleted);

    await updateProgressMutation.mutateAsync({
      moduleId: currentModule.id,
      completed: true,
    });

    if (currentModuleIndex < (course?.modules.length || 0) - 1) {
      setCurrentModuleIndex(prev => prev + 1);
    }
  };

  const getModuleIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-5 h-5" />;
      case 'website': return <Globe className="w-5 h-5" />;
      case 'quiz': return <Brain className="w-5 h-5" />;
      case 'interactive': return <Play className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const renderModuleContent = () => {
    if (!currentModule) return null;

    switch (currentModule.type) {
      case 'video':
        return (
          <div className="space-y-4">
            {currentModule.videoUrl && (
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src={currentModule.videoUrl}
                  title={currentModule.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            )}
            {currentModule.content?.description && (
              <p className="text-white/70">{currentModule.content.description}</p>
            )}
          </div>
        );

      case 'website':
        return (
          <div className="space-y-4">
            <p className="text-white/70">
              {currentModule.content?.description || 'Explore the external website resource below.'}
            </p>
            {currentModule.websiteUrl && (
              <div className="border-2 border-cyan-500/30 rounded-lg p-6 bg-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  <span className="font-medium text-lg text-white">External Resource</span>
                </div>
                <Button 
                  onClick={() => window.open(currentModule.websiteUrl!, '_blank')}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                  data-testid="button-open-website"
                >
                  Open Website
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        );

      case 'quiz':
        return (
          <div className="space-y-4">
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6 text-cyan-400" />
                <span className="font-medium text-lg text-white">Knowledge Assessment</span>
              </div>
              <p className="text-white/70 mb-4">
                Test your understanding of the material covered in this module.
              </p>
              <Button 
                onClick={handleModuleComplete}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                data-testid="button-take-quiz"
              >
                Take Quiz
              </Button>
            </div>
          </div>
        );

      case 'interactive':
        return (
          <div className="space-y-4">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Play className="w-6 h-6 text-green-400" />
                <span className="font-medium text-lg text-white">Interactive Content</span>
              </div>
              <p className="text-white/70">
                {currentModule.content?.content || 'Engage with interactive learning materials.'}
              </p>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-white/60" />
                <span className="font-medium text-lg text-white">Document</span>
              </div>
              <p className="text-white/70">
                {currentModule.content?.content || 'Review the learning materials.'}
              </p>
            </div>
          </div>
        );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-white/70">Loading course...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Course Not Found</h2>
          <Link href="/training">
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
              data-testid="button-back-to-clients"
            >
              Back to Training Portal
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${course.title} | AirFresh Training`}
        description={course.description}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 flex">
        <div className={`${sidebarOpen ? 'w-80' : 'w-0'} bg-white/5 backdrop-blur-md border-r border-white/10 transition-all duration-300 overflow-hidden flex-shrink-0`}>
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg truncate text-white">{course.title}</h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="text-white/70 hover:text-white hover:bg-white/10"
                data-testid="button-close-sidebar"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white/60">Progress</span>
                <span className="font-medium text-white">{progressPercent}%</span>
              </div>
              <Progress value={progressPercent} className="h-2 bg-white/10" />
            </div>
          </div>
          
          <div className="overflow-y-auto h-[calc(100vh-180px)]">
            {course.modules.map((module, index) => {
              const isCompleted = completedModules.has(module.id);
              const isCurrent = index === currentModuleIndex;
              
              return (
                <button
                  key={module.id}
                  onClick={() => setCurrentModuleIndex(index)}
                  className={`w-full p-4 text-left border-b border-white/10 hover:bg-white/5 transition-colors ${
                    isCurrent ? 'bg-cyan-500/10 border-l-4 border-l-cyan-400' : ''
                  }`}
                  data-testid={`module-${module.id}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 mt-1 ${isCompleted ? 'text-green-400' : 'text-white/40'}`}>
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        getModuleIcon(module.type)
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium truncate ${isCurrent ? 'text-cyan-400' : 'text-white'}`}>
                        {module.title}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-white/50 mt-1">
                        <Clock className="w-3 h-3" />
                        <span>{module.duration} min</span>
                        {module.isRequired && (
                          <Badge variant="outline" className="text-xs border-white/20 text-white/60">Required</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <div className="bg-white/5 backdrop-blur-md border-b border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {!sidebarOpen && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSidebarOpen(true)}
                    className="text-white/70 hover:text-white hover:bg-white/10"
                    data-testid="button-open-sidebar"
                  >
                    <Menu className="w-4 h-4" />
                  </Button>
                )}
                <Link href="/training" className="flex items-center gap-3">
                  <img 
                    src={airFreshLogo} 
                    alt="AirFresh Marketing" 
                    className="w-8 h-8 rounded-full"
                  />
                </Link>
                <Link href="/training">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-2 text-white/70 hover:text-white hover:bg-white/10" 
                    data-testid="button-back"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Exit Course
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                {user && (
                  <span className="text-sm text-white/60">
                    {user.firstName || user.email || 'User'}
                  </span>
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

          <div className="flex-1 overflow-y-auto p-8">
            {currentModule && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-white/50 mb-2">
                    {getModuleIcon(currentModule.type)}
                    <span className="capitalize">{currentModule.type}</span>
                    <span>•</span>
                    <Clock className="w-4 h-4" />
                    <span>{currentModule.duration} min</span>
                  </div>
                  <h1 className="text-3xl font-bold text-white">{currentModule.title}</h1>
                </div>

                <Card className="mb-8 bg-white/5 backdrop-blur-md border-white/10">
                  <CardContent className="p-6">
                    {renderModuleContent()}
                  </CardContent>
                </Card>

                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentModuleIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentModuleIndex === 0}
                    className="border-white/20 bg-white/5 hover:bg-white/10 text-white disabled:opacity-50"
                    data-testid="button-previous-module"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  <div className="flex gap-4">
                    {!completedModules.has(currentModule.id) && (
                      <Button 
                        onClick={handleModuleComplete}
                        className="bg-green-600 hover:bg-green-700 text-white"
                        data-testid="button-mark-complete"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Mark Complete
                      </Button>
                    )}

                    <Button
                      onClick={() => setCurrentModuleIndex(prev => Math.min((course?.modules.length || 1) - 1, prev + 1))}
                      disabled={currentModuleIndex === (course?.modules.length || 1) - 1}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white disabled:opacity-50"
                      data-testid="button-next-module"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {progressPercent === 100 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center"
                  >
                    <GraduationCap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Congratulations!</h3>
                    <p className="text-white/70 mb-4">You have completed all modules in this course.</p>
                    <Link href="/training">
                      <Button 
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white" 
                        data-testid="button-back-to-portal"
                      >
                        Back to Training Portal
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
