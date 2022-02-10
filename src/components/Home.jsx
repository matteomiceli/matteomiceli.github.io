import React, { useState } from "react";
import Socials from "./Socials";
import Typewriter from "typewriter-effect";

export default function Home({ mouseMove }) {
    const [lol, setLol] = useState();

    const testwriter = new Typewriter();

    return (
        <div
            id="home"
            className="flex flex-col justify-center items-center w-full"
        >
            {/* <div
                onClick={() => triggerLol()}
                className="absolute top-12 right-12 cursor-pointer w-20"
            >
                <img src="/icons/sun.svg" alt="light mode" />
                <p className="absolute text-white">{lol}</p>
            </div> */}
            <div className="flex flex-col items-center lg:items-start">
                <h1
                    className={`bg-move bg-scale2 bg-gradient-to-r from-teal via-blue to-dark-purple mb-8 text-transparent bg-clip-text align-middle whitespace-nowrap font-header text-7xl font-bold`}
                >
                    Hi, I'm Matteo
                </h1>
                <div className="flex subtitle justify-center lg:justify-start">
                    <h2 className="text-2xl text-gray-300 font-monaco text-left">
                        {/* full stack web developer */}
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("full stack web developer")
                                    .pauseFor(1200)
                                    .deleteAll()
                                    .typeString("")
                                    .pauseFor(1200)
                                    .deleteAll()
                                    .typeString("Tailwind CSS evangelist")
                                    .pauseFor(1200)
                                    .deleteAll()
                                    .start();
                            }}
                            options={{
                                loop: true,
                                delay: 50,
                                deleteSpeed: 25,
                                cursor: "",
                            }}
                        />
                    </h2>
                    <div className="blinker"></div>
                </div>
                <Socials mt={8} />
            </div>
        </div>
    );
}
