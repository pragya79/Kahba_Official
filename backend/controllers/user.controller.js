import User from '../models/user.model.js';
const submitUser = async (req, res) => {
  try {
    const { name, email, phone, message, newsletter } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'All required fields (name, email, phone, message) must be provided.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format.' });
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: 'Phone number must be a 10-digit number.' });
    }

    const newContact = new User({
      name,
      email,
      phone,
      message,
      newsletter: newsletter || false,
    });

    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit contact form', error: error.message });
  }
};

export { submitUser };