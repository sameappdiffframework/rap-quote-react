import { Form, Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';
import * as Yup from 'yup';
import './CreateQuoteForm.css';
import Input from './Input';

export interface QuoteEntry {
    quote: string;
    artist: string;
    source: string;
}

const schema = Yup.object({
    quote: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
    artist: Yup.string()
        .max(25, 'Must be 25 characters or less')
        .required('Required'),
    source: Yup.string()
        .max(25, 'Must be 25 characters or less')
        .required('Required')
})

function emptyQuote(): QuoteEntry {
    return {
        source: '',
        artist: '',
        quote: ''
    }
}

export default function CreateQuoteForm(props: { onSubmit: (quote: QuoteEntry) => void, onReset: () => void }) {
    const initialQuote = emptyQuote();

    function onSubmit(newQuote: QuoteEntry, { setSubmitting }: FormikHelpers<QuoteEntry>) {
        props.onSubmit(Object.assign({}, newQuote));
        setSubmitting(false);
    }

    return (
        <div role="dialog">
            <h1>Add a quote</h1>
            <hr/>
            <Formik initialValues={initialQuote}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                    onReset={props.onReset}>
                {formik => (
                    <Form>
                        <Input name="artist" label="Artist" inputType="text"/>
                        <Input name="source" label="Source" inputType="text"/>
                        <Input name="quote" label="Quote" inputType="textarea"/>

                        <button type="submit" disabled={!formik.dirty || !formik.isValid}>Submit</button>
                        <button type="reset">Cancel</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
