const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const meetupsRouter = require('./routes/api/meetups');

const timer = function (req, res, next) {
    const time = new Date().toLocaleTimeString();
    console.log(`Request at ${time} type ${req.method}`);
    next();
}

// MiddleWare
app.use(bodyParser.json());
app.use(cors());
app.use(timer);

app.use('/api/meetups', meetupsRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));

console.log(module)