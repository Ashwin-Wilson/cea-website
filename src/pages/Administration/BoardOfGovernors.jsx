import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const BoardOfGovernors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const governors = [
    { name: "Dr. T I Eldho", designation: "Chairman", details: "Institute Chair Professor, Dept. of Civil Engineering, IIT Mumbai", contact: "eldho@civil.iitb.ac.in" },
    { name: "Sri. L L Ramachandran", designation: "Member", details: "Ex. General Manager(IS)", contact: "Group Refinery BPCL, Cochin, ERP Advisor, IIM Kozhikode, Ramachandran.ll@gmail.com, 9446078193" },
    { name: "Dr. K Sunil Kumar", designation: "Secretary", details: "Principal", contact: "principal@cea.ac.in, 8547005100, College of Engineering Adoor" },
    { name: "Dr. Jayachandran E S", designation: "Member", details: "Professor", contact: "jayan@cea.ac.in, 9495062864, College of Engineering Adoor" },
    { name: "Dr. John George", designation: "Member", details: "Professor", contact: "johngeorge@cea.ac.in, 9447895099, College of Engineering Adoor" },
    { name: "Dr. P Suresh Kumar", designation: "Member", details: "Director, IHRD", contact: "director@ihrd.ac.in, 8547005003, Director, IHRD" },
    { name: "Dr. Vrinda V Nair", designation: "Member", details: "Director SPFU", contact: "Spfu.teqip.kerala@gmail.com, 9447381186" },
    { name: "Dr. Shalij P R", designation: "Member", details: "Dean Research", contact: "deanresearch@ktu.edu.in, 9400995567" },
    { name: "Dr. Ramesh Unnikrishnan", designation: "Member", details: "AICTE Nominee", contact: "rameshtrivandrum@rediffmail.com, 9447246162" },
    { name: "Dr. K C Chandrasekharan Nair", designation: "Member", details: "CEO, Techno lodge, Trivandrum", contact: "kccnair@gmail.com, 9447111244" },
    { name: "Finance Department Secretary", designation: "Member", details: "Government Nominee", contact: "Government Nominee" },
    { name: "Higher Education Department Secretary", designation: "Member", details: "Government Nominee", contact: "Government Nominee" },
  ];

  const filteredData = governors.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Board of Governors
          </h1>
          <div className="mt-4 h-1.5 w-32 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Table for Desktop, Cards for Mobile */}
        <div className="overflow-hidden bg-white shadow-xl rounded-2xl border border-gray-100">
          {/* Desktop View */}
          <div className="hidden md:block">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Sl No</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Designation</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Contact Details</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredData.map((gov, index) => (
                  <tr key={index} className="hover:bg-blue-50/50 transition-colors text-left" >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{gov.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
                        {gov.designation}
                      </span>
                      <p className="text-gray-500 text-xs">{gov.details}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate lg:max-w-md lg:whitespace-normal">
                      {gov.contact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden divide-y divide-gray-200">
            {filteredData.map((gov, index) => (
              <div key={index} className="p-6 bg-white space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-blue-600 font-bold text-sm">#{index + 1}</span>
                  <span className="bg-blue-100 text-blue-800 text-[10px] px-2 py-1 rounded-full uppercase font-bold">
                    {gov.designation}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{gov.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{gov.details}</p>
                </div>
                <div className="pt-2 border-t border-gray-50">
                  <p className="text-sm text-gray-600 italic">Contact:</p>
                  <p className="text-sm text-gray-500 break-words">{gov.contact}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredData.length === 0 && (
            <div className="p-12 text-center text-gray-500">
              No board members found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardOfGovernors;