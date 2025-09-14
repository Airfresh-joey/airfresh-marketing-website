import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Link, useLocation } from "wouter";
import { Save, Eye, Trash2, Plus, X, ArrowLeft, Edit2, FileText, Lock } from "lucide-react";
import type { BlogPost, InsertBlogPost } from "@shared/schema";

const blogPostSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters"),
  slug: z.string().min(5, "Slug must be at least 5 characters").regex(/^[a-z0-9-]+$/, "Slug must be lowercase with hyphens only"),
  content: z.string().min(100, "Content must be at least 100 characters"),
  excerpt: z.string().min(50, "Excerpt must be at least 50 characters").max(200, "Excerpt must be less than 200 characters"),
  author: z.string().min(2, "Author name is required"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).optional(),
  metaDescription: z.string().min(50, "Meta description must be at least 50 characters").max(160, "Meta description must be less than 160 characters"),
  featured: z.string().optional(),
  date: z.date().optional(),
});

type BlogPostFormData = z.infer<typeof blogPostSchema>;

export default function BlogEditor() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [currentTag, setCurrentTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isPreview, setIsPreview] = useState(false);
  const [adminPassword, setAdminPassword] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(true);
  const [passwordInput, setPasswordInput] = useState("");

  // Check for stored password on mount
  useEffect(() => {
    const storedPassword = sessionStorage.getItem('blogAdminPassword');
    if (storedPassword) {
      setAdminPassword(storedPassword);
      setIsAuthenticated(true);
      setShowPasswordDialog(false);
    }
  }, []);

  const handlePasswordSubmit = () => {
    if (passwordInput) {
      setAdminPassword(passwordInput);
      sessionStorage.setItem('blogAdminPassword', passwordInput);
      setIsAuthenticated(true);
      setShowPasswordDialog(false);
      toast({
        title: "Authentication Successful",
        description: "You can now manage blog posts",
      });
    } else {
      toast({
        title: "Password Required",
        description: "Please enter the admin password",
        variant: "destructive",
      });
    }
  };

  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const categories = [
    "Industry Trends",
    "Strategy",
    "Analytics",
    "Psychology",
    "Production",
    "Brand Strategy",
    "Technology",
    "Case Studies",
    "Q&A",
    "Market Insights"
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<BlogPostFormData>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      author: "AirFresh Marketing Team",
      featured: "false",
      tags: [],
    },
  });

  const watchedContent = watch("content");
  const watchedTitle = watch("title");

  const createPostMutation = useMutation({
    mutationFn: async (data: InsertBlogPost) => {
      const res = await apiRequest("POST", "/api/blog", data, {
        Authorization: `Bearer ${adminPassword}`
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      toast({
        title: "Success",
        description: "Blog post created successfully",
      });
      reset();
      setTags([]);
      setSelectedPost(null);
    },
    onError: (error: any) => {
      if (error.message?.includes('401')) {
        toast({
          title: "Authentication Required",
          description: "Please enter the admin password",
          variant: "destructive",
        });
        setShowPasswordDialog(true);
        setIsAuthenticated(false);
        sessionStorage.removeItem('blogAdminPassword');
      } else {
        toast({
          title: "Error",
          description: "Failed to create blog post",
          variant: "destructive",
        });
      }
    },
  });

  const updatePostMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<InsertBlogPost> }) => {
      const res = await apiRequest("PUT", `/api/blog/${id}`, data, {
        Authorization: `Bearer ${adminPassword}`
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      toast({
        title: "Success",
        description: "Blog post updated successfully",
      });
      setSelectedPost(null);
      reset();
      setTags([]);
    },
    onError: (error: any) => {
      if (error.message?.includes('401')) {
        toast({
          title: "Authentication Required",
          description: "Please enter the admin password",
          variant: "destructive",
        });
        setShowPasswordDialog(true);
        setIsAuthenticated(false);
        sessionStorage.removeItem('blogAdminPassword');
      } else {
        toast({
          title: "Error",
          description: "Failed to update blog post",
          variant: "destructive",
        });
      }
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await apiRequest("DELETE", `/api/blog/${id}`, undefined, {
        Authorization: `Bearer ${adminPassword}`
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      toast({
        title: "Success",
        description: "Blog post deleted successfully",
      });
      setSelectedPost(null);
      reset();
      setTags([]);
    },
    onError: (error: any) => {
      if (error.message?.includes('401')) {
        toast({
          title: "Authentication Required",
          description: "Please enter the admin password",
          variant: "destructive",
        });
        setShowPasswordDialog(true);
        setIsAuthenticated(false);
        sessionStorage.removeItem('blogAdminPassword');
      } else {
        toast({
          title: "Error",
          description: "Failed to delete blog post",
          variant: "destructive",
        });
      }
    },
  });

  const onSubmit = (data: BlogPostFormData) => {
    const postData = {
      ...data,
      tags,
      date: data.date || new Date(),
    };

    if (selectedPost) {
      updatePostMutation.mutate({ id: selectedPost.id, data: postData });
    } else {
      createPostMutation.mutate(postData);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const loadPost = (post: BlogPost) => {
    setSelectedPost(post);
    setValue("title", post.title);
    setValue("slug", post.slug);
    setValue("content", post.content);
    setValue("excerpt", post.excerpt);
    setValue("author", post.author);
    setValue("category", post.category);
    setValue("metaDescription", post.metaDescription);
    setValue("featured", post.featured || "false");
    setTags(post.tags || []);
  };

  const newPost = () => {
    setSelectedPost(null);
    reset();
    setTags([]);
  };

  const formatPreview = (content: string) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^- (.*?)$/gm, '<li class="ml-4">$1</li>')
      .replace(/(<li.*<\/li>)/, '<ul class="list-disc mb-4">$1</ul>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
      .split('\n\n')
      .map(p => p.trim() && !p.startsWith('<') ? `<p class="mb-4">${p}</p>` : p)
      .join('');
  };

  return (
    <>
      {/* Password Dialog */}
      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Lock size={20} />
              Admin Authentication Required
            </DialogTitle>
            <DialogDescription>
              Please enter the admin password to access the blog editor.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div>
              <Label htmlFor="password">Admin Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter admin password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handlePasswordSubmit()}
                data-testid="input-admin-password"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handlePasswordSubmit} className="flex-1" data-testid="button-authenticate">
                Authenticate
              </Button>
              <Link href="/blog">
                <Button variant="outline" data-testid="button-cancel">
                  Cancel
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="pt-20 px-4 max-w-7xl mx-auto">
      <div className="py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Blog Editor</h1>
            <p className="text-muted-foreground">
              {isAuthenticated ? "Create and manage blog posts" : "Authentication required"}
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Post List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Posts
                <Button size="sm" onClick={newPost} data-testid="button-new-post">
                  <Plus size={16} className="mr-1" />
                  New
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[600px] overflow-y-auto">
                {isLoading ? (
                  <div className="p-4 text-center text-muted-foreground">Loading...</div>
                ) : posts.length === 0 ? (
                  <div className="p-4 text-center text-muted-foreground">No posts yet</div>
                ) : (
                  posts.map((post) => (
                    <div
                      key={post.id}
                      className={`p-4 border-b cursor-pointer hover:bg-muted/50 ${
                        selectedPost?.id === post.id ? "bg-muted" : ""
                      }`}
                      onClick={() => loadPost(post)}
                      data-testid={`button-edit-post-${post.id}`}
                    >
                      <div className="font-semibold text-sm mb-1">{post.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      {post.featured === "true" && (
                        <Badge variant="secondary" className="mt-1 text-xs">Featured</Badge>
                      )}
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Main Editor */}
          <div className="lg:col-span-3">
            <Tabs value={isPreview ? "preview" : "edit"} onValueChange={(v) => setIsPreview(v === "preview")}>
              <TabsList className="mb-4">
                <TabsTrigger value="edit">
                  <Edit2 size={16} className="mr-2" />
                  Edit
                </TabsTrigger>
                <TabsTrigger value="preview">
                  <Eye size={16} className="mr-2" />
                  Preview
                </TabsTrigger>
              </TabsList>

              <TabsContent value="edit">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {selectedPost ? "Edit Post" : "Create New Post"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="title">Title *</Label>
                          <Input
                            id="title"
                            {...register("title")}
                            placeholder="Enter post title"
                            data-testid="input-title"
                          />
                          {errors.title && (
                            <p className="text-sm text-destructive mt-1">{errors.title.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="slug">Slug *</Label>
                          <div className="flex gap-2">
                            <Input
                              id="slug"
                              {...register("slug")}
                              placeholder="url-friendly-slug"
                              data-testid="input-slug"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                if (watchedTitle) {
                                  setValue("slug", generateSlug(watchedTitle));
                                }
                              }}
                              data-testid="button-generate-slug"
                            >
                              Generate
                            </Button>
                          </div>
                          {errors.slug && (
                            <p className="text-sm text-destructive mt-1">{errors.slug.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="excerpt">Excerpt *</Label>
                        <Textarea
                          id="excerpt"
                          {...register("excerpt")}
                          placeholder="Brief description (50-200 characters)"
                          rows={3}
                          data-testid="input-excerpt"
                        />
                        {errors.excerpt && (
                          <p className="text-sm text-destructive mt-1">{errors.excerpt.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="content">Content * (Markdown supported)</Label>
                        <Textarea
                          id="content"
                          {...register("content")}
                          placeholder="Write your blog post content here. Use ## for questions, **bold** for emphasis, - for lists"
                          rows={15}
                          className="font-mono text-sm"
                          data-testid="input-content"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Format: ## Question heading, **bold text**, - list items, [link text](url)
                        </p>
                        {errors.content && (
                          <p className="text-sm text-destructive mt-1">{errors.content.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="category">Category *</Label>
                          <Select onValueChange={(value) => setValue("category", value)}>
                            <SelectTrigger data-testid="select-category">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map(cat => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.category && (
                            <p className="text-sm text-destructive mt-1">{errors.category.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="author">Author *</Label>
                          <Input
                            id="author"
                            {...register("author")}
                            placeholder="Author name"
                            data-testid="input-author"
                          />
                          {errors.author && (
                            <p className="text-sm text-destructive mt-1">{errors.author.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label>Tags</Label>
                        <div className="flex gap-2 mb-2">
                          <Input
                            value={currentTag}
                            onChange={(e) => setCurrentTag(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                            placeholder="Add tag and press Enter"
                            data-testid="input-tag"
                          />
                          <Button type="button" variant="outline" onClick={addTag} data-testid="button-add-tag">
                            Add
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="gap-1" data-testid={`badge-tag-${tag}`}>
                              {tag}
                              <X
                                size={14}
                                className="cursor-pointer"
                                onClick={() => removeTag(tag)}
                                data-testid={`button-remove-tag-${tag}`}
                              />
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="metaDescription">Meta Description *</Label>
                        <Textarea
                          id="metaDescription"
                          {...register("metaDescription")}
                          placeholder="SEO meta description (50-160 characters)"
                          rows={2}
                          data-testid="input-meta-description"
                        />
                        {errors.metaDescription && (
                          <p className="text-sm text-destructive mt-1">{errors.metaDescription.message}</p>
                        )}
                      </div>

                      <div className="flex items-center gap-4">
                        <Label htmlFor="featured" className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            id="featured"
                            {...register("featured")}
                            value="true"
                            data-testid="checkbox-featured"
                          />
                          Featured Post
                        </Label>
                      </div>

                      <Separator />

                      <div className="flex justify-between">
                        <div className="flex gap-2">
                          <Button
                            type="submit"
                            disabled={createPostMutation.isPending || updatePostMutation.isPending}
                            data-testid="button-save-post"
                          >
                            <Save size={16} className="mr-2" />
                            {selectedPost ? "Update" : "Create"} Post
                          </Button>
                          {selectedPost && (
                            <Button
                              type="button"
                              variant="destructive"
                              onClick={() => {
                                if (confirm("Are you sure you want to delete this post?")) {
                                  deletePostMutation.mutate(selectedPost.id);
                                }
                              }}
                              disabled={deletePostMutation.isPending}
                              data-testid="button-delete-post"
                            >
                              <Trash2 size={16} className="mr-2" />
                              Delete
                            </Button>
                          )}
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preview">
                <Card>
                  <CardHeader>
                    <CardTitle>Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <article className="prose prose-lg max-w-none">
                      <h1 className="text-3xl font-bold mb-4">{watchedTitle || "Post Title"}</h1>
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: formatPreview(watchedContent || "Post content will appear here...") 
                        }} 
                      />
                    </article>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}