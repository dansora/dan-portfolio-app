import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./pages/LandingPage";
import PortfolioGallery from "./pages/PotfolioGallery";

const App = () => {
  return (
    // <Router></Router> creates context for navigation. <NavLink> (navbar) need to be inside of the router
    <Router>
      <NavigationBar />
      <div className="d-flex min-vh-100 w-full justify-content-center align-items-center">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/restaurants" element={<PortfolioGallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;