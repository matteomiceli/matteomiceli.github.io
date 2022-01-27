import React from "react";

export default function NavButton({ icon, navExtend }) {
    return (
        <a
            target={icon.path ? "_blank" : ""}
            href={`${icon.path ? icon.path : `#${icon.name}`}`}
        >
            <div
                className={`h-12 my-3 overflow-hidden flex ${
                    navExtend ? "justify-start" : "justify-start"
                } items-center hover:bg-purple hover:bg-opacity-20 transition-all duration-200`}
            >
                <img
                    className={`w-6 ${navExtend ? "ml-3" : "ml-3"}`}
                    src={icon.url}
                    alt={icon.name}
                />
                <p
                    className={`${
                        navExtend ? "ml-2" : "max-w-0 opacity-0"
                    } text-lg transition-all duration-300`}
                >
                    {icon.name}
                </p>
            </div>
        </a>
    );
}
