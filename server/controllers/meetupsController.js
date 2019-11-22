const mongodb = require('mongodb');

exports.get_list_meetup = async (req,res) => {
    const meetups = await loadMeetupsCollection();
    res.send(await meetups.find({}).toArray());
}

exports.get_single_meetup = async (req,res) => {
    const meetups = await loadMeetupsCollection();
    const singleMeetup = await meetups.findOne(mongodb.ObjectId(`${req.params.id}`));
    res.send(singleMeetup);
}

exports.create_meetup = async (req,res) => {
    const meetups = await loadMeetupsCollection();
    await meetups.insertOne({
        "title": req.body.title,
        "location": req.body.location,
        "imageURL": req.body.imageURL,
        "desc": req.body.desc,
        "date": req.body.date,
    });
    res.sendStatus(201);
}

exports.delete_meetup = async (req,res) => {
    const meetups = await loadMeetupsCollection();
    await meetups.deleteOne({"_id": new mongodb.ObjectId(req.params.id)}, (err, obj) => {
        if(err) throw err;
        console.log(obj);
        console.log('1 document deleted');
    });
    res.json({ success: req.params.id });
}

exports.update_meetup =  async (req,res) => {
    const meetups = await loadMeetupsCollection();
    await meetups.update({"_id": new mongodb.ObjectId(req.params.id)},  req.body , (err, obj) => {
        if(err) throw err;
        console.log('1 document updated');
    })
    res.json({ secret: req.params.id });
}

exports.filter_meetups = async (req,res) => { 
    const meetups = await loadMeetupsCollection();
    // if req.params.expr is empty than db return all the meetups
    const searchedMeet = await meetups.find({ title: new RegExp(req.params.expr)}).toArray();
    res.send(searchedMeet);    
}

async function loadMeetupsCollection() {
    const client = await mongodb.MongoClient.connect('\mongodb+srv://konstantin:fahrenheit21101996@cluster0-kqqam.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
    });
    return client.db('vue_express').collection('meetups');
}