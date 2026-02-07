import React from 'react';

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">

      {/* Hero Section */}
      <header className="relative h-[400px] md:h-[500px] flex items-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=1350&q=80')" }}>
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
          <h2 className="text-2xl md:text-3xl font-bold italic mb-6 border-b-4 border-blue-800 inline-block">Latest News & Events</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
            <div className="h-48 md:h-80 bg-red-800 flex items-center justify-center relative px-4">
               <div className="text-center text-white z-10">
                  <h4 className="text-xl md:text-4xl font-black tracking-widest leading-tight">REGISTRATION OPENED</h4>
                  <p className="mt-2 text-xs md:text-xl italic">24-HOUR NATIONAL LEVEL HACKATHON</p>
               </div>
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_#000_10%,_transparent_10%)] bg-[length:15px_15px]"></div>
            </div>
            <div className="p-4 md:p-6">
              <span className="text-blue-600 font-bold text-[10px] md:text-xs uppercase">Research</span>
              <h4 className="text-lg md:text-xl font-bold mt-1 italic">CEA Researchers Develop Sustainable Tech...</h4>
            </div>
          </div>
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
      
      {/* Footer Placeholder */}
      <footer className="bg-gray-100 py-6 text-center text-[10px] text-gray-400">
        © 2026 College of Engineering Adoor. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;