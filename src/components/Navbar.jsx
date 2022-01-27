import { Link } from "gatsby";
import React, { useState } from "react";
import { navIcons } from "../content/navIcons";
import NavButton from "./NavButton";

export default function Navbar() {
    const [navExtend, setNavExtend] = useState(false);

    function handleMouseEnter() {
        setNavExtend(true);
    }
    function handleMouseLeave() {
        setNavExtend(false);
    }

    return (
        <div
            className={`fixed h-screen ${
                navExtend ? "w-36" : "w-12"
            } bg-bg-dark border-r border-gray-500 transition-all duration-300 z-50`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                to="#home"
                className="bg-scale2 nav-home overflow-hidden flex justify-center items-center font-monaco text-lg h-12 bg-gradient-to-br from-dark-purple via-light-purple to-dark-pink transition-all duration-600"
            >
                {"{"}
                <span
                    className={`name-slide ${
                        navExtend ? "w-16 opacity-100" : "w-0 opacity-0 "
                    } overflow-hidden transition-all duration-300`}
                >
                    matteo
                </span>
                {"}"}
            </Link>

            {navIcons.map((icon) => {
                return <NavButton icon={icon} navExtend={navExtend} />;
            })}
        </div>
    );
}
