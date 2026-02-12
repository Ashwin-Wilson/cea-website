import React, { useState } from 'react';
import { BookOpen, CircleDollarSign, Download, Mail, Phone, ChevronRight } from 'lucide-react';

const AdmissionPage = () => {
    const [activeTab, setActiveTab] = useState('B.Tech');

    const courses = [
        { name: "Computer Science and Engineering", intake: 120 },
        { name: "Electronics & Communication Engineering", intake: 60 },
        { name: "Mechanical Engineering", intake: 60 },
        { name: "Electrical & Electronics Engineering", intake: 60 },
        { name: "Computer Science and Engineering (Data Science)", intake: 60 },
    ];

    const categories = {
        'B.Tech': [
            {
                title: "Regulated Fee Merit Seats",
                fee: "Rs.40,000/- per annum",
                allotment: "Managed by Commissioner of Entrance Examinations, Govt. of Kerala, according to KEAM rank list.",
                eligibility: "50% marks in Mathematics separately, and 50 % marks in Mathematics, Physics, and Chemistry put together are eligible for admission. In case, the candidate has not studied Chemistry, the marks obtained in Computer Science shall be considered. In case, the candidate has not studied Chemistry and Computer Science, the marks obtained in Biotechnology shall be considered. In case, the candidate has not studied Chemistry, Computer Science and Biotechnology, the marks obtained in Biology shall be considered. The marks as shown in the mark list of the Board of Examination obtained from the respective Higher Secondary Board shall be considered for academic eligibility.  Candidates belonging to Socially and Educationally Backward Classes will have a relaxation of 5% marks in the qualifying examination. They need only 45% marks in the case of Mathematics/Biology and 45% marks in the case of Mathematics/Biology, Physics and Chemistry put together. The Scheduled Castes and Scheduled Tribes candidates need only a pass in the qualifying examination.        "
            },
            {
                title: "Merit Full Fee Seat",
                fee: "Rs.65,000/- per annum",
                allotment: "Managed by Commissioner of Entrance Examinations, Govt. of Kerala, according to KEAM rank list.",
                eligibility: "45% marks in Mathematics, Physics, and Chemistry put together are eligible for admission."
            },
            {
                title: "NRI Seat",
                fee: "Rs.1,25,000/- (CS) / 1,00,000/- (others) per annum as fees and Rs.1,25,000/- as one-time refundable deposit",
                allotment: "Managed by Institute of Human Resources Development(IHRD)",
                eligibility: "Candidates who have passed Higher Secondary Examination and eligible for admission to engineering as per the prospectus of KEAM can apply during the months of April-May directly through the IHRD Website. These candidates need not clear the entrance examination, admission will be purely based on marks obtained by the candidate for Physics, Chemistry and Mathematics. The candidates seeking admission to B. Tech NRI seats should be a child/ ward/ dependent of an NRI and should enclose a declaration from the NRI {form enclosed as VIII(7)} along with the application"
            },
        ],
        'B.Tech Lateral Entry': [],
        'BBA': []
    };

    const admissionContacts = [
        { name: "Prof. Shiji K V", phone: "09446 52 77 57" },
        { name: "Prof. Madhu A K", phone: "09447 48 43 45" },
        { name: "Prof. Raji A", phone: "09447 35 61 77" },
        { name: "Principal", phone: "08547 00 51 00" },
        { name: "Email", phone: "admissions@cea.ac.in", icon: <Mail size={16} /> }
    ];

    const downloads = [
        { name: "KEAM Prospectus 2025", link: "/database/Admission/KEAM-Prospectus-2025.pdf" },
        { name: "BBA Registration", link: "https://docs.google.com/forms/d/e/1FAIpQLSccT1FWYOmv2Nfr0v-hoSo0oy5Vs2kvQhcBONsZDxBgdcMgWg/viewform" },
        { name: "BTech Registration (Anticipated Vacancies)", link: "https://docs.google.com/forms/d/e/1FAIpQLSdxK84jAYQ2duVOMMlF8oLUgi1ZB69nBi_PMa-YViU3oTBgRw/viewform" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'B.Tech':
                return <div className="text-center  text-gray-500">
                    Admission to UG programmes except in NRI seats is on the basis of the All Kerala Common Entrance Examination, conducted by the Commissioner for Entrance Examinations (CEE), Govt. of Kerala. The criteria for B.Tech degree admission is prescribed by the CEE, Govt. of Kerala and concerned University, and is issued every year by Govt. of Kerala through common prospectus for admission to professional degree courses. The entrance examinations are conducted usually in the month of April.
                    Visit <a href="http://cee-kerala.org/">cee-kerala.org/</a> for more details.
                </div>
            case 'B.Tech Lateral Entry':
                return <div className="text-center  text-gray-500">
                    Admission to B.Tech Lateral Entry programs (directly to third sem course) is on the basis of the entrance examination conducted by Directorate of Technical education or agency entrusted by Govt of Kerala (Presently LBS Centre for Science and Technology Thiruvananthapuram /The Commissioner for Entrance Examinations Kerala. (CEE), Govt. of Kerala. The criteria for B.Tech Lateral entry admission is prescribed by the Govt of Kerala. The candidate must have passed three year engineering diploma conducted by DTE or equivalent agency. Visit http://cee-kerala.org/ or http://lbscentre.kerala.gov.in/. The number of seats is 10% of sanctioned strength for each course
                </div>;
            case 'BBA':
                return <div className="text-center  text-gray-500">Details for BBA program will be updated soon.</div>;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                        Admissions
                    </h1>
                   
                    <div className="mt-4 h-1.5 w-32 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Tabs */}
                <div className="mb-8 flex justify-center border-b border-gray-200">
                    {['B.Tech', 'B.Tech Lateral Entry', 'BBA'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 text-sm font-bold transition-colors -mb-px border-b-2
                ${activeTab === tab
                                    ? 'text-blue-600 border-blue-600'
                                    : 'text-gray-500 border-transparent hover:text-blue-600 hover:border-gray-300'}`
                            }
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white shadow-xl rounded-2xl border border-gray-100 p-8 md:p-12">
                    {renderContent()}
                </div>
                <div className="space-y-12 mt-16">
                    {/* Courses Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3"><BookOpen className="text-blue-600" />UG Courses (B.TECH)</h3>
                        <div className="space-y-3">
                            {courses.map((course, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex justify-between items-center hover:shadow-md transition-shadow">
                                    <span className="font-semibold text-gray-700">{course.name}</span>
                                    <span className="font-mono font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-xs">{course.intake} Seats</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Categories Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3"><CircleDollarSign className="text-blue-600" />Seat Categories</h3>
                        <div className="space-y-4">
                            {categories[activeTab].map((cat, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500 shadow-sm">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-bold text-gray-800">{cat.title}</h4>
                                        <p className="font-semibold text-blue-600">{cat.fee}</p>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">{cat.allotment}</p>
                                    <p className="text-xs text-gray-500 mt-2 italic"><strong>Eligibility:</strong> {cat.eligibility}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Contact and Downloads Section */}
                <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
                    <div className="bg-white shadow-xl rounded-2xl border border-gray-100 p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Admission Queries</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {admissionContacts.map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                                        {item.icon || <Phone size={16} />}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{item.name}</p>
                                        <p className="text-sm font-bold text-gray-900">{item.phone}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white shadow-xl rounded-2xl border border-gray-100 p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Downloads</h2>
                        <ul className="space-y-3">
                            {downloads.map((doc, i) => (
                                <li key={i}>
                                    <a href={doc.link} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                                        <span className="font-semibold text-gray-700 flex items-center gap-2"><Download size={16} className="text-blue-500" />{doc.name}</span>
                                        <ChevronRight size={18} className="text-gray-400" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionPage;
