import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-12 px-6 md:px-16 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Column 1: Contact Form */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
                    <form className="space-y-4 text-left">
                        <div>
                            <label className="block text-sm mb-1">Name <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full p-2 bg-white text-black rounded shadow-inner outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Email <span className="text-red-500">*</span></label>
                            <input type="email" className="w-full p-2 bg-white text-black rounded shadow-inner outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Comment or Message</label>
                            <textarea rows="5" className="w-full p-2 bg-white text-black rounded shadow-inner outline-none resize-none"></textarea>
                        </div>

                        {/* Simple reCAPTCHA Placeholder */}
                        <div className="bg-white p-3 rounded flex items-center justify-between max-w-[300px]">
                            <div className="flex items-center gap-3">
                                <input type="checkbox" className="w-6 h-6 border-gray-300" />
                                <span className="text-gray-700 text-sm">I'm not a robot</span>
                            </div>
                            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha" className="w-8" />
                        </div>

                        <button type="submit" className="bg-[#00aeef] hover:bg-[#0096ce] text-white font-bold py-2 px-8 uppercase tracking-wider transition-colors">
                            Submit
                        </button>
                    </form>
                </div>

                {/* Column 2: Map & Title */}
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
                    <div className="w-full aspect-square rounded overflow-hidden relative">
                        {/* Replace with actual Google Maps Iframe if needed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d80505.44769300119!2d76.72876879386149!3d9.140990686670904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0611e606b00001%3A0x27dc62f29d54f358!2sCollege%20Of%20Engineering%2C%20Adoor!5e0!3m2!1sen!2sin!4v1770889228814!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            className="w-full h-full border-0">
                            </iframe>
                    </div>
                </div>

                {/* Column 3: Other Links & Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Other Links</h2>
                        <div className="space-y-3">
                            {[
                                { name: 'KTU', img: '/images/logos/KTU-logo.png' },
                                { name: 'IHRD', img: '/images/logos/IHRD-logo.png' },
                                { name: 'Govt. of Kerala', img: '/images/logos/kerala-gov-logo.png' },
                                { name: 'AICTE', img: '/images/logos/AICTE-logo.webp' },
                                { name: 'Dept. of Higher Education', img: '/images/logos/kerala-gov-logo.png' }
                            ].map((link) => (
                                <a key={link.name} href="#" className="flex items-center gap-4 bg-white text-black p-3 rounded hover:bg-gray-100 transition-colors shadow-md">
                                    <img src={link.img} alt={link.name} className="w-8 h-8 object-contain" />
                                    <span className="font-bold">{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-600" />

                    <div className="text-right text-sm leading-relaxed text-gray-300">
                        <h3 className="text-xl font-bold text-white mb-2">Contact Info</h3>
                        <p>College of Engineering Adoor</p>
                        <p>Manakala PO, Adoor, Pathanamthitta, Kerala</p>
                        <p>Pin: 691551</p>
                        <p className="mt-2">Email : <span className="hover:text-white cursor-pointer">principal@cea.ac.in</span></p>
                        <p>Phone: +91 8547005100</p>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Arrow */}
            <div className="fixed bottom-4 right-4 bg-[#222] p-2 cursor-pointer hover:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 15 7-7 7 7" />
                </svg>
            </div>
        </footer>
    );
};

export default Footer;