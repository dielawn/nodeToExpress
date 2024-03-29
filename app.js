const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

//middleware to serve static files
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

//catch routing errors send to 404.html
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'), err => {
        if (err) {
            console.log(err)
            res.status(404).send('404 Not Found')
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});