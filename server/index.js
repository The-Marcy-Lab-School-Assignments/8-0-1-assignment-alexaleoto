const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next();
});

const pathToDistFolder = path.join(__dirname, '../dist');
app.use(express.static(pathToDistFolder));

app.get('/api/hello', (req, res) => {
    const name = req.query.name || "stranger";
    res.send(`Hello, ${name}!`);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});