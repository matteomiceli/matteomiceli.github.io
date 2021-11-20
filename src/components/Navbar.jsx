import { Link } from "gatsby"
import React from "react"
import {navIcons} from "../content/navIcons"
import NavButton from "./NavButton"

export default function Navbar() {
    return (
        <div className="fixed h-screen w-12 bg-black border-r-1 border-white">
            <Link to="#home" className="flex justify-center items-center text-lg h-12 bg-dark-pink">
                {'{'}<span className="name-slide max-w-0 opacity-0">matteo</span>{'}'}
            </Link>

            {navIcons.map((icon) => {
                return <NavButton icon={icon} />
            })}
        </div>
    )
}