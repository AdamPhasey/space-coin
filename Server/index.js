import express from 'express';
import {spaceCoinRouter} from './Routes/spaceCoinRouter.js';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.use('/', spaceCoinRouter)



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

