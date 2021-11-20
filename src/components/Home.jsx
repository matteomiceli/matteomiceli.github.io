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
                <h2 className="text-2xl w-96 text-gray-300">Full Stack Web Developer</h2>
            </div>

        </div>
    );
}
