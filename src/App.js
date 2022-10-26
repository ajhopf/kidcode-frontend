import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Course from "./components/pages/Course";
import Registration from "./components/pages/Registration";
import Admin from "./components/pages/Admin";
import AdminLogin from "./components/pages/AdminLogin";
import Login from "./components/pages/Login";
import AboutUs from "./components/pages/AboutUs";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/cadastro.css";
import "./styles/curso.css";
import "./styles/style.css";
import "./styles/login.css";
import "./styles/home.css";
import "./styles/about.css";

import "./styles/LoggedArea.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId" element={<Course />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin/logged" element={<Admin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobrenos" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
