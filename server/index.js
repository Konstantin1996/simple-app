const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


const timer = function (req, res, next) {
    const time = new Date().toLocaleTimeString();
    console.log('Request at', time);
    next();
}

// MiddleWare
app.use(bodyParser.json());
app.use(cors());
app.use(timer);

const meetups = require('./routes/api/meetups');

app.use('/api/meetups', meetups);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));