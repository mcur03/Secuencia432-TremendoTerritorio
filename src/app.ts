import express from 'express';
import bodyParser from 'body-parser';
import greetingRoutes from './routes/greetingRouters';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express().use(bodyParser.json()); 
const PORT = process.env.PORT || 3000;

app.use(cors());
// Rutas
app.use('/', greetingRoutes);

// Middleware para rutas no encontradas
app.use('*', (_req, res) => {
  res.status(404).json({
    message: 'Ruta no encontrada',
    status: 'error'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto: http://localhost:${PORT}`);
}).on("error", (error) => {
  throw new Error(error.message);
});

export default app;
