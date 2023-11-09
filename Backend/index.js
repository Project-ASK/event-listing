//Using MONGO_CONNECT from .env file due to some network and connection issues. DB_CONNECT can also be used.

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const port = 3001;
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.static('public'));
dotenv.config();

mongoose.connect(process.env.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => {
    console.log('Connected to MongoDB Database');
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const UserModel = mongoose.model('auth', userSchema);


app.post('/login', async (req, res) => {
    // console.log(req.body);
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username, password });
    if (!user) {
        res.status(401).json({ message: 'Invalid Credentials,Please Sign Up first' });
    } else {
        res.json({ message: 'Login Success' });
    }
});

app.post('/signup', async (req, res) => {
    // console.log(req.body);
    try {
        const userData = req.body;
        const { username, password } = req.body;
        const user = await UserModel.findOne({ username, password });
        if(user){
            res.status(401).json({ message: 'User already exists' });
        }else{
            const newUser = new UserModel(userData);
            await newUser.save();
            res.status(200).json('User added to MongoDB!');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding user to MongoDB');
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/login`);
});
