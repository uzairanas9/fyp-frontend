import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
// import "../node_modules/react-bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import { Routes, Route } from "react-router-dom";
import Termsandcond from './components/Termsandcond';
import Signup from './components/Signup';
import Login from './components/Login';
import Buyanimals from './components/Buyanimals';
import Animaldetails from './components/Animaldetails';
import Myaccount from './components/Myaccount';
import Personalinfo from './components/Personalinfo';
import Dashboard from './components/Dashboard';
import Manageanimal from './components/Manageanimal';
import Addanimal from './components/Addanimal';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/termsandcond" element={<Termsandcond />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/buyanimals" element={<Buyanimals />} />
        <Route exact path="/animaldetails" element={<Animaldetails />} />
        <Route exact path="/myaccount" element={<Myaccount />} />
        <Route exact path="/personalinfo" element={<Personalinfo />} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/manageanimal" element={<Manageanimal/>} />
        <Route exact path="/addanimal" element={<Addanimal/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
