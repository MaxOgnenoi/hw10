const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let itemIdCounter = 1;
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

app.get('/', (req, res) => {
    res.send('Hello everyone');
});

app.get('/items', (req, res) => {
    res.json(items);
});

app.get('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);

    if (isNaN(itemId)) {
        res.status(400).json({ error: 'Invalid item ID' });
        return;
    }

    const item = items.find((item) => item.id === itemId);

    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

app.post('/items', (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        res.status(400).json({ error: 'Name and price fields are required' });
        return;
    }

    const parsedPrice = parseFloat(price);

    if (isNaN(parsedPrice)) {
        res.status(400).json({ error: 'Invalid price' });
        return;
    }

    const newItem = {
        id: itemIdCounter++,
        name,
        price: parsedPrice
    };

    items.push(newItem);
    res.json(newItem);
});

app.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const { name, price } = req.body;

    if (isNaN(itemId)) {
        res.status(400).json({ error: 'Invalid item ID' });
        return;
    }

    const item = items.find((item) => item.id === itemId);

    if (!item) {
        res.status(404).json({ error: 'Item not found' });
        return;
    }

    if (!name || !price) {
        res.status(400).json({ error: 'Name and price fields are required' });
        return;
    }

    const parsedPrice = parseFloat(price);

    if (isNaN(parsedPrice)) {
        res.status(400).json({ error: 'Invalid price' });
        return;
    }

    item.name = name;
    item.price = parsedPrice;
    res.json(item);
});

app.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);

    if (isNaN(itemId)) {
        res.status(400).json({ error: 'Invalid item ID' });
        return;
    }

    const itemIndex = items.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
        const deletedItem = items.splice(itemIndex, 1)[0];
        res.json(deletedItem);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
