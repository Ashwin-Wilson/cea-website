import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  UserPlus,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
} from "lucide-react";

// Reusable Section Heading Component
const SectionHeading = ({ icon: Icon, title, subtitle }) => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center mb-4">
      <div className="p-3 bg-blue-100 rounded-full">
        <Icon className="w-8 h-8 text-[#141665]" />
      </div>
    </div>
    <h2 className="text-3xl font-bold text-[#141665] mb-2">{title}</h2>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

// Carousel Component for Distinguished Alumni
const DistinguishedAlumniCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // DATA: Add your multiple images here
  const slides = [
    {
      id: 1,
      // Replace with your actual image path, e.g., require('./assets/poster1.jpg')
      image:
        "https://cea.ac.in/wp-content/uploads/slider/cache/87438176b97c7da9fba6c50ce2f25e70/backtocampus.jpg",
      alt: "Seminar on AI Edge Computing",
      caption: "Live Seminar on AI Edge Computing by Jobin Cyriac",
    },
    {
      id: 2,
      image:
        "https://cea.ac.in/wp-content/uploads/slider/cache/573327992d8de989d5414c348734fac5/1.jpg",
      alt: "Alumni Meetup",
      caption: "Annual Alumni Meetup 2024 - Batch of '99",
    },
    {
      id: 3,
      image:
        "https://cea.ac.in/wp-content/uploads/slider/cache/b14ec642ba7ca66f7f1ab23320a29301/sriram.jpg",
      alt: "Tech Talk Series",
      caption: "Tech Talk Series: Innovations in Engineering",
    },
    {
      id: 4,
      image:
        "https://cea.ac.in/wp-content/uploads/slider/cache/a07f60e6b2003ff7dbdc281848b5f657/10.png",
      alt: "Tech Talk Series",
      caption: "Tech Talk Series: Innovations in Engineering",
    },
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Main Carousel Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {/* Image Container */}
            <div className="w-full h-full relative group">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover md:object-contain bg-gray-50"
              />

              {/* Optional Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-lg font-medium">
                  {slide.caption}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Controls - Only show if there is more than 1 slide */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-[#141665] hover:bg-[#141665] hover:text-white transition-all duration-300 group z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-[#141665] hover:bg-[#141665] hover:text-white transition-all duration-300 group z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </>
        )}
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center mt-6 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full h-3 ${
              index === currentSlide
                ? "w-10 bg-[#141665]"
                : "w-3 bg-gray-300 hover:bg-blue-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Office Bearers Table Component
const OfficeBearersTable = () => {
  // Data from the image
  const officeBearers = [
    { name: "Dr.Sunil Kumar.K ( Principal)", designation: "President" },
    { name: "Ms.Girija.M.G (Faculty)", designation: "Vice President" },
    { name: "Mr.Reji Thankachan (Student)", designation: "Vice President" },
    { name: "Dr.Binulal.B.R (Faculty)", designation: "Secretary" },
    { name: "Dr.Biju.V.G (Student)", designation: "Secretary" },
    { name: "Mr.Harikumar.T (Faculty)", designation: "Treasurer" },
  ];

  const executiveCommittee = [
    { name: "Dr.Ajitha.P.S", designation: "Faculty member" },
    { name: "Dr.John George", designation: "Faculty member" },
    { name: "Dr.Venkitaraj.K.P", designation: "Faculty member" },
    { name: "Ms.Sobhraj.N", designation: "Faculty member" },
    { name: "Mr.Jayaram.K", designation: "Faculty member" },
    { name: "Mr.Madhu.A.K", designation: "Faculty member" },
    { name: "Ms.Sreedeepa.H.S", designation: "Faculty member" },
    { name: "Mr.Sajomon Mathew", designation: "Faculty member" },
    { name: "Mr.Prasanth Mathew", designation: "Student member" },
    { name: "Ms.Malavika.P", designation: "Student member" },
    { name: "Mr.Sujith C S", designation: "Student member" },
    { name: "Mr.Gautam Pradeep", designation: "Student member" },
    { name: "Mr.Robin.K.Thomas", designation: "Student member" },
    { name: "Mr.Sujith Vasudevan", designation: "Student member" },
    { name: "Mr.Sajin Sachidandan", designation: "Student member" },
    { name: "Mr.Arjun Raju", designation: "Student member" },
  ];

  const TableRow = ({ name, designation }) => (
    <tr className="hover:bg-blue-50/30 transition-colors border-b border-gray-100 last:border-0">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {designation}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
    </tr>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      {/* Search & Filter Header */}
      <div className="p-4 bg-gray-50 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h3 className="text-lg font-bold text-[#141665] flex items-center">
          <Users className="w-5 h-5 mr-2" />
          Association Members
        </h3>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-grow sm:flex-grow-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search name..."
              className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#141665] focus:border-transparent"
            />
          </div>
          <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-[#141665] transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#141665] uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#141665] uppercase tracking-wider">
                Designation
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#141665] uppercase tracking-wider">
                Email ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#141665] uppercase tracking-wider">
                Contact Number
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {officeBearers.map((member, index) => (
              <TableRow key={index} {...member} />
            ))}
            {/* Executive Committee Header Row */}
            <tr className="bg-gray-50">
              <td
                colSpan="4"
                className="px-6 py-3 text-sm font-bold text-[#141665] uppercase tracking-wider"
              >
                Executive committee members
              </td>
            </tr>
            {executiveCommittee.map((member, index) => (
              <TableRow key={index + officeBearers.length} {...member} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AlumniPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#141665]/20 selection:text-[#141665]">
      {/* Header Section */}
      <header className="relative bg-[#141665] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-[#141665] to-[#0a0c40] opacity-80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <GraduationCap className="w-12 h-12 text-blue-200" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            CEA Alumni Association
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md mb-10">
            Connecting the past, present, and future of College of Engineering
            Adoor. Join our vibrant community today.
          </p>

          {/* Registration Button */}
          <a
            href="#" // Replace with actual registration link
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full shadow-lg text-[#141665] bg-white hover:bg-blue-50 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <UserPlus className="w-6 h-6 mr-3" />
            Click Here for Alumni Registration
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Distinguished Alumni Section */}
        <section>
          <SectionHeading
            icon={Award}
            title="Distinguished Alumni"
            subtitle="Celebrating the achievements and contributions of our esteemed alumni across the globe."
          />
          <DistinguishedAlumniCarousel />
        </section>

        {/* Office Bearers Section */}
        <section>
          <SectionHeading
            icon={Users}
            title="Alumni Association Office Bearers"
            subtitle="Meet the dedicated team leading our alumni community."
          />
          <OfficeBearersTable />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#141665] text-blue-200 py-10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            <div className="p-3 bg-white/10 rounded-full">
              <GraduationCap className="w-8 h-8 text-blue-300" />
            </div>
          </div>
          <p className="font-bold text-lg text-white mb-2">
            College of Engineering Adoor
          </p>
          <p>
            © {new Date().getFullYear()} Alumni Association. All rights
            reserved.
          </p>
          <p className="text-sm mt-4 opacity-75">
            Fostering connections, enabling growth.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AlumniPage;
