import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Radio,
  Cpu,
  Wifi,
  Settings,
  BookOpen,
  Users,
  Lightbulb,
  Trophy,
  FileText,
  Share2,
  Activity,
  Layers,
  Briefcase,
} from "lucide-react";

// Reusable Navigation Item Component
const NavItem = ({ to, children, icon: Icon, active, onClick }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={500}
    offset={-70}
    className={`flex items-center px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg cursor-pointer group ${
      active
        ? "bg-[#141665] text-white shadow-md"
        : "text-gray-600 hover:bg-[#141665]/5 hover:text-[#141665]"
    }`}
    onClick={onClick}
  >
    <Icon
      className={`w-5 h-5 mr-3 transition-transform group-hover:scale-110 ${active ? "text-white" : "text-gray-400 group-hover:text-[#141665]"}`}
    />
    {children}
  </ScrollLink>
);

// Reusable Section Component
const Section = ({ id, title, children, className = "" }) => (
  <section
    id={id}
    className={`py-12 scroll-mt-20 border-b border-gray-100 last:border-b-0 ${className}`}
  >
    <h2 className="text-2xl font-bold text-[#141665] mb-6 flex items-center">
      <div className="p-2 bg-[#141665]/10 rounded-lg mr-3">
        <Activity className="w-5 h-5 text-[#141665]" />
      </div>
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </section>
);

const ElectronicsDepartment = () => {
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", label: "About", icon: Radio },
    { id: "vision-mission", label: "Vision & Mission", icon: Lightbulb },
    { id: "peo-pso-po", label: "PEO / PSO / PO", icon: FileText },
    { id: "notice-board", label: "Notice Board", icon: Share2 },
    { id: "programmes", label: "Programmes Offered", icon: BookOpen },
    { id: "faculty", label: "Faculty & Staff", icon: Users },
    { id: "labs", label: "Labs & Facilities", icon: Layers },
    { id: "research", label: "Research", icon: Activity },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "resources", label: "Resources", icon: Briefcase },
  ];

  const curriculumHighlights = [
    {
      title: "Communication",
      icon: Wifi,
      desc: "Wireless networks, signal processing, and optical communication.",
    },
    {
      title: "Embedded Systems",
      icon: Cpu,
      desc: "Microprocessors, microcontrollers, and real-time systems.",
    },
    {
      title: "VLSI Design",
      icon: Layers,
      desc: "Integrated circuit design, fabrication, and system-on-chip technology.",
    },
    {
      title: "Instrumentation",
      icon: Settings,
      desc: "Industrial automation, control systems, and measurements.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#141665]/20 selection:text-[#141665]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#141665] rounded-lg flex items-center justify-center text-white shadow-lg">
              <Radio className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#141665] tracking-tight">
                Dept. of Electronics & Communication
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide uppercase">
                College of Engineering Adoor
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <nav className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 sticky top-28">
            <div className="pb-4 mb-4 border-b border-gray-100 px-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Navigation
              </span>
            </div>
            <div className="space-y-1">
              {navItems.map((item) => (
                <NavItem
                  key={item.id}
                  to={item.id}
                  icon={item.icon}
                  active={activeSection === item.id}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </NavItem>
              ))}
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <main className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
          {/* About Section */}
          <Section id="about" title="About the Department">
            <div className="space-y-8">
              <div className="prose prose-blue max-w-none text-gray-600">
                <p className="text-lg leading-relaxed font-medium text-gray-700">
                  The{" "}
                  <span className="text-[#141665] font-bold">
                    B.Tech Electronics and Communication Engineering
                  </span>{" "}
                  program offered at CEA provides students with a firm
                  foundation in both theoretical and practical aspects of
                  engineering.
                </p>
                <p className="mt-4">
                  Our curriculum is designed to ensure students gain a strong
                  footing in modern technological fields while also emphasizing
                  the managerial side of engineering to foster holistic
                  professional growth.
                </p>
              </div>

              {/* Curriculum Grid */}
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Core Specializations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {curriculumHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-[#141665]/5 hover:border-[#141665]/20 transition-all duration-300 group"
                    >
                      <div className="bg-white p-2 rounded-lg shadow-sm mr-4 group-hover:shadow-md">
                        <item.icon className="w-6 h-6 text-[#141665]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-[#141665] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Managerial Focus Highlight */}
              <div className="bg-[#141665] rounded-xl p-6 text-white relative overflow-hidden shadow-lg">
                <div className="absolute -right-6 -bottom-6 text-white/10">
                  <Briefcase className="w-32 h-32" />
                </div>
                <div className="relative z-10 flex items-start gap-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Managerial Excellence
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed max-w-lg">
                      Beyond technical prowess, emphasis is laid on the
                      managerial side of engineering, preparing students to lead
                      teams and manage complex industrial projects effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Placeholder Sections */}
          {navItems.slice(1).map((item) => (
            <Section key={item.id} id={item.id} title={item.label}>
              <div className="bg-gray-50 rounded-lg p-12 text-center border-2 border-dashed border-gray-200 group hover:border-[#141665]/30 transition-colors">
                <item.icon className="w-12 h-12 text-gray-300 mx-auto mb-4 group-hover:text-[#141665]/40 transition-colors" />
                <p className="text-gray-400 font-medium">
                  Content for{" "}
                  <span className="text-gray-600 font-bold">{item.label}</span>{" "}
                  will be updated soon.
                </p>
              </div>
            </Section>
          ))}
        </main>
      </div>

      {/* Scroll to Top Button */}
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        className="fixed bottom-8 right-8 p-3 bg-[#141665] text-white rounded-full shadow-lg hover:bg-[#0f114a] transition-all hover:scale-110 cursor-pointer z-50 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 group-hover:-translate-y-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </ScrollLink>
    </div>
  );
};

export default ElectronicsDepartment;
