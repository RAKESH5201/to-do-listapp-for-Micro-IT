import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/todo')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(5000, () => console.log('Server running on port 5000'));
