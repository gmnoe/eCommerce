import express from 'express';
import PRODUCTS from './PRODUCTS.js';
import cors from 'cors';

const app = express();

app.use(cors());


app.get('/product', (req, res) => {
    res.send(PRODUCTS);
});

app.get('/', (req, res) => {
    res.send('Server is ready')
});

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});