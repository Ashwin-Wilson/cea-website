import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Principal = () => {
  const principalInfo = {
    name: "Dr. Nisha Kuruvilla",
    designation: "Principal",
    institution: "College of Engineering Adoor",
    email: "principal@cea.ac.in",
    phone: "+91 8547005100",
    image: "/images/principal-img.jpeg", 
  };

  const qualifications = [
    "B. Tech : Electrical and Electronics Engineering (1992-96) – TKM College of Engineering Kollam",
    "M. Tech : Power Systems (2002-04) – College of Engineering Trivandrum",
    "Ph.D : Area of Research – Power Quality – NIT Calicut (November 2015)"
  ];

  const professionalDetails = [
    { label: "Profession", value: "Teaching (from 27.09.1999 to till date)" },
    { label: "Name of the Employer", value: "Institute of Human Resource Development (IHRD), Thiruvananthapuram" },
    { label: "Years of Experience", value: "25 years" },
    { label: "Name of present Institution", value: "College of Engineering Adoor (Under IHRD)" },
    { label: "Present Designation", value: "Professor and Principal, College of Engineering Adoor" },
    { label: "Industrial Experience", value: "1 year (25.11.1997 to 24.11.1998) Fertilizers and Chemicals Travancore Ltd (FACT) Udyogamandal, Kochi" }
  ];

  const memberships = [
    "IEEE Senior Member (Membership Number 90338706)",
    "ISTE Life Member",
    "IEEE PES Member",
    "IEEE Electron Devices Society Member",
    "IEEE Industrial Application Society Member",
    "IEEE SIGHT (Special Interest Group for Humanitarian Technology)"
  ];

  const researchInterests = [
    { label: "Research", value: "Power Systems, Power Quality, Power System Protection, Smart Grid" },
    { label: "Publications", value: "9 Publications in various international journals, international conferences and seminar which includes IEEE" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Principal
          </h1>
          <div className="mt-4 h-1.5 w-32 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Principal Profile Card */}
        <div className="bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={principalInfo.image} 
                    alt={principalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{principalInfo.name}</h2>
                <div className="space-y-2 mb-4">
                  <p className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {principalInfo.designation}
                  </p>
                  <p className="text-lg text-gray-600">{principalInfo.institution}</p>
                </div>

                {/* Contact Information */}
                <div className="space-y-3 mt-6">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href={`mailto:${principalInfo.email}`} className="text-blue-600 hover:underline">
                      {principalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href={`tel:${principalInfo.phone}`} className="text-blue-600 hover:underline">
                      {principalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">Qualifications</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              {qualifications.map((qual, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{qual}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Professional Details Section */}
        <div className="bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">Professional Details</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {professionalDetails.map((detail, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4 py-2 text-left">
                  <p className="text-sm font-bold text-gray-700 mb-1">{detail.label}:</p>
                  <p className="text-gray-600">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Memberships Section */}
        <div className="bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">Professional Memberships</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              {memberships.map((membership, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-xs font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 mt-0.5">{membership}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Area of Interests and Publications Section */}
        <div className="bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">Area of Interests and Publications</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {researchInterests.map((interest, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4 py-2 text-left">
                  <p className="text-sm font-bold text-gray-700 mb-1">{interest.label}:</p>
                  <p className="text-gray-600">{interest.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;