import React, { useState } from "react";
import Socials from "./Socials";
import Typewriter from "typewriter-effect";

export default function Home({ mouseMove }) {
    const [lol, setLol] = useState();

    return (
        <div
            id="home"
            className="h-screen flex flex-col justify-center items-center w-full overflow-hidden"
        >
            <div className="flex flex-col items-center lg:items-start">
                <h1
                    className={`bg-move bg-scale2 bg-gradient-to-r from-teal via-blue to-dark-purple mb-8 text-transparent bg-clip-text align-middle whitespace-nowrap font-header text-5xl sm:text-7xl font-bold`}
                >
                    Hi, I'm Matteo
                </h1>
                <div className="flex subtitle justify-center lg:justify-start">
                    <h2 className="text-xl sm:text-2xl text-gray-300 font-monaco text-left">
                        {/* full stack web developer */}
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("full stack web developer")
                                    .pauseFor(1000)
                                    .deleteAll(10)
                                    .typeString("test")
                                    .pauseFor(1000)
                                    .deleteAll(10)
                                    .typeString("Tailwind CSS evangelist")
                                    .pauseFor(1000)
                                    .deleteAll(10)
                                    .start();
                            }}
                            options={{
                                loop: true,
                                delay: 50,
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
