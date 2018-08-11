const   express     =   require('express')
        bodyParser  =   require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
const url = require("./config.json")["MongoDBURL"]


/*
var expressMongoDb = require('express-mongo-db');
const url = require("./config.json")["MongoDBURL"]
app.use(expressMongoDb(url));

app.get('/bclvtng/admin/bl/getAltCoins', function (req, res) {
    req.db.collection("adminAltcoins").find().toArray(function(err, result) {
        if (err) throw err;
        res.send({"data":result})
    })
})
*/
var db = require('./db')


app.get('/get1', function (req, res) {
    res.send({"data1":{"name":"jaison"}})
})
app.get('/bclvtng/admin/bl/getAltCoins', function (req, res) {
    var collection = db.get().collection('adminAltcoins')
    collection.find().toArray(function(err, result) {
        res.send({"data":result})
    })
})

db.connect(url,function(err) {
    if (err) {
        console.log('Unable to connect to Mongo.')
        console.log(err)
        process.exit(1)
    } else {
        app.listen(port, function() {
        console.log('Back end server for Voting Engine running on port :' + port)
        })
    }
})

/*
app.listen(port, function () {
    console.log('Mongo Server for Voting Engine running on port :' + port);
})
*/