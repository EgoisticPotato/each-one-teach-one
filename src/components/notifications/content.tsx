"use client";

import { useState, useEffect, useRef } from "react";
import {
  Bell,
  Book,
  Calendar,
  MessageSquare,
  Star,
  UserPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function NotificationsContent() {
  const [selectedTab, setSelectedTab] = useState("all");

  const cursorRef = useRef<HTMLDivElement | null>(null); // Refs for cursor effect

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 10}px`;
        cursorRef.current.style.top = `${e.clientY - 10}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="p-6 space-y-6 relative bg-gradient-to-b from-blue-500 to-purple-600 min-h-screen">
      {/* Light-following cursor effect */}
      <div
        ref={cursorRef}
        className="absolute bg-white rounded-full h-5 w-5 opacity-50 pointer-events-none z-50"
      ></div>

      <div className="flex justify-between items-center space-x-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">Notifications</h1>
          <p className="text-lg text-gray-200">Stay updated with your learning journey</p>
        </div>
        <Button className="gap-2 hover:scale-105 bg-white text-blue-600 hover:bg-blue-100">
          <Bell className="h-4 w-4" />
          Mark all as read
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all" className="text-white">All</TabsTrigger>
          <TabsTrigger value="unread" className="text-white">Unread</TabsTrigger>
          <TabsTrigger value="mentions" className="text-white">Mentions</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <NotificationCard
            icon={MessageSquare}
            color="text-blue-500"
            title="New Message"
            description="Sarah sent you a message about the Math assignment"
            time="5 minutes ago"
            isUnread
          />
          <NotificationCard
            icon={Calendar}
            color="text-purple-500"
            title="Upcoming Deadline"
            description="Physics project submission due in 2 days"
            time="2 hours ago"
            isUnread
          />
          <NotificationCard
            icon={Star}
            color="text-yellow-500"
            title="Achievement Unlocked"
            description="You've completed 5 consecutive days of learning!"
            time="1 day ago"
          />
          <NotificationCard
            icon={UserPlus}
            color="text-green-500"
            title="Study Group Invitation"
            description="John invited you to join Chemistry study group"
            time="2 days ago"
          />
          <NotificationCard
            icon={Book}
            color="text-red-500"
            title="New Course Material"
            description="New resources added to Biology course"
            time="3 days ago"
          />
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          <NotificationCard
            icon={MessageSquare}
            color="text-blue-500"
            title="New Message"
            description="Sarah sent you a message about the Math assignment"
            time="5 minutes ago"
            isUnread
          />
          <NotificationCard
            icon={Calendar}
            color="text-purple-500"
            title="Upcoming Deadline"
            description="Physics project submission due in 2 days"
            time="2 hours ago"
            isUnread
          />
        </TabsContent>

        <TabsContent value="mentions" className="space-y-4">
          <NotificationCard
            icon={MessageSquare}
            color="text-blue-500"
            title="New Mention"
            description="Sarah mentioned you in a comment: '@user what do you think about...'"
            time="5 minutes ago"
            isUnread
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface NotificationCardProps {
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
  time: string;
  isUnread?: boolean;
}

function NotificationCard({
  icon: Icon,
  color,
  title,
  description,
  time,
  isUnread = false,
}: NotificationCardProps) {
  return (
    <Card className={isUnread ? "border-l-4 border-l-blue-500" : ""}>
      <CardHeader className="flex flex-row items-start space-y-0 pb-2">
        <div className="flex items-center space-x-4 flex-1">
          <div className={`rounded-full p-2 bg-gray-100 ${color}`}>
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold text-gray-800">{title}</CardTitle>
            <CardDescription className="text-sm text-gray-600">{description}</CardDescription>
          </div>
        </div>
        <time className="text-sm text-gray-500">{time}</time>
      </CardHeader>
      <CardContent>
        <div className="flex justify-end space-x-2">
          <Button variant="ghost" size="sm" className="hover:scale-105">
            Dismiss
          </Button>
          <Button variant="outline" size="sm" className="hover:scale-105">
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
