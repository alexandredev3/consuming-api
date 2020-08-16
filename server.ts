import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());

app.get('/', async (request, response) => {

  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')

    console.log(data);
  
    return response.json(data);
  } catch(err) {
    return response.status(400).json({ error: 'Ocorreu um error...' })
  }
});

app.listen(3333);