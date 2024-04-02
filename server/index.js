const express = require('express');
const app = express();

const path = require('path');

const pathToDistFolder = path.join(__dirname, '..', 'path', 'to', 'frontend', 'dist');

const serveStatic = express.static(pathToDistFolder);

app.use(serveStatic);


const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 