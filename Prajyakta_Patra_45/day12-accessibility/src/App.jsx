import { Routes, Route } from "react-router-dom";
import AccessibleNav from "./Components/AccessibleNav";
import SkipToContent from "./Components/SkipToContent";

import Home from "./pages/Home";
import About from "./pages/About";
import Demo from "./pages/Demo";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <SkipToContent />
      <AccessibleNav />

      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
