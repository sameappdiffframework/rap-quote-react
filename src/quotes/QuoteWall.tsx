import React from 'react';
import Quote from './Quote';
import './QuoteWall.css';
import { QuoteModel } from './quote.service';

export default function QuoteWall(props: { quotes: QuoteModel[] }) {
    return (
        <>
            <h1>Rap Quotes</h1>
            {props.quotes.map(quote => (<Quote quote={quote} key={quote.id}></Quote>))}
        </>
    );
}
