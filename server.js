const express = require('express')
const mongos = require('mongoose')

let app = express();

mongos.connect('mongodb+srv://kumar:1321@cluster0.ieyot4h.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'users' })
    .then(() => {
        console.log("Connect To Mongodb")
    })
    .catch(err => (
        console.log(err)
    ));



let userSchema = new mongos.Schema({
    fname: String,
    lname: String,
    email: String,
    mobile: Number,
    address: String,
    address2: String,
    country: String,
    state: String,
    pincode: Number,
})

let userModel = mongos.model('userlists', userSchema)


app.get('/view', (req, res) => {
    userModel.find({})
        .then(rest => {
            res.send(rest)
        })
        .catch((err) => {
            console.log(err)
        })
})


app.delete('/deleteuser/:id', (req, res) => {
    let { id } = req.params;

    userModel.getByIdAndDelete({ _id: id })
        .then(rest => {
            res.send(rest)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.post('/creatuser', (req, res) => {
    let clist = new userModel({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        mobile: req.body.mobile,
        address: req.body.address,
        address2: req.body.address2,
        country: req.body.country,
        state: req.body.state,
        pincode: req.body.pincode,
    });

    clist.save()
        .then(rest => {
            res.send(rest)
        })
        .catch((err) => {
            console.log(err)
        })
})





let PORT = 8000;

app.listen(PORT, () => {
    console.log(`Port Number : ${PORT}`)
})