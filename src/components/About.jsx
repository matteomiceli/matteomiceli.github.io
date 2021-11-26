import React, { useState } from "react";
import Mountains from "./Mountains";

export default function About() {

    return (
        <div className="pt-8 ml-12 mb-28 h-screen" id="about">
            <div className="w-5/6 mx-auto">
                <h2 className="text-white text-3xl font-header font-bold">
                    {">"} About
                </h2>
                <div className="mt-36 grid grid-cols-2 gap-80">
                    <div>
                        <p className="text-sm">
                            I love to break things apart to see how they work.
                            This has fostered my interest in computers and
                            software development, and it has also driven my
                            interest in research and writing.
                        </p>
                        <br />
                        <p className="text-sm">
                            I grew up tinkering with computers, building gaming
                            rigs with friends and discovering the world of linux
                            and open source software. Currently I'm studying to
                            become a full stack web developer at BCIT. I enjoy
                            all aspects of development and my passion is
                            building performant and scaleable applications.
                        </p>
                    </div>
                    <div className="">
                        <h3 className="text-neon-blue text-2xl">Backend</h3>
                        <div className="flex mt-4">
                            <img src="/icons/nodedotjs.svg" alt="nodejs" />
                            <img className="ml-6" src="/icons/express.svg" alt="express" />
                            <img className="ml-6" src="/icons/flask.svg" alt="flask" />
                            <img className="ml-6" src="/icons/mongodb.svg" alt="mongo db" />
                            <img className="ml-6" src="/icons/mysql.svg" alt="mysql" />
                        </div>
                        <h3 className="text-neon-blue text-2xl mt-12">
                            Frontend
                        </h3>
                        <div className="flex mt-4">
                            <img src="/icons/react.svg" alt="react js" />
                            <img className="ml-6" src="/icons/nextdotjs.svg" alt="next js" /> 
                            <img className="ml-6" src="/icons/gatsby.svg" alt="gatsby" /> 
                            <img className="ml-6" src="/icons/tailwindcss.svg" alt="tailwind css" /> 
                            <img className="ml-6" src="/icons/sass.svg" alt="saass" /> 
                        </div>
                    </div>
                </div>
            </div>
            <Mountains />
        </div>
    );
}
