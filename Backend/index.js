const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.static('public'));

app.post('/login', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Hello World' });
});

app.post('/signup', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Hello World SignUp' });
});

app.get('/login', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/login`);
});
