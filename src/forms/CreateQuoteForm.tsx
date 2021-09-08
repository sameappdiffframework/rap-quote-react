import { FormEvent, useState } from 'react';
import './CreateQuoteForm.css';
import { ControlChangeFactory, touchOnBlur, VALIDATORS } from './utils';
import { emptyQuoteModel, QuoteModel } from '../quotes/quote.service';

export default function CreateQuoteForm(props: { onSubmit: (quote: QuoteModel) => void, onReset: () => void }) {
    const [quote, setQuote] = useState(emptyQuoteModel());
    const updateQuote = (val: string, prop: 'artist' | 'source' | 'quote') => {
        const updater = (prevQuote: QuoteModel) => {
            const patch: Partial<QuoteModel> = (prop === 'artist')
                ? { artist: Object.assign(prevQuote.artist, { name: val }) }
                : (prop === 'source')
                    ? { source: Object.assign(prevQuote.source, { name: val }) }
                    : { quote: val };
            return Object.assign({}, prevQuote, patch);
        };
        setQuote(updater);
    };
    const handleSourceChange = ControlChangeFactory<HTMLInputElement>(
        [VALIDATORS.required, VALIDATORS.maxLength(25)],
        (newName: string) => updateQuote(newName, 'source')
    );
    const handleArtistChange = ControlChangeFactory<HTMLInputElement>(
        [VALIDATORS.required, VALIDATORS.maxLength(25)],
        (newName: string) => updateQuote(newName, 'artist')
    );
    const handleQuoteChange = ControlChangeFactory<HTMLTextAreaElement>(
        [VALIDATORS.required, VALIDATORS.maxLength(100)],
        (newQuote: string) => updateQuote(newQuote, 'quote')
    );
    const validate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onSubmit(Object.assign({}, quote));
    };
    return (
        <div role="dialog">
            <h1>Add a quote</h1>
            <hr/>
            <form onSubmit={validate} onReset={props.onReset}>
                <label htmlFor="artist">Artist</label>
                <input type="text"
                       id="artist"
                       name="artist"
                       value={quote.artist.name}
                       onChange={handleArtistChange}
                       onBlur={touchOnBlur}/>
                <label htmlFor="source">Source</label>
                <input type="text"
                       id="source"
                       name="source"
                       value={quote.source.name}
                       onChange={handleSourceChange}
                       onBlur={touchOnBlur}/>
                <label htmlFor="quote">Quote</label>
                <textarea id="quote"
                          value={quote.quote}
                          onBlur={touchOnBlur}
                          onChange={handleQuoteChange}/>
                <button type="submit">Submit</button>
                <button type="reset">Cancel</button>
            </form>
            <pre><code>{JSON.stringify(quote, null, 2)}</code></pre>
        </div>
    );
}
