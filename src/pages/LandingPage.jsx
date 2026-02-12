import React from 'react';
import NewsCarousel from '../components/NewsCarousel';
const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden" style={{
      backgroundImage: "url('/images/cea-image.png')",
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>

      {/* Hero Section */}
      <header className="relative h-[400px] md:h-[500px] flex items-center"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6 md:px-20 border-l-4 md:border-l-8 border-yellow-400 mx-4 md:ml-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white italic tracking-tighter leading-tight">
            COLLEGE OF <br className="md:hidden" /> ENGINEERING ADOOR
          </h2>
          <p className="text-sm md:text-xl text-white mt-4 font-light max-w-xl">
            Ranked Among the Top 100 Universities Worldwide <br />
            <span className="text-yellow-400 font-medium">NAAC A++ Accredited</span> | No. 1 in India for Impact
          </p>
          <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 md:px-8 md:py-3 rounded font-bold uppercase text-xs md:text-sm">
            Explore More
          </button>
        </div>
      </header>

      {/* Stats Bar - Scrollable on mobile, Grid on Desktop */}
      <section className="py-8 px-4 md:px-20 bg-white shadow-sm">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {[
            { label: "A++", sub: "NAAC Accreditation" },
            { label: "Top 10", sub: "NIRF University Rank" },
            { label: "Top 100", sub: "THE Impact Rankings" },
            { label: "8", sub: "World-Class Campuses" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-2xl md:text-4xl font-black text-blue-800 italic">{stat.label}</h3>
              <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News and Notice Board Section */}
      <section className="bg-gray-50 py-10 px-4 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* News Column */}
        <div className="lg:col-span-2">
          <NewsCarousel />
        </div>

        {/* Notice Board Column */}
        <div className="bg-blue-900 text-white rounded-lg p-5 md:p-6 shadow-xl h-fit">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg md:text-xl font-bold italic">Notice Board</h3>
            <span className="text-[10px] underline cursor-pointer">View All</span>
          </div>
          <div className="space-y-4 md:space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border-b border-blue-700/50 pb-4 last:border-0">
                <p className="text-xs md:text-sm font-medium hover:text-yellow-400 transition-colors">Recruitment Notice for Assistant Professor in Mechanical Engineering</p>
                <span className="text-[10px] text-blue-300 mt-1 block">30/12/2026</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Boxes - Stacked on Mobile, 3-Cols on Desktop */}
      <section className="px-4 md:px-10 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <h4 className="text-blue-900 font-bold text-lg mb-3 border-b-2 border-blue-900 inline-block uppercase">About</h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              The College of Engineering, Adoor, was set up in October 1995 by the IHRD, a Govt. of Kerala undertaking...
            </p>
          </div>
          <button className="bg-blue-900 text-white w-fit px-4 py-1.5 text-[10px] rounded hover:bg-blue-800 transition-all">Read More</button>
        </div>

        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <h4 className="text-blue-900 font-bold text-lg mb-3 border-b-2 border-blue-900 inline-block uppercase">Vision</h4>
          <p className="italic text-gray-600 text-sm leading-relaxed">
            "Develop into a premier institution, creating socially committed and globally competent engineering professionals."
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 md:col-span-2 lg:col-span-1">
          <h4 className="text-blue-900 font-bold text-lg mb-3 border-b-2 border-blue-900 inline-block uppercase">Mission</h4>
          <ul className="text-xs text-gray-600 list-disc pl-4 space-y-2">
            <li>To provide quality education and foster research...</li>
            <li>To encourage innovation and entrepreneurship...</li>
            <li>To develop professional and leadership skills...</li>
          </ul>
        </div>
      </section>
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-6xl mx-auto">


          {/* Principal Message Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 border border-gray-100 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-12">

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  Message from the Principal
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "Being the part of an organization clustering eighty plus educational institutions with serene vision, set to adapt the latest educational challenges with the motto “Think globally acts locally” is our strength. Our alumni have proved their commitment by contributing to the industrial and commercial sector and supporting the society."
                </p>
                <div className="border-l-4 border-blue-600 pl-4">
                  <span className="block text-xl font-bold text-blue-900">— Dr. Nisha Kuruvilla</span>
                </div>
              </div>

              {/* Profile Section */}
              <div className="w-32 h-32 rounded-full border-4 border-blue-400 overflow-hidden shadow-lg">
                {/* Image Field */}
                <img
                  src="/images/principal-img.jpeg"
                  alt="Principal"
                  className="w-full h-full object-cover bg-gray-200"
                />
              </div>
            </div>
          </div>

          {/* Section Header */}
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Departments
          </h2>
          {/* Departments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Mechanical Engineering",
              "Electronics & Engineering",
              "Electrical & Engineering",
              "Eirisud Bice",
              "Electrical Engineering",
              "Eletrical Engineering"
            ].map((dept, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center border-b-4 border-transparent hover:border-blue-500"
              >
                {/* Icon Placeholder */}
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  {/* Replace with Lucide-react or FontAwesome icons */}
                  <div className="w-10 h-10 border-2 border-white rounded-md flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 leading-tight">
                  Department of <br /> {dept}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </div>
      {/* Footer Placeholder */}
      <footer className="bg-gray-100 py-6 text-center text-[10px] text-gray-400">
        © 2026 College of Engineering Adoor. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;