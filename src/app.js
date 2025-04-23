import express from 'express';
import cors from 'cors'; //Enable Cross origin Resource sharing
import morgan from 'morgan';// Logging
import taskRouter from './routes/taskRoutes.js';


const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

//Routes
//Health Check 
app.get('/health', (req, res) => {
    res.status(200).json({
      status: 'OK',
      message: 'Server is running',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development'
    });
  });
app.use('/api/tasks', taskRouter);
export default app;
