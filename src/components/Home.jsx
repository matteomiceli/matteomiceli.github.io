import React, { useState } from "react";
import Socials from "./Socials";

export default function Home({ mouseMove }) {
    const [lol, setLol] = useState();

    function triggerLol() {
        setLol("lol 😂");
        setTimeout(() => {
            setLol();
        }, 2000);
    }

    return (
        <div
            id="home"
            className="flex flex-col justify-center items-center w-full"
        >
            <div
                onClick={() => triggerLol()}
                className="absolute top-12 right-12 cursor-pointer w-20"
            >
                <img src="/icons/sun.svg" alt="light mode" />
                <p className="absolute text-white">{lol}</p>
            </div>
            <div>
                <h1
                    className={`bg-move bg-scale2 absolute top-1/3 bg-gradient-to-r from-teal via-blue to-dark-purple text-transparent bg-clip-text align-middle whitespace-nowrap font-header text-7xl font-bold`}
                >
                    Hi, I'm Matteo
                </h1>
                <div className="flex subtitle">
                    <h2 className="text-2xl text-gray-300 font-monaco">
                        full stack web developer
                    </h2>
                    <div className="blinker"></div>
                </div>
                <Socials mt={8} />
            </div>
        </div>
    );
}
