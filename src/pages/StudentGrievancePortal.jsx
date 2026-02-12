import React from "react";
import { ShieldAlert, Send, User, Mail, MessageSquare } from "lucide-react";

const StudentGrievancePortal = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#141665]/20 selection:text-[#141665]">
      {/* Header Section with a patterned background */}
      <header className="relative bg-[#141665] py-24 overflow-hidden">
        {/* Subtle background pattern/gradient */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <ShieldAlert className="w-12 h-12 text-blue-300" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4 drop-shadow-sm">
            Student Grievance Portal
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            We are here to listen. Please submit your grievance, and we will
            address it promptly and confidentially.
          </p>
        </div>
      </header>

      {/* Main Content - Form Card */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-24 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-[#141665] mb-10 flex items-center">
              <MessageSquare className="w-8 h-8 mr-4 text-blue-600" />
              Submit Your Grievance
            </h2>

            <form className="space-y-8">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-800 mb-2"
                >
                  Full Name{" "}
                  <span className="text-red-500 text-lg align-middle">*</span>
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-6 w-6 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-[#141665] focus:ring-0 sm:text-base transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-800 mb-2"
                >
                  Email Address{" "}
                  <span className="text-red-500 text-lg align-middle">*</span>
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-6 w-6 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-[#141665] focus:ring-0 sm:text-base transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="e.g. rolln@cea.ac.in"
                    required
                  />
                </div>
              </div>

              {/* Grievance Textarea */}
              <div>
                <label
                  htmlFor="grievance"
                  className="block text-sm font-bold text-gray-800 mb-2"
                >
                  Grievance Detail{" "}
                  <span className="text-red-500 text-lg align-middle">*</span>
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <textarea
                    id="grievance"
                    rows={8}
                    className="block w-full p-4 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-[#141665] focus:ring-0 sm:text-base resize-y transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Please describe your grievance in detail..."
                    required
                  />
                </div>
              </div>

              {/* reCAPTCHA Placeholder */}
              <div className="flex justify-start">
                <div className="bg-gray-50 px-6 py-4 rounded-xl border-2 border-gray-200 flex items-center space-x-4 hover:border-gray-300 transition-colors">
                  <div className="flex items-center h-6">
                    <input
                      id="recaptcha_checkbox"
                      type="checkbox"
                      className="h-6 w-6 text-[#141665] border-gray-300 rounded focus:ring-[#141665] cursor-pointer transition-all duration-200"
                    />
                  </div>
                  <label
                    htmlFor="recaptcha_checkbox"
                    className="text-base text-gray-700 select-none cursor-pointer font-medium"
                  >
                    I'm not a robot
                  </label>
                  <div className="ml-6 pl-6 border-l-2 border-gray-200">
                    <img
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      alt="reCAPTCHA logo"
                      className="h-10 w-10 opacity-80"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-5 px-8 border border-transparent rounded-xl shadow-lg text-xl font-bold text-white bg-gradient-to-r from-[#141665] to-blue-700 hover:from-blue-800 hover:to-[#141665] focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-6 h-6 mr-3" />
                  Submit Grievance
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#141665] text-blue-200 py-10 text-center mt-24">
        <p className="font-bold text-lg">
          © {new Date().getFullYear()} College of Engineering Adoor
        </p>
        <p className="text-base mt-3 opacity-80 max-w-md mx-auto">
          Ensuring a safe, respectful, and supportive campus environment for
          everyone.
        </p>
      </footer>
    </div>
  );
};

export default StudentGrievancePortal;
