import React from "react";
import Masonry from "react-masonry-css";
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";
import image4 from "../../assets/image4.svg";
import image5 from "../../assets/image5.svg";
import image6 from "../../assets/image6.svg";
import image7 from "../../assets/image7.svg";
import image8 from "../../assets/image8.svg";
import image9 from "../../assets/image9.svg";
import image10 from "../../assets/image10.svg";
import Navbar from "../navbar/Navbar";

const imageData = [
  { src: image1, pdf: "assets/file1.pdf" },
  { src: image2, pdf: "assets/file2.pdf" },
  { src: image3, pdf: "assets/file3.pdf" },
  { src: image4, pdf: "assets/file4.pdf" },
  { src: image5, pdf: "assets/file5.pdf" },
  { src: image6, pdf: "assets/file6.pdf" },
  { src: image7, pdf: "assets/file7.pdf" },
  { src: image8, pdf: "assets/file8.pdf" },
  { src: image9, pdf: "assets/file9.pdf" },
  { src: image10, pdf: "assets/file10.pdf" },
  { src: image1, pdf: "assets/file11.pdf" },
  { src: image2, pdf: "assets/file12.pdf" },
  { src: image3, pdf: "assets/file13.pdf" },
  { src: image4, pdf: "assets/file14.pdf" },
  { src: image5, pdf: "assets/file15.pdf" },
];

const styles = {
  ourWorkContainer: {
    padding: "6rem",
    backgroundColor: "#E4D7D0",
  },
  heading: {
    fontFamily: "'Holistic Haircut', sans-serif",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  masonryGrid: {
    display: "flex",
    marginLeft: "-15px", // Adjusted gutter size offset to match original spacing
    width: "auto",
  },
  masonryColumn: {
    paddingLeft: "15px", // Adjusted gutter size for spacing
    backgroundClip: "padding-box",
  },
  imageItem: {
    position: "relative",
    overflow: "hidden",
    marginBottom: "30px",  // Keeping bottom margin for vertical spacing
    borderRadius: "10px",
  },
  image: {
    width: "100%",
    display: "block",
    transition: "transform 0.3s ease-in-out",
    borderRadius: "10px",
    border: "5px solid #f90", // Yellow border
  },
  imageHover: {
    transform: "scale(1.05)",
  },
};

const OurWorkexamples = () => {
  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div style={styles.ourWorkContainer}>
        <h1 style={styles.heading}>Our Work</h1>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          style={styles.masonryGrid}
        >
          {imageData.map((image, index) => (
            <div key={index} style={{ ...styles.imageItem, padding: "15px" }}>
              <a href={image.pdf} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.src}
                  alt={`Work ${index + 1}`}
                  style={styles.image}
                  onMouseOver={(e) => (e.target.style.transform = styles.imageHover.transform)}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
              </a>
            </div>
          ))}
        </Masonry>
      </div>
    </>
  );
};

export default OurWorkexamples;
