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
                <div className="flex mt-8">
                    <a target="_blank" href="https://github.com/matteomiceli"><img src="/icons/github.svg" alt="github" /></a>
                    <a target="_blank" className="ml-24" href="https://www.linkedin.com/in/omatteomiceli/"><img src="/icons/linkedIn.svg" alt="linkedin" /></a>
                    <a target="_blank" className="ml-24" href="mailto:omatteomiceli@gmail.com"><img src="/icons/mail.svg" alt="email me" /></a>
                </div>
            </div>

        </div>
    );
}
