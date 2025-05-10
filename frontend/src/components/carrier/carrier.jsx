import React, { useState } from 'react';
import axios from 'axios';

const CarrierUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const data = new FormData();
  data.append('name', formData.name);
  data.append('phone', formData.phone);
  data.append('email', formData.email);
  data.append('resume', formData.resume);
  console.log('Submitting data:', data);

  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL.replace(/\/$/, '')}/api/carrier`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    alert('Resume submitted successfully!');
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error submitting the resume:', error);
    if (error.response) {
      alert(`Error: ${error.response.data.error || 'Failed to submit resume'}`);
    } else if (error.request) {
      alert('Error: No response received from the server');
    } else {
      alert(`Error: ${error.message}`);
    }
  }
};

  return (
    <div className="contact-us-page">
      {/* Header */}

      {/* Contact Form Section */}
      <div className="form-section">
        <h2>WANT TO WORK WITH US</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email id" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <input 
            type="file" 
            name="resume" 
            accept=".pdf,.doc,.docx" 
            onChange={handleFileChange}
            required 
          />
          <button type="submit" className="upload-button">UPLOAD YOUR RESUME</button>
        </form>
      </div>
      <style jsx>{`/* Overall Page Layout */
.contact-us-page {
  padding-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5e7de;
    min-height: 100vh;
    font-family: 'Holistic Haircut', sans-serif;
  }
  
  /* Header Section */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 50px;
    background-color: #fff;
    border-bottom: 2px solid #333;
  }
  
  .logo-section img {
    width: 100px;
  }
  
  .nav-menu ul {
    display: flex;
    list-style-type: none;
    gap: 20px;
  }
  
  .nav-menu ul li {
    font-size: 1.1rem;
    color: #333;
    cursor: pointer;
  }
  
  .nav-menu ul li:hover {
    color: #F6A21E;
  }
  
  /* Contact Form Section */
  .form-section {
    margin: 40px 0;
    text-align: center;
  }
  
  .form-section h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
    letter-spacing: 1px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .contact-form input {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  .upload-button {
    background-color: #288070;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .upload-button:hover {
    background-color: #F6A21E;
  }
  
  /* Footer */
  .footer {
    margin-top: auto;
    width: 100%;
  }
  `}</style>

    </div>
  );
};

export default CarrierUs;
