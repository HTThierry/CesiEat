const express = require('express');
const app = express();

const port = 3008; 

app.get('/', (req, res) => {
    res.send('Hello World from Service!');
});

app.listen(port, () => {
    console.log(`Service listening at http://localhost:${port}`);
});