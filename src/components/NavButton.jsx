import React from "react";

export default function NavButton({ icon }) {
    return (
        <a href={`#${icon.name}`}>
            <div className="h-16 flex justify-center items-center hover:bg-gray-800 transition-all duration-200">
                <img className="w-6" src={icon.url} alt={icon.name} />
            </div>
        </a>
    );
}
