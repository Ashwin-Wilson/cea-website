import React from "react";

const Hostels = () => {
    const hostels = [
        {
            name: "Mens Hostel",
            description: "Providing a safe and collaborative environment for male students.",
            rooms: "~40 Rooms",
            image: "/images/hostels/mens_hostel.png",
            location: "Within walking distance from the main campus (Manakala).",
            features: [
                "Well-furnished rooms with study tables and almirahs",
                "Free High-speed Wi-Fi connectivity",
                "Dedicated mess committee for quality food",
                "24/7 Security and surveillance",
                "Common recreation area"
            ],
            icon: "🏢"
        },
        {
            name: "Ladies Hostel",
            description: "A secure and nurturing home-away-from-home for female students.",
            rooms: "~40 Rooms",
            image: "/images/hostels/ladies_hostel.png",
            location: "Securely located within the college vicinity.",
            features: [
                "Daily housekeeping for superior hygiene",
                "Strict safety protocols and residential wardens",
                "Nutritious and delicious mess facility",
                "Separate washrooms with maintenance staff",
                "Access to basic medical first-aid"
            ],
            icon: "🏨"
        }
    ];

    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen">
            {/* Hero Section */}
            <header className="relative h-[350px] flex items-center bg-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/cea-image.png')] bg-cover bg-center opacity-25"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-950/60 to-transparent"></div>
                <div className="relative z-10 px-6 md:px-20 border-l-8 border-yellow-400 ml-4 md:ml-20">
                    <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight uppercase">
                        Residential <br /> Facilities
                    </h1>
                    <p className="text-lg md:text-xl mt-4 font-light text-blue-200 max-w-xl">
                        Experience community living and academic focus within our campus hostels.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-20 px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {hostels.map((hostel, index) => (
                        <div key={index} className="bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                            {/* Hostel Image */}
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={hostel.image}
                                    alt={hostel.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent opacity-60"></div>
                                <div className="absolute top-6 left-6 flex items-center gap-3">
                                    <span className="text-3xl bg-white/90 backdrop-blur-sm w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg border border-white/50">
                                        {hostel.icon}
                                    </span>
                                </div>
                            </div>

                            <div className="p-10 md:p-12">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-black italic text-blue-900 uppercase tracking-tighter">{hostel.name}</h2>
                                    <p className="text-sm font-bold text-yellow-500 uppercase tracking-widest">{hostel.rooms}</p>
                                </div>

                                <p className="text-gray-600 text-lg mb-10 leading-relaxed italic">"{hostel.description}"</p>

                                <div className="space-y-6">
                                    <h3 className="font-black text-blue-900 uppercase text-xs tracking-[0.2em] border-b border-gray-200 pb-2">Key Highlights</h3>
                                    <ul className="grid grid-cols-1 gap-4">
                                        {hostel.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                                                <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="text-sm text-gray-500 font-medium italic">
                                        Located at: {hostel.location}
                                    </div>
                                    <button className="bg-blue-900 text-white px-6 py-3 rounded-2xl font-black italic uppercase text-xs hover:bg-yellow-400 hover:text-blue-900 transition-all shadow-lg">
                                        View Contact
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* General Info & Rules Section */}
                <section className="mt-32">
                    <div className="bg-blue-900 text-white rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-8">Admission & Guidelines</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-6 items-start">
                                        <div className="bg-yellow-400 text-blue-900 font-black p-3 rounded-xl">01</div>
                                        <p className="text-blue-100 font-medium leading-relaxed">Seats are limited and allotted based on academic performance and distance. First-year students are given priority.</p>
                                    </div>
                                    <div className="flex gap-6 items-start">
                                        <div className="bg-yellow-400 text-blue-900 font-black p-3 rounded-xl">02</div>
                                        <p className="text-blue-100 font-medium leading-relaxed">Mess fees are calculated based on the dividing system and must be paid monthly.</p>
                                    </div>
                                    <div className="flex gap-6 items-start">
                                        <div className="bg-yellow-400 text-blue-900 font-black p-3 rounded-xl">03</div>
                                        <p className="text-blue-100 font-medium leading-relaxed">Students must strictly adhere to the hostel timings and discipline protocols.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
                                <h3 className="text-xl font-bold mb-6 italic underline decoration-yellow-400 underline-offset-8">Quick Contacts</h3>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">Hostel Committee</p>
                                        <p className="font-medium">chiefwarden@cea.ac.in</p>
                                    </div>
                                    <div>
                                        <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">Administrative Office</p>
                                        <p className="font-medium">+91 4734 230640</p>
                                        <p className="font-medium">office@cea.ac.in</p>
                                    </div>
                                </div>
                                <button className="mt-8 w-full bg-white text-blue-900 py-4 rounded-xl font-black uppercase italic shadow-lg hover:bg-yellow-400 transition-colors">
                                    Download Hostel Manual
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 py-10 text-center">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">© 2026 College of Engineering Adoor</p>
                <p className="text-[10px] text-gray-400 mt-2 italic flex items-center justify-center gap-2">
                    Made with excellence for our residents.
                </p>
            </footer>
        </div>
    );
};

export default Hostels;
