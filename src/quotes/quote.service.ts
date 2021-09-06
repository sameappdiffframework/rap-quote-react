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

export function getQuotes(): Promise<QuoteModel[]> {
    return fetch('/quotes.json')
        .then((response: Response) => response.json())
        .catch(err => console.error('Could not retrieve quotes', err));
}
