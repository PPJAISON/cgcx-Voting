const express = require('express');
const router = express.Router();

//------------------------------------
router.get('/bl/showVotingSummaryCoin', function(req, res) {
  const collection = req.db.get('vtngCastVote')
  collection.aggregate([
    { $match: { voteCount:1 } },
    { $group: { _id:{altCoinSymbol:"$altCoinSymbol"},total_voteCount: { $sum: "$voteCount" } } },
    { $sort: { total_voteCount: -1 } }
  ])
  .then((docs) => {
    res.send({"data":docs})
  })
  .then(() => db.close())
  .catch(function () {
    console.log("Database connection issue @bclvtng/rpt/bl/showVotingSummaryCoin");
  });
});
//------------------------------------
router.get('/bl/showVotingSummaryUser', function(req, res) {
  const collection = req.db.get('vtngCastVote')
  collection.aggregate([
    { $match: { voteCount:1 } },
    { $group: { _id:{userID:"$userID"},total_voteCount: { $sum: "$voteCount" } } },
    { $sort: { total_voteCount: -1 } }
  ])
  .then((docs) => {
    res.send({"data":docs})
  })
  .then(() => db.close())
  .catch(function () {
    console.log("Database connection issue @bclvtng/rpt/bl/showVotingSummaryCoin");
  });
});
//------------------------------------
router.get('/bl/showActivitiyLogsUser', function(req, res) {
  console.log('/bl/showActivitiyLogs')

  res.send({"data":'/bl/showActivitiyLogs'})
});
//------------------------------------
router.get('/bl/showActivitiyLogsAdmin', function(req, res) {
  console.log('/bl/showActivitiyLogsAdmin')

  res.send({"data":'/bl/showActivitiyLogsAdmin'})
});
module.exports = router;