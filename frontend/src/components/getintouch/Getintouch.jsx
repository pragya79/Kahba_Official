import React, { useState } from 'react';

const ContactForm = () => {
  // Manage form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    newsletter: false,
  });

  const [formStatus, setFormStatus] = useState(''); // For success or error message

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormStatus('Please fill in all required fields.');
      return;
    }

    // Send the form data to the backend
    try {
      const response = await fetch('http://localhost:5000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', message: '', newsletter: false });
      } else {
        setFormStatus('Failed to submit the form.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={styles.contactSection}>
      <div style={styles.formSection}>
        <h2 style={styles.formTitle}>Get in Touch</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          />

          <div style={styles.newsletter}>
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <label htmlFor="newsletter">Would you like to receive our newsletter?</label>
          </div>

          <button type="submit" style={styles.submitBtn}>Submit</button>
        </form>

        {formStatus && <p>{formStatus}</p>}
      </div>

      <div style={styles.infoSection}>
        <p style={styles.address}>
          JQW2+VP2, Gmada Aerocity,<br />
          Chachu Majra, Punjab 140306
        </p>
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54908.83172945944!2d76.67466090418857!3d30.66770405133338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb513f26dfdb%3A0x82d0dddfea68b940!2sKAHBA%20Design%20Studio!5e0!3m2!1sen!2sin!4v1727760236963!5m2!1sen!2sin"
  width="100%"
  height="300"
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  style={{ border: 0, width: '100%', height: '300px' }}
  title="Google Map"
/>


        <div style={styles.contactDetails}>
          <p>Email: <a href="mailto:kahbadesignstudio@gmail.com">kahbadesignstudio@gmail.com</a></p>
          <p>Phone: <a href="tel:+918585981411">8585981411</a></p>
          <p>Location: Mohali, Chandigarh</p>
        </div>

        <div style={styles.socialIcons}>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          <a href="#"><i className="far fa-envelope"></i></a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  contactSection: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '50px',
    backgroundColor: '#F8A928',
    color: 'white',
  },
  formSection: {
    width: '50%',
  },
  formTitle: {
    color:'black',
    display:'flex',
    justifyContent:'center',
    fontFamily: 'Holistic Haircut, sans-serif',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    marginBottom: '20px',
    padding: '10px',
    fontSize: '1rem',
    border: 'none',
    borderBottom: '2px solid white',
    background: 'transparent',
    color: 'white',
    outline: 'none',
  },
  textarea: {
    height: '100px',
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: 'none',
    borderBottom: '2px solid white',
    background: 'transparent',
    color: 'white',
    outline: 'none',
    marginBottom: '20px',
  },
  newsletter: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  submitBtn: {
    width: '150px',
    padding: '10px',
    backgroundColor: '#F4CE5E',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '5px',
  },
  infoSection: {
    width: '40%',
    textAlign: 'right',
  },
  address: {
    fontSize: '1rem',
    marginBottom: '20px',
  },
  map: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
  },
  contactDetails: {
    fontSize: '1rem',
    marginBottom: '20px',
  },
  socialIcons: {
    fontSize: '1.5rem',
  },
};

export default ContactForm;
