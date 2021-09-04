export interface QuoteModel {
    quote: string;
    artist: {
        name: string;
        url: string;
    };
    source: {
        name: string;
        url: string;
        image: string;
    };
}
