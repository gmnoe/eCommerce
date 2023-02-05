const express = require('express');
const { PRODUCTS } = require('./PRODUCTS.js');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.static('public'));

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

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../frontend/build'));
}

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
});
