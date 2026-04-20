'use client'

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import {
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  CheckCircle,
  Mail,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export function ReadProgressBar() {
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setReadProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 z-50 h-1 bg-gray-100">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-[width] duration-100"
        style={{ width: `${readProgress}%` }}
      />
    </div>
  );
}

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast({
      title: "Link copied!",
      description: "Article link has been copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  return (
    <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
      <h3 className="text-lg font-bold mb-6 text-gray-900">Share this article</h3>
      <div className="flex gap-3">
        <Button variant="outline" size="lg" onClick={shareOnTwitter} className="hover:bg-cyan-50 hover:border-cyan-400 hover:text-cyan-700">
          <Twitter className="w-5 h-5" />
        </Button>
        <Button variant="outline" size="lg" onClick={shareOnFacebook} className="hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700">
          <Facebook className="w-5 h-5" />
        </Button>
        <Button variant="outline" size="lg" onClick={shareOnLinkedIn} className="hover:bg-blue-50 hover:border-blue-600 hover:text-blue-700">
          <Linkedin className="w-5 h-5" />
        </Button>
        <Button variant="outline" size="lg" onClick={copyLink} className="hover:bg-green-50 hover:border-green-400 hover:text-green-700">
          {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
        </Button>
      </div>
    </div>
  );
}

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribeStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xzdjwkdj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "New Blog Subscriber" }),
      });
      if (res.ok) {
        setSubscribeStatus("success");
        setEmail("");
      } else {
        setSubscribeStatus("error");
      }
    } catch {
      setSubscribeStatus("error");
    }
  };

  return (
    <section className="bg-gray-50 py-20 mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-6">
          <Mail className="w-8 h-8 text-cyan-600" />
        </div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Never Miss an Update</h2>
        <p className="text-xl mb-8 text-gray-600">Get the latest marketing insights delivered directly to your inbox</p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-500 text-lg"
            required
          />
          <Button type="submit" size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white" disabled={subscribeStatus === "loading"}>
            {subscribeStatus === "loading" ? "..." : subscribeStatus === "success" ? "Subscribed!" : "Subscribe"}
            {subscribeStatus !== "success" && <ChevronRight className="w-5 h-5 ml-2" />}
          </Button>
        </form>
        {subscribeStatus === "success" && <p className="text-green-600 mt-4">Thanks for subscribing!</p>}
      </div>
    </section>
  );
}
