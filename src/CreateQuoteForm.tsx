import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CreateQuoteForm.css';
import { QuoteModel } from './quotes/quote.service';

export default function CreateQuoteForm(props: { onSubmit: (quote: QuoteModel) => void, onReset: () => void }) {
    const [quote, setQuote] = useState({} as QuoteModel);
    const handleNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setQuote((previousQuote: QuoteModel) => Object.assign(previousQuote, { [target.name]: { name: target.value } }));
    }
    const handleQuoteChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
        setQuote((previousQuote: QuoteModel) => Object.assign(previousQuote, { quote: target.value }));
    }
    const validate = (event: FormEvent) => {
        // TOD add real validation
        event.preventDefault();
        props.onSubmit(Object.assign(quote, { id: uuidv4() }));
        setQuote({} as QuoteModel);
    };
    return (
        <div role="dialog">
            <h1>Add a quote</h1>
            <hr/>
            <form onSubmit={validate} onReset={props.onReset}>
                <label htmlFor="artist">Artist</label>
                <input type="text" id="artist" name="artist" value={quote.artist?.name} onChange={handleNameChange}/>
                <label htmlFor="source">Source</label>
                <input type="text" id="source" name="source" value={quote.source?.name} onChange={handleNameChange}/>
                <label htmlFor="quote">Quote</label>
                <textarea id="quote" value={quote.quote} onChange={handleQuoteChange}/>
                <button type="submit">Submit</button>
                <button type="reset">Cancel</button>
            </form>
        </div>
    );
}
