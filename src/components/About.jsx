import React, { useState } from "react";
import { useEffect } from "react";
import Mountains from "./Mountains";

export default function About() {
    const [stackBTip, setBStackTip] = useState();
    const [stackFTip, setFStackTip] = useState();

    return (
        <div className="pt-8 ml-12 mb-28 h-screen" id="about">
            <div className="w-5/6 mx-auto">
                <h2 className="text-white text-3xl font-header font-bold">
                    {">"} about
                </h2>
                <div className="mt-36 grid grid-cols-2 gap-64">
                    <div>
                        <p className="">
                            I love to break things apart to see how they work.
                            This has fostered my interest in computers and
                            software development, and it has also driven my
                            interest in research and writing.
                        </p>
                        <br />
                        <p className="">
                            I grew up tinkering with computers, building gaming
                            rigs with friends and discovering the world of linux
                            and open source software. Currently I'm studying to
                            become a full stack web developer at BCIT. I enjoy
                            all aspects of development and my passion is
                            building performant and scaleable applications.
                        </p>
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <h3 className="w-32 text-teal text-2xl">Backend</h3>
                            <p className="h-full bg-white w-44 text-black flex justify-end">
                                {stackBTip}
                            </p>
                        </div>
                        <div className="flex mt-4">
                            <img
                                src="/icons/nodedotjs.svg"
                                onMouseOver={() => setBStackTip("Node.js")}
                                onMouseOut={() => setBStackTip()}
                                alt="nodejs"
                            />
                            <img
                                className="ml-6"
                                onMouseOver={() => setBStackTip("Express")}
                                onMouseOut={() => setBStackTip()}
                                src="/icons/express.svg"
                                alt="express"
                            />
                            <img
                                className="ml-6"
                                onMouseOver={() => setBStackTip("Flask")}
                                onMouseOut={() => setBStackTip()}
                                src="/icons/flask.svg"
                                alt="flask"
                            />
                            <img
                                className="ml-6"
                                onMouseOver={() => setBStackTip("MongoDB")}
                                onMouseOut={() => setBStackTip()}
                                src="/icons/mongodb.svg"
                                alt="mongo db"
                            />
                            <img
                                className="ml-6"
                                onMouseOver={() => setBStackTip("MySQL")}
                                onMouseOut={() => setBStackTip()}
                                src="/icons/mysql.svg"
                                alt="mysql"
                            />
                        </div>
                        <div className="flex mt-12 items-center">
                            <h3 className="text-teal w-32 text-2xl">
                                Frontend
                            </h3>
                            <p className="h-full bg-white w-44 text-black flex justify-end">
                                {stackFTip}
                            </p>
                        </div>
                        <div className="flex mt-4">
                            <img
                                src="/icons/react.svg"
                                onMouseOver={() => setFStackTip("React")}
                                onMouseOut={() => setFStackTip()}
                                alt="react js"
                            />
                            <img
                                className="ml-6"
                                onMouseOver={() => setFStackTip("Next.js")}
                                onMouseOut={() => setFStackTip()}
                                src="/icons/nextdotjs.svg"
                                alt="next js"
                            />
                            <img
                                className="ml-6"
                                onMouseOver={() => setFStackTip("Gatsby")}
                                onMouseOut={() => setFStackTip()}
                                src="/icons/gatsby.svg"
                                alt="gatsby"
                            />
                            <img
                                className="ml-6"
                                onMouseOver={() => setFStackTip("Tailwind CSS")}
                                onMouseOut={() => setFStackTip()}
                                src="/icons/tailwindcss.svg"
                                alt="tailwind css"
                            />
                            <img
                                className="ml-6"
                                src="/icons/sass.svg"
                                onMouseOver={() => setFStackTip("Sass")}
                                onMouseOut={() => setFStackTip()}
                                alt="saass"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Mountains />
        </div>
    );
}
