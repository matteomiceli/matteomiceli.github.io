import React from "react";

export default function StackItem({ name, imgSrc, toolTipState, first }) {
    return (
        <img
            className={`${
                first ? "" : "ml-6"
            } h-8 hover:opacity-70 lg:h-10 transition-opacity duration-300`}
            src={imgSrc}
            onMouseOver={() => toolTipState(name)}
            onMouseOut={() => toolTipState()}
            alt={name}
        />
    );
}
