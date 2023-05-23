import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import Pagenotfound from "./Pages/Pagenotfound";
import Policy from "./Pages/Policy";
import Contact from "./Pages/Contact";
import Register from "./Pages/Auth/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
