import express from 'express';
import cors from 'cors'; //Enable Cross origin Resource sharing
import morgan from 'morgan';// Logging
import taskRouter from './routes/taskRoutes.js';
import passport from 'passport'; 
import passportConfig from './config/passport.js'; 
import AuthRouter from './routes/authRoutes.js';
 

const app = express();

//Middleware
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))

// Call the passportConfig function and pass the 'passport' object to it
// This sets up any authentication strategies, session handling, etc.
passportConfig(passport); 

// Initialize passport in the app to handle authentication requests
app.use(passport.initialize()); 

//Routes
app.use('/api/auth', AuthRouter)
app.use('/api/tasks', taskRouter);
export default app;
