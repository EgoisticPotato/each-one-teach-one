"use client";

import { useState } from "react";
import { MessageSquare, Users, PlusCircle, Search, Bell } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CommunicationsContent() {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hey, how's your project going?",
      timestamp: "10:30 AM",
      unread: 2,
      status: "online",
    },
    {
      id: 2,
      name: "Alice Smith",
      lastMessage: "Don't forget about our study session!",
      timestamp: "Yesterday",
      unread: 0,
      status: "offline",
    },
    {
      id: 3,
      name: "Bob Johnson",
      lastMessage: "Thanks for your help!",
      timestamp: "2 days ago",
      unread: 1,
      status: "online",
    },
  ]);

  const [forumPosts, setForumPosts] = useState([
    {
      id: 1,
      author: "Alice Smith",
      title: "Tips for Effective Studying",
      content: "Here are some tips that have helped me...",
      timestamp: "2 hours ago",
      replies: 5,
      likes: 12,
    },
    {
      id: 2,
      author: "Bob Johnson",
      title: "Question about Math Assignment",
      content: "I'm stuck on problem 3, can anyone help?",
      timestamp: "1 day ago",
      replies: 12,
      likes: 8,
    },
    {
      id: 3,
      author: "Charlie Brown",
      title: "Group Study for Biology Exam",
      content: "Anyone interested in forming a study group for the upcoming Biology exam?",
      timestamp: "3 days ago",
      replies: 8,
      likes: 15,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Communications Hub
            </h1>
            <p className="text-gray-500 mt-1">
              Connect, collaborate, and learn together
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                placeholder="Search..."
                className="pl-10 w-64 bg-white border-gray-200"
              />
              <Search className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
            </div>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="chat" className="space-y-4">
          <TabsList className="bg-white border">
            <TabsTrigger value="chat" className="data-[state=active]:bg-blue-50">
              <MessageSquare className="h-4 w-4 mr-2" />
              Chat
            </TabsTrigger>
            <TabsTrigger value="forum" className="data-[state=active]:bg-blue-50">
              <Users className="h-4 w-4 mr-2" />
              Forum
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Recent Conversations</CardTitle>
                <CardDescription>Stay connected with your study partners</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  {chats.map((chat) => (
                    <Link href={`/communications/chat/${chat.id}`} key={chat.id}>
                      <div className="flex items-center space-x-4 p-4 hover:bg-blue-50 rounded-xl cursor-pointer transition-colors duration-200 mb-2">
                        <div className="relative">
                          <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                            <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                              {chat.name.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                            chat.status === "online" ? "bg-green-500" : "bg-gray-300"
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-gray-900">{chat.name}</p>
                            <p className="text-xs text-gray-500">{chat.timestamp}</p>
                          </div>
                          <p className="text-sm text-gray-600 truncate mt-1">
                            {chat.lastMessage}
                          </p>
                        </div>
                        {chat.unread > 0 && (
                          <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forum">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Community Forum</CardTitle>
                    <CardDescription>Share knowledge and get help from peers</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity text-white">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        New Post
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[525px]">
                      <DialogHeader>
                        <DialogTitle>Create a New Post</DialogTitle>
                        <DialogDescription>
                          Share your thoughts or questions with the community
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Title
                          </label>
                          <Input placeholder="Enter your post title" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Content
                          </label>
                          <Textarea
                            placeholder="Write your post content here"
                            rows={5}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
                          Post
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  {forumPosts.map((post) => (
                    <Card key={post.id} className="mb-4 hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                              {post.author.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg font-semibold">
                              {post.title}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              Posted by {post.author} • {post.timestamp}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{post.content}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" className="hover:bg-blue-50">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          {post.replies} Replies
                        </Button>
                        <div className="flex items-center text-gray-500 text-sm">
                          <span className="mr-4">{post.likes} likes</span>
                          <span>{post.replies} comments</span>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}