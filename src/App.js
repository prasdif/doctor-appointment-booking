import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Appointment from "./components/Health";
import DoctorList from "./components/DoctorList";
import DoctorProfile from "./components/DoctorProfile";
import AppointmentForm from "./components/AppointmentForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Appointment />} />
        <Route exact path="/doctors" element={<DoctorList />} />
        <Route excat path="/doctor/:id" element={<DoctorProfile />} />
        <Route excat path="/appointment" element={<AppointmentForm />} />
      </Routes>
    </Router>
  );
};

export default App;
