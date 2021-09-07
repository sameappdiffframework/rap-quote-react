import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from './About';
import CreateQuoteForm from './CreateQuoteForm';
import Footer from './Footer';
import Header from './Header';
import ModalContainer from './modal/ModalContainer';
import { getQuotes, QuoteModel } from './quotes/quote.service';
import QuoteWall from './quotes/QuoteWall';

export default function App() {
    const [modalOpen, setModalOpen] = useState(true);
    const [quotes, setQuotes] = useState([] as QuoteModel[]);
    const closeModal = setModalOpen.bind(null, false);
    const openModal = setModalOpen.bind(null, true);
    const createQuote = (quote: QuoteModel) => {
        console.log('quote', quote);
        closeModal();
    };
    useEffect(() => {
        getQuotes().then(setQuotes);
    }, [setQuotes]);
    return (
        <>
            {modalOpen && (
                <ModalContainer>
                    <CreateQuoteForm onSubmit={createQuote} onReset={closeModal}/>
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

