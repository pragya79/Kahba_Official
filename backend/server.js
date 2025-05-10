import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import carrierRoutes from './routes/carrier.route.js';

dotenv.config({ path: './.env' });

const app = express();

// CORS configuration
const allowedOrigins = [
  process.env.FRONTEND_URL || 'https://kahba.netlify.app',
  'http://localhost:3000',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, 
      bufferTimeoutMS: 20000,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

const startServer = async () => {
  await connectToMongoDB();

  app.use('/api', userRoutes);
  app.use('/api', carrierRoutes);

  app.get('/', (req, res) => {
    res.json({ message: 'Backend API is running' });
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

export default app;