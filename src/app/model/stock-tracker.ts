export class StockTracker {

    public favorite: boolean = false;
    
    constructor(
        public name: string,
        public code: string,
        public price: number,
        public previousPrice: number,
        public exchange: string,
    ) {

    }
}
