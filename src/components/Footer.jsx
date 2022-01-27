import React from "react";
import Socials from "./Socials";

export default function Footer() {
    return (
        <div className="h-24 border-t border-gray-500">
            <div className="h-full flex flex-col font-header font-semibold text-lg justify-center items-center">
                <Socials />
            </div>
        </div>
    );
}
