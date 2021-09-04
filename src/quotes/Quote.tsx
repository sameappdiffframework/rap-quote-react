import React from 'react';
import './Quote.css';
import { QuoteModel } from './model';

export default function Quote(props: { quote: QuoteModel }) {
    if (!props.quote) {
        return <></>;
    }
    return (
        <figure>
            <blockquote>
                <p>{props.quote.quote}</p>
            </blockquote>
            <img src={props.quote.source.image} alt={props.quote.source.name}/>
            <figcaption>
                <p>{props.quote.artist.name}</p>
                <cite>
                    <a href={props.quote.source.url} target="_blank" rel="noreferrer">
                        {props.quote.source.name}
                    </a>
                </cite>
            </figcaption>
        </figure>
    );
}
