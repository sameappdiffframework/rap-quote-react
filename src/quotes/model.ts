export interface QuoteModel {
    id: string,
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
