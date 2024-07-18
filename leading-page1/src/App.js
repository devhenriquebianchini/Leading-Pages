import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cardápio from "./pages/Menu";
import Sobre from "./pages/About";
import Contato from "./pages/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cardápio" element={<Cardápio />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
