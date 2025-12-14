import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Sweet Shop API running');
});

app.get('/sweets', async (req, res) => {
  const sweets = await prisma.sweet.findMany();
  res.json(sweets);
});

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});
