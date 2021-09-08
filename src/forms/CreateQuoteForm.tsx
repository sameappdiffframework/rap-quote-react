import { FormEvent, useState } from 'react';
import { emptyQuoteModel, isValidQuoteModel, QuoteModel } from '../quotes/quote.service';
import './CreateQuoteForm.css';
import { ControlChangeFactory, touchOnBlur, ValidationErrors, VALIDATORS } from './utils';

type CreateQuoteFormInputs = 'artist' | 'source' | 'quote';
type CreateQuoteFormErrors = {
    artist: ValidationErrors,
    source: ValidationErrors,
    quote: ValidationErrors
}

function initialErrorState(): CreateQuoteFormErrors {
    return { artist: {}, source: {}, quote: {} };
}

export default function CreateQuoteForm(props: { onSubmit: (quote: QuoteModel) => void, onReset: () => void }) {
    const [quote, setQuote] = useState(emptyQuoteModel());
    const [errors, setErrors] = useState(initialErrorState());
    const numErrors = Object.keys(errors.artist).length
        + Object.keys(errors.source).length
        + Object.keys(errors.quote).length;
    const updateQuote = (val: string, prop: CreateQuoteFormInputs) => {
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
    const updateErrors = (name: CreateQuoteFormInputs, newErrors: ValidationErrors) => {
        setErrors(prevErrors => Object.assign({}, prevErrors, { [name]: newErrors }));
    }
    const handleSourceChange = ControlChangeFactory<HTMLInputElement>(
        [VALIDATORS.required, VALIDATORS.maxLength(25)],
        (newName: string) => updateQuote(newName, 'source'),
        (newErrors: ValidationErrors) => updateErrors('source', newErrors)
    );
    const handleArtistChange = ControlChangeFactory<HTMLInputElement>(
        [VALIDATORS.required, VALIDATORS.maxLength(25)],
        (newName: string) => updateQuote(newName, 'artist'),
        (newErrors: ValidationErrors) => updateErrors('artist', newErrors)
    );
    const handleQuoteChange = ControlChangeFactory<HTMLTextAreaElement>(
        [VALIDATORS.required, VALIDATORS.maxLength(100)],
        (newQuote: string) => updateQuote(newQuote, 'quote'),
        (newErrors: ValidationErrors) => updateErrors('quote', newErrors)
    );
    const validate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onSubmit(Object.assign({}, quote));
    };
    const validQuote = isValidQuoteModel(quote);
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
                {errors.artist?.required && (<div>Artist is required.</div>)}
                {errors.artist?.maxLength && (<div>Artist must be less than 25 characters long.</div>)}
                <label htmlFor="source">Source</label>
                <input type="text"
                       id="source"
                       name="source"
                       value={quote.source.name}
                       onChange={handleSourceChange}
                       onBlur={touchOnBlur}/>
                {errors.source?.required && (<div>Source is required.</div>)}
                {errors.source?.maxLength && (<div>Source must be less than 25 characters long.</div>)}
                <label htmlFor="quote">Quote</label>
                <textarea id="quote"
                          value={quote.quote}
                          onBlur={touchOnBlur}
                          onChange={handleQuoteChange}/>
                {errors.quote?.required && (<div>Quote is required.</div>)}
                {errors.quote?.maxLength && (<div>Quote must be less than 100 characters long.</div>)}
                <button type="submit" disabled={!validQuote || numErrors > 0}>Submit</button>
                <button type="reset">Cancel</button>
            </form>
        </div>
    );
}
