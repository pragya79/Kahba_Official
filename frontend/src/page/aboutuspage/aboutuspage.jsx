import React from 'react';
import './aboutuspage.css';  // Importing CSS for styling
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';

const AboutUsPage = () => {
  return (
    <>
    <Navbar />
    <div className="about-us-page">
      {/* Header Section */}
      <div className="header-section">
        <h1>“With the blessings of our masters, we are weaving stories brick-by-brick”</h1>
      </div>

      {/* What is Kahba Section */}
      <div className="what-is-kahba">
        <h2>WHAT IS KAHBA?</h2>
        <p>
          KA- Kalpana कल्पना <br />
          H- Humesha हमेशा <br />
          BA- Badalti बदलती
        </p>
        <p>
          It was in the patterns and cycles of experiencing life, on one of our many travels, that Kahba happened to us.
          Before we elaborate, we have to tell you about the founders. We're Nishant and Sana, partners in life and work.
          Our love and keen eye for art, design, adventure, architecture, and the finer things in life brought us together 
          to offer what we gather in the form of design. We live and breathe design and believe a fresh design can transform spaces.
        </p>
      </div>

      {/* Founders Section */}
      <div className="founders-section">
        <h2>Meet the Founders</h2>
        <div className="founders-grid">
          <div className="founder-card" style={{ backgroundImage: `url('/path-to-founder-image1.jpg')` }}>
            <div className="founder-info">
              <p>CEO AND CO-FOUNDER</p>
              <div className="social-icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div className="founder-card" style={{ backgroundImage: `url('/path-to-founder-image2.jpg')` }}>
            <div className="founder-info">
              <p>CEO AND CO-FOUNDER</p>
              <div className="social-icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div className="founder-card" style={{ backgroundImage: `url('/path-to-founder-image3.jpg')` }}>
            <div className="founder-info">
              <p>CEO AND CO-FOUNDER</p>
              <div className="social-icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="what-we-do-section">
        <h2>Here's what all we do:</h2>
        <ul>
          <li>Spatial Architecture</li>
          <li>Interior Design</li>
          <li>Retail Architecture</li>
          <li>Commercial Architecture</li>
          <li>Visual Identity</li>
          <li>Built Architecture</li>
          <li>Flagship Stores</li>
          <li>Offices</li>
        </ul>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUsPage;
