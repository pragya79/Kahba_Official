import React from 'react';
import Image1 from '../../assets/ClientTemplate1.png';
import Image2 from '../../assets/ClientTemplate2.png';
import Image3 from '../../assets/ClientTemplate3.png';
import Image4 from '../../assets/ClientTemplate4.png';

const OurClients = () => {
  return (
    <div style={{ backgroundColor:"#e4d7d0" ,
        paddingBlock: "2vw",   

    }}>
      <h1 className="clients-title"
       style={{ 
        marginBottom: "20px",
        fontFamily: "'Holistic Haircut', sans-serif",
        fontSize: "clamp(2rem, 4vw, 3rem);",
        marginLeft: "5vw",
        }}>Our Clients</h1>
      <div className="client-logos"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginInline: "5vw",
      }}>
        <img src={Image1} alt="Client 1 Logo" className="client-logo" />
        <img src={Image2} alt="Client 2 Logo" className="client-logo" />
        <img src={Image3} alt="Client 3 Logo" className="client-logo" />
        <img src={Image4} alt="Client 4 Logo" className="client-logo" />
      </div>
    </div>
  );
};

export default OurClients;
