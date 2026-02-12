import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar'
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage'
import BoardOfGovernors from './pages/Administration/BoardOfGovernors';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/board-of-governors" element={<BoardOfGovernors />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />

      </BrowserRouter>
  )
}

export default App
