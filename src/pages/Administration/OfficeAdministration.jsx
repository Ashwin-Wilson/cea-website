import React, { useState } from 'react';

const OfficeAdministration = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const staff = [
    { name: "Smt. Santhya Murali", designation: "Finance Section", details: "", contact: "9497615975" },
    { name: "Sri. Viswamohan V", designation: "Purchase Section", details: "", contact: "9497615975" },
    { name: "Smt. Sunitha Cherian", designation: "Senior Superintendent", details: "", contact: "9495143997" },
    { name: "Smt. Ramlath Bevi", designation: "Academic Section", details: "", contact: "9447861713, academics@cea.ac.in" },
    { name: "Sri. Baby John", designation: "HC", details: "", contact: "9447564197" },
    { name: "Sarasan TN", designation: "Administrative Officer", details: "", contact: "8547042689, ao@cea.ac.in" },
    { name: "Smt. Vidhya", designation: "KTU Portal", details: "", contact: "8289827372" },
    { name: "Smt. Mercy Alex", designation: "Establishment", details: "", contact: "8113834459" },
  ];

  const filteredData = staff.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Office Administration
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
                {filteredData.map((person, index) => (
                  <tr key={index} className="hover:bg-blue-50/50 transition-colors text-left">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{person.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
                        {person.designation}
                      </span>
                      <p className="text-gray-500 text-xs">{person.details}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate lg:max-w-md lg:whitespace-normal">
                      {person.contact || "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden divide-y divide-gray-200">
            {filteredData.map((person, index) => (
              <div key={index} className="p-6 bg-white space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-blue-600 font-bold text-sm">#{index + 1}</span>
                  <span className="bg-blue-100 text-blue-800 text-[10px] px-2 py-1 rounded-full uppercase font-bold">
                    {person.designation}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{person.details}</p>
                </div>
                <div className="pt-2 border-t border-gray-50">
                  <p className="text-sm text-gray-600 italic">Contact:</p>
                  <p className="text-sm text-gray-500 break-words">{person.contact || "N/A"}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredData.length === 0 && (
            <div className="p-12 text-center text-gray-500">
              No staff members found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfficeAdministration;
