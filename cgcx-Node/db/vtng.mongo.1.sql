use vtng01

db.createCollection("adminAltcoins")

db.adminAltcoins.insert(
[
  {
     name: "Bitcoin",
     altCoinSymbol: "BTC",
     enableForVoting: 1,
     enableForTrading: 1,
     asOfNowVoteCount:0,
     coinImage:""
  },
   {
      name: "Ethereum",
      altCoinSymbol: "ETH",
      enableForVoting: 1,
      enableForTrading: 0,
      asOfNowVoteCount:0,
      coinImage:""
   },
   {
      name: "Ripple",
      altCoinSymbol: "XRP",
      enableForVoting: 0,
      enableForTrading: 0,
      asOfNowVoteCount:0,
      coinImage:""
   },
   {
      name: "EOS",
      altCoinSymbol: "EOS",
      enableForVoting: 1,
      enableForTrading: 1,
      asOfNowVoteCount:45,
      coinImage:""
   },
   {
      name: "Litecoin",
      altCoinSymbol: "LTC",
      enableForVoting: 0,
      enableForTrading: 0,
      asOfNowVoteCount:0,
      coinImage:""
   },
   {
      name: "Stellar",
      altCoinSymbol: "XLM",
      enableForVoting: 1,
      enableForTrading: 1,
      asOfNowVoteCount:0,
      coinImage:""
   },
   {
      name: "Cardano",
      altCoinSymbol: "ADA",
      enableForVoting: 0,
      enableForTrading: 0,
      asOfNowVoteCount:0,
      coinImage:""
   },
   {
      name: "TRON",
      altCoinSymbol: "TRX",
      enableForVoting: 0,
      enableForTrading: 0,
      asOfNowVoteCount:0,
      coinImage:""
   },
   {
      name: "IOTA",
      altCoinSymbol: "IOT",
      enableForVoting: 1,
      enableForTrading: 1,
      asOfNowVoteCount:0,
      coinImage:""
   },
   {
      name: "Tether",
      altCoinSymbol: "USDT",
      enableForVoting: 1,
      enableForTrading: 1,
      asOfNowVoteCount:0,
      coinImage:""
   },
   {
      name: "NEO",
      altCoinSymbol: "NEO",
      enableForVoting: 1,
      enableForTrading: 1,
      asOfNowVoteCount:0,
      coinImage:""
   },
   {
      name: "Dash",
      altCoinSymbol: "DASH",
      enableForVoting:0,
      enableForTrading:0,
      asOfNowVoteCount:0,
      coinImage:""
   }
   ]
)
db.adminAltcoins.insert(
[
  {
     name: "Bitcoin",
     altCoinSymbol: "BTC",
     enableForVoting: 1,
     enableForTrading: 1,
     asOfNowVoteCount:0,
     coinImage:""
  
  }])


db.adminAltcoins.find();
db.adminAltcoins.find({"altCoinSymbol":"BTC"});
db.adminAltcoins.remove( { _id:"5b69992df2a887be97980402" } )

{
	"enableForVoting":"noChange"
}
{
	"enableForVoting":"1"
}
{
	"enableForVoting":"0"
}
