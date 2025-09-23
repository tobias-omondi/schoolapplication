import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  BookOpen,
  Users,
  MessageSquare,
  Bell,
  Menu,
  X,
  LogOut,
} from "lucide-react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { label: "Teacher Profile", icon: <User size={20} />, href: "#" },
    { label: "Class Management", icon: <BookOpen size={20} />, href: "#" },
    { label: "Student Profile", icon: <Users size={20} />, href: "#" },
    { label: "Communications", icon: <MessageSquare size={20} />, href: "#" },
    { label: "Notifications", icon: <Bell size={20} />, href: "#" },
    { label: "Logout", icon: <LogOut size={20} />, href: "#" },
  ];

  return (
    <div className="flex">
      {/* Toggle Button for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-600 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: isOpen ? 0 : -250 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-screen w-64 bg-blue-500 text-white flex flex-col shadow-lg fixed md:relative border border-blue-800"
      >
        {/* Header */}
        <div className="p-6 text-2xl font-bold border-b border-blue-500">
          Teacher Dashboard
        </div>

        {/* Nav Links */}
        <nav className="flex-1 p-4 space-y-4">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 transition"
            >
              {item.icon}
              <span className="hidden md:inline">{item.label}</span>
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Page Content (example placeholder) */}
      <div className="flex-1 p-6 md:ml-64">
        <h1 className="text-3xl font-medium text-gray-600">Welcome, To Teachers Dashboard</h1>
      </div>
    </div>
  );
};

export default SideBar;
