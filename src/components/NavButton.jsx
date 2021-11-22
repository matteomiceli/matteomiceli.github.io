import React from "react";

export default function NavButton({ icon, navExtend }) {
    return (
        <a href={`#${icon.name}`}>
            <div className={`h-12 my-3 overflow-hidden flex ${navExtend? 'justify-start' : 'justify-center'} items-center hover:bg-gray-800 transition-all duration-200`}>
                <img className={`w-6 ${navExtend? 'ml-2' : '' }`} src={icon.url} alt={icon.name} />
                <p className={`${navExtend? 'ml-2' : 'max-w-0 opacity-0'} transition-all duration-300`}>{icon.name}</p>
            </div>
        </a>
    );
}
