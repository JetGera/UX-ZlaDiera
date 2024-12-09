import PropTypes from "prop-types";
import React from "react";
import Info from '@spectrum-icons/workflow/Info';
import "./Card.css";
import Plchldr from "../assets/placeholder.png";

/* Iconography: https://spectrum.adobe.com/page/iconography/ */
/* All icons: https://spectrum.adobe.com/page/icons/ */
/* Workflow icons: https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#workflow-icons */
/* npm install @spectrum-icons/workflow --save */

export const Card = ({
                         body = "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
                         heading = "Title",
                         button = true,
                         asset = true,
                         assetType = "image",
                         variant = "default",
                         direction = "vertical",
                         className = "",
                         icon = <Info aria="info" size="M"/>,
                         image = Plchldr,
                     }) => {
    return (
        <div className={`Card ${direction} ${variant} ${className}`}>
            { assetType === "icon" && (
                <>{asset && icon}</>
            )}

            { assetType === "image" && (
                <div className="image"><img src={image} alt="card image"></img></div>
            )}

            <div className="body">
                <div className="text">
                    <div className="heading">{heading}</div>
                    <p className="body-text-for">{body}</p>
                </div>

                { button && (
                    <button className="button-group">
                        <button className="button">
                            <div className="text-wrapper">Button</div>
                        </button>
                    </button>
                )}
            </div>
        </div>
    );
};

Card.propTypes = {
    body: PropTypes.string,
    heading: PropTypes.string,
    button: PropTypes.bool,
    asset: PropTypes.bool,
    assetType: PropTypes.oneOf(["image", "icon", "none"]),
    variant: PropTypes.oneOf(["stroke", "default"]),
    direction: PropTypes.oneOf(["vertical", "horizontal"]),
    icon: PropTypes.element,
    image: PropTypes.any,
};
