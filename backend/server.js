const express = require('express');
const { PRODUCTS } = require('./PRODUCTS.js');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/products/:productId', (req, res) => {
    const product = PRODUCTS.find((x) => x.id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});

app.get('/products', (req, res) => {
    res.send(PRODUCTS);
});

app.get('/', (req, res) => {
    res.send('Server is ready')
});

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});

app.use(express.static('public'))
