import { useState, useCallback } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import AdminProtected from "@/components/AdminProtected";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Upload, 
  X, 
  Edit, 
  Trash2, 
  Eye, 
  Save, 
  Plus,
  Image as ImageIcon,
  Calendar,
  MapPin,
  Building2,
  Target,
  Lightbulb,
  Zap,
  TrendingUp,
  Award,
  FileText,
  Star
} from "lucide-react";
import type { CaseStudyReal, InsertCaseStudyReal } from "@shared/schema";
import { Link } from "wouter";
import { format } from "date-fns";


export default function CaseStudyAdmin() {
  const { toast } = useToast();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState<Partial<InsertCaseStudyReal>>({
    title: "",
    client: "",
    date: new Date(),
    location: "",
    industry: "",
    campaignType: "",
    challenge: "",
    strategy: "",
    execution: "",
    results: "",
    keyTakeaways: [],
    metrics: [],
    featuredImage: "",
    images: [],
    tags: [],
    featured: "false",
    status: "published"
  });
  
  // Fetch case studies
  const { data: caseStudies = [], isLoading } = useQuery<CaseStudyReal[]>({
    queryKey: ['/api/case-studies-real'],
  });
  
  // Create mutation
  const createMutation = useMutation({
    mutationFn: async (data: InsertCaseStudyReal) => {
      const password = localStorage.getItem("adminPassword");
      const response = await apiRequest(
        'POST',
        '/api/case-studies-real',
        data,
        {
          'Authorization': `Bearer ${password}`
        }
      );
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/case-studies-real'] });
      toast({
        title: "Success",
        description: "Case study created successfully",
      });
      resetForm();
    }
  });
  
  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<InsertCaseStudyReal> }) => {
      const password = localStorage.getItem("adminPassword");
      const response = await apiRequest(
        'PUT',
        `/api/case-studies-real/${id}`,
        data,
        {
          'Authorization': `Bearer ${password}`
        }
      );
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/case-studies-real'] });
      toast({
        title: "Success",
        description: "Case study updated successfully",
      });
      setEditingId(null);
      resetForm();
    }
  });
  
  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const password = localStorage.getItem("adminPassword");
      const response = await apiRequest(
        'DELETE',
        `/api/case-studies-real/${id}`,
        undefined,
        {
          'Authorization': `Bearer ${password}`
        }
      );
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/case-studies-real'] });
      toast({
        title: "Success",
        description: "Case study deleted successfully",
      });
    }
  });
  
  // Handle image upload
  const handleImageUpload = useCallback(async (files: FileList) => {
    setIsUploading(true);
    const uploadedUrls: string[] = [];
    
    try {
      for (const file of Array.from(files)) {
        // Create a form data for upload
        const formData = new FormData();
        formData.append('file', file);
        
        // Generate a unique filename
        const timestamp = Date.now();
        const filename = `case-studies/${timestamp}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
        
        // Upload to object storage via API
        const response = await fetch(`/api/upload/case-study-image`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("adminPassword")}`,
            'X-Filename': filename
          },
          body: formData
        });
        
        if (response.ok) {
          const { url } = await response.json();
          uploadedUrls.push(url);
          
          // Create preview URL
          const previewUrl = URL.createObjectURL(file);
          setPreviewImages(prev => [...prev, previewUrl]);
        }
      }
      
      // Update form with uploaded image URLs
      setUploadedImages(prev => [...prev, ...uploadedUrls]);
      setFormData(prev => ({
        ...prev,
        images: [...(prev.images || []), ...uploadedUrls],
        featuredImage: prev.featuredImage || uploadedUrls[0]
      }));
      
      toast({
        title: "Images Uploaded",
        description: `Successfully uploaded ${uploadedUrls.length} images`,
      });
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload Failed",
        description: "Failed to upload images. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  }, [toast]);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate slug from title
    const slug = formData.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || '';
    
    const dataToSubmit: InsertCaseStudyReal = {
      ...formData as InsertCaseStudyReal,
      slug,
      date: formData.date || new Date(),
      keyTakeaways: formData.keyTakeaways || [],
      metrics: formData.metrics || [],
      images: uploadedImages.length > 0 ? uploadedImages : formData.images || [],
      tags: formData.tags || [],
    };
    
    if (editingId) {
      updateMutation.mutate({ id: editingId, data: dataToSubmit });
    } else {
      createMutation.mutate(dataToSubmit);
    }
  };
  
  // Reset form
  const resetForm = () => {
    setFormData({
      title: "",
      client: "",
      date: new Date(),
      location: "",
      industry: "",
      campaignType: "",
      challenge: "",
      strategy: "",
      execution: "",
      results: "",
      keyTakeaways: [],
      metrics: [],
      featuredImage: "",
      images: [],
      tags: [],
      featured: "false",
      status: "published"
    });
    setPreviewImages([]);
    setUploadedImages([]);
    setEditingId(null);
  };
  
  // Edit case study
  const handleEdit = (caseStudy: CaseStudyReal) => {
    setFormData({
      title: caseStudy.title,
      client: caseStudy.client,
      date: caseStudy.date,
      location: caseStudy.location,
      industry: caseStudy.industry,
      campaignType: caseStudy.campaignType,
      challenge: caseStudy.challenge,
      strategy: caseStudy.strategy,
      execution: caseStudy.execution,
      results: caseStudy.results,
      keyTakeaways: caseStudy.keyTakeaways || [],
      metrics: caseStudy.metrics || [],
      featuredImage: caseStudy.featuredImage,
      images: caseStudy.images || [],
      tags: caseStudy.tags || [],
      featured: caseStudy.featured,
      status: caseStudy.status
    });
    setUploadedImages(caseStudy.images || []);
    setEditingId(caseStudy.id);
  };
  
  return (
    <AdminProtected>
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Case Study Management</h1>
            <p className="text-gray-600">Create and manage your case studies with rich media content</p>
          </div>
          
          <Tabs defaultValue="create" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger value="create">
                <Plus className="h-4 w-4 mr-2" />
                Create/Edit
              </TabsTrigger>
              <TabsTrigger value="manage">
                <FileText className="h-4 w-4 mr-2" />
                Manage
              </TabsTrigger>
            </TabsList>
            
            {/* Create/Edit Tab */}
            <TabsContent value="create">
              <form onSubmit={handleSubmit}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {editingId ? "Edit Case Study" : "Create New Case Study"}
                    </CardTitle>
                    <CardDescription>
                      Fill in all the details to create a compelling case study
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          placeholder="Microsoft NRF Retail Activation"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="client">Client *</Label>
                        <Input
                          id="client"
                          value={formData.client}
                          onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                          placeholder="Microsoft"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="date">Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date ? format(new Date(formData.date), 'yyyy-MM-dd') : ''}
                          onChange={(e) => setFormData({ ...formData, date: new Date(e.target.value) })}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="location">Location *</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="New York, NY"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="industry">Industry *</Label>
                        <Input
                          id="industry"
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          placeholder="Technology"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="campaignType">Campaign Type *</Label>
                        <Input
                          id="campaignType"
                          value={formData.campaignType}
                          onChange={(e) => setFormData({ ...formData, campaignType: e.target.value })}
                          placeholder="Product Launch"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Story Sections */}
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="challenge">Challenge *</Label>
                        <Textarea
                          id="challenge"
                          value={formData.challenge}
                          onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                          placeholder="Describe the client's challenge or objectives..."
                          rows={4}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="strategy">Strategy *</Label>
                        <Textarea
                          id="strategy"
                          value={formData.strategy}
                          onChange={(e) => setFormData({ ...formData, strategy: e.target.value })}
                          placeholder="Explain your strategic approach..."
                          rows={4}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="execution">Execution *</Label>
                        <Textarea
                          id="execution"
                          value={formData.execution}
                          onChange={(e) => setFormData({ ...formData, execution: e.target.value })}
                          placeholder="Detail how the campaign was executed..."
                          rows={4}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="results">Results *</Label>
                        <Textarea
                          id="results"
                          value={formData.results}
                          onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                          placeholder="Share the measurable outcomes and impact..."
                          rows={4}
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Metrics and Takeaways */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="metrics">Metrics (one per line)</Label>
                        <Textarea
                          id="metrics"
                          value={formData.metrics?.join('\n') || ''}
                          onChange={(e) => setFormData({ 
                            ...formData, 
                            metrics: e.target.value.split('\n').filter(m => m.trim()) 
                          })}
                          placeholder="50% increase in engagement&#10;10,000 samples distributed&#10;95% positive feedback"
                          rows={4}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="keyTakeaways">Key Takeaways (one per line)</Label>
                        <Textarea
                          id="keyTakeaways"
                          value={formData.keyTakeaways?.join('\n') || ''}
                          onChange={(e) => setFormData({ 
                            ...formData, 
                            keyTakeaways: e.target.value.split('\n').filter(t => t.trim()) 
                          })}
                          placeholder="Immersive experiences drive engagement&#10;Strategic partnerships amplify reach&#10;Data-driven approach ensures ROI"
                          rows={4}
                        />
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div>
                      <Label htmlFor="tags">Tags (comma-separated)</Label>
                      <Input
                        id="tags"
                        value={formData.tags?.join(', ') || ''}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          tags: e.target.value.split(',').map(t => t.trim()).filter(t => t) 
                        })}
                        placeholder="retail, technology, product launch, experiential"
                      />
                    </div>
                    
                    {/* Image Upload Section */}
                    <div>
                      <Label>Images</Label>
                      <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6">
                        <div className="text-center">
                          <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="mt-4">
                            <label htmlFor="image-upload" className="cursor-pointer">
                              <span className="mt-2 block text-sm font-medium text-gray-900">
                                Click to upload or drag and drop
                              </span>
                              <input
                                id="image-upload"
                                type="file"
                                className="hidden"
                                multiple
                                accept="image/*"
                                onChange={(e) => e.target.files && handleImageUpload(e.target.files)}
                                disabled={isUploading}
                              />
                            </label>
                            <p className="mt-1 text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB each
                            </p>
                          </div>
                        </div>
                        
                        {isUploading && (
                          <div className="mt-4 text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                            <p className="mt-2 text-sm text-gray-600">Uploading images...</p>
                          </div>
                        )}
                        
                        {/* Preview Images */}
                        {(previewImages.length > 0 || uploadedImages.length > 0) && (
                          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {(uploadedImages.length > 0 ? uploadedImages : previewImages).map((url, index) => (
                              <div key={index} className="relative group">
                                <img
                                  src={url.startsWith('blob:') ? url : `/public-objects/${url}`}
                                  alt={`Preview ${index + 1}`}
                                  className="w-full h-32 object-cover rounded-lg"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    setPreviewImages(prev => prev.filter((_, i) => i !== index));
                                    setUploadedImages(prev => prev.filter((_, i) => i !== index));
                                    setFormData(prev => ({
                                      ...prev,
                                      images: prev.images?.filter((_, i) => i !== index)
                                    }));
                                  }}
                                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <X className="h-4 w-4" />
                                </button>
                                {index === 0 && (
                                  <Badge className="absolute bottom-2 left-2">Featured</Badge>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Status Options */}
                    <div className="flex items-center space-x-6">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.featured === "true"}
                          onChange={(e) => setFormData({ 
                            ...formData, 
                            featured: e.target.checked ? "true" : "false" 
                          })}
                          className="rounded border-gray-300"
                        />
                        <span className="text-sm font-medium">Featured Case Study</span>
                      </label>
                      
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.status === "published"}
                          onChange={(e) => setFormData({ 
                            ...formData, 
                            status: e.target.checked ? "published" : "draft" 
                          })}
                          className="rounded border-gray-300"
                        />
                        <span className="text-sm font-medium">Published</span>
                      </label>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4">
                      <Button type="button" variant="outline" onClick={resetForm}>
                        Cancel
                      </Button>
                      <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                        <Save className="h-4 w-4 mr-2" />
                        {editingId ? "Update" : "Create"} Case Study
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </form>
            </TabsContent>
            
            {/* Manage Tab */}
            <TabsContent value="manage">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Case Studies</CardTitle>
                  <CardDescription>
                    View, edit, and delete your case studies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                      <p className="mt-2 text-gray-600">Loading case studies...</p>
                    </div>
                  ) : caseStudies.length === 0 ? (
                    <div className="text-center py-8">
                      <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No case studies yet</p>
                      <p className="text-sm text-gray-500 mt-1">Create your first case study to get started</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {caseStudies.map((caseStudy) => (
                        <div key={caseStudy.id} className="border rounded-lg p-4 hover:bg-gray-50">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="font-semibold text-lg">{caseStudy.title}</h3>
                                {caseStudy.featured === "true" && (
                                  <Badge variant="secondary">
                                    <Star className="h-3 w-3 mr-1" />
                                    Featured
                                  </Badge>
                                )}
                                {caseStudy.status === "draft" && (
                                  <Badge variant="outline">Draft</Badge>
                                )}
                              </div>
                              
                              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                                <span className="flex items-center">
                                  <Building2 className="h-4 w-4 mr-1" />
                                  {caseStudy.client}
                                </span>
                                <span className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {format(new Date(caseStudy.date), 'MMM dd, yyyy')}
                                </span>
                                <span className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {caseStudy.location}
                                </span>
                                <span className="flex items-center">
                                  <Target className="h-4 w-4 mr-1" />
                                  {caseStudy.industry}
                                </span>
                              </div>
                              
                              <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                                {caseStudy.challenge}
                              </p>
                              
                              {caseStudy.tags && caseStudy.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {caseStudy.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                              
                              {caseStudy.images && caseStudy.images.length > 0 && (
                                <div className="flex items-center text-sm text-gray-500">
                                  <ImageIcon className="h-4 w-4 mr-1" />
                                  {caseStudy.images.length} image{caseStudy.images.length !== 1 ? 's' : ''}
                                </div>
                              )}
                            </div>
                            
                            <div className="flex space-x-2 ml-4">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => window.open(`/projects/case-studies-real/${caseStudy.slug}`, '_blank')}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEdit(caseStudy)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  if (confirm('Are you sure you want to delete this case study?')) {
                                    deleteMutation.mutate(caseStudy.id);
                                  }
                                }}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AdminProtected>
  );
}