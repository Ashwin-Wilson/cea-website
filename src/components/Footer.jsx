import React from "react";
import { MapPin, Mail, Phone, Send, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] text-gray-300 py-16 px-6 md:px-12 lg:px-20 font-sans relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Column 1: Contact Form */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-[#00aeef] after:rounded-full">
            Contact Us
          </h2>
          <form className="space-y-4 text-left flex-grow flex flex-col">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1.5">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-[#1e1e1e] border border-gray-800 text-white rounded-xl focus:outline-none focus:border-[#00aeef] focus:ring-1 focus:ring-[#00aeef] transition-all placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-[#1e1e1e] border border-gray-800 text-white rounded-xl focus:outline-none focus:border-[#00aeef] focus:ring-1 focus:ring-[#00aeef] transition-all placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1.5">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 bg-[#1e1e1e] border border-gray-800 text-white rounded-xl focus:outline-none focus:border-[#00aeef] focus:ring-1 focus:ring-[#00aeef] transition-all resize-none placeholder-gray-600"
              ></textarea>
            </div>

            {/* Simple reCAPTCHA Placeholder */}
            <div className="bg-[#1e1e1e] border border-gray-800 p-3 rounded-xl flex items-center justify-between mt-2">
              <div className="flex items-center gap-3 pl-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-600 text-[#00aeef] focus:ring-[#00aeef] bg-transparent cursor-pointer"
                />
                <span className="text-gray-400 text-sm font-medium select-none">
                  I'm not a robot
                </span>
              </div>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="captcha"
                className="w-8 opacity-80"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00aeef] to-[#007baf] hover:from-[#0096ce] hover:to-[#00608a] text-white font-bold py-3.5 px-8 rounded-xl uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#00aeef]/20 hover:shadow-[#00aeef]/40 active:scale-[0.98]"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>

        {/* Column 2: Map & Title */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-[#00aeef] after:rounded-full">
            Find Us
          </h2>
          <div className="w-full flex-grow rounded-2xl overflow-hidden relative shadow-2xl border border-gray-800 group min-h-[300px]">
            {/* Subtle overlay to blend map with dark theme, disappears on hover */}
            <div className="absolute inset-0 bg-[#00aeef]/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
            <iframe
              title="College Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d80505.44769300119!2d76.72876879386149!3d9.140990686670904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0611e606b00001%3A0x27dc62f29d54f358!2sCollege%20Of%20Engineering%2C%20Adoor!5e0!3m2!1sen!2sin!4v1770889228814!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0 filter grayscale-[20%] contrast-[1.1]"
            ></iframe>
          </div>
        </div>

        {/* Column 3: Other Links & Contact Info */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-[#00aeef] after:rounded-full">
            Important Links
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { name: "KTU", img: "/images/logos/KTU-logo.png" },
              { name: "IHRD", img: "/images/logos/IHRD-logo.png" },
              {
                name: "Govt. of Kerala",
                img: "/images/logos/kerala-gov-logo.png",
              },
              { name: "AICTE", img: "/images/logos/AICTE-logo.webp" },
              {
                name: "Dept. of Higher Education",
                img: "/images/logos/kerala-gov-logo.png",
              },
            ].map((link) => (
              <a
                key={link.name}
                href="#"
                className="flex items-center gap-4 bg-[#1e1e1e] border border-gray-800 p-3 rounded-xl hover:bg-[#2a2a2a] hover:border-gray-700 transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1 shadow-sm">
                  <img
                    src={link.img}
                    alt={link.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          <div className="bg-[#1e1e1e] border border-gray-800 rounded-2xl p-6 mt-auto">
            <h3 className="text-lg font-bold text-white mb-4">
              College Details
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00aeef] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  <strong className="text-gray-300 block mb-1">
                    College of Engineering Adoor
                  </strong>
                  Manakala PO, Adoor,
                  <br />
                  Pathanamthitta, Kerala
                  <br />
                  Pin: 691551
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00aeef] flex-shrink-0" />
                <a
                  href="mailto:principal@cea.ac.in"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  principal@cea.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00aeef] flex-shrink-0" />
                <a
                  href="tel:+918547005100"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 8547005100
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} College of Engineering Adoor. All rights
          reserved.
        </p>
        <div className="flex gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>

      {/* Scroll to Top Arrow */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 bg-[#222] hover:bg-[#00aeef] text-white p-3 rounded-full shadow-lg shadow-black/50 border border-gray-700 hover:border-[#00aeef] transition-all duration-300 group z-50 hover:-translate-y-1"
      >
        <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
