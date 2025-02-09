"use client";

import Image from "next/image";
import {
  Bot,
  GraduationCap,
  MessageSquare,
  Share2,
  Users2,
  ArrowRight,
  Bell,
  Search
} from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function DashboardContent() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-6 lg:p-8 space-y-8">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2">
              Each One Teach One
            </h1>
            <p className="text-gray-600">Welcome back! Let's continue learning together.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                className="pl-10 w-64 bg-white/80 backdrop-blur-sm" 
                placeholder="Search resources..." 
              />
            </div>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                2
              </span>
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Communication Card */}
          <Card className="col-span-full lg:col-span-2 group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
            <Link href="/communications" className="block p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold mb-2">Communication Hub</CardTitle>
                    <p className="text-gray-600">
                      Connect through chats, forums, and video calls for seamless collaboration.
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </Card>

          {/* Resource Sharing Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
            <Link href="/resource-sharing" className="block p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Share2 className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold mb-2">Resource Center</CardTitle>
                    <p className="text-gray-600">Share and access learning materials easily.</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transform group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </Card>

          {/* Task Management Card */}
          <Card className="lg:col-span-2 group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
            <Link href="/task-management" className="block p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      width={32}
                      height={32}
                      alt="Task Management"
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold mb-2">Task Manager</CardTitle>
                    <p className="text-gray-600">Organize and track your learning journey efficiently.</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transform group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </Card>

          {/* Socialize Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
            <Link href="/socialize" className="block p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Users2 className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold mb-2">Study Groups</CardTitle>
                    <p className="text-gray-600">Connect with peers who share your interests.</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transform group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </Card>

          {/* Grade Tracker Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
            <Link href="/grade-tracker" className="block p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold mb-2">Grade Tracker</CardTitle>
                    <p className="text-gray-600">Monitor progress and set academic goals.</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transform group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </Card>

          {/* Chat bot Card */}
          <Card className="lg:col-span-2 group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-none">
            <Link href="/chatbot" className="block p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-xl">
                    <Bot className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold mb-2">AI Study Assistant</CardTitle>
                    <p className="text-gray-600">Get instant help with your studies using AI technology.</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transform group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
