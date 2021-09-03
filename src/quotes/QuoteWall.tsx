import React from 'react';
import Quote from './Quote';
import './QuoteWall.css';

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

export default class QuoteWall extends React.Component<{ quotes: QuoteModel[] }> {
    render() {
        return (
            <main>
                <h1>Rap Quotes</h1>
                {this.props.quotes.map(quote => (<Quote quote={quote}></Quote>))}
            </main>
        );
    }
}
