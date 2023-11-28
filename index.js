console.log("Hello World")
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
module.exports = app;
//app.use(cors());

app.use(cors({
    origin: '*'
}));

app.listen(port, () => console.log(`Server rodando on http://localhost:${port}`));


const jsonData = require('./JSON/section.json');
const jsonNews = require('./JSON/news.json');
const jsonOrientation = require('./JSON/orientation.json');

app.get("/getSection", (req, res) => {
    res.status(200).json(jsonData);
});

app.get("/getNews", (req, res) => {
    res.status(200).send(jsonNews);
});

app.get("/getOrientation", (req, res) => {
    res.status(200).json(jsonOrientation);
});