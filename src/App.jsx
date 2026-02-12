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

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/board-of-governors" element={<BoardOfGovernors />} />
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
          path="/electrical-and-electronics-department"
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
        <Route path="/alumni" element={<AlumniPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
