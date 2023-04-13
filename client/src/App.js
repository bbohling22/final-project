
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup"
import Home from "./pages/Home/Home"
import Create from "./pages/Create/Create"
import Team from "./pages/Team/Team"

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});





function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Navbar/>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/about/team" element={<Team />} />
            
          </Routes>
          <Footer/>
        </Router>
      </ApolloProvider>
    </div>
      
  );
}

export default App;
