import './Index.css';
import React, { useState } from "react";
import { Button } from "react-aria-components";
import { Card } from "../components/Card";
import { CardList } from "../components/CardList";
import {NavLink} from "react-router-dom";
import { CardEditOverlay } from "../components/CardEditOverlay";

function Index() {
    const [isEditMode, setIsEditMode] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [editingCard, setEditingCard] = useState(null);
    const [cards, setCards] = useState([
        { heading: "Príprava na vstup do jaskyne", body: "Jaskyňu sprístupnili pred 25 rokmi. Odkedy jaskyňu sprístupnili verejnosti, navštívili ju turisti zo 65 štátov sveta, boli medzi nimi aj hostia z ďalekej Kolumbie, Čile, Južnej Afriky či Nového Zélandu a zo všetkých krajín Európy." },
        {heading: "Dni otvorených dverí",
            body: "Raz ročne sa konajú Dni otvorených dverí, počas ktorých je vstup do jaskyne zdarma a organizujú sa špeciálne akcie pre rodiny."},
        {heading: "Medzinárodný deň jaskýň",
            body: "Pri príležitosti Medzinárodného dňa jaskýň sa v jaskyni organizujú prednášky o ochrane podzemných priestorov a prehliadky so sprievodcami."},
        {heading: "Letné podujatia",
            body: "Počas leta sa konajú podujatia pre rodiny s deťmi, vrátane interaktívnych hier, súťaží a nočných prehliadok s lampášmi."},
        {heading: "Edukácia v jaskyni",
            body: "Pre školy sú k dispozícii špeciálne vzdelávacie programy o geológii, histórii a ochrane jaskynných ekosystémov."},
        {heading: "Nočné prehliadky",
            body: "Nočné prehliadky jaskyne s karbidovými lampami ponúkajú unikátny zážitok a atmosféru, akú cez deň nezažijete."}
        ]);

    const handleAddCard = (cardData) => {
        setCards([...cards, cardData]);
    };

    const handleEditCard = (index, cardData) => {
        const newCards = [...cards];
        newCards[index] = cardData;
        setCards(newCards);
    };

    const handleDeleteCard = (index) => {
        setCards(cards.filter((_, i) => i !== index));
    };

    const handleEditClick = (index) => {
        setEditingCard({ index, ...cards[index] });
        setIsOverlayOpen(true);
    };

    const handleOverlaySubmit = (cardData) => {
        if (editingCard !== null) {
            handleEditCard(editingCard.index, cardData);
        } else {
            handleAddCard(cardData);
        }
        setEditingCard(null);
    };

    return (
        <div className="Index">

            <div className="hero-section">
                <h2 className="welcomeText"> Vitajte na stranke jaskyne </h2>
                <h1 className="title-hero"> Zla Diera! </h1>
                <NavLink to="/rezervacia" className="navlinkChange">
                    <Button>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1667 1.33333V4M5.83333 1.33333V4M2.5 6.66666H14.5M3.83333 2.66667H13.1667C13.903 2.66667 14.5 3.26362 14.5 4V13.3333C14.5 14.0697 13.903 14.6667 13.1667 14.6667H3.83333C3.09695 14.6667 2.5 14.0697 2.5 13.3333V4C2.5 3.26362 3.09695 2.66667 3.83333 2.66667Z" stroke="#1E1E1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Rezervovat' vstup
                    </Button>
                </NavLink>

            </div>

            <div className="section">
                <h2 className="blog-title">Blog</h2>
                <CardList>
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            {...card}
                            isEditMode={isEditMode}
                            onEdit={() => handleEditClick(index)}
                            onDelete={() => handleDeleteCard(index)}
                        />
                    ))}
                    {isEditMode && (
                        <div
                            className="Card add-card"
                            onClick={() => {
                                setEditingCard(null);
                                setIsOverlayOpen(true);
                            }}
                        >
                            <div className="add-card-content">
                                <span className="add-icon">+</span>
                                <span>Pridať článok</span>
                            </div>
                        </div>
                    )}
                </CardList>
            </div>
            <button
                className="edit-mode-toggle"
                onClick={() => setIsEditMode(!isEditMode)}
            >
                {isEditMode ? 'Ukonciť upravu' : 'Uprava stránky'}
            </button>

            <CardEditOverlay
                isOpen={isOverlayOpen}
                onClose={() => {
                    setIsOverlayOpen(false);
                    setEditingCard(null);
                }}
                onSubmit={handleOverlaySubmit}
                initialData={editingCard || {}}
            />
        </div>
    );
}

export default Index;

