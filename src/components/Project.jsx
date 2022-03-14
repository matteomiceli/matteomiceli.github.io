import React, { useState } from "react";
import StackItem from "./StackItem";

export default function Project({ project, i }) {
    const [toolTip, setToolTip] = useState();

    return (
        <div className="pt-16 h-full my-24 md:my-0" id={`project-${i}`}>
            <h2 className="text-5xl font-header font-semibold">{`${project.name}`}</h2>
            <div className="flex flex-col-reverse items-center md:flex-row">
                <div className="sm:w-5/6 mt-0 md:mt-10 md:w-1/2 md:pr-10">
                    {/* <div className="absolute w-px bg-white h-3/6"></div> */}
                    <div className="flex flex-col xl:flex-row">
                        <p className="mt-4 text-teal text-lg font-bold">
                            {project.type}
                        </p>
                        <div className="mx-2 mt-4 hidden xl:block">|</div>
                        <p className="xl:ml-0 xl:mt-4 text-lg font-bold">
                            {project.role}
                        </p>
                    </div>
                    <p className="mt-8 text-gray-400">
                        {project.longDescription}
                    </p>
                    <div className="mt-24 buttons flex">
                        <a target="_blank" href={project.links.website}>
                            <button className="flex justify-center items-center w-32 bg-gradient-to-br p-2 nav-home bg-scale4 from-blue to-teal rounded transition-all duration-300">
                                <img
                                    className="w-4 mr-2"
                                    src="/icons/web.svg"
                                    alt="web icon"
                                />
                                Live Site
                            </button>
                        </a>
                        <a target="_blank" href={project.links.github}>
                            <button className="flex justify-center items-center ml-8 w-32 border-2 border-white p-1.5 rounded hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                                <img
                                    className="w-4 mr-2"
                                    src="/icons/github.svg"
                                    alt={project.name}
                                />
                                Github
                            </button>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col sm:w-5/6 md:w-1/2 lg:pl-8 items-center">
                    <div className="flex flex-col items-center ">
                        <a
                            className="mt-2 flex w-full justify xl:w-4/5"
                            target="_blank"
                            href={project.links.website}
                        >
                            <img
                                className="sm:w-full rounded-lg mt-8"
                                src={project.imgPath}
                                alt=""
                            />
                        </a>
                        <div className="stack flex justify-center mt-6">
                            {project.techStack.map((item, i) => {
                                if (i == 0) {
                                    return (
                                        <StackItem
                                            key={item.name}
                                            first={true}
                                            name={item.name}
                                            imgSrc={`/icons/${item.path}.svg`}
                                            toolTipState={setToolTip}
                                        />
                                    );
                                }
                                return (
                                    <StackItem
                                        key={item.name}
                                        name={item.name}
                                        imgSrc={`/icons/${item.path}.svg`}
                                        toolTipState={setToolTip}
                                    />
                                );
                            })}
                        </div>
                        <div
                            className={`text-center w-32 mt-4 h-6 rounded-sm ${
                                toolTip ? "opacity-100" : "opacity-0"
                            } bg-white text-bg-dark `}
                        >
                            {toolTip}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex justify-center mt-44">
                <p>back to <a className="text-neon-pink hover:underline" href="#projects">projects</a></p>
            </div> */}
        </div>
    );
}
