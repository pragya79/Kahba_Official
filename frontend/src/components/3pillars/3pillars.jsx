import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
const PillarsSection = () => {
  return (
    <div className="pillars-section h-auto">
      <h1 className="section-title">PILLARS OF OUR PROCESS</h1>
      
      <div className="pillars-container">
        <div className="pillar md:text-center md:justify-center md:items-center">
          <h2 className="pillar-title">PEOPLE</h2>
          <p className="pillar-text">
            The team at Kahba Design Studio is a passionate group of creative professionals 
            dedicated to transforming spaces with innovative design solutions, meticulous attention 
            to detail, and a commitment to excellence.
          </p>
        </div>

        <div className="pillar">
          <h2 className="pillar-title">BELIEF</h2>
          <p className="pillar-text">
            At Kahba Design Studio, we believe in the power of thoughtful design to create inspiring 
            spaces that resonate with beauty, functionality, and the unique vision of our clients.
          </p>
        </div>

        <div className="pillar">
          <h2 className="pillar-title">ARCHITECTURE</h2>
          <p className="pillar-text">
            Kahba Design Studio approaches architecture with a blend of creativity and precision, 
            pursuing designs that harmonize aesthetics and functionality, while staying true to the 
            unique essence of each project.
          </p>
        </div>

        <div className="pillar">
          <h2 className="pillar-title">Inspiration from surroundings</h2>
          <p className="pillar-text">
          We draw from our surroundings to create spaces that are in harmony with their environment. Yet, we also understand the importance of balance. 
          </p>
        </div>

      </div>
      <Link to = '/about'>
      <button className="know-more-button">KNOW MORE</button>
      </Link>
      <style jsx>{`/* General section styles */
.pillars-section {
  height: auto; /* Adjust height for better responsiveness */
  background-color: #537269;
  padding: 50px 20px;
  text-align: center;
  color: #000;
  font-family: 'Holistic Haircut', sans-serif;
}

.pillars-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Title */
.section-title {
  font-size: clamp(2rem, 4vw, 3rem); /* Adjusted for smaller screens */
  font-weight: bold;
  margin-bottom: 2rem;
}

/* Each pillar block */
.pillar {
  max-width: 300px;
  margin: 0 1rem;
}

/* Title of each pillar */
.pillar-title {
  font-size: clamp(1.2rem, 2.5vw, 1.8rem); /* Slight adjustment for smaller devices */
  font-weight: bold;
  margin-bottom: 1rem;
}

/* Text under each pillar */
.pillar-text {
  font-size: clamp(1rem, 1.8vw, 1.4rem); /* Adjusted to maintain readability */
  line-height: 1.6;
  font-family: 'Arial', sans-serif;
}

/* Know more button */
.know-more-button {
  background-color: #000;
  color: #F6A21E;
  font-size: clamp(1rem, 2vw, 1.3rem); /* Slightly reduced for smaller screens */
  border: none;
  cursor: pointer;
  font-family: 'Holistic Haircut', sans-serif;
  margin-top: 2rem;
  padding: 10px 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.know-more-button:hover {
  background-color: #F6A21E;
  color: #000;
}

/* Responsive media queries */
@media (max-width: 768px) {
  .pillars-section {
    padding: 20px 10px; /* Adjust padding for smaller screens */
  }

  .pillars-container {
    flex-direction: column;
    align-items: center;
  }

  .pillar {
    max-width: 100%;
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: clamp(1.8rem, 4vw, 2.5rem); /* Adjust for smaller screens */
  }

  .pillar-title {
    font-size: clamp(1.1rem, 2.2vw, 1.6rem); /* Adjust for smaller screens */
  }

  .pillar-text {
    font-size: clamp(0.9rem, 1.6vw, 1.2rem); /* Adjust for smaller screens */
  }

  .know-more-button {
    margin-top: 1rem;
    width: auto;
  }
}
`}</style>
    </div>
  );
};

export default PillarsSection;
