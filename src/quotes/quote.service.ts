import { v4 as uuid } from 'uuid';

export interface QuoteModel {
    id: string,
    quote: string;
    artist: {
        name: string;
        url?: string;
    };
    source: {
        name: string;
        url?: string;
        image?: string;
    };
}

export function emptyQuoteModel(): QuoteModel {
    return {
        id: uuid(),
        source: {
            name: '',
            url: '',
            image: ''
        },
        artist: {
            name: '',
            url: ''
        },
        quote: ''
    }
}

const inMemoryQuotes: QuoteModel[] = [];

export function getQuotes(): Promise<QuoteModel[]> {
    return fetch('/quotes.json')
        .then((response: Response) => response.json() as Promise<QuoteModel[]>)
        .then(quotes => [...inMemoryQuotes, ...quotes]);
}

export function createQuote(quote: QuoteModel): Promise<QuoteModel> {
    inMemoryQuotes.push(quote);
    return Promise.resolve(Object.assign({}, quote));
}
