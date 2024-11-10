import express from 'express';
 import cors from 'cors'
import userRoutes from './routes/userRoutes.js'; 

const app = express();

app.use(cors())


app.use(express.json());

// Advisor routes
app.get('/api/test', (req, res) => {
  res.send('CORS is working!');
});

app.use('/api/user',userRoutes );

app.get('/', (req, res) => {
  res.send('API is running...'); 
});

// Change module.exports to export default
export default app;  // Use default export
