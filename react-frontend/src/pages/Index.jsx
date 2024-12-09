import './Index.css';
import React from "react";
import { Button } from "react-aria-components";
import { Card } from "../components/Card";
import { CardList } from "../components/CardList";

function Index() {
  return (
    <div className="Index">

        <div className="hero-section">
            <h2 className="subtitle"> Vitajte na stranke jaskyne </h2>
            <h1 className="title-hero"> Zla Diera! </h1>
            <Button>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1667 1.33333V4M5.83333 1.33333V4M2.5 6.66666H14.5M3.83333 2.66667H13.1667C13.903 2.66667 14.5 3.26362 14.5 4V13.3333C14.5 14.0697 13.903 14.6667 13.1667 14.6667H3.83333C3.09695 14.6667 2.5 14.0697 2.5 13.3333V4C2.5 3.26362 3.09695 2.66667 3.83333 2.66667Z" stroke="#1E1E1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Rezervovat' vstup
            </Button>

        </div>

        <div className="section">
            <h2 className="blog-title"> Blog </h2>
            <CardList>
                <Card heading="Blog1" body="Blog Body"></Card>
                <Card heading="Blog2" body="Blog Body"></Card>
                <Card heading="Blog3" body="Blog Body"></Card>
                <Card heading="Blog1" body="Blog Body"></Card>
                <Card heading="Blog2" body="Blog Body"></Card>
                <Card heading="Blog3" body="Blog Body"></Card>
            </CardList>
        </div>
    </div>
  );
}

export default Index;
