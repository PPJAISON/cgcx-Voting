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
  if (_findObject.hasOwnProperty("altCoinKey")&&_findObject.hasOwnProperty("userID")){
    res.send({"data":'checkingAltCoin_Ok'})
  }else
  {
    res.send({"data":'checkingAltCoin_NotWorking'})
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