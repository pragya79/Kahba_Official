import React, { useState, useEffect } from "react";
import kahbagraphic from "../../assets/kahbagraphic.png";
import Navbar from "../navbar/Navbar";
import buttongraphic from "../../assets/buttongraphic.png";
import { Link } from "react-router-dom";

// Array of image URLs from Cloudinary
const images = [
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1743913686/image1_gc9jbe.svg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1743913686/image2_yifo7y.svg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1743913687/image3_uv2mse.svg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1743913687/image6_huok3l.svg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1743913687/image5_cxwna0.svg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1743913689/image7_zzafdg.svg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1743913690/image9_awxwno.svg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1743913689/image8_ga5bw4.svg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1743913694/image4_wtldvb.svg",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1743913692/image10_lnanoo.svg",
];

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    transition: 'all 1s',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    justifyContent: 'center',

  },
  kahbaImage: {
    height: '16rem',
    width: '48rem',
    marginTop: '10rem',
    alignSelf: 'left',
  },
  text: {
    color: 'white',
    fontSize: '1.25rem',
    fontWeight: 500,
    textAlign: 'center',
  },
  button: {
    height: '6rem',
    width: '12rem',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    marginTop: '20px',
    alignSelf: 'right',
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'right',
    paddingRight: '10vw',
    width: '100%',
  }
};

const mobileStyles = {
  container: {
    ...styles.container,
  },
  overlay: {
    ...styles.overlay,
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kahbaImage: {
    height: '12rem',
    width: '20rem',
    marginTop: '0',
  },
  text: {
    ...styles.text,
    fontSize: '1rem',
    margin: '1rem 0',
  },
  button: {
    ...styles.button,
    height: '6rem',
    width: '10rem',
  },
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const currentStyles = isMobile ? mobileStyles : styles;

  return (
    <div
      className="responsive-bg"
      style={{
        ...currentStyles.container,
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Navbar />
      <div style={currentStyles.overlay}>
        <img
          src={kahbagraphic}
          alt="Kahba Graphic"
          style={currentStyles.kahbaImage}
        />
        <p style={currentStyles.text}>At Kahba, we make space for design.</p>
        <div style={currentStyles.buttonDiv}>
        <Link to="/contact">
          <button style={currentStyles.button}>
            <img
              src={buttongraphic}
              alt="button"
              style={{ width: '100%', height: '100%' }}
            />
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

