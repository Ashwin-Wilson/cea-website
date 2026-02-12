import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Atom,
  FlaskConical,
  Calculator,
  BookOpen,
  Users,
  Lightbulb,
  Library,
  Presentation,
  Dna,
  Activity, // For Physical Education
  Microscope,
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
        <Microscope className="w-5 h-5 text-[#141665]" />
      </div>
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </section>
);

const AppliedSciencesDepartment = () => {
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", label: "About", icon: Atom },
    { id: "vision-mission", label: "Vision & Mission", icon: Lightbulb },
    { id: "disciplines", label: "Key Disciplines", icon: Dna },
    { id: "faculty", label: "Faculty", icon: Users },
    { id: "activities", label: "Workshops & Events", icon: Presentation },
    { id: "facilities", label: "Facilities", icon: Library },
  ];

  const disciplines = [
    {
      title: "Mathematics",
      icon: Calculator,
      desc: "Building the analytical foundation for complex engineering problem-solving.",
    },
    {
      title: "Physics",
      icon: Atom,
      desc: "Understanding the fundamental laws of nature governing engineering principles.",
    },
    {
      title: "Chemistry",
      icon: FlaskConical,
      desc: "Exploring material sciences and chemical processes relevant to industry.",
    },
    {
      title: "Humanities",
      icon: BookOpen,
      desc: "Developing communication skills and professional ethics for the workplace.",
    },
    {
      title: "Physical Education",
      icon: Activity,
      desc: "Fostering health, fitness, and team spirit among future engineers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#141665]/20 selection:text-[#141665]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#141665] rounded-lg flex items-center justify-center text-white shadow-lg">
              <Atom className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#141665] tracking-tight">
                Dept. of Applied Sciences
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
                The{" "}
                <span className="text-[#141665] font-bold">
                  Department of Applied Sciences
                </span>{" "}
                serves as the bedrock of engineering education. We are dedicated
                to building a strong conceptual foundation for students as they
                embark on their engineering journey.
              </p>

              <p className="text-gray-600">
                The department comprises a diverse team of highly experienced
                faculty members who bridge the gap between pure sciences and
                engineering applications. We handle core subjects including
                Mathematics, Physics, Chemistry, Humanities, and Physical
                Education, which are essential for the holistic development of
                an engineer.
              </p>

              {/* Experience Highlight */}
              <div className="bg-[#141665]/5 border-l-4 border-[#141665] p-6 rounded-r-lg my-6">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-[#141665] flex-shrink-0" />
                  <div>
                    <h3 className="text-[#141665] font-bold text-lg">
                      Experienced Faculty
                    </h3>
                    <p className="text-gray-600 mt-1">
                      The department prides itself on a team of faculty having
                      excellent academic profiles and teaching experience of
                      more than <span className="font-bold">10 years</span>,
                      ensuring quality guidance for foundational years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Disciplines Grid */}
          <Section id="disciplines" title="Key Disciplines">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {disciplines.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-[#141665]/5 hover:border-[#141665]/20 transition-all duration-300 group"
                >
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4 group-hover:shadow-md transition-shadow">
                    <item.icon className="w-6 h-6 text-[#141665]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#141665] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Features Section (Workshops & Library) */}
          <Section id="activities" title="Department Activities & Facilities">
            <div className="grid grid-cols-1 gap-6">
              {/* Workshops Card */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg mr-3">
                      <Presentation className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Workshops & Seminars
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    The department annually organizes workshops and seminars on
                    Mathematics and allied subjects for both students and staff,
                    fostering a culture of continuous learning and academic
                    exchange.
                  </p>
                </div>
              </div>

              {/* Library Card - Styled with Primary Color */}
              <div className="bg-[#141665] rounded-xl p-6 text-white relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <div className="relative z-10 flex items-start gap-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                    <Library className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Department Library
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      We maintain an excellent reference library stocked with
                      essential texts, journals, and resources to support the
                      academic curiosity of students in basic sciences and
                      humanities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Placeholder Sections */}
          {["vision-mission", "faculty"].map((id) => (
            <Section
              key={id}
              id={id}
              title={navItems.find((n) => n.id === id).label}
            >
              <div className="bg-gray-50 rounded-lg p-12 text-center border-2 border-dashed border-gray-200 group hover:border-[#141665]/30 transition-colors">
                <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-4">
                  {React.createElement(navItems.find((n) => n.id === id).icon, {
                    className:
                      "w-8 h-8 text-gray-400 group-hover:text-[#141665] transition-colors",
                  })}
                </div>
                <p className="text-gray-400 font-medium">
                  Content for{" "}
                  <span className="text-gray-600 font-bold">
                    {navItems.find((n) => n.id === id).label}
                  </span>{" "}
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

export default AppliedSciencesDepartment;
