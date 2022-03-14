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
            className={`flex flex-col lg:block fixed h-screen bg-bg-dark border-r border-gray-500 transition-all duration-300 z-40 -translate-x-12 lg:translate-x-0 ${
                navExtend ? "w-full lg:w-36" : "w-12"
            }  ${navExtend ? "translate-x-0" : ""} `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                to="#home"
                className="bg-scale2 nav-home overflow-hidden flex justify-center items-center font-monaco text-2xl lg:text-lg h-16 lg:h-12 bg-gradient-to-br from-teal via-blue to-dark-purple transition-all duration-300"
                onClick={() => setNavExtend(false)}
            >
                {"{"}
                <span
                    className={`name-slide ${
                        navExtend
                            ? "w-24 lg:w-16 opacity-100"
                            : "w-0 opacity-0 "
                    } overflow-hidden text-center transition-all duration-300`}
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
                        setNavExtend={setNavExtend}
                    />
                );
            })}
        </div>
    );
}
