
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup"
import Home from "./pages/Home/Home"
import Create from "./pages/Create/Create"






function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Create" element={<Create />} />
          
        </Routes>
        <Footer/>
      </Router>

    </div>
      
  );
}

export default App;
