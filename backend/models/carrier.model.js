// backend/models/carrier.model.js
import mongoose from 'mongoose';

const carrierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Carrier', carrierSchema);

