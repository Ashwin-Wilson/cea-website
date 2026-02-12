import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  BookOpen,
  Eye,
  Award,
  Users,
  FlaskConical,
  Lightbulb,
  Newspaper,
  Folder,
} from "lucide-react";

const NavItem = ({ to, children, icon: Icon, active, onClick }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={500}
    offset={-70}
    className={`flex items-center px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg cursor-pointer group ${
      active
        ? "bg-blue-800/50 text-blue-100 shadow-inner"
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

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="py-12 scroll-mt-20 border-b border-gray-100 last:border-b-0"
  >
    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </section>
);

const MechanicalDepartment = () => {
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", label: "About", icon: BookOpen },
    { id: "vision-mission", label: "Vision & Mission", icon: Eye },
    { id: "peo-pso-po", label: "PEO / PSO / PO", icon: Award },
    { id: "department-notice-board", label: "Notice Board", icon: Newspaper },
    { id: "programmes-offered", label: "Programmes", icon: BookOpen },
    { id: "faculty-staff-students", label: "People", icon: Users },
    {
      id: "laboratories-facilities",
      label: "Labs & Facilities",
      icon: FlaskConical,
    },
    { id: "research-consultancy", label: "Research", icon: Lightbulb },
    { id: "achievements-activities", label: "Achievements", icon: Award },
    { id: "department-newsletter", label: "Newsletter", icon: Newspaper },
    { id: "resources", label: "Resources", icon: Folder },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Department of Mechanical Engineering
            </h1>
            <p className="mt-1 text-sm text-blue-600 font-medium">
              College of Engineering Adoor
            </p>
          </div>
          {/* Placeholder for a logo or search bar */}
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <FlaskConical className="w-6 h-6" />
          </div>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <nav className="lg:col-span-1">
          <div className="bg-blue-950 rounded-2xl p-4 shadow-lg sticky top-28">
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
        <main className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-8 lg:p-10">
          <Section id="about" title="About the Department">
            <div className="space-y-6">
              <p>
                The Department of Mechanical Engineering was established in 1995
                with an initial annual intake of 60 students, which was later
                increased to 120 in the academic year 2012-2013. The department
                currently offers a comprehensive four-year Undergraduate
                Programme (B.Tech) in Mechanical Engineering.
              </p>
              <p>
                Our department boasts a team of highly qualified and experienced
                faculty members, many of whom hold postgraduate and doctoral
                degrees from prestigious institutions. They are actively
                involved in research and have numerous publications in reputed
                international and national journals and conferences.
              </p>
            </div>
          </Section>

          <Section
            id="laboratories-facilities"
            title="Laboratories & Facilities"
          >
            <p className="mb-4">
              The department is equipped with state-of-the-art laboratory
              facilities that cater to the academic and research needs of both
              students and faculty. Our labs provide hands-on experience and
              foster innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                "Basic Engineering Workshops",
                "Thermal Engineering Lab",
                "Heat and Mass Transfer Lab",
                "Fluid Mechanics & Machinery Lab",
                "Material Testing Lab",
                "Machine Shop",
                "Metrology Lab",
                "CAD/CAM LAB",
                "Mechanical Engineering Lab",
                "Advanced Thermal & Fluid Research Lab (Project Lab 1)",
                "CFD Lab (Project Lab 2)",
              ].map((lab, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 bg-blue-50/50 rounded-lg"
                >
                  <FlaskConical className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                  <span className="font-medium text-gray-800">{lab}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="achievements-activities"
            title="Student Activities & Exposure"
          >
            <div className="space-y-6">
              <p>
                We believe in holistic development. Students gain valuable
                industrial exposure through mandatory internships and industrial
                visits during their course of study. They are strongly
                encouraged to organize and participate in co-curricular and
                extra-curricular activities to enhance their technical,
                professional, and soft skills.
              </p>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  Professional Societies
                </h3>
                <p className="mb-4">
                  Our students have the opportunity to associate with and become
                  members of renowned professional societies, broadening their
                  horizons and networking capabilities.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["SAE INDIA", "ASME", "IEEE"].map((society, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-blue-700 font-semibold rounded-full text-sm shadow-sm border border-blue-100"
                    >
                      {society}
                    </span>
                  ))}
                </div>
              </div>
              <p>
                The department's student association, <strong>FORUM</strong>, is
                very active and regularly organizes a variety of technical and
                non-technical programmes, workshops, and events throughout the
                year.
              </p>
            </div>
          </Section>

          {/* Placeholders for other sections to demonstrate scrolling behavior */}
          {navItems
            .filter(
              (item) =>
                ![
                  "about",
                  "laboratories-facilities",
                  "achievements-activities",
                ].includes(item.id),
            )
            .map((item) => (
              <Section key={item.id} id={item.id} title={item.label}>
                <p className="text-gray-500 italic">
                  Content for the {item.label} section will be populated here.
                  This is a placeholder to demonstrate the modern layout and
                  navigation structure.
                </p>
              </Section>
            ))}
        </main>
      </div>

      {/* Scroll to Top Button */}
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors cursor-pointer z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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

export default MechanicalDepartment;
