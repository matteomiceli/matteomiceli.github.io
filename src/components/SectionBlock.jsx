import React from "react";

export default function SectionBlock({ children, setMouseMove }) {
    return (
        <div
            className="flex min-h-screen w-5/6 lg:w-11/12 xl:w-5/6 mx-auto lg:pl-12 max-w-7xl"
            onMouseMove={setMouseMove}
        >
            {children}
        </div>
    );
}
