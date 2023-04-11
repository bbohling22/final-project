
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
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
          
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Create" element={<Create />} />
          
        </Routes>

      </Router>

    </div>
      
  );
}

export default App;
