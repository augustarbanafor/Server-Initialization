const express = require('express')

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('./routes', {root:__dirname})
})
