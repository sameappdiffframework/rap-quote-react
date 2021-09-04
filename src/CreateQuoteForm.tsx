import './CreateQuoteForm.css';

export default function CreateQuoteForm(props: {onSubmit: () => void, onReset: () => void}) {
    return (
        <div role="dialog">
            <h1>Add a quote</h1>
            <hr/>
            <form onSubmit={props.onSubmit} onReset={props.onReset}>
                <label htmlFor="artist">Artist</label>
                <input type="text" id="artist"/>
                <label htmlFor="source">Source</label>
                <input type="text" id="source"/>
                <label htmlFor="quote">Quote</label>
                <textarea id="quote"/>
                <button type="submit">Submit</button>
                <button type="reset">Cancel</button>
            </form>
        </div>
    );
}
