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
    name: String,
    username: String,
    password: String,
});

const UserModel = mongoose.model('auth', userSchema);

const router = express.Router();
app.use('/', router);

router.route('/login')
    .post(postLogin);

router.route('/signup')
    .post(postSign);

async function postLogin(req, res) {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username, password });
    if (!user) {
        res.status(401).json({ message: 'Invalid Credentials,Please Sign Up first' });
    } else {
        res.json({ message: 'Login Success', name: user.name, username: user.username });
    }
};

async function postSign(req, res) {
    try {
        const userData = req.body;
        const { username, password } = req.body;
        const user = await UserModel.findOne({ username, password });
        if (user) {
            res.status(401).json({ message: 'User already exists' });
        } else {
            const newUser = new UserModel(userData);
            await newUser.save();
            res.status(200).json('User added to MongoDB!');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding user to MongoDB');
    }
};

const eventSchema = new mongoose.Schema({
    username: String,
    eventname: String,
    description: String,
    date: Date
});

const EventModel = mongoose.model('event', eventSchema);

router.route('/createevent')
    .post(postEvent);


async function postEvent(req, res) {

    const { username, eventname, eventdescription, eventdate } = req.body;

    const newEvent = new EventModel({
        username: username,
        eventname: eventname,
        description: eventdescription,
        date: eventdate,
    });

    await newEvent.save();
    res.json({ message: 'Event Created' });
}

router.route('/getevents')
    .post(getEvents);

async function getEvents(req, res) {
    const { name } = req.body;
    try {
        const events = await EventModel.find({ username: name }).sort({ date: -1 });
        res.json(events);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching events from MongoDB');
    }
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
