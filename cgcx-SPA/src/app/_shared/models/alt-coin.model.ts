export interface AltCoin {
    _id: string;
    name: string;
    altCoinSymbol: string;
    enableForVoting: boolean;
    enableForTrading: boolean;
    asOfNowVoteCount: number;
    coinImage: string;

    isVoted: boolean;
}
