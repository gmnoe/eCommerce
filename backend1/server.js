import express from 'express';
import PRODUCTS from './PRODUCTS.js';

const app = express();

app.get('/api/products', (req, res) => {
    res.send(PRODUCTS);
});

app.get('/', (req, res) => {
    res.send('Server is ready')
});

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});