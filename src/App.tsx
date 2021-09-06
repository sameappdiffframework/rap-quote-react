import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ModalContainer from './modal/ModalContainer';
import CreateQuoteForm from './CreateQuoteForm';
import { getQuotes, QuoteModel } from './quotes/quote.service';
import QuoteWall from './quotes/QuoteWall';

export default function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [quotes, setQuotes] = useState([] as QuoteModel[]);
    const closeModal = setModalOpen.bind(null, false);
    const openModal = setModalOpen.bind(null, true);
    useEffect(() => {
        getQuotes().then(setQuotes);
    }, [setQuotes]);
    return (
        <>
            {modalOpen && (
                <ModalContainer>
                    <CreateQuoteForm onSubmit={closeModal} onReset={closeModal}/>
                </ModalContainer>
            )}
            <Header onCreateClick={openModal}/>
            <QuoteWall quotes={quotes}/>
            <Footer/>
        </>
    );
}
