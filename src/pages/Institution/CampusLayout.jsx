import React from 'react';

const CampusLayout = () => {
    const layoutImage = "/images/image-gallery/Institution/Campus layout.png";

    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <header className="relative h-[250px] flex items-center bg-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-blue-950/40"></div>
                <div className="relative z-10 px-6 md:px-20 border-l-8 border-yellow-400 ml-4 md:ml-20">
                    <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight uppercase">
                        Campus Layout
                    </h1>
                    <p className="text-lg md:text-xl mt-4 font-light text-blue-200">
                        A visual guide to the College of Engineering Adoor campus.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-16 px-6 md:px-12">
                <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 border border-gray-100 overflow-hidden">
                    <div className="relative group">
                        <img
                            src={layoutImage}
                            alt="Campus Layout"
                            className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.01]"
                            onError={(e) => {
                                e.target.src = "https://placehold.co/1200x800?text=Campus+Layout+Plan+Not+Found";
                                console.error("Image failed to load:", layoutImage);
                            }}
                        />

                        {/* Download/Fullscreen overlay hint */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-2xl pointer-events-none">
                            <span className="bg-white/90 text-blue-900 px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                                Zoomed View
                            </span>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-100 pt-12">
                        <div>
                            <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-2">Total Area</h3>
                            <p className="text-2xl font-black italic text-gray-700">12.5 Acres</p>
                        </div>
                        <div>
                            <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-2">Main Block</h3>
                            <p className="text-2xl font-black italic text-gray-700">65,000 Sq.Ft</p>
                        </div>
                        <div>
                            <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-2">Amenities</h3>
                            <p className="text-2xl font-black italic text-gray-700">20+ Blocks</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 bg-blue-50 border border-blue-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-blue-900 italic mb-2">Need a High-Resolution Version?</h3>
                        <p className="text-gray-600">The high-res blueprints are available for download for administrative or project purposes.</p>
                    </div>
                    <a
                        href={layoutImage}
                        download="CEA-Campus-Layout.png"
                        className="bg-blue-900 text-white px-8 py-3 rounded-xl font-black italic uppercase hover:bg-blue-800 transition-colors shadow-lg flex items-center gap-2"
                    >
                        Download Layout <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    </a>
                </div>
            </main>

            <footer className="bg-gray-100 py-6 text-center text-[10px] text-gray-400">
                © 2026 College of Engineering Adoor. All rights reserved.
            </footer>
        </div>
    );
};

export default CampusLayout;
