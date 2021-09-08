import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from './About';
import CreateQuoteForm from './forms/CreateQuoteForm';
import Footer from './Footer';
import Header from './Header';
import ModalContainer from './modal/ModalContainer';
import { createQuote, getQuotes, QuoteModel } from './quotes/quote.service';
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
    const createQuoteAndCloseModal = async (newQuote: QuoteModel) => {
        await createQuote(newQuote);
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

