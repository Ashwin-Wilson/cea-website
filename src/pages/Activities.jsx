import React from 'react';
import { Link } from 'react-router-dom';

const Activities = () => {
    const activityCategories = [
        {
            title: "Technical Organizations",
            description: "Fostering engineering excellence through global professional bodies.",
            items: [
                { name: "IEEE Student Branch", desc: "One of the oldest branches in Region 10, promoting technical innovation.", link: "/ieee", icon: "🔌" },
                { name: "ASME CEA", desc: "American Society of Mechanical Engineers student section.", link: "/asme", icon: "⚙️" },
                { name: "SAE CEA", desc: "Home to Team Drutha, Astra, and Aagneya racing teams.", link: "/sae", icon: "🏎️" },
                { name: "ISTE", desc: "International Society for Technology in Education chapter.", link: "/iste", icon: "📚" }
            ]
        },
        {
            title: "Student Clubs",
            description: "Nurturing creativity and cultural talents beyond academics.",
            items: [
                { name: "Pranah", desc: "The vibrant Music Club of CEA Adoor.", link: "/music-club", icon: "🎸" },
                { name: "Atharva", desc: "Expressing emotions through modern and classical dance.", link: "/dance-club", icon: "💃" },
                { name: "Navarasa", desc: "Exploring the world of cinema and filmmaking.", link: "/film-club", icon: "🎬" },
                { name: "Sports Club", desc: "Promoting physical fitness and competitive spirit.", link: "/sports", icon: "⚽" }
            ]
        },
        {
            title: "Service & Governance",
            description: "Developing socially committed citizens and leaders.",
            items: [
                { name: "NSS Unit", desc: "National Service Scheme focusing on social engineering.", link: "/nss", icon: "🤝" },
                { name: "Student Senate", desc: "The representative body for student welfare and activities.", link: "/senate", icon: "🏛️" }
            ]
        }
    ];

    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen">
            {/* Hero Section */}
            <header className="relative h-[350px] flex items-center bg-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/cea-image.png')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-blue-900/40"></div>
                <div className="relative z-10 px-6 md:px-20 border-l-8 border-yellow-400 ml-4 md:ml-20">
                    <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight uppercase">
                        Campus <br /> Activities
                    </h1>
                    <p className="text-lg md:text-xl mt-4 font-light text-blue-200 max-w-xl">
                        A vibrant ecosystem of clubs, technical societies, and cultural forums.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-20 px-6 md:px-12">
                <div className="space-y-24">
                    {activityCategories.map((category, idx) => (
                        <div key={idx} className="space-y-10">
                            <div className="border-l-4 border-yellow-400 pl-6">
                                <h2 className="text-3xl font-bold text-blue-900 italic uppercase">{category.title}</h2>
                                <p className="text-gray-500 mt-2 italic">{category.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {category.items.map((item, i) => (
                                    <div key={i} className="group bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                                        <div>
                                            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                                            <h3 className="text-xl font-bold text-blue-900 mb-2">{item.name}</h3>
                                            <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <Link
                                            to={item.link}
                                            className="bg-blue-900 text-white text-center py-2 rounded-xl font-bold text-xs uppercase tracking-widest group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors"
                                        >
                                            Explore Page
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-gray-100 py-10 text-center">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">© 2026 College of Engineering Adoor</p>
                <p className="text-[10px] text-gray-400 mt-2">Nurturing Excellence | Shaping The Future</p>
            </footer>
        </div>
    );
};

export default Activities;
