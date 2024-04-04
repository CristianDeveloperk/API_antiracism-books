import express from 'express';
import { testConneciton } from './database/connectionDB.js';
import { routes } from './routes/index.routes.js';

const app = express();
const PORT = 3001

app.use(express.json());
app.use(routes);



app.listen(PORT, () => {
  testConneciton();
  console.log(`Server is running on port ${PORT}`);
});