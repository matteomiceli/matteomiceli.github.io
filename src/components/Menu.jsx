import React, { useState } from "react";

export default function Menu({ isHome }) {
    console.log(isHome);
    return (
        <div
            className={`fixed bottom-2 left-2 block z-50 lg:hidden cursor-pointer transition-opacity duration-500 opacity-${
                isHome ? "0 pointer-events-none" : "100"
            }`}
        >
            <img src="/icons/menu.svg" alt="menu icon" />
        </div>
    );
}
