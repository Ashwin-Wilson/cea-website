import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Terminal,
  Cpu,
  Monitor,
  BookOpen,
  Users,
  Lightbulb,
  Trophy,
  FileText,
  Share2,
  Globe,
  Code,
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
        ? "bg-blue-900/50 text-blue-100 shadow-inner border border-blue-800"
        : "text-blue-200 hover:bg-blue-800/30 hover:text-white"
    }`}
    onClick={onClick}
  >
    <Icon
      className={`w-5 h-5 mr-3 transition-transform group-hover:scale-110 ${active ? "text-blue-300" : "text-blue-400"}`}
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
    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="w-2 h-8 bg-blue-600 rounded-full mr-3 shadow-sm"></span>
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </section>
);

const ComputerScienceDepartment = () => {
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", label: "About", icon: Terminal },
    { id: "vision-mission", label: "Vision & Mission", icon: Globe },
    { id: "peo-pso-po", label: "PEO / PSO / PO", icon: FileText },
    { id: "notice-board", label: "Notice Board", icon: Share2 },
    { id: "programmes", label: "Programmes Offered", icon: BookOpen },
    { id: "faculty", label: "Faculty & Staff", icon: Users },
    { id: "labs", label: "Labs & Facilities", icon: Monitor },
    { id: "research", label: "Research", icon: Lightbulb },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "resources", label: "Resources", icon: Code },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Department of{" "}
              <span className="text-blue-600">Computer Science</span>
            </h1>
            <p className="mt-1 text-sm text-gray-500 font-medium tracking-wide uppercase">
              College of Engineering Adoor
            </p>
          </div>
          {/* Header Icon */}
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
            <Cpu className="w-7 h-7" />
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <nav className="lg:col-span-1">
          <div className="bg-[#0f172a] rounded-2xl p-4 shadow-xl sticky top-28 ring-1 ring-gray-900/5">
            <div className="pb-4 mb-4 border-b border-gray-700">
              <h3 className="text-white font-semibold px-2">Quick Nav</h3>
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
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                The Computer Engineering course at the College of Engineering
                Adoor has been carefully crafted to mould students ideally and
                steel them to face the ever-increasing challenges of the IT
                industry.
              </p>

              {/* Mission Highlight Box */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
                <p className="text-blue-900 font-medium italic">
                  "To be a center of excellence for the young mind to become
                  innovative computing professionals for the empowerment of the
                  society."
                </p>
              </div>

              <p>
                The curriculum places adequate emphasis on theoretical computer
                science and computer hardware, besides practicals and management
                studies. It provides students with a firm base in computer
                hardware while maintaining a strong stress on software
                development.
              </p>

              {/* Core Focus Areas Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600 mr-3">
                      <Code className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-900">Software Core</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Object Oriented Programming, Database Management Systems,
                    Algorithm Analysis and Design.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600 mr-3">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-900">
                      Hardware Foundation
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Data Communication, Digital Signal Processing, Neural
                    Networks, and Embedded Systems.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-teal-100 rounded-lg text-teal-600 mr-3">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-900">
                      Management & Humanities
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Includes lectures on basic humanities, industrial
                    organization, and management at advanced stages of the
                    course.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Student Development Section */}
          <Section id="research" title="Research & Development">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 space-y-4">
                <p>
                  The curriculum incorporates the presentation of seminars on
                  cutting-edge technological advances, encouraging students to
                  research topics far removed from the mainstream curriculum.
                </p>
                <p>
                  Students are allowed ample liberty of choice regarding
                  projects and electives, with restraints enforced only to
                  ensure minimum standards. This fosters creativity and allows
                  students to explore their specific areas of interest within
                  the vast field of Computer Science.
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                <Lightbulb className="w-10 h-10 text-yellow-500 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Innovation Hub</h4>
                <p className="text-xs text-gray-500">
                  Encouraging research beyond textbooks to solve real-world
                  problems.
                </p>
              </div>
            </div>
          </Section>

          {/* Placeholder Sections for Scroll Demo */}
          {[
            "vision-mission",
            "peo-pso-po",
            "notice-board",
            "programmes",
            "faculty",
            "labs",
            "achievements",
            "resources",
          ].map((id) => (
            <Section
              key={id}
              id={id}
              title={navItems.find((n) => n.id === id).label}
            >
              <div className="bg-gray-50 rounded-lg p-8 text-center border-2 border-dashed border-gray-200">
                <p className="text-gray-400 font-medium">
                  Content for {navItems.find((n) => n.id === id).label} will be
                  populated here.
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
        className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 cursor-pointer z-50 group"
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

export default ComputerScienceDepartment;
