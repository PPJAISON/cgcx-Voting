export interface AltCoin {
    id: number;
    name: string;
    symbol: string;
    last: number;
    enableForVoting: boolean;
    enableForTrading: boolean;
    asOfNowVoteCount: number;
    coinImage: string;

    isVoted: boolean;
}
