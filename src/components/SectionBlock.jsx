import React from "react";

export default function SectionBlock({ children, setMouseMove }) {
    return (
        <div
            className="flex h-screen w-5/6 lg:w-11/12 xl:w-5/6 mx-auto lg:pl-12"
            onMouseMove={setMouseMove}
        >
            {children}
        </div>
    );
}
