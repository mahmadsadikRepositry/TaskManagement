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


passportConfig(passport);
app.use(passport.initialize());

//Routes
app.use('/api/auth', AuthRouter)
app.use('/api/tasks', taskRouter);
export default app;
