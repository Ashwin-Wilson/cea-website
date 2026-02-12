import React from 'react';
import { FileText, Download } from 'lucide-react';

const Audit = () => {
  const auditFiles = [
    { year: "2021-22", fileName: "2022-21.pdf", description: "Audit Report for Academic Year 2021-22" },
    { year: "2020-21", fileName: "2021-20.pdf", description: "Audit Report for Academic Year 2020-21" },
    { year: "2019-20", fileName: "2020-19.pdf", description: "Audit Report for Academic Year 2019-20" },
    { year: "2018-19", fileName: "2019-18.pdf", description: "Audit Report for Academic Year 2018-19" },
    { year: "2017-18", fileName: "2018-17.pdf", description: "Audit Report for Academic Year 2017-18" },
    { year: "2016-17", fileName: "2017-16.pdf", description: "Audit Report for Academic Year 2016-17" },
  ];

  const handleDownload = (fileName) => {
    const link = document.createElement('a');
    link.href = `/database/Audit/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Audit Reports
          </h1>
          <div className="mt-4 h-1.5 w-32 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600">
            Download annual audit reports of College of Engineering Adoor
          </p>
        </div>

        {/* Audit Files Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {auditFiles.map((file, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {file.year}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {file.description}
                  </p>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(file.fileName)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Audit;
