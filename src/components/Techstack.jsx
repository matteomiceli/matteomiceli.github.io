import React, { useState } from "react";
import StackItem from "./StackItem";

export default function Techstack() {
    const [stackBTip, setBStackTip] = useState("");
    const [stackFTip, setFStackTip] = useState("");

    return (
        <div className="mt-16 lg:my-0 md:flex justify-around lg:block">
            <div>
                <div className="flex items-center lg:ml-auto w-4/5 xl:w-full">
                    <h3 className="w-32 text-teal text-2xl">Backend</h3>
                    <p className="h-full rounded-sm bg-white w-44 pr-2 text-black flex justify-end">
                        {stackBTip}
                    </p>
                </div>
                <div className="flex mt-4 w-4/5 lg:ml-auto xl:w-full">
                    <StackItem
                        first={true}
                        name="Node.js"
                        imgSrc="/icons/nodedotjs.svg"
                        toolTipState={setBStackTip}
                    />
                    <StackItem
                        first={false}
                        name="Express"
                        imgSrc="/icons/express.svg"
                        toolTipState={setBStackTip}
                    />
                    <StackItem
                        first={false}
                        name="Flask"
                        imgSrc="/icons/flask.svg"
                        toolTipState={setBStackTip}
                    />
                    <StackItem
                        first={false}
                        name="MongoDB"
                        imgSrc="/icons/mongodb.svg"
                        toolTipState={setBStackTip}
                    />
                    <StackItem
                        first={false}
                        name="MySQL"
                        imgSrc="/icons/mysql.svg"
                        toolTipState={setBStackTip}
                    />
                </div>
            </div>
            <div className="mt-12 md:mt-0 lg:mt-12">
                <div className="flex lg:p-2 items-center w-4/5 lg:ml-auto xl:w-full">
                    <h3 className="text-teal w-32 text-2xl">Frontend</h3>
                    <p
                        className={`${
                            setFStackTip === "" ? "opacity-0" : "opcaity-100"
                        } transition-all duration-200 h-full rounded-sm bg-white w-44 pr-2 text-black flex justify-end`}
                    >
                        {stackFTip}
                    </p>
                </div>
                <div className="flex mt-4 lg:ml-auto w-4/5 xl:w-full">
                    <StackItem
                        first={true}
                        name="React"
                        imgSrc="/icons/react.svg"
                        toolTipState={setFStackTip}
                    />
                    <StackItem
                        first={false}
                        name="Next.js"
                        imgSrc="/icons/nextdotjs.svg"
                        toolTipState={setFStackTip}
                    />
                    <StackItem
                        first={false}
                        name="Gatsby"
                        imgSrc="/icons/gatsby.svg"
                        toolTipState={setFStackTip}
                    />
                    <StackItem
                        first={false}
                        name="Tailwind CSS"
                        imgSrc="/icons/tailwindcss.svg"
                        toolTipState={setFStackTip}
                    />
                    <StackItem
                        first={false}
                        name="Sass"
                        imgSrc="/icons/sass.svg"
                        toolTipState={setFStackTip}
                    />
                </div>
            </div>
        </div>
    );
}
