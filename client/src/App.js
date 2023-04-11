import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup"


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>

      </Router>

    </div>
      
  );
}

export default App;
