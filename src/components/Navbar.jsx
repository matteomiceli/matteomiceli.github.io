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
            className={`fixed h-screen ${navExtend? 'w-32' : 'w-12'} bg-black border-r-1 border-white transition-all duration-200`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                to="#home"
                className="flex justify-center items-center text-lg h-12 bg-dark-pink overflow-hidden"
            >
                {"{"}
                <span className={`name-slide ${navExtend? 'max-w-none opacity-100' : 'max-w-0 opacity-0 '} transition-all duration-200`}>matteo</span>
                {"}"}
            </Link>

            {navIcons.map((icon) => {
                return <NavButton icon={icon} navExtend={navExtend} />;
            })}
        </div>
    );
}
