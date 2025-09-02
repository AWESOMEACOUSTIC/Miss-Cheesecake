import express from 'express';
import routes from './routes/index.js';
import { notFound, errorHandler } from './middlewares/error.js';

const app = express();

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Placeholder backend running' });
});

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

export default app;
