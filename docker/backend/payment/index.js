const express = require('express');
const app = express();

const port = 3006; 

app.get('/', (req, res) => {
    res.send('Hello World from Service!');
});

app.listen(port, () => {
    console.log(`Service listening at http://localhost:${port}`);
});