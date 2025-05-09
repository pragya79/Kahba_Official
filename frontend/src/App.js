import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

// Lazy loaded components
const Homepage = lazy(() => import('./page/homepage/Homepage.jsx'));
const Carrier = lazy(() => import('./page/carrierpage/Carrier.jsx'));
const GetinTouchPage = lazy(() => import('./page/getintouchpage/GetinTouchPage.jsx'));
const OurWorkpage = lazy(() => import('./page/owrworkpage/OurWorkpage.jsx'));
const AboutUsPage = lazy(() => import('./page/aboutuspage/aboutuspage.jsx'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/work" element={<Carrier />} />
          <Route path="/careers" element={<Carrier />} />
          <Route path="/contact" element={<GetinTouchPage />} />
          <Route path="/ourwork" element={<OurWorkpage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
