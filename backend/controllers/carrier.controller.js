import Carrier from '../models/carrier.model.js';

const addCandidate = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const resume = req.file; 

    if (!name || !email || !phone || !resume) {
      return res.status(400).json({ message: 'All required fields (name, email, phone, resume) must be provided.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format.' });
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: 'Phone number must be a 10-digit number.' });
    }

    const newCandidate = new Carrier({
      name,
      email,
      phone,
      resume: resume.path, 
    });

    await newCandidate.save();
    res.status(201).json({ message: 'Resume submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit resume', error: error.message });
  }
};

export { addCandidate };