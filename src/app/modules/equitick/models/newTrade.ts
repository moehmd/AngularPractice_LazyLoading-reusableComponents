export interface INewTrade {
    login: number;
    entry: number;
    action: number;
    time: string | null;
    symbol: string;
    price: number;
    profit: number;
    volume: number;
}
