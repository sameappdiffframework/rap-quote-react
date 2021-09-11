import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';
import * as Yup from 'yup';
import './CreateQuoteForm.css';

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
                        <div>
                            <label htmlFor="artist">Artist</label>
                            <Field name="artist" type="text"/>
                            <ErrorMessage name="artist"/>
                        </div>

                        <div>
                            <label htmlFor="source">Source</label>
                            <Field name="source" type="text"/>
                            <ErrorMessage name="source"/>
                        </div>

                        <div>
                            <label htmlFor="quote">Quote</label>
                            <Field name="quote" as="textarea"/>
                            <ErrorMessage name="quote"/>
                        </div>

                        <button type="submit" disabled={!formik.dirty || !formik.isValid}>Submit</button>
                        <button type="reset">Cancel</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
