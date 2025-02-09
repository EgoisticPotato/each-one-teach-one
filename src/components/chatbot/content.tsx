
"use client"
import React from 'react';
import { useState, useEffect } from "react";
import { Send, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: number;
  content: string;
  sender: "user" | "bot";
}

const ChatbotContent = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your AI study assistant. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const bgElement = document.getElementById("dynamic-bg");
      if (bgElement) {
        const rect = bgElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        bgElement.style.background = `
          radial-gradient(600px circle at ${x}px ${y}px, 
          rgba(94, 234, 212, 0.15),
          rgba(63, 63, 70, 0) 40%),
          linear-gradient(120deg, rgb(15, 23, 42) 0%, rgb(88, 28, 135) 100%)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        content: input,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInput("");
      setIsTyping(true);
      
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          content: "I'm processing your request. As an AI assistant, I'm here to help with your studies!",
          sender: "bot",
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1500);
    }
  };

  return (
    <div id="dynamic-bg" className="relative min-h-screen p-4 md:p-6 text-white transition-colors duration-200">
      <div className="z-10 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-8 h-8 text-teal-400" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 text-transparent bg-clip-text">
              AI Study Assistant
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Your 24/7 learning companion
            </p>
          </div>
        </div>

        <ScrollArea className="flex-grow h-[60vh] border border-gray-800 rounded-xl bg-gray-900/50 backdrop-blur-xl shadow-xl mb-4">
          <div className="p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-start gap-3 max-w-[80%] ${
                    message.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar className="w-8 h-8 border-2 border-teal-500/20">
                    <AvatarImage
                      src={message.sender === "user" ? "/placeholder.svg?height=32&width=32" : "/bot-avatar.png"}
                    />
                    <AvatarFallback className={message.sender === "user" ? "bg-purple-500/20" : "bg-teal-500/20"}>
                      {message.sender === "user" ? "U" : "AI"}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`p-3 rounded-2xl shadow-lg transition-all duration-200 ${
                      message.sender === "user"
                        ? "bg-purple-500/20 hover:bg-purple-500/30"
                        : "bg-teal-500/20 hover:bg-teal-500/30"
                    }`}
                  >
                    <p className="text-sm md:text-base">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-gray-400">
                <div className="animate-bounce">●</div>
                <div className="animate-bounce delay-100">●</div>
                <div className="animate-bounce delay-200">●</div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything..."
            className="flex-grow rounded-xl bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500/50 transition-all duration-200"
          />
          <Button
            onClick={handleSend}
            className="px-6 rounded-xl bg-gradient-to-r from-teal-500 to-purple-500 hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            <Send className="h-5 w-5 md:mr-2" />
            <span className="hidden md:inline">Send</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotContent;