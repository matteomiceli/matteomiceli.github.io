import React from "react";

export default function StackItem({ name, imgSrc, toolTipState, first }) {
    return (
        <img
            className={`${first ? "" : "ml-6"} max-h-10`}
            src={imgSrc}
            onMouseOver={() => toolTipState(name)}
            onMouseOut={() => toolTipState()}
            alt={name}
        />
    );
}
