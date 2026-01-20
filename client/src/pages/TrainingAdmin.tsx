import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Building2,
  BookOpen,
  Video,
  FileText,
  Plus,
  Edit,
  Trash2,
  Upload,
  Sparkles,
  MessageSquare,
  Users,
  GraduationCap,
  BarChart3,
  Settings,
  LogOut,
  ArrowLeft,
  ChevronRight,
  FileQuestion,
  Bot,
  Wand2,
  CheckCircle,
  Clock,
  Target,
  TrendingUp
} from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { useAuth } from "@/hooks/use-auth";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";

const airFreshLogo = "/images/airfresh-logo.svg";

interface TrainingClient {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  logoUrl: string | null;
  primaryColor: string;
  isActive: boolean;
  createdAt: string;
}

interface TrainingCourse {
  id: string;
  clientId: string;
  title: string;
  description: string | null;
  thumbnailUrl: string | null;
  duration: string | null;
  difficulty: string;
  isActive: boolean;
  sortOrder: number;
}

interface TrainingModule {
  id: string;
  courseId: string;
  title: string;
  description: string | null;
  type: string;
  content: string | null;
  videoUrl: string | null;
  documentUrl: string | null;
  quizData: any;
  duration: string | null;
  sortOrder: number;
}

interface TrainingDocument {
  id: string;
  name: string;
  url: string;
  type: string;
  uploadedAt: string;
  size: number;
}

function AdminStats() {
  const { data: clients = [] } = useQuery<TrainingClient[]>({
    queryKey: ["/api/training/clients"],
  });

  const stats = [
    { label: "Active Clients", value: clients.filter(c => c.isActive).length, icon: Building2, color: "text-blue-500" },
    { label: "Total Courses", value: 12, icon: BookOpen, color: "text-green-500" },
    { label: "Active Learners", value: 156, icon: Users, color: "text-purple-500" },
    { label: "Completion Rate", value: "78%", icon: Target, color: "text-cyan-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

function ClientManager() {
  const queryClient = useQueryClient();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<TrainingClient | null>(null);
  const [newClient, setNewClient] = useState({
    name: "",
    slug: "",
    description: "",
    primaryColor: "#06b6d4",
    logoUrl: "",
    isActive: true,
  });

  const { data: clients = [], isLoading } = useQuery<TrainingClient[]>({
    queryKey: ["/api/training/clients"],
  });

  const createMutation = useMutation({
    mutationFn: async (data: typeof newClient) => {
      const response = await apiRequest("POST", "/api/training/admin/clients", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/training/clients"] });
      setIsAddDialogOpen(false);
      setNewClient({
        name: "",
        slug: "",
        description: "",
        primaryColor: "#06b6d4",
        logoUrl: "",
        isActive: true,
      });
    },
  });

  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Client Management</h2>
          <p className="text-white/60">Manage training program clients</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Client
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-900 border-white/10 text-white">
            <DialogHeader>
              <DialogTitle>Add New Client</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="name">Client Name</Label>
                <Input
                  id="name"
                  value={newClient.name}
                  onChange={(e) => {
                    setNewClient({
                      ...newClient,
                      name: e.target.value,
                      slug: generateSlug(e.target.value),
                    });
                  }}
                  placeholder="Premier Protein"
                  className="bg-white/5 border-white/10 text-white mt-1"
                />
              </div>
              <div>
                <Label htmlFor="slug">URL Slug</Label>
                <Input
                  id="slug"
                  value={newClient.slug}
                  onChange={(e) => setNewClient({ ...newClient, slug: e.target.value })}
                  placeholder="premier-protein"
                  className="bg-white/5 border-white/10 text-white mt-1"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newClient.description}
                  onChange={(e) => setNewClient({ ...newClient, description: e.target.value })}
                  placeholder="Brief description of the training program..."
                  className="bg-white/5 border-white/10 text-white mt-1"
                />
              </div>
              <div>
                <Label htmlFor="color">Brand Color</Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    id="color"
                    type="color"
                    value={newClient.primaryColor}
                    onChange={(e) => setNewClient({ ...newClient, primaryColor: e.target.value })}
                    className="w-16 h-10 p-1 bg-white/5 border-white/10"
                  />
                  <Input
                    value={newClient.primaryColor}
                    onChange={(e) => setNewClient({ ...newClient, primaryColor: e.target.value })}
                    className="bg-white/5 border-white/10 text-white flex-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="logoUrl">Logo URL</Label>
                <Input
                  id="logoUrl"
                  value={newClient.logoUrl}
                  onChange={(e) => setNewClient({ ...newClient, logoUrl: e.target.value })}
                  placeholder="https://example.com/logo.png"
                  className="bg-white/5 border-white/10 text-white mt-1"
                />
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  checked={newClient.isActive}
                  onCheckedChange={(checked) => setNewClient({ ...newClient, isActive: checked })}
                />
                <Label>Active</Label>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} className="border-white/20 text-white">
                Cancel
              </Button>
              <Button
                onClick={() => createMutation.mutate(newClient)}
                disabled={createMutation.isPending || !newClient.name || !newClient.slug}
                className="bg-cyan-500 hover:bg-cyan-600"
              >
                {createMutation.isPending ? "Creating..." : "Create Client"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client) => (
          <Card key={client.id} className="bg-white/5 border-white/10 overflow-hidden">
            <div className="h-2" style={{ backgroundColor: client.primaryColor }} />
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${client.primaryColor}20` }}
                >
                  {client.logoUrl ? (
                    <img src={client.logoUrl} alt={client.name} className="w-8 h-8 object-contain" />
                  ) : (
                    <Building2 className="w-6 h-6" style={{ color: client.primaryColor }} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white truncate">{client.name}</h3>
                  <p className="text-white/60 text-sm truncate">{client.slug}</p>
                </div>
                <Badge className={client.isActive ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}>
                  {client.isActive ? "Active" : "Inactive"}
                </Badge>
              </div>
              <p className="text-white/60 text-sm mt-4 line-clamp-2">{client.description || "No description"}</p>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/10">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  <BookOpen className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function CourseManager() {
  const queryClient = useQueryClient();
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    difficulty: "beginner",
    duration: "",
    isActive: true,
    sortOrder: 0,
  });

  const { data: clients = [] } = useQuery<TrainingClient[]>({
    queryKey: ["/api/training/clients"],
  });

  const { data: courses = [] } = useQuery<TrainingCourse[]>({
    queryKey: ["/api/training/courses", selectedClient],
    enabled: !!selectedClient,
    queryFn: async () => {
      const response = await fetch(`/api/training/courses/${selectedClient}`);
      return response.json();
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: typeof newCourse & { clientId: string }) => {
      const response = await apiRequest("POST", "/api/training/admin/courses", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/training/courses", selectedClient] });
      setIsAddDialogOpen(false);
      setNewCourse({
        title: "",
        description: "",
        difficulty: "beginner",
        duration: "",
        isActive: true,
        sortOrder: 0,
      });
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Course Management</h2>
          <p className="text-white/60">Create and manage training courses</p>
        </div>
        <div className="flex gap-4">
          <Select value={selectedClient} onValueChange={setSelectedClient}>
            <SelectTrigger className="w-48 bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Select client" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-white/10">
              {clients.map((client) => (
                <SelectItem key={client.id} value={client.slug} className="text-white">
                  {client.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button
                className="bg-cyan-500 hover:bg-cyan-600 text-white"
                disabled={!selectedClient}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Course
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-white/10 text-white">
              <DialogHeader>
                <DialogTitle>Add New Course</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <Label htmlFor="title">Course Title</Label>
                  <Input
                    id="title"
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                    placeholder="Brand Ambassador Fundamentals"
                    className="bg-white/5 border-white/10 text-white mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="courseDescription">Description</Label>
                  <Textarea
                    id="courseDescription"
                    value={newCourse.description}
                    onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                    placeholder="Learn the essential skills..."
                    className="bg-white/5 border-white/10 text-white mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <Select
                    value={newCourse.difficulty}
                    onValueChange={(value) => setNewCourse({ ...newCourse, difficulty: value })}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/10">
                      <SelectItem value="beginner" className="text-white">Beginner</SelectItem>
                      <SelectItem value="intermediate" className="text-white">Intermediate</SelectItem>
                      <SelectItem value="advanced" className="text-white">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    value={newCourse.duration}
                    onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                    placeholder="2 hours"
                    className="bg-white/5 border-white/10 text-white mt-1"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} className="border-white/20 text-white">
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    const client = clients.find(c => c.slug === selectedClient);
                    if (client) {
                      createMutation.mutate({ ...newCourse, clientId: client.id });
                    }
                  }}
                  disabled={createMutation.isPending || !newCourse.title}
                  className="bg-cyan-500 hover:bg-cyan-600"
                >
                  {createMutation.isPending ? "Creating..." : "Create Course"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {!selectedClient ? (
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-12 text-center">
            <BookOpen className="w-12 h-12 text-white/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Select a Client</h3>
            <p className="text-white/60">Choose a client from the dropdown to view and manage their courses.</p>
          </CardContent>
        </Card>
      ) : courses.length === 0 ? (
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-12 text-center">
            <BookOpen className="w-12 h-12 text-white/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No Courses Yet</h3>
            <p className="text-white/60 mb-4">Create your first course for this client.</p>
            <Button onClick={() => setIsAddDialogOpen(true)} className="bg-cyan-500 hover:bg-cyan-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Course
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <Card key={course.id} className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                    <p className="text-white/60 text-sm mt-1">{course.description}</p>
                  </div>
                  <Badge className={
                    course.difficulty === "beginner"
                      ? "bg-green-500/20 text-green-400"
                      : course.difficulty === "intermediate"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }>
                    {course.difficulty}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-white/60 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration || "TBD"}
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    0 modules
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/10">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    <FileText className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function AIQuizGenerator() {
  const [documentContent, setDocumentContent] = useState("");
  const [numQuestions, setNumQuestions] = useState(5);
  const [generatedQuiz, setGeneratedQuiz] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQuiz = async () => {
    setIsGenerating(true);
    try {
      const response = await apiRequest("POST", "/api/training/admin/generate-quiz", {
        content: documentContent,
        numQuestions,
      });
      const quiz = await response.json();
      setGeneratedQuiz(quiz);
    } catch (error) {
      console.error("Failed to generate quiz:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            AI Quiz Generator
          </h2>
          <p className="text-white/60">Generate quizzes automatically from training content</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Training Content
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="content">Paste document content or upload a file</Label>
              <Textarea
                id="content"
                value={documentContent}
                onChange={(e) => setDocumentContent(e.target.value)}
                placeholder="Paste your training content here... The AI will analyze this content and generate relevant quiz questions."
                className="bg-white/5 border-white/10 text-white mt-2 min-h-[300px]"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Label htmlFor="numQuestions">Number of Questions</Label>
                <Select
                  value={numQuestions.toString()}
                  onValueChange={(v) => setNumQuestions(parseInt(v))}
                >
                  <SelectTrigger className="bg-white/5 border-white/10 text-white mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/10">
                    <SelectItem value="3" className="text-white">3 Questions</SelectItem>
                    <SelectItem value="5" className="text-white">5 Questions</SelectItem>
                    <SelectItem value="10" className="text-white">10 Questions</SelectItem>
                    <SelectItem value="15" className="text-white">15 Questions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 mt-6"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload File
              </Button>
            </div>
            <Button
              onClick={generateQuiz}
              disabled={!documentContent || isGenerating}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white mr-2" />
                  Generating Quiz...
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4 mr-2" />
                  Generate Quiz with AI
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Preview Section */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FileQuestion className="w-5 h-5" />
              Generated Quiz Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!generatedQuiz ? (
              <div className="text-center py-12">
                <FileQuestion className="w-12 h-12 text-white/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No Quiz Generated</h3>
                <p className="text-white/60">
                  Paste training content and click generate to create a quiz.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {generatedQuiz.questions?.map((q: any, i: number) => (
                  <div key={i} className="p-4 bg-white/5 rounded-lg">
                    <p className="font-medium text-white mb-2">
                      {i + 1}. {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options?.map((option: string, j: number) => (
                        <div
                          key={j}
                          className={`p-2 rounded text-sm ${
                            j === q.correctIndex
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-white/5 text-white/70"
                          }`}
                        >
                          {String.fromCharCode(65 + j)}. {option}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex gap-2 mt-4">
                  <Button className="flex-1 bg-cyan-500 hover:bg-cyan-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Save to Course
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Quiz
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function DocumentManager() {
  const [documents, setDocuments] = useState<TrainingDocument[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    // Simulate upload - in production this would upload to storage
    setTimeout(() => {
      setDocuments(prev => [...prev, {
        id: Date.now().toString(),
        name: file.name,
        url: URL.createObjectURL(file),
        type: file.type,
        uploadedAt: new Date().toISOString(),
        size: file.size,
      }]);
      setIsUploading(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Document Manager</h2>
          <p className="text-white/60">Upload and manage training materials</p>
        </div>
        <div>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileUpload}
            accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
          />
          <label htmlFor="file-upload">
            <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white cursor-pointer">
              <span>
                <Upload className="w-4 h-4 mr-2" />
                Upload Document
              </span>
            </Button>
          </label>
        </div>
      </div>

      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-6">
          {documents.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-white/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Documents Yet</h3>
              <p className="text-white/60 mb-4">
                Upload training documents, PDFs, or presentations to use in courses.
              </p>
              <label htmlFor="file-upload">
                <Button asChild className="bg-cyan-500 hover:bg-cyan-600 cursor-pointer">
                  <span>
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Your First Document
                  </span>
                </Button>
              </label>
            </div>
          ) : (
            <div className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <FileText className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-white truncate">{doc.name}</h4>
                    <p className="text-white/60 text-sm">
                      {(doc.size / 1024).toFixed(1)} KB • Uploaded {new Date(doc.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Generate Quiz
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function TrainingChatbot() {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    { role: "assistant", content: "Hi! I'm the AirFresh Training Assistant. I can help you with questions about our training programs, client projects, and working with AirFresh Marketing. What would you like to know?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await apiRequest("POST", "/api/training/chatbot", {
        message: userMessage,
        history: messages,
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "I'm sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Bot className="w-6 h-6 text-cyan-400" />
            Training Chatbot
          </h2>
          <p className="text-white/60">AI assistant for training questions and project information</p>
        </div>
      </div>

      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-0">
          <div className="h-[500px] flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    message.role === "user"
                      ? "bg-cyan-500 text-white"
                      : "bg-white/10 text-white"
                  }`}>
                    {message.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-white/60">AirFresh Assistant</span>
                      </div>
                    )}
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white" />
                      <span className="text-white/60 text-sm">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-4">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask about training, projects, or working with AirFresh..."
                  className="flex-1 bg-white/5 border-white/10 text-white"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-cyan-500 hover:bg-cyan-600"
                >
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Questions */}
      <div className="flex flex-wrap gap-2">
        <span className="text-white/60 text-sm">Try asking:</span>
        {[
          "What are the key brand guidelines?",
          "How do I submit my hours?",
          "What should I wear to events?",
          "How do I handle difficult customers?",
        ].map((question, i) => (
          <Button
            key={i}
            variant="outline"
            size="sm"
            onClick={() => {
              setInputValue(question);
            }}
            className="border-white/20 text-white/80 hover:bg-white/10 text-xs"
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default function TrainingAdmin() {
  const { isAuthenticated, isLoading, user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4" />
          <p className="text-white/80">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <Card className="bg-white/5 border-white/10 p-8 text-center max-w-md">
          <GraduationCap className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Training Admin</h1>
          <p className="text-white/60 mb-6">Sign in to access the training administration dashboard.</p>
          <Button
            onClick={() => window.location.href = "/api/login"}
            className="bg-cyan-500 hover:bg-cyan-600 w-full"
          >
            Sign In
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Training Admin | AirFresh Marketing"
        description="Manage training content, courses, and assessments for AirFresh Marketing."
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        {/* Navigation */}
        <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/training" className="flex items-center gap-2 text-white/60 hover:text-white">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm">Back to Training</span>
                </Link>
                <div className="w-px h-6 bg-white/20" />
                <Link href="/" className="flex items-center gap-3">
                  <img src={airFreshLogo} alt="AirFresh" className="w-10 h-10 rounded-full" />
                  <span className="text-white font-bold text-xl">Training Admin</span>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                {user && (
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
                      {(user.firstName?.[0] || user.email?.[0] || 'A').toUpperCase()}
                    </div>
                    <span className="text-white/90 text-sm font-medium hidden sm:block">
                      {user.firstName || 'Admin'}
                    </span>
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => logout()}
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="bg-white/5 border border-white/10 p-1">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white text-white/70"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="clients"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white text-white/70"
              >
                <Building2 className="w-4 h-4 mr-2" />
                Clients
              </TabsTrigger>
              <TabsTrigger
                value="courses"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white text-white/70"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Courses
              </TabsTrigger>
              <TabsTrigger
                value="ai-quiz"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white text-white/70"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                AI Quiz
              </TabsTrigger>
              <TabsTrigger
                value="documents"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white text-white/70"
              >
                <FileText className="w-4 h-4 mr-2" />
                Documents
              </TabsTrigger>
              <TabsTrigger
                value="chatbot"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white text-white/70"
              >
                <Bot className="w-4 h-4 mr-2" />
                Chatbot
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <AdminStats />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { action: "New user completed Premier Protein training", time: "2 hours ago" },
                        { action: "Quiz updated for Red Bull activation", time: "5 hours ago" },
                        { action: "New document uploaded: Brand Guidelines v2", time: "1 day ago" },
                        { action: "3 new users enrolled in training", time: "2 days ago" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-cyan-400" />
                          <div className="flex-1">
                            <p className="text-white text-sm">{item.action}</p>
                            <p className="text-white/60 text-xs">{item.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        onClick={() => setActiveTab("clients")}
                        variant="outline"
                        className="h-20 flex-col border-white/20 text-white hover:bg-white/10"
                      >
                        <Building2 className="w-6 h-6 mb-2" />
                        Add Client
                      </Button>
                      <Button
                        onClick={() => setActiveTab("courses")}
                        variant="outline"
                        className="h-20 flex-col border-white/20 text-white hover:bg-white/10"
                      >
                        <BookOpen className="w-6 h-6 mb-2" />
                        Add Course
                      </Button>
                      <Button
                        onClick={() => setActiveTab("ai-quiz")}
                        variant="outline"
                        className="h-20 flex-col border-white/20 text-white hover:bg-white/10"
                      >
                        <Sparkles className="w-6 h-6 mb-2" />
                        Generate Quiz
                      </Button>
                      <Button
                        onClick={() => setActiveTab("documents")}
                        variant="outline"
                        className="h-20 flex-col border-white/20 text-white hover:bg-white/10"
                      >
                        <Upload className="w-6 h-6 mb-2" />
                        Upload Doc
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="clients">
              <ClientManager />
            </TabsContent>

            <TabsContent value="courses">
              <CourseManager />
            </TabsContent>

            <TabsContent value="ai-quiz">
              <AIQuizGenerator />
            </TabsContent>

            <TabsContent value="documents">
              <DocumentManager />
            </TabsContent>

            <TabsContent value="chatbot">
              <TrainingChatbot />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
