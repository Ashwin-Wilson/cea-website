import React from 'react';

const CollegeBus = () => {
    const instructionsPdf = "http://cea.ac.in/wp-content/uploads/2023/02/Instructions-for-college-bus.pdf";

    const routes = [
        {
            route: "Kottarakkara - Campus",
            path: "Kottarakkara ➜ KSRTC Depot ➜ High School Junction ➜ Manakala Campus",
            timing: "Morning: 8:40 AM | Evening: 4:40 PM"
        },
        {
            route: "Adoor Town - Campus",
            path: "Adoor Town ➜ KSRTC Stand ➜ Manakala Campus (Multiple trips)",
            timing: "Frequent intervals during peak hours"
        }
    ];

    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen">
            {/* Hero Section */}
            <header className="relative h-[350px] flex items-center bg-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-blue-950/40"></div>
                <div className="relative z-10 px-6 md:px-20 border-l-8 border-yellow-400 ml-4 md:ml-20">
                    <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight uppercase">
                        Transportation <br /> Services
                    </h1>
                    <p className="text-lg md:text-xl mt-4 font-light text-blue-200 max-w-xl">
                        Safe and reliable transit for students and staff, managed by the CEA PTA.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-20 px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-3xl font-black italic text-blue-900 uppercase mb-8 border-b-4 border-yellow-400 inline-block">College Bus Service</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                The College of Engineering Adoor provides dedicated bus services to facilitate easy commuting for its student community and faculty members.
                                Managed and maintained by the <strong>Parent Teacher Association (PTA)</strong>, our fleet ensures a safe and timely journey to and from the campus.
                            </p>
                        </section>

                        <section className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-black italic text-blue-900 uppercase mb-6 flex items-center gap-2">
                                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A2 2 0 013 15.382V6a2 2 0 011.553-1.894l4-2zM9 20l6 3 6-3V13.843a2 2 0 01-1.243-1.833L15 9l-6 3zM9 20V9L15 6v11l-6 3z"></path></svg>
                                Current Bus Routes
                            </h3>
                            <div className="space-y-6">
                                {routes.map((item, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-lg font-bold text-blue-900">{item.route}</h4>
                                            <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">{item.timing}</span>
                                        </div>
                                        <p className="text-gray-500 text-sm font-medium">{item.path}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / Fees / Instructions */}
                    <div className="space-y-8">
                        <div className="bg-blue-900 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
                            <h3 className="text-xl font-black italic mb-6 border-b border-white/20 pb-4">Fees & Passes</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">Standard Semester Pass</p>
                                    <p className="text-2xl font-black italic tracking-tighter">₹2,500 <span className="text-xs text-blue-300 font-bold uppercase">/ semester</span></p>
                                </div>
                                <div>
                                    <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">First Year/LET Students</p>
                                    <p className="text-sm font-medium leading-relaxed text-blue-100">
                                        A maintenance fee of ₹2,500 is collected at the time of admission, covering the first semester.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-400 p-10 rounded-[2.5rem] shadow-lg">
                            <h3 className="text-blue-900 text-xl font-black italic mb-4">Official Instructions</h3>
                            <p className="text-blue-900/70 text-sm font-medium mb-8 leading-relaxed">
                                Please read the official guidelines regarding bus seat allotment and discipline.
                            </p>
                            <a
                                href={instructionsPdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-blue-900 text-white py-4 rounded-2xl font-black italic uppercase tracking-widest hover:bg-blue-800 transition-colors"
                            >
                                View PDF Guide
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-100 py-10 text-center">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">© 2026 College of Engineering Adoor</p>
                <p className="text-[10px] text-gray-400 mt-2 italic flex items-center justify-center gap-2">
                    Managed by PTA - College of Engineering Adoor
                </p>
            </footer>
        </div>
    );
};

export default CollegeBus;
