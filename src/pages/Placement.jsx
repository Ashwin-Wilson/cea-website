import React from 'react';

const Placement = () => {
    const stats = [
        { label: "Highest Package", value: "4.5 LPA", sub: "Annual Offer" },
        { label: "Average Package", value: "3.5 LPA", sub: "B.Tech Graduates" },
        { label: "Companies Visited", value: "30+", sub: "Annual Recruiters" },
        { label: "Total Students", value: "360~", sub: "Eligible for Placement" }
    ];

    const recruiters = [
        "Infosys", "Cognizant", "TCS", "UST Global", "QBurst",
        "Wipro", "HCL", "L&T", "Mindtree", "Oracle",
        "Tata Elxsi", "Federal Bank", "Amazon", "Flipkart", "Byjus"
    ];

    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen">
            {/* Hero Section */}
            <header className="relative h-[400px] flex items-center bg-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/cea-image.png')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
                <div className="relative z-10 px-6 md:px-20 border-l-8 border-yellow-400 ml-4 md:ml-20">
                    <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight uppercase">
                        Placement <br /> Hub
                    </h1>
                    <p className="text-lg md:text-2xl mt-4 font-light text-blue-200 max-w-2xl">
                        Empowering students with world-class career opportunities and industry-ready skills.
                    </p>
                </div>
            </header>

            {/* Placement Statistics */}
            <section className="bg-blue-900 text-white py-12 px-6 md:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center border-r-0 lg:border-r border-blue-800 last:border-0">
                            <h3 className="text-3xl md:text-5xl font-black text-yellow-400 italic mb-2">{stat.value}</h3>
                            <p className="font-bold text-sm uppercase tracking-wide">{stat.label}</p>
                            <p className="text-[10px] text-blue-300 uppercase mt-1">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-20 px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Left Column: About CGPU */}
                    <div className="lg:col-span-2 space-y-10">
                        <section>
                            <h2 className="text-3xl font-bold text-blue-900 italic border-b-4 border-yellow-400 inline-block mb-8">Career Guidance & Placement Unit (CGPU)</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                The Career Guidance and Placement Unit (CGPU) of College of Engineering, Adoor is always aiming and working towards providing the best training and exposure to the students so that they are well prepared for their forthcoming future.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Today’s recruiters seek recruits who have tremendous technical prowess in equal measure with interpersonal skills. The CGPU aims very much to prepare the students to the likeness and requirements of the recruiters.
                            </p>
                        </section>

                        <section className="bg-gray-50 p-10 rounded-3xl border border-gray-100 italic relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16"></div>
                            <h3 className="text-xl font-bold text-blue-900 mb-4 italic">Our Mission</h3>
                            <p className="text-gray-600">
                                "To bridge the gap between academic brilliance and industry expectations by fostering professional excellence, ethical values, and holistic development in our students."
                            </p>
                        </section>
                    </div>

                    {/* Right Column: Contact & Team */}
                    <div className="space-y-8">
                        <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full -mb-12 -mr-12 group-hover:scale-150 transition-transform duration-500"></div>
                            <h3 className="text-xl font-bold italic mb-6 border-b border-white/20 pb-4">Placement Officer</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-yellow-400 text-xs uppercase font-bold tracking-widest mb-1">Office Address</p>
                                    <p className="text-sm font-medium leading-relaxed">
                                        College of Engineering, Adoor<br />
                                        Manakkala PO, Adoor-691551<br />
                                        Pathanamthitta District.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-yellow-400 text-xs uppercase font-bold tracking-widest mb-1">Emails</p>
                                    <p className="text-sm font-medium break-all underline cursor-pointer hover:text-yellow-200">
                                        cgpucea@gmail.com<br />
                                        cgpu@cea.ac.in
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
                            <h3 className="text-blue-900 font-bold mb-4 uppercase text-sm tracking-widest border-l-4 border-yellow-400 pl-3">Quick Links</h3>
                            <ul className="space-y-3">
                                {["Placement Records", "Training Activities", "Our Team", "Brochure 2026"].map((link, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-600 hover:text-blue-800 cursor-pointer text-sm font-medium transition-colors">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Top Recruiters Grid */}
                <section className="mt-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-blue-900 italic uppercase">Top Recruiters</h2>
                        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
                        <p className="text-gray-500 mt-4 max-w-xl mx-auto italic">Industry leaders consistently choose College of Engineering Adoor for their talent procurement.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border border-gray-100 shadow-xl rounded-3xl overflow-hidden">
                        {recruiters.map((company, i) => (
                            <div key={i} className="aspect-video flex items-center justify-center p-8 bg-white border border-gray-50 hover:bg-blue-50 transition-colors group cursor-pointer">
                                <span className="text-xl font-black text-gray-300 group-hover:text-blue-900 transition-all uppercase italic grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100">
                                    {company}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 py-10 text-center">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">© 2026 College of Engineering Adoor</p>
                <p className="text-[10px] text-gray-400 mt-2">All Rights Reserved. | Managed by CGPU CEA</p>
            </footer>
        </div>
    );
};

export default Placement;
