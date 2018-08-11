const express = require('express');
const router = express.Router();

//------------------------------------
router.get('/bl/getAltCoins', function(req, res) {
  const collection = req.db.get('adminAltcoins')
  collection.find()
  .then((docs) => {
    res.send({"data":docs})
  })
  .then(() => db.close())
  .catch(function () {
    console.log("Database connection issue @/bl/getAltCoins");
  });
});
//------------------------------------
router.post('/bl/postChanges', function(req, res) {
  console.log(req.body.enableForVoting);
  _updateObject={}
  _findObject={}
  if (!(req.body.altCoinSymbol === undefined||req.body.altCoinSymbol ==null)) {
    _findObject['altCoinSymbol'] =req.body.altCoinSymbol;
  }
  if (!(req.body.enableForVoting === undefined||req.body.enableForVoting ==null)) {
    if (req.body.enableForVoting ==="changedTo:1"){
      _updateObject['enableForVoting'] = 1;
    }else if (req.body.enableForVoting ==="changedTo:0"){
      _updateObject['enableForVoting'] = 0;
    }
  } 
  if (!(req.body.enableForTrading === undefined||req.body.enableForTrading ==null)) {
    if (req.body.enableForTrading ==="changedTo:1"){
      _updateObject['enableForTrading'] = 1;
    }else if (req.body.enableForTrading ==="changedTo:0"){
      _updateObject['enableForTrading'] = 0;
    }
  } 

  if (_updateObject.hasOwnProperty("enableForVoting")||_updateObject.hasOwnProperty("enableForTrading")) {
    const collection = req.db.get('adminAltcoins')
    collection.update(
      _findObject,
      { $set: _updateObject }
    )
    .then((docs) => {
      res.send({"data":docs})
    })
    .then(() => db.close())
    .catch(function () {
      console.log("Database connection issue @/bl/getAltCoins");
    });
  }else
  {
    res.send({"data":"NothingToUpdate"})
  }

});
//------------------------------------
router.get('/bl/getUserSummary', function(req, res) {
  const collection = req.db.get('adminUserSummary')
  collection.find()
  .then((docs) => {
    res.send({"data":docs})
  })
  .then(() => db.close())
  .catch(function () {
    console.log("Database connection issue @/bl/getUserSummary");
  });
});
//------------------------------------
router.get('/bl/getAltCoins3', function(req, res) {
  console.log('/bl/getAltCoins')

  const collection = req.db.get('adminAltcoins')
  collection.find()
  .then((docs) => {
       res.send({"data":docs})
  })
  .then(() => db.close())
  .catch(function () {
    console.log("Database connection issue @/bl/getAltCoins");
  });
});
//------------------------------------
router.get('/bl/getAltCoins4', function(req, res) {
  console.log('/bl/getAltCoins')

  const collection = req.db.get('adminAltcoins')
  collection.find()
  .then((docs) => {
       res.send({"data":docs})
  })
  .then(() => db.close())
  .catch(function () {
    console.log("Database connection issue @/bl/getAltCoins");
  });
});
//------------------------------------
router.get('/bl/getAltCoins5', function(req, res) {
  console.log('/bl/getAltCoins')

  const collection = req.db.get('adminAltcoins')
  collection.find()
  .then((docs) => {
       res.send({"data":docs})
  })
  .then(() => db.close())
  .catch(function () {
    console.log("Database connection issue @/bl/getAltCoins");
  });
});
//------------------------------------
router.get('/bl/getAltCoins6', function(req, res) {
  console.log('/bl/getAltCoins')

  const collection = req.db.get('adminAltcoins')
  collection.find()
  .then((docs) => {
       res.send({"data":docs})
  })
  .then(() => db.close())
  .catch(function () {
    console.log("Database connection issue @/bl/getAltCoins");
  });
});
//------------------------------------
router.get('/bl/getAltCoins7', function(req, res) {
  console.log('/bl/getAltCoins')

  const collection = req.db.get('adminAltcoins')
  collection.find()
  .then((docs) => {
       res.send({"data":docs})
  })
  .then(() => db.close())
  .catch(function () {
    console.log("Database connection issue @/bl/getAltCoins");
  });
});
//------------------------------------
router.get('/bl/getAltCoins8', function(req, res) {
  console.log('/bl/getAltCoins')

  const collection = req.db.get('adminAltcoins')
  collection.find()
  .then((docs) => {
       res.send({"data":docs})
  })
  .then(() => db.close())
  .catch(function () {
    console.log("Database connection issue @/bl/getAltCoins");
  });
});

module.exports = router;