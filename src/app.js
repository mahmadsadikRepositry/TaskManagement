import express from 'express';
import cors from 'cors'; //Enable Cross origin Resource sharing
import morgan from 'morgan';// Logging
import taskRouter from './routes/taskRoutes.js';
import passport from 'passport'; 
import passportConfig from './config/passport.js'; 
import AuthRouter from './routes/authRoutes.js';
import FileRouter from './routes/fileRoutes.js';
import fileRouter from './routes/fileRoutes.js';
 

const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))
//For File Upload Module
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// Call the passportConfig function and pass the 'passport' object to it
// This sets up any authentication strategies, session handling, etc.
passportConfig(passport); 

// Initialize passport in the app to handle authentication requests
app.use(passport.initialize()); 

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

//Routes
app.use('/api/auth', AuthRouter)
app.use('/api/tasks', taskRouter);


//File Upload Routes
app.use('/api/files', fileRouter);

export default app;
