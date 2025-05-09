import React from 'react';
import quoteImage from '../../assets/quoteimage.png'; // Import the image of double quotes
import gg from '../../assets/gg.svg'; // Import the image of double quotes
import { Link } from 'react-router-dom';


const AboutSection = () => {
  return (
    <div className="about-section" id='#about'>
      <div className='about-content'>
        <div className="quote-container">
          <img src={quoteImage} alt="Quote" className="quote-image" />
          <p className="about-text">
            "At Kahba Design Studio, we craft environments that blend creativity with functionality. Our designs tell stories, enhance spaces, and serve practical needs. We deeply understand our clients' visions, delivering visually striking, purposeful spaces that inspire. With every project, we strive to exceed expectations, push creative boundaries, and create spaces that truly resonate."
          </p>
        </div>
        <div className="gg">
          <img src={gg} alt="gg" className="gg-image" />
        </div>

      </div>
      <div>
      </div>
      <div className='know-more'>
        <Link to='/about' >
          <button className="know-more-button">KNOW MORE</button>
        </Link>
      </div>
      <style jsx>{`/* Styling for the About section */
.about-section {
    display: flex;
    flex-direction: column;
    background-color: #F6A21E;
    padding: 2rem;
    display: flex;
    height: 100vh; /* Keep 100vh for desktop view */
    width: 100%;
    position: relative;
    background-size: cover;
    background-position: center;
    align-items: end;
}

.about-content {
    display: flex;
    justify-content: center;
}

.quote-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 20px;
}

.quote-image {
    height: 4rem;
    margin-top: 3rem;
}

.about-text {
    margin-left: 1rem;
    margin-top: 5rem;
    font-size: 1.5rem;
    color: #333333;
    line-height: 1.6;
    font-family: 'Arial', sans-serif;
    max-width: 800px;
}

.know-more{

    margin-right: 8vw;
}

.know-more-button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    background-color: #4B8378;
    color: black;
    border: none;
    font-size: 2rem;
    border-radius: 30px;
    cursor: pointer;
    font-family: 'Holistic Haircut', sans-serif;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding-left: 1rem;
    padding-right: 1rem;
}

.know-more-button:hover {
    background-color: #222222;
    color: #F6A21E;
}

@media(max-width: 1024px){
    .gg{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .about-text{
        font-size: 1.25rem;
    }
}

/* Mobile view adjustments */
@media (max-width: 768px) {
    .gg{
        display: none;
    }
    .about-section {
        height: auto; /* Adjust height to cover content on mobile */
        padding: 20px; /* Reduce padding for mobile */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .about-content {
        flex-direction: column-reverse; /* Stack image and text vertically */
        align-items: center;
    }

    .quote-container {
        flex-direction: column; /* Stack image and text vertically */
        align-items: center;
    }

    .quote-image {
        margin-left: 0;
        margin-top: 2rem;
        height: 3rem; /* Reduce size for mobile */;
    }

    .about-text {
        margin-left: 0;
        margin-top: 1rem;
        font-size: 0.9rem; /* Reduce font size for mobile */
        text-align: center; /* Center the text on mobile */
        max-width: 100%; /* Allow full width text on mobile */
    }

    .know-more {
        margin-top: auto; /* Push the button towards the bottom */
        display: flex;
        justify-content: center;
        margin-right: 0;
    }

    .know-more-button {
        font-size: 1.2rem; /* Reduce button size for mobile */
        height: 2.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 2rem; /* Adds space at the bottom for mobile */
    }
}
`}</style>
    </div>
  );
};

export default AboutSection;
