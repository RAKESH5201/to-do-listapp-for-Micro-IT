import authRoutes from './routes/auth.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const route = express.Router;

const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/todoapp').then(()=>console.log('MongoDB connected')).catch((err)=>console.log("mongo is not connected"));


app.use('/api/auth',authRoutes);



app.listen(port,()=>{
  console.log('server is successfully running in the port '+port);
})



