import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";

const MIN_PRELOADER_MS = 5000;

const AppContent: React.FC = () => {
  const location = useLocation();
  const isLoadingRoute = location.pathname === "/loading";
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    if (isLoadingRoute) {
      setLoad(true);
      return;
    }

    setLoad(true);
    const timer = setTimeout(() => {
      setLoad(false);
    }, MIN_PRELOADER_MS);

    return () => clearTimeout(timer);
  }, [isLoadingRoute]);

  if (isLoadingRoute) {
    return <Preloader load={true} alwaysVisible />;
  }

  return (
    <>
      <Preloader load={load} />
      <div className={`text-center ${load ? "overflow-hidden h-screen" : ""}`}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
