import React from "react";

export default function NavButton({ icon, navExtend, setNavExtend }) {
    return (
        <a
            target={icon.path ? "_blank" : ""}
            href={`${icon.path ? icon.path : `#${icon.name}`}`}
            onClick={() => setNavExtend(false)}
        >
            <div
                className={`h-12 my-16 lg:my-3 overflow-hidden flex items-center justify-center lg:justify-start lg:hover:bg-gray-600 lg:hover:bg-opacity-20 transition-all duration-200`}
            >
                <img
                    className={`hidden lg:block w-6 ${
                        navExtend ? "ml-3" : "ml-3"
                    }`}
                    src={icon.url}
                    alt={icon.name}
                />
                <p
                    className={`${
                        navExtend ? "ml-2" : "max-w-0 opacity-0"
                    } lg:text-lg transition-all duration-300 text-2xl`}
                >
                    {icon.name}
                </p>
            </div>
        </a>
    );
}
