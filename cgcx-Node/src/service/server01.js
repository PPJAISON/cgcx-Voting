const   express = require('express')
        bodyParser=require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

var expressMongoDb = require('express-mongo-db');
const url = require("./config.json")["MongoDBURL"]
app.use(expressMongoDb(url));

app.get('/bclvtng/admin/bl/getAltCoins', function (req, res) {
    req.db.collection("adminAltcoins").find().toArray(function(err, result) {
        if (err) throw err;
        res.send({"data":result})
    })
})

app.post('bclvtng/admin/bl/getUserSummary', function (req, res) {
    
    req.db.collection("adminAltcoins").find().toArray(function(err, result) {
        if (err) throw err;
        res.send({"data":result})
    })
})

app.get('/get1', function (req, res) {
    res.send({"data1":{"name":"jaison"}})
})

app.listen(port, function () {
    console.log('Mongo Server for Voting Engine running on port :' + port);
})