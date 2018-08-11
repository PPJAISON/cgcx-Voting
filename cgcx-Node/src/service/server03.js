const createError = require('http-errors');
const express = require('express');
//var path = require('path');
const logger = require('morgan');
const url = require("./config.json")["MongoDBURL"]
const port = process.env.PORT || 3000;

const adminRouter = require('../routes/admin');
const usersRouter = require('../routes/users');
const vtngRouter  = require('../routes/vtng');
const rptRouter   = require('../routes/rpts');

//const mongo = require('mongodb');
const monk = require('monk');

const db = monk(url);
const app = express();

app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  next(); 
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make our db accessible to our router
app.use(function(req,res,next){
  req.db = db;
  next();
});

app.use('/bclvtng/admin', adminRouter);
app.use('/bclvtng/user', usersRouter);
app.use('/bclvtng/vtng', vtngRouter);
app.use('/bclvtng/rpt', rptRouter);
app.get('*', function(req, res){
  res.send({"data":"noRoute"})
});
app.post('*', function(req, res){
  res.send({"data":"noRoute"})
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

db.then(() => {
  console.log('mongo db connected correctly to server');
  app.listen(port, function() {
    console.log('Back end server for Voting Engine running on port :' + port)
  })
})