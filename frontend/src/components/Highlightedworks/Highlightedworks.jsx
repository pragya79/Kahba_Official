import React, { useState, useEffect } from "react";

const images = [
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736848664/project1_os5s6v.png",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736848623/project2_kppouw.png",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736848624/project3_eqtaif.png",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736848623/project_4_atp3r9.png",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736848625/project5_ykjwnm.png",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736848625/project6_voxuu8.png",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736848625/project8_s9irhu.png",
  "https://res.cloudinary.com/dq8h7dmym/image/upload/v1736848626/project9_rie2xb.png",
];

const HighlightedWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div style={styles.carousel}>
      <div
        style={{
          ...styles.carouselBackground,
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      ></div>
      <button style={{ ...styles.carouselButton, ...styles.leftButton }} onClick={prevImage}>
        &#8249;
      </button>
      <button style={{ ...styles.carouselButton, ...styles.rightButton }} onClick={nextImage}>
        &#8250;
      </button>
    </div>
  );
};

const styles = {
  carousel: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  carouselBackground: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 0.5s ease-in-out",
  },
  carouselButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    zIndex: 2,
    fontSize: "30px",
  },
  leftButton: {
    left: "10px",
  },
  rightButton: {
    right: "10px",
  },
  carouselButtonHover: {
    color: "#ffcc00",
    transform: "translateY(-50%) scale(1.1)",
  },
};

export default HighlightedWorks;
