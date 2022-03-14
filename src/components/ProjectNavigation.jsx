import { Link } from "gatsby";
import React from "react";
import Chevron from "./icons/Chevron";

export default function ProjectNavigation() {
    return (
        <div className="flex justify-center w-full sticky top-6 z-20 ">
            <Link to="/#projects">
                <button className="flex bg-scale2 nav-home font-semibold rounded-md py-1 px-3 text-bg-dark bg-gradient-to-br from-teal via-blue to-dark-purple transition-all duration-300">
                    <p className="mr-1">back to projects</p> <Chevron />
                </button>
            </Link>
        </div>
    );
}
