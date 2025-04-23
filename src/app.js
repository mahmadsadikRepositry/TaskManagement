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
app.get('/proxy/c', async (req, res) => {
    try {
      const response = await axios.get('https://topodat.info/c');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
app.use('/api/tasks', taskRouter);
export default app;
