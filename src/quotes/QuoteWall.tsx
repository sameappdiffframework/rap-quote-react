import React from 'react';
import { QuoteModel } from './model';
import Quote from './Quote';
import './QuoteWall.css';

export default function QuoteWall(props: { quotes: QuoteModel[] }) {
    return (
        <main>
            <h1>Rap Quotes</h1>
            {props.quotes.map(quote => (<Quote quote={quote}></Quote>))}
        </main>
    );
}
