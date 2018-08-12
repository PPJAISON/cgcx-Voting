const express = require('express');
const router = express.Router();
//------------------------------------
router.post('/bl/checkAltCoin', function(req, res) {
  _findObject={}
  if (!(req.body.altCoinKey === undefined||req.body.altCoinKey ==null)) {
    _findObject['altCoinKey'] =req.body.altCoinKey;
  }
  if (!(req.body.userID === undefined||req.body.userID ==null)) {
    _findObject['userID'] =req.body.userID;
  }
  if (_findObject.hasOwnProperty("altCoinKey")||_findObject.hasOwnProperty("userID")) {
    const collection = req.db.get('tokenSummary')
    var recordCount=0;
    console.log(_findObject);
    collection.find(
      _findObject
    )
    .then((docs) => {
      recordCount=docs.length;
    })
    .then((docs) =>{
      console.log("recordCount",recordCount)
      if(recordCount>0){
        const collection2 = req.db.get('adminAltcoins')
        collection2.find({enableForVoting:1},{name:1,symbol:1})
        .then((docs2) => {
          res.send({"data":docs2})
        })
        .catch(function () {
          console.log("Database connection issue @bclvtng/vtng/bl/checkAltCoin");
        });
      }else{
        res.send({"data":"altCoinKey/userID missing"})
      }
    })
    .then(() => db.close())
    .catch(function () {
      console.log("Database connection issue @/bl/checkAltCoin");
    });
  }else
  {
    res.send({"data":"altCoinKey/userID missing"})
  }
});
//------------------------------------
router.get('/bl/getAltCoins', function(req, res) {
  const collection = req.db.get('adminAltcoins')
  collection.find({enableForVoting:1},{name:1,symbol:1})
  .then((docs) => {
    res.send({"data":docs})
  })
  .then(() => db.close())
  .catch(function () {
    console.log("Database connection issue @bclvtng/vtng/bl/getAltCoins");
  });
});
//------------------------------------
router.post('/bl/saveVotes', function(req, res) {
  _insertObject={}
  if (!(req.body.altCoinSymbol === undefined||req.body.altCoinSymbol ==null)) {
    _insertObject['altCoinSymbol'] =req.body.altCoinSymbol;
  }
  if (!(req.body.userID === undefined||req.body.userID ==null)) {
    _insertObject['userID'] =req.body.userID;
  }
  if (!(req.body.tokenUsedForVoting === undefined||req.body.tokenUsedForVoting ==null)) {
    _insertObject['tokenUsedForVoting'] =req.body.tokenUsedForVoting;
  }
  if (_insertObject.hasOwnProperty("altCoinSymbol")&&_insertObject.hasOwnProperty("userID")&&_insertObject.hasOwnProperty("tokenUsedForVoting")) {
    const collection = req.db.get('vtngCastVote')
    collection.insert(
      _insertObject
    )
    .then((docs) => {
      res.send({"data":docs})
    })
    .then(() => db.close())
    .catch(function () {
      console.log("Database connection issue @bclvtng/vtng/bl/saveVotes");
    });
  }else
  {
    res.send({"data":"NothingToUpdate"})
  }
});

module.exports = router;