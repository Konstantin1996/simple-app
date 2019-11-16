const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get meetups
router.get('/', async (req,res) => {
    const meetups = await loadMeetupsCollection();
    console.log('GET');
    res.send(await meetups.find({}).toArray()); 
});

// Get single meetup
router.get('/:id', async (req,res) => {
    const meetups = await loadMeetupsCollection();
    debugger;
    const singleMeetup = await meetups.findOne(mongodb.ObjectId(`${req.params.id}`));
    res.send(singleMeetup);
});

// Post meetups
router.post('/add', async (req,res) => {
    const meetups = await loadMeetupsCollection();
    console.log('POST');
    await meetups.insertOne({
        "title": req.body.title,
        "desc": req.body.desc,
        "date": req.body.date,
        "location": req.body.location,
    });
    res.sendStatus(201);
});

router.delete('/delete/:id', async (req,res) => {
    const meetups = await loadMeetupsCollection();
    console.log('DELETE')
    await meetups.deleteOne({"_id": new mongodb.ObjectId(req.params.id)}, (err, obj) => {
        if(err) throw err;
        console.log(obj);
        console.log('1 document deleted');
    });
    res.json({ success: req.params.id });
});

router.put('/update/:id', async (req,res) => {
    const meetups = await loadMeetupsCollection();
    console.log('PUT');
    console.log(req.body);
    await meetups.update({"_id": new mongodb.ObjectId(req.params.id)},  req.body , (err, obj) => {
        if(err) throw err;
        console.log('1 document updated');
    })
    res.json({ secret: req.params.id });
});

async function loadMeetupsCollection() {
    const client = await mongodb.MongoClient.connect('\mongodb+srv://konstantin:fahrenheit21101996@cluster0-kqqam.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
    });
    return client.db('vue_express').collection('meetups');
}

module.exports = router;
