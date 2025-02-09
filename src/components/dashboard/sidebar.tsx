"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Home, Search, Settings, Users, ListTodo, UserPlus, GraduationCap, Bot } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils"; // Utility function for conditional classnames

export function DashboardSidebar() {
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage sidebar visibility

  return (
    <div className={`flex ${isSidebarOpen ? 'w-64' : 'w-16'} h-full bg-gray-800 text-white transition-all duration-300`}>
      {/* Sidebar */}
      <div className="flex flex-col justify-between w-full">
        <div>
          <div className="flex items-center justify-between p-4">
            <span className="font-bold text-lg">Welcome, User</span>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white">
              {isSidebarOpen ? 'Close' : 'Open'}
            </button>
          </div>

          {/* Search Box */}
          <div className="p-4">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="bg-gray-700 text-white w-full placeholder:text-gray-400"
            />
          </div>

          {/* Navigation */}
          <nav>
            <ul className="space-y-4">
              <NavItem href="/" icon={Home}>Home</NavItem>
              <NavItem href="/notifications" icon={Bell}>Notifications</NavItem>
              <NavItem href="/settings" icon={Settings}>Settings</NavItem>
              <NavItem href="/tasks" icon={ListTodo}>Tasks</NavItem>
              <NavItem href="/socialize" icon={Users}>Socialize</NavItem>
              <NavItem href="/grades" icon={GraduationCap}>Grades</NavItem>
              <NavItem href="/ai-assistant" icon={Bot}>AI Assistant</NavItem>
            </ul>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div>
          <h3 className="p-4 text-gray-400">Activity</h3>
          <div className="p-4 text-gray-500">Most recent notifications and updates...</div>
          <h3 className="p-4 text-gray-400">Friends</h3>
          <div className="p-4 text-gray-500">Your friend list will appear here...</div>
        </div>
      </div>
    </div>
  );
}

function NavItem({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center p-4 hover:bg-gray-700 rounded-md transition-colors duration-200"
      >
        <Icon className="w-6 h-6 mr-3" />
        {children}
      </Link>
    </li>
  );
}
