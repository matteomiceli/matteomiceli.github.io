import React from "react";

export default function Home({ mouseMove }) {
    return (
        <div
            id="home"
            className="flex flex-col justify-center items-center w-full"
        >
            <div>
                <h1
                    className={`absolute top-1/3  align-middle whitespace-nowrap font-header text-7xl font-bold ${
                        mouseMove ? "glitch" : ""
                    }`}
                >
                    Hi, I'm Matteo
                </h1>
                <div className="flex subtitle">
                    <h2 className="text-2xl text-gray-300">Full Stack Web Developer</h2>
                    <div className="blinker"></div>
                </div>
            </div>

        </div>
    );
}
