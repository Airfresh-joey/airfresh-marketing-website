import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
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
  Users,
  MapPin,
  Plus,
  Edit,
  Trash2,
  Briefcase,
  DollarSign,
  Clock,
  Star,
  ArrowLeft,
  CheckCircle,
  Eye,
  EyeOff
} from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";

interface JobPosting {
  id: string;
  title: string;
  location: string;
  city: string;
  state: string;
  type: string;
  category: string;
  description: string;
  requirements: string[];
  isActive: boolean;
  featured: boolean;
  payRange?: string;
  createdAt: string;
  updatedAt: string;
}

const JOB_CATEGORIES = [
  "Brand Ambassador",
  "Event Staff",
  "Promotional Model",
  "Street Team",
  "Event Coordinator",
  "Convention Staff",
  "Sampling",
  "Other"
];

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

function JobForm({
  job,
  onSubmit,
  onCancel,
  isSubmitting
}: {
  job?: JobPosting;
  onSubmit: (data: any) => void;
  onCancel: () => void;
  isSubmitting: boolean;
}) {
  const [formData, setFormData] = useState({
    title: job?.title || "",
    city: job?.city || "",
    state: job?.state || "",
    type: job?.type || "Part-time / Flexible",
    category: job?.category || "Brand Ambassador",
    description: job?.description || "",
    requirements: job?.requirements?.join("\n") || "",
    payRange: job?.payRange || "",
    isActive: job?.isActive ?? true,
    featured: job?.featured ?? false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      location: `${formData.city}, ${formData.state}`,
      requirements: formData.requirements.split("\n").filter(r => r.trim())
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Job Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Brand Ambassador"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="Los Angeles"
            required
          />
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <Select
            value={formData.state}
            onValueChange={(value) => setFormData({ ...formData, state: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              {US_STATES.map((state) => (
                <SelectItem key={state} value={state}>{state}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="category">Category</Label>
          <Select
            value={formData.category}
            onValueChange={(value) => setFormData({ ...formData, category: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {JOB_CATEGORIES.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="type">Employment Type</Label>
          <Select
            value={formData.type}
            onValueChange={(value) => setFormData({ ...formData, type: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Part-time / Flexible">Part-time / Flexible</SelectItem>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
              <SelectItem value="Seasonal">Seasonal</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="payRange">Pay Range</Label>
        <Input
          id="payRange"
          value={formData.payRange}
          onChange={(e) => setFormData({ ...formData, payRange: e.target.value })}
          placeholder="$20-35/hr"
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe the role and responsibilities..."
          rows={3}
          required
        />
      </div>

      <div>
        <Label htmlFor="requirements">Requirements (one per line)</Label>
        <Textarea
          id="requirements"
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          placeholder="Excellent communication skills&#10;Outgoing personality&#10;Reliable transportation"
          rows={4}
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Switch
            checked={formData.isActive}
            onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
          />
          <Label>Active</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch
            checked={formData.featured}
            onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
          />
          <Label>Featured</Label>
        </div>
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting} className="bg-cyan-500 hover:bg-cyan-600">
          {isSubmitting ? "Saving..." : job ? "Update Job" : "Create Job"}
        </Button>
      </DialogFooter>
    </form>
  );
}

export default function TalentAdmin() {
  const queryClient = useQueryClient();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<JobPosting | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterActive, setFilterActive] = useState<string>("all");

  const { data: jobs = [], isLoading } = useQuery<JobPosting[]>({
    queryKey: ["/api/jobs/all"],
  });

  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/jobs", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/jobs/all"] });
      queryClient.invalidateQueries({ queryKey: ["/api/jobs"] });
      setIsAddDialogOpen(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const response = await apiRequest("PUT", `/api/jobs/${id}`, data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/jobs/all"] });
      queryClient.invalidateQueries({ queryKey: ["/api/jobs"] });
      setEditingJob(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await apiRequest("DELETE", `/api/jobs/${id}`);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/jobs/all"] });
      queryClient.invalidateQueries({ queryKey: ["/api/jobs"] });
    },
  });

  const filteredJobs = jobs.filter(job => {
    if (filterCategory !== "all" && job.category !== filterCategory) return false;
    if (filterActive === "active" && !job.isActive) return false;
    if (filterActive === "inactive" && job.isActive) return false;
    return true;
  });

  const stats = {
    total: jobs.length,
    active: jobs.filter(j => j.isActive).length,
    featured: jobs.filter(j => j.featured).length,
    categories: [...new Set(jobs.map(j => j.category))].length
  };

  return (
    <>
      <SEO
        title="Talent Admin | Manage Job Postings | AirFresh Marketing"
        description="Manage job postings and recruitment for AirFresh Marketing."
      />

      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/talent">
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Talent Page
                  </Button>
                </Link>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Talent Admin</h1>
                  <p className="text-gray-600">Manage job postings and recruitment</p>
                </div>
              </div>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-cyan-500 hover:bg-cyan-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Job Posting
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Add New Job Posting</DialogTitle>
                  </DialogHeader>
                  <JobForm
                    onSubmit={(data) => createMutation.mutate(data)}
                    onCancel={() => setIsAddDialogOpen(false)}
                    isSubmitting={createMutation.isPending}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Jobs", value: stats.total, icon: Briefcase, color: "text-blue-500" },
              { label: "Active", value: stats.active, icon: Eye, color: "text-green-500" },
              { label: "Featured", value: stats.featured, icon: Star, color: "text-yellow-500" },
              { label: "Categories", value: stats.categories, icon: Users, color: "text-purple-500" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {JOB_CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterActive} onValueChange={setFilterActive}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active Only</SelectItem>
                <SelectItem value="inactive">Inactive Only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Job Listings */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4" />
              <p className="text-gray-600">Loading jobs...</p>
            </div>
          ) : filteredJobs.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Jobs Found</h3>
                <p className="text-gray-600 mb-4">
                  {jobs.length === 0
                    ? "Add your first job posting to start recruiting."
                    : "No jobs match your current filters."}
                </p>
                {jobs.length === 0 && (
                  <Button onClick={() => setIsAddDialogOpen(true)} className="bg-cyan-500 hover:bg-cyan-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Add First Job
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layout
                >
                  <Card className={`${!job.isActive ? 'opacity-60' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                            {job.featured && (
                              <Badge className="bg-yellow-100 text-yellow-700">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                            <Badge className={job.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}>
                              {job.isActive ? "Active" : "Inactive"}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {job.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </span>
                            {job.payRange && (
                              <span className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {job.payRange}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>
                          {job.requirements.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {job.requirements.slice(0, 3).map((req, i) => (
                                <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                  {req}
                                </span>
                              ))}
                              {job.requirements.length > 3 && (
                                <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                  +{job.requirements.length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <Dialog open={editingJob?.id === job.id} onOpenChange={(open) => !open && setEditingJob(null)}>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setEditingJob(job)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Edit Job Posting</DialogTitle>
                              </DialogHeader>
                              <JobForm
                                job={editingJob || undefined}
                                onSubmit={(data) => updateMutation.mutate({ id: job.id, data })}
                                onCancel={() => setEditingJob(null)}
                                isSubmitting={updateMutation.isPending}
                              />
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateMutation.mutate({
                              id: job.id,
                              data: { isActive: !job.isActive }
                            })}
                          >
                            {job.isActive ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => {
                              if (confirm("Are you sure you want to delete this job posting?")) {
                                deleteMutation.mutate(job.id);
                              }
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
