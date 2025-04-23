import express from 'express';
import cors from 'cors'; //Enable Cross origin Resource sharing
import morgan from 'morgan';// Logging
import taskRouter from './routes/taskRoutes.js';


const app = express();

//Middleware
app.use(express.json());
//CORS Configuration
app.use(cors({
    origin: 'https://task-management-theta-nine-97.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.use(morgan('dev'))

//Routes
//Health Check 
app.use('/api/tasks', taskRouter);
export default app;
