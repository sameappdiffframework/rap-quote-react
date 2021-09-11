import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from './About';
import Footer from './Footer';
import CreateQuoteForm, { QuoteEntry } from './forms/CreateQuoteForm';
import Header from './Header';
import ModalContainer from './modal/ModalContainer';
import { createQuote, emptyQuoteModel, getQuotes, QuoteModel } from './quotes/quote.service';
import QuoteWall from './quotes/QuoteWall';

export default function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [quotes, setQuotes] = useState([] as QuoteModel[]);
    const closeModal = setModalOpen.bind(null, false);
    const openModal = setModalOpen.bind(null, true);
    const updateQuotes = async () => {
        const newQuotes = await getQuotes();
        setQuotes(newQuotes);
    }
    const createQuoteAndCloseModal = async (newQuote: QuoteEntry) => {
        const quote: Partial<QuoteModel> = {
            quote: newQuote.quote,
            artist: { name: newQuote.artist },
            source: { name: newQuote.source }
        };
        await createQuote(Object.assign(emptyQuoteModel(), quote));
        await updateQuotes();
        closeModal();
    };
    useEffect(() => {
        updateQuotes();
    }, []);
    return (
        <>
            {modalOpen && (
                <ModalContainer>
                    <CreateQuoteForm onSubmit={createQuoteAndCloseModal} onReset={closeModal}/>
                </ModalContainer>
            )}
            <Header onCreateClick={openModal}/>
            <main>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/">
                        <QuoteWall quotes={quotes}/>
                    </Route>
                </Switch>
            </main>
            <Footer/>
        </>
    );
}

