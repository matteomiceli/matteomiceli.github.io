import { Link } from "gatsby";
import React, { useState } from "react";
import { navIcons } from "../content/navIcons";
import NavButton from "./NavButton";
import Menu from "./Menu";

export default function Navbar({
    navExtend,
    setNavExtend,
    handleMouseEnter,
    handleMouseLeave,
}) {
    return (
        <div
            className={`fixed h-screen ${
                navExtend ? "w-36" : "w-12"
            } bg-bg-dark border-r border-gray-500 transition-all duration-300 z-50 -translate-x-12 lg:translate-x-0`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                to="#home"
                className="bg-scale2 nav-home overflow-hidden flex justify-center items-center font-monaco text-lg h-12 bg-gradient-to-br from-teal via-blue to-dark-purple transition-all duration-300"
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
                return (
                    <NavButton
                        key={icon.name}
                        icon={icon}
                        navExtend={navExtend}
                    />
                );
            })}
        </div>
    );
}
