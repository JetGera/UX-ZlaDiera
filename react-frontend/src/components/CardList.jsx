import PropTypes from "prop-types";
import React from "react";
import "./CardList.css";

export const CardList = ({ children }) => {
    return (
        <div className="CardList">
            { children }
        </div>
    );
};

CardList.propTypes = {
    cards: PropTypes.any
};
