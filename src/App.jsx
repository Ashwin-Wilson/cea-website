import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import BoardOfGovernors from "./pages/Administration/BoardOfGovernors";
import MechanicalDepartment from "./pages/Departments/MechanicalDepartmentPage";
import ComputerScienceDepartment from "./pages/Departments/ComputerScienceDepartmentPage";
import ElectricalDepartment from "./pages/Departments/ElectricalAndElectronics";
import ElectricalAndElectronicsDepartment from "./pages/Departments/ElectronicsDepartment";
import DataScienceDepartment from "./pages/Departments/DataScience";
import AppliedScienceDepartment from "./pages/Departments/AppliedScience";
import StudentGrievancePortal from "./pages/StudentGrievancePortal";
import AlumniPage from "./pages/AlumniPage";
import Principal from "./pages/Administration/Principal";
import OfficeAdministration from "./pages/Administration/OfficeAdministration";
import Audit from "./pages/Administration/Audit";
import AdmissionPage from "./pages/AdmissionPage";
import Activities from "./pages/Activities";
import Placement from "./pages/Placement";
import PTA from "./pages/PTA";
import CampusLayout from "./pages/Institution/CampusLayout";
import CollegeBus from "./pages/Institution/CollegeBus";
import Hostels from "./pages/Institution/Hostels";
import InstitutionStructure from "./pages/Institution/InstitutionStructure";
import LibraryPage from "./pages/Library/LibraryPage";
import Quotation from "./pages/Quotation";
import Careers from "./pages/Careers";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Administration */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/board-of-governors" element={<BoardOfGovernors />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/administartion-office-administration" element={<OfficeAdministration />} />
        <Route path="/audit" element={<Audit />} />

        <Route path="/admissions" element={<AdmissionPage />} />
        <Route
          path="/mechanical-department"
          element={<MechanicalDepartment />}
        />
        <Route
          path="/computer-science-department"
          element={<ComputerScienceDepartment />}
        />
        <Route
          path="/electrical-department"
          element={<ElectricalDepartment />}
        />
        <Route
          path="/electronics-and-communication-department"
          element={<ElectricalAndElectronicsDepartment />}
        />
        <Route
          path="/data-science-department"
          element={<DataScienceDepartment />}
        />
        <Route
          path="/applied-science-department"
          element={<AppliedScienceDepartment />}
        />
        <Route
          path="/student-grievance-portal"
          element={<StudentGrievancePortal />}
        />

        <Route path="/activities" element={<Activities />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/pta" element={<PTA />} />

        <Route path="/institution-structure" element={<InstitutionStructure />} />
        <Route path="/campus-layout" element={<CampusLayout />} />
        <Route path="/hostel" element={<Hostels />} />
        <Route path="/college-bus" element={<CollegeBus/>} />

        <Route path="/library" element={<LibraryPage/>} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/student-grievance-portal" element={<StudentGrievancePortal/>} />
        <Route path="/quotation" element={<Quotation/>} />
        <Route path="/careers" element={<Careers/>} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
