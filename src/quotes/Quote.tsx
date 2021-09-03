import React from 'react';
import { QuoteModel } from './QuoteWall';
import './Quote.css';

export default class Quote extends React.Component<{ quote: QuoteModel }> {
    render() {
        if (!this.props.quote) {
            return <></>;
        }
        return (
            <figure>
                <blockquote>
                    <p>{this.props.quote.quote}</p>
                </blockquote>
                <img src={this.props.quote.source.image}/>
                <figcaption>
                    <p>{this.props.quote.artist.name}</p>
                    <cite>
                        <a href={this.props.quote.source.url} target="_blank">
                            {this.props.quote.source.name}
                        </a>
                    </cite>
                </figcaption>
            </figure>
        );
    }
}
