import React from 'react';

const InstitutionStructure = () => {
    const structureImage = "/images/image-gallery/Institution/Sturcture.png";

    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <header className="relative h-[250px] flex items-center bg-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-blue-950/40"></div>
                <div className="relative z-10 px-6 md:px-20 border-l-8 border-yellow-400 ml-4 md:ml-20">
                    <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight uppercase">
                        Institution Structure
                    </h1>
                    <p className="text-lg md:text-xl mt-4 font-light text-blue-200">
                        The organizational hierarchy of College of Engineering Adoor.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-16 px-6 md:px-12">
                <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 border border-gray-100 overflow-hidden">
                    <div className="relative group flex justify-center">
                        <img
                            src={structureImage}
                            alt="Institution Structure"
                            className="max-w-full h-auto rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.01]"
                            onError={(e) => {
                                e.target.src = "https://placehold.co/1200x800?text=Institution+Structure+Not+Found";
                                console.error("Image failed to load:", structureImage);
                            }}
                        />
                    </div>

                    <div className="mt-12 bg-blue-50 border border-blue-100 rounded-3xl p-8">
                        <h3 className="text-xl font-bold text-blue-900 italic mb-4">About Our Organization</h3>
                        <p className="text-gray-600 leading-relaxed">
                            The College of Engineering Adoor follows a structured hierarchy to ensure efficient academic and administrative operations.
                            The Principal heads the institution, supported byvarious department heads, administrative staff, and student bodies.
                            Our structure is designed to foster transparency, accountability, and excellence in higher education.
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-400 text-sm">
                    Source: Official Mandatory Disclosure 2023 - Page 6
                </div>
            </main>

            <footer className="bg-gray-100 py-6 text-center text-[10px] text-gray-400">
                © 2026 College of Engineering Adoor. All rights reserved.
            </footer>
        </div>
    );
};

export default InstitutionStructure;
