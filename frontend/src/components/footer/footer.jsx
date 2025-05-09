import React from 'react';
import logo from '../../assets/logo.png'; 
import quoteImage from '../../assets/quoteimage2.png'; 
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px 50px',
    backgroundColor: '#333',
    color: '#fff',
    flexWrap: 'wrap',
  },
  footerLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logo: {
    width: '150px',
    marginBottom: '10px',
  },
  quoteSection: {
    display: 'flex',
    alignItems: 'center',
  },
  quoteImage: {
    height: '40px',
    marginRight: '10px',
  },
  socialIcons: {
    display: 'flex',
    marginTop: '15px',
  },
  icon: {
    fontSize: '1.5rem',
    marginRight: '10px',
    color: '#fff',
    transition: 'color 0.3s',
  },
  iconHover: {
    color: '#F6A21E',
  },
  footerMiddle: {
    textAlign: 'left',
    fontFamily: "'Holistic Haircut', sans-serif",
  },
  ul: {
    listStyleType: 'none',
    padding: '0',
  },
  li: {
    marginBottom: '10px',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
  liHover: {
    color: '#F6A21E',
  },
  footerRight: {
    textAlign: 'left',
  },
  contactInfo: {
    margin: '5px 0',
    fontSize: '0.9rem',
  },
  iframe: {
    width: '60px',
    height: '45px',
  },
  // Mobile responsive styles
  mobile: {
    footer: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    },
    section: {
      marginBottom: '20px',
      width: '100%',
    },
    logo: {
      width: '100px',
      margin: '0 auto 10px auto',
    },
    quoteSection: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    quoteImage: {
      height: '30px',
      marginBottom: '5px',
      marginRight: '0',
    },
    iframe: {
      width: '100%',
      height: '150px',
    },
  },
};

const Footer = () => {
  return (
    <div style={styles.footer}>
      {/* Left Section */}
      <div style={styles.footerLeft}>
        <img src={logo} alt="Kahba Logo" style={styles.logo} />
        <div style={styles.quoteSection}>
          <img src={quoteImage} alt="Quote" style={styles.quoteImage} />
          <p>CRAFTING SPACES, INSPIRING LIVES</p>
        </div>
        <div style={styles.socialIcons}>
          <FaInstagram 
            style={styles.icon} 
            onMouseOver={(e) => (e.target.style.color = styles.iconHover.color)} 
            onMouseOut={(e) => (e.target.style.color = styles.icon.color)} 
          />
          <FaLinkedin 
            style={styles.icon} 
            onMouseOver={(e) => (e.target.style.color = styles.iconHover.color)} 
            onMouseOut={(e) => (e.target.style.color = styles.icon.color)} 
          />
          <FaEnvelope 
            style={styles.icon} 
            onMouseOver={(e) => (e.target.style.color = styles.iconHover.color)} 
            onMouseOut={(e) => (e.target.style.color = styles.icon.color)} 
          />
          <FaPhoneAlt 
            style={styles.icon} 
            onMouseOver={(e) => (e.target.style.color = styles.iconHover.color)} 
            onMouseOut={(e) => (e.target.style.color = styles.icon.color)} 
          />
        </div>
      </div>

      {/* Middle Section */}
      <div style={styles.footerMiddle}>
        <ul style={styles.ul}>
          <li 
            style={styles.li} 
            onMouseOver={(e) => (e.target.style.color = styles.liHover.color)} 
            onMouseOut={(e) => (e.target.style.color = 'inherit')}
          >
            HOME
          </li>
          <li 
            style={styles.li} 
            onMouseOver={(e) => (e.target.style.color = styles.liHover.color)} 
            onMouseOut={(e) => (e.target.style.color = 'inherit')}
          >
            ABOUT US
          </li>
          <li 
            style={styles.li} 
            onMouseOver={(e) => (e.target.style.color = styles.liHover.color)} 
            onMouseOut={(e) => (e.target.style.color = 'inherit')}
          >
            CONTACT US
          </li>
          <li 
            style={styles.li} 
            onMouseOver={(e) => (e.target.style.color = styles.liHover.color)} 
            onMouseOut={(e) => (e.target.style.color = 'inherit')}
          >
            PRIVACY POLICY
          </li>
          <li 
            style={styles.li} 
            onMouseOver={(e) => (e.target.style.color = styles.liHover.color)} 
            onMouseOut={(e) => (e.target.style.color = 'inherit')}
          >
            COPYRIGHT
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div style={styles.footerRight}>
        <div style={styles.contactInfo}>
          <p><strong>Address:</strong> JQW2+VP2, Gmada Aerocity, Chachu Majra, Punjab 140306</p>
          <p><strong>Email:</strong> kahbadesignstudio@gmail.com</p>
          <p><strong>Phone:</strong> 8585984111</p>
          <p><strong>Location:</strong> Mohali, Chandigarh</p>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54908.83172945944!2d76.67466090418857!3d30.66770405133338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb513f26dfdb%3A0x82d0dddfea68b940!2sKAHBA%20Design%20Studio!5e0!3m2!1sen!2sin!4v1727760236963!5m2!1sen!2sin" 
          style={styles.iframe}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
