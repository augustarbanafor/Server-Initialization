const express = require('express')

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('./routes/index.html', {root:__dirname})
})
app.get('/about', (req, res) => {
    res.sendFile('./routes/about.html', {root:__dirname})
})
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})
app.use((req, res) => {
    res.sendFile('./routes/404.html', {root:__dirname})
})
