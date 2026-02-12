import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Zap,
  Sun,
  Battery,
  Cpu,
  BookOpen,
  Users,
  Lightbulb,
  Trophy,
  ClipboardList,
  Radio,
  Settings,
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
        <Zap className="w-5 h-5 text-[#141665]" />
      </div>
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </section>
);

const ElectricalDepartment = () => {
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", label: "About", icon: Zap },
    { id: "vision-mission", label: "Vision & Mission", icon: Lightbulb },
    { id: "peo-pso-po", label: "PEO / PSO / PO", icon: ClipboardList },
    { id: "notice-board", label: "Notice Board", icon: Radio },
    { id: "programmes", label: "Programmes Offered", icon: BookOpen },
    { id: "faculty", label: "Faculty & Staff", icon: Users },
    { id: "labs", label: "Labs & Facilities", icon: Battery },
    { id: "research", label: "Research", icon: Cpu },
    { id: "achievements", label: "Achievements", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#141665]/20 selection:text-[#141665]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#141665] rounded-lg flex items-center justify-center text-white shadow-lg">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#141665] tracking-tight">
                Dept. of Electrical & Electronics
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
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                The department has been an integral part of the College of
                Engineering Adoor since its inception. Originally functioning as
                the Department of Electrical Engineering, it was established as
                a separate department in 2010.
              </p>

              <p>
                The department offers an undergraduate course -{" "}
                <strong>
                  B.Tech in Electrical and Electronics Engineering
                </strong>{" "}
                - which commenced in 2011 with an annual intake of 60 students.
                Additionally, the department plays a vital role in handling
                various electrical engineering subjects for other engineering
                streams within the college.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-[#141665]/5 p-6 rounded-xl border border-[#141665]/10 flex flex-col items-center text-center group hover:bg-[#141665] hover:text-white transition-all duration-300">
                  <Users className="w-10 h-10 text-[#141665] mb-3 group-hover:text-white" />
                  <h3 className="text-lg font-bold text-[#141665] group-hover:text-white mb-2">
                    Expert Team
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-100">
                    We are honored to have well-qualified and experienced
                    faculty members supported by an equally zealous technical
                    team.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
                  <ClipboardList className="w-10 h-10 text-[#141665] mb-3" />
                  <h3 className="text-lg font-bold text-[#141665] mb-2">
                    Modern Labs
                  </h3>
                  <p className="text-sm text-gray-600">
                    The department boasts well-equipped laboratories with
                    high-speed internet facilities for hands-on learning.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* SOURA Project Highlight Section */}
          <Section id="projects" title="Infrastructure & Maintenance">
            <p className="mb-6">
              The Electrical Engineering Unit is a cornerstone of the college's
              infrastructure, ensuring seamless operation and maintenance of
              electrical systems.
            </p>

            {/* Main Feature Card - Using the Primary Blue */}
            <div className="bg-[#141665] text-white rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-16 -mt-16"></div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white text-[#141665] mb-4 uppercase tracking-wide">
                    Major Project
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    SOURA Solar Project
                  </h3>
                  <p className="text-gray-300 text-sm mb-6">
                    A landmark initiative in sustainable energy management for
                    the campus.
                  </p>

                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10 w-fit">
                    <Sun className="w-6 h-6 text-yellow-400" />
                    <div>
                      <p className="text-xs text-gray-300 uppercase">
                        Capacity
                      </p>
                      <p className="text-xl font-bold text-white">139kW</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 border-l border-[#2a2d80] pl-6 md:pl-8">
                  <div className="flex items-start">
                    <Zap className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white">11kV Substation</h4>
                      <p className="text-sm text-gray-400">
                        Maintained by the Electrical Engineering Unit.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Settings className="w-5 h-5 text-blue-300 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white">
                        Campus Maintenance
                      </h4>
                      <p className="text-sm text-gray-400">
                        Undertakes all necessary electrical maintenance of the
                        College.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Placeholder Sections */}
          {[
            "vision-mission",
            "peo-pso-po",
            "notice-board",
            "programmes",
            "faculty",
            "research",
            "achievements",
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
        className="fixed bottom-8 right-8 p-3 bg-[#141665] text-white rounded-full shadow-lg hover:bg-blue-900 transition-all hover:scale-110 cursor-pointer z-50 group"
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

export default ElectricalDepartment;
