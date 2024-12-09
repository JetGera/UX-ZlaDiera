import './Rezervacia.css';
import React from "react";
import CalendarPicker from "../components/Calendar";
// import { Button } from "react-aria-components";
// import { Card } from "../components/Card";
// import { CardList } from "../components/CardList";

function Index() {
    return (
        <div className="section">
            <CalendarPicker onSelect={(date, time) => {
                console.log('Selected:', date, time);
            }} />
        </div>
    );
}

export default Index;
