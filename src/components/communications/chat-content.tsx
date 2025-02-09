"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Send, MoreVertical } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}

interface ChatContentProps {
  chatId: string;
}

export function ChatContent({ chatId }: ChatContentProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatPartner, setChatPartner] = useState({ name: "", avatar: "" });

  useEffect(() => {
    // Simulating fetching chat data
    const fetchedMessages = [
      {
        id: 1,
        sender: "John Doe",
        content: "Hey, how's your project going?",
        timestamp: "10:30 AM",
      },
      {
        id: 2,
        sender: "You",
        content: "It's going well, thanks for asking!",
        timestamp: "10:32 AM",
      },
      {
        id: 3,
        sender: "John Doe",
        content: "Great! Let me know if you need any help.",
        timestamp: "10:33 AM",
      },
    ];
    setMessages(fetchedMessages);
    setChatPartner({
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    });
  }, [chatId]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: "You",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/communications"
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 ring-2 ring-gray-100">
              <AvatarImage src={chatPartner.avatar} />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                {chatPartner.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {chatPartner.name}
              </h2>
              <p className="text-xs text-gray-500">Active now</p>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreVertical className="h-5 w-5 text-gray-600" />
        </Button>
      </div>

      {/* Chat Area */}
      <ScrollArea className="flex-1 p-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="space-y-4 max-w-3xl mx-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] ${
                  message.sender === "You"
                    ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                    : "bg-white border border-gray-200"
                } rounded-2xl px-4 py-3 shadow-sm`}
              >
                <p className={`text-sm ${
                  message.sender === "You" ? "text-white" : "text-gray-800"
                }`}>
                  {message.content}
                </p>
                <p className={`text-xs mt-1 text-right ${
                  message.sender === "You" ? "text-blue-100" : "text-gray-400"
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="bg-white border-t p-4">
        <div className="max-w-3xl mx-auto flex items-center space-x-2">
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 rounded-full border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Button
            onClick={sendMessage}
            className="rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}