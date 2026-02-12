import React from "react";
import {
  Download,
  ExternalLink,
  User,
  Briefcase,
  Scale,
  BookOpen,
  FileText,
  Image as ImageIcon,
  FileCheck,
  FileClock,
  FilePlus,
  File,
} from "lucide-react";

// Reusable Card for individual download items
const DownloadItem = ({ title, icon: Icon, type = "download", link = "#" }) => (
  <a
    href={link}
    className="flex items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
    target={type === "external" ? "_blank" : "_self"}
    rel={type === "external" ? "noopener noreferrer" : ""}
  >
    <div
      className={`p-3 rounded-lg mr-4 transition-colors ${
        type === "external"
          ? "bg-purple-50 text-purple-600 group-hover:bg-purple-100"
          : "bg-blue-50 text-[#141665] group-hover:bg-blue-100"
      }`}
    >
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex-grow">
      <h3 className="font-semibold text-gray-800 group-hover:text-[#141665] transition-colors">
        {title}
      </h3>
      <p className="text-xs text-gray-400 mt-1 capitalize">
        {type === "external" ? "External Link" : "PDF Document"}
      </p>
    </div>
    <div className="text-gray-300 group-hover:text-[#141665] transition-colors">
      {type === "external" ? (
        <ExternalLink className="w-5 h-5" />
      ) : (
        <Download className="w-5 h-5" />
      )}
    </div>
  </a>
);

// Section Container Component
const DownloadSection = ({ title, icon: Icon, children, className = "" }) => (
  <div
    className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ${className}`}
  >
    <div className="bg-[#141665]/5 p-6 border-b border-[#141665]/10 flex items-center">
      <div className="p-2 bg-white rounded-lg shadow-sm mr-3">
        <Icon className="w-6 h-6 text-[#141665]" />
      </div>
      <h2 className="text-xl font-bold text-[#141665]">{title}</h2>
    </div>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  </div>
);

const DownloadsPage = () => {
  // Data Lists
  const studentResources = [
    {
      title: "Semester Registration Form",
      icon: FileText,
      link: "/downloads/sem-reg-form.pdf",
    },
    {
      title: "College Logo (High Res)",
      icon: ImageIcon,
      link: "/downloads/logo.png",
    },
    {
      title: "No Due Certificate",
      icon: FileCheck,
      link: "/downloads/no-due.pdf",
    },
  ];

  const staffResources = [
    {
      title: "Application for Leave (Rule 113)",
      icon: File,
      link: "/downloads/leave-rule-113.pdf",
    },
    {
      title: "Compensatory Leave Application",
      icon: FileClock,
      link: "/downloads/compensatory-leave.pdf",
    },
    {
      title: "Casual Leave Application",
      icon: FilePlus,
      link: "/downloads/casual-leave.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#141665]/20 selection:text-[#141665]">
      {/* Header Section */}
      <header className="relative bg-[#141665] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141665,#0f114a)]"></div>
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl">
              <Download className="w-10 h-10 text-blue-200" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Downloads & Resources
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed opacity-90">
            Access official forms, templates, and academic resources for
            students and faculty members.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10 relative z-20 space-y-8">
        {/* 1. Student & Staff Sections (Grid Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Student Section */}
          <DownloadSection title="Student Corner" icon={User}>
            {studentResources.map((item, idx) => (
              <DownloadItem key={idx} {...item} />
            ))}
          </DownloadSection>

          {/* Staff Section */}
          <DownloadSection title="Faculty & Staff" icon={Briefcase}>
            {staffResources.map((item, idx) => (
              <DownloadItem key={idx} {...item} />
            ))}
          </DownloadSection>
        </div>

        {/* 2. Campus Rules Section (Full Width) */}
        <div className="bg-[#141665] rounded-2xl shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-black/20 to-transparent"></div>
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-5">
              <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Campus Rules & Regulations
                </h2>
                <p className="text-blue-100 max-w-xl">
                  Download the comprehensive guide to campus code of conduct,
                  disciplinary rules, and general guidelines for all students.
                </p>
              </div>
            </div>
            <a
              href="/downloads/campus-rules.pdf"
              className="flex-shrink-0 inline-flex items-center px-6 py-3 bg-white text-[#141665] font-bold rounded-lg shadow-md hover:bg-blue-50 transition-transform transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF Guide
            </a>
          </div>
        </div>

        {/* 3. External Resources (Redirects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Syllabus Card */}
          <a
            href="https://ktu.edu.in/eu/acd/academicRegulations.htm" // Example KTU link
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-purple-700 transition-colors">
                  Syllabus & Regulations
                </h3>
                <p className="text-sm text-gray-500">
                  Redirects to University Portal
                </p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-purple-600 transition-colors" />
          </a>

          {/* Question Papers Card */}
          <a
            href="https://ktu.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-teal-50 text-teal-600 rounded-lg group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-teal-700 transition-colors">
                  Previous Question Papers
                </h3>
                <p className="text-sm text-gray-500">Access Question Bank</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-teal-600 transition-colors" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-20 py-8 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} College of Engineering Adoor. All
          documents are for official use only.
        </p>
      </footer>
    </div>
  );
};

export default DownloadsPage;
