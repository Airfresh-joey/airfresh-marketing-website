import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Calendar, Clock, Send, Download, QrCode, Edit, Plus, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import AdminProtected from "@/components/AdminProtected";

interface ContentSchedule {
  linkedIn: {
    enabled: boolean;
    days: string[];
    time: string;
    frequency: string;
  };
  blog: {
    enabled: boolean;
    dayOfMonth: number;
    time: string;
    frequency: string;
  };
  caseStudies: {
    enabled: boolean;
    months: number[];
    dayOfMonth: number;
    time: string;
  };
  clientContact: {
    enabled: boolean;
    dayOfWeek: string;
    time: string;
    frequency: string;
  };
}

interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  type: 'linkedin' | 'blog' | 'case-study' | 'client-contact' | 'custom';
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  draft?: string;
  reminderSent: boolean;
}

const contentTypeColors = {
  'linkedin': 'bg-blue-500',
  'blog': 'bg-purple-500',
  'case-study': 'bg-green-500',
  'client-contact': 'bg-orange-500',
  'custom': 'bg-gray-500'
};

const contentTypeIcons = {
  'linkedin': '💼',
  'blog': '📝',
  'case-study': '📊',
  'client-contact': '☎️',
  'custom': '📌'
};

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];

export default function ContentCalendar() {
  const { toast } = useToast();
  const [selectedType, setSelectedType] = useState<string>('all');
  const [editingSchedule, setEditingSchedule] = useState(false);
  const [qrCodeVisible, setQrCodeVisible] = useState(false);

  // Fetch current schedule
  const { data: schedule, isLoading: scheduleLoading } = useQuery<ContentSchedule>({
    queryKey: ['/api/calendar/schedule']
  });

  // Fetch upcoming events
  const { data: upcomingEvents = [], isLoading: eventsLoading } = useQuery<CalendarEvent[]>({
    queryKey: ['/api/calendar/upcoming']
  });

  // Fetch QR code
  const { data: qrCode } = useQuery<{ qrCode: string }>({
    queryKey: ['/api/calendar/qr-code'],
    enabled: qrCodeVisible
  });

  // Update schedule mutation
  const updateScheduleMutation = useMutation({
    mutationFn: (newSchedule: ContentSchedule) => 
      apiRequest('/api/calendar/update-schedule', 'POST', newSchedule),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/calendar/schedule'] });
      queryClient.invalidateQueries({ queryKey: ['/api/calendar/upcoming'] });
      toast({
        title: "Schedule Updated",
        description: "Your content calendar schedule has been updated successfully."
      });
      setEditingSchedule(false);
    }
  });

  // Generate draft mutation
  const generateDraftMutation = useMutation({
    mutationFn: (type: string) => 
      apiRequest(`/api/calendar/generate-draft/${type}`, 'GET'),
    onSuccess: (data, type) => {
      toast({
        title: "Draft Generated",
        description: `${type} draft has been generated. Check the relevant tool to continue.`
      });
    }
  });

  // Send reminder mutation
  const sendReminderMutation = useMutation({
    mutationFn: (eventId: string) => 
      apiRequest('/api/calendar/send-reminder', 'POST', { eventId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/calendar/upcoming'] });
      toast({
        title: "Reminder Sent",
        description: "Reminder email has been sent successfully."
      });
    }
  });

  // Export calendar
  const exportCalendar = async () => {
    try {
      const response = await fetch('/api/calendar/export');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'airfresh-content-calendar.ics';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      toast({
        title: "Calendar Exported",
        description: "Calendar file downloaded successfully."
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "Failed to export calendar.",
        variant: "destructive"
      });
    }
  };

  const filteredEvents = selectedType === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === selectedType);

  const getEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDaysUntilDue = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  if (scheduleLoading || eventsLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
            <div className="grid gap-6">
              <div className="h-48 bg-gray-200 rounded"></div>
              <div className="h-48 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AdminProtected>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
        <SEO 
          title="Content Calendar | AirFresh Marketing"
          description="Manage your content schedule with automated reminders and draft generation for LinkedIn, blog posts, case studies, and client outreach."
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Content Calendar</h1>
            <p className="text-gray-600">Manage your content schedule and never miss a deadline</p>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={() => setQrCodeVisible(true)}
              variant="outline"
              data-testid="button-show-qr"
            >
              <QrCode className="h-4 w-4 mr-2" />
              Share Calendar
            </Button>
            <Button 
              onClick={exportCalendar}
              variant="outline"
              data-testid="button-export-calendar"
            >
              <Download className="h-4 w-4 mr-2" />
              Export .ics
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Content</TabsTrigger>
            <TabsTrigger value="settings">Schedule Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {contentTypeIcons['linkedin']} LinkedIn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      {schedule?.linkedIn.enabled ? 'Active' : 'Paused'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {schedule?.linkedIn.days.join(', ')} at {schedule?.linkedIn.time}
                    </p>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => generateDraftMutation.mutate('linkedin')}
                      disabled={generateDraftMutation.isPending}
                      data-testid="button-generate-linkedin"
                    >
                      Generate Draft
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {contentTypeIcons['blog']} Blog Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      {schedule?.blog.enabled ? 'Active' : 'Paused'}
                    </p>
                    <p className="text-xs text-gray-500">
                      Day {schedule?.blog.dayOfMonth} monthly at {schedule?.blog.time}
                    </p>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => generateDraftMutation.mutate('blog')}
                      disabled={generateDraftMutation.isPending}
                      data-testid="button-generate-blog"
                    >
                      Generate Draft
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {contentTypeIcons['case-study']} Case Studies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      {schedule?.caseStudies.enabled ? 'Active' : 'Paused'}
                    </p>
                    <p className="text-xs text-gray-500">
                      Quarterly on day {schedule?.caseStudies.dayOfMonth}
                    </p>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => generateDraftMutation.mutate('case-study')}
                      disabled={generateDraftMutation.isPending}
                      data-testid="button-generate-case-study"
                    >
                      Generate Draft
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {contentTypeIcons['client-contact']} Client Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      {schedule?.clientContact.enabled ? 'Active' : 'Paused'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {schedule?.clientContact.dayOfWeek}s at {schedule?.clientContact.time}
                    </p>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => generateDraftMutation.mutate('client-contact')}
                      disabled={generateDraftMutation.isPending}
                      data-testid="button-generate-contact"
                    >
                      Generate Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
                <CardDescription>Access your content creation tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link href="/repurpose">
                    <Button variant="outline" className="w-full" data-testid="link-repurpose">
                      Content Repurpose
                    </Button>
                  </Link>
                  <Link href="/blog/editor">
                    <Button variant="outline" className="w-full" data-testid="link-blog-editor">
                      Blog Editor
                    </Button>
                  </Link>
                  <Link href="/admin/case-studies">
                    <Button variant="outline" className="w-full" data-testid="link-case-studies">
                      Case Studies
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full" data-testid="link-contacts">
                      Contact List
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-48" data-testid="select-content-type">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Content</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="blog">Blog Posts</SelectItem>
                  <SelectItem value="case-study">Case Studies</SelectItem>
                  <SelectItem value="client-contact">Client Contact</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {filteredEvents.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No upcoming content scheduled</p>
                  </CardContent>
                </Card>
              ) : (
                filteredEvents.map((event) => {
                  const daysUntil = getDaysUntilDue(event.dueDate);
                  const isOverdue = daysUntil < 0;
                  const isDueSoon = daysUntil <= 3 && daysUntil >= 0;
                  
                  return (
                    <Card key={event.id} className={isOverdue ? 'border-red-300' : isDueSoon ? 'border-yellow-300' : ''}>
                      <CardContent className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-4">
                          <div className={`h-10 w-10 rounded-full ${contentTypeColors[event.type]} text-white flex items-center justify-center text-xl`}>
                            {contentTypeIcons[event.type]}
                          </div>
                          <div>
                            <h3 className="font-semibold">{event.title}</h3>
                            <p className="text-sm text-gray-600">{event.description}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant={isOverdue ? 'destructive' : isDueSoon ? 'default' : 'secondary'}>
                                {isOverdue ? 'Overdue' : `Due in ${daysUntil} days`}
                              </Badge>
                              <span className="text-xs text-gray-500">{getEventDate(event.dueDate)}</span>
                              {event.reminderSent && (
                                <Badge variant="outline">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Reminder Sent
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => sendReminderMutation.mutate(event.id)}
                            disabled={sendReminderMutation.isPending || event.reminderSent}
                            data-testid={`button-send-reminder-${event.id}`}
                          >
                            <Send className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => generateDraftMutation.mutate(event.type)}
                            disabled={generateDraftMutation.isPending}
                            data-testid={`button-generate-${event.id}`}
                          >
                            Generate
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              )}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Schedule Configuration</CardTitle>
                <CardDescription>Customize your content posting schedule</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-base font-semibold">LinkedIn Posts</Label>
                      <Switch 
                        checked={schedule?.linkedIn.enabled}
                        disabled={!editingSchedule}
                        data-testid="switch-linkedin"
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      Schedule: {schedule?.linkedIn.days.join(', ')} at {schedule?.linkedIn.time}
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-base font-semibold">Blog Posts</Label>
                      <Switch 
                        checked={schedule?.blog.enabled}
                        disabled={!editingSchedule}
                        data-testid="switch-blog"
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      Schedule: Day {schedule?.blog.dayOfMonth} of each month at {schedule?.blog.time}
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-base font-semibold">Case Studies</Label>
                      <Switch 
                        checked={schedule?.caseStudies.enabled}
                        disabled={!editingSchedule}
                        data-testid="switch-case-studies"
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      Schedule: {schedule?.caseStudies.months?.map(m => monthNames[m-1]).join(', ')} on day {schedule?.caseStudies.dayOfMonth}
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-base font-semibold">Client Contact</Label>
                      <Switch 
                        checked={schedule?.clientContact.enabled}
                        disabled={!editingSchedule}
                        data-testid="switch-client-contact"
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      Schedule: Every {schedule?.clientContact.dayOfWeek} at {schedule?.clientContact.time}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t">
                  {editingSchedule ? (
                    <>
                      <Button 
                        variant="outline" 
                        onClick={() => setEditingSchedule(false)}
                        data-testid="button-cancel-edit"
                      >
                        Cancel
                      </Button>
                      <Button 
                        onClick={() => {
                          if (schedule) {
                            updateScheduleMutation.mutate(schedule);
                          }
                        }}
                        disabled={updateScheduleMutation.isPending}
                        data-testid="button-save-schedule"
                      >
                        Save Changes
                      </Button>
                    </>
                  ) : (
                    <Button 
                      onClick={() => setEditingSchedule(true)}
                      data-testid="button-edit-schedule"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Schedule
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* QR Code Dialog */}
        <Dialog open={qrCodeVisible} onOpenChange={setQrCodeVisible}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share Content Calendar</DialogTitle>
              <DialogDescription>
                Scan this QR code to access the content calendar on any device
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center p-4">
              {qrCode?.qrCode && (
                <img src={qrCode.qrCode} alt="Calendar QR Code" className="w-64 h-64" />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
    </AdminProtected>
  );
}