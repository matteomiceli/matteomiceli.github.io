import React, { useState } from "react";
import { useEffect } from "react";
import Mountains from "./Mountains";
import StackItem from "./StackItem";

export default function About() {
    const [stackBTip, setBStackTip] = useState();
    const [stackFTip, setFStackTip] = useState();

    return (
        <div className="pt-28 ml-12 mb-28 h-screen" id="about">
            <div className="w-5/6 mx-auto">
                <h2 className="text-white text-5xl font-body font-semibold">
                    About
                </h2>
                <div className="mt-28 grid grid-cols-2 gap-60">
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
                            <p className="h-full rounded-sm bg-white w-44 pr-2 text-black flex justify-end">
                                {stackBTip}
                            </p>
                        </div>
                        <div className="flex mt-4">
                            <StackItem
                                first={true}
                                name="Node.js"
                                imgSrc="/icons/nodedotjs.svg"
                                toolTipState={setBStackTip}
                            />
                            <StackItem
                                name="Express"
                                imgSrc="/icons/express.svg"
                                toolTipState={setBStackTip}
                            />
                            <StackItem
                                name="Flask"
                                imgSrc="/icons/flask.svg"
                                toolTipState={setBStackTip}
                            />
                            <StackItem
                                name="MongoDB"
                                imgSrc="/icons/mongodb.svg"
                                toolTipState={setBStackTip}
                            />
                            <StackItem
                                name="MySQL"
                                imgSrc="/icons/mysql.svg"
                                toolTipState={setBStackTip}
                            />
                        </div>
                        <div className="flex mt-12 items-center">
                            <h3 className="text-teal w-32 text-2xl">
                                Frontend
                            </h3>
                            <p className="h-full rounded-sm bg-white w-44 pr-2 text-black flex justify-end">
                                {stackFTip}
                            </p>
                        </div>
                        <div className="flex mt-4">
                            <StackItem
                                first={true}
                                name="React"
                                imgSrc="/icons/react.svg"
                                toolTipState={setFStackTip}
                            />
                            <StackItem
                                name="Next.js"
                                imgSrc="/icons/nextdotjs.svg"
                                toolTipState={setFStackTip}
                            />
                            <StackItem
                                name="Gatsby"
                                imgSrc="/icons/gatsby.svg"
                                toolTipState={setFStackTip}
                            />
                            <StackItem
                                name="Tailwind CSS"
                                imgSrc="/icons/tailwindcss.svg"
                                toolTipState={setFStackTip}
                            />
                            <StackItem
                                name="Sass"
                                imgSrc="/icons/sass.svg"
                                toolTipState={setFStackTip}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Mountains />
        </div>
    );
}
