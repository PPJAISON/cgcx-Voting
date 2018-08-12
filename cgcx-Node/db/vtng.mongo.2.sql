db.createCollection("adminUserSummary")

db.adminUserSummary.insert(
[
  {
     userFullName: "Jaison Pappachan",
     userID: "I001",
     altCoinSymbol:"BTC",
     totalCoinsWithCGCX:10,
     usedForVoting:8
  },
  {
     userFullName: "Jomon I",
     userID: "I002",
     altCoinSymbol:"BTC",
     totalCoinsWithCGCX:100,
     usedForVoting:80
  },
  {
     userFullName: "Isa Rose",
     userID: "I003",
     altCoinSymbol:"KPC",
     totalCoinsWithCGCX:1000,
     usedForVoting:10
  }
]

----------------------------------
db.createCollection("vtngCastVote")

db.vtngCastVotes.insert(
[
  {
    altCoinSymbol:"BTC",
    userID: "I001",
    tokenUsedForVoting:"sadferwrwesafdsf",
    voteCount:1
  },
  {
    altCoinSymbol:"PQR",
    userID: "I002",
    tokenUsedForVoting:"dadfsadferwrwesafdsf",
    voteCount:1
  },
  {
    altCoinSymbol:"ZYZ",
    userID: "I002",
    tokenUsedForVoting:"ssdadfsadferwrwesafdsf",
    voteCount:1
  }
]
)

db.vtngCastVotes.insert(
[
  {
    altCoinSymbol:"ZYZ",
    userID: "I003",
    tokenUsedForVoting:"sasdadfsadferwrwesafdsf",
    voteCount:1
  }
])

db.vtngCastVotes.insert(
[
  {
    altCoinSymbol:"ZYZ",
    userID: "I004",
    tokenUsedForVoting:"sqqsasdadfsadferwrwesafdsf",
    voteCount:1,
    timeOfCasting:ISODate("2018-08-07T06:01:17.171Z")
  }
])


db.vtngCastVote.insert(
[
  {
    altCoinSymbol:"ZYZ",
    userID: "I004",
    tokenUsedForVoting:"333sqqsasdadfsadferwrwesafdsf",
    voteCount:1,
    timeOfCasting:ISODate("2018-08-07T06:01:17.171Z")
  }
])

db.vtngCastVote.find();
-------------------------------------------
db.createCollection("tokenSummary")
db.tokenSummary.insert(
[
  {
    altCoinKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
    userID: "I004",
    timeOfAvailable:ISODate("2018-08-07T06:01:17.171Z")
  }
])


db.tokenSummary.find({altCoinKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",userID: "I004"})
db.tokenSummary.find();