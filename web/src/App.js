import './App.css';
import { Routes, Route } from "react-router-dom"

import About from "./pages/About";
import Home from "./pages/Home";
import Patients from './pages/Patients';
import Medicines from './pages/Medicines';
import MedicineList from './pages/MedicineList';
import MedicineSubmit from './pages/MedicineSubmit';
import PatientList from "./pages/PatientList";
import PatientSubmit from "./pages/PatientSubmit";


function App() {
  return (
    <div className="App">
      <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="patients" element={<Patients />} />
          <Route path="medicines" element={<Medicines />} />
          <Route path="medicine-list" element={<MedicineList />} />
          <Route path="medicine-submit" element={<MedicineSubmit />} />
          <Route path="patient-list" element={<PatientList />} />
          <Route path="patient-submit" element={<PatientSubmit />} />
        </Routes>
    </div>
  );
}

export default App;
