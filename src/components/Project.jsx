import React from "react";

export default function Project({ project, i }) {
    return (
        <div className="pt-8 h-full" id={`project-${i}`}>
            <h2 className="text-5xl">{`0${i}. ${project.name}`}</h2>
            <div className="flex">
                <div className="mt-10 w-1/2 pr-10">
                    <div className="absolute w-px bg-white h-3/6"></div>
                    <div className="flex">
                        <p className="ml-8 mt-4">{project.type}</p>
                        <p className="mt-4">{project.role}</p>
                    </div>
                    <p className="ml-8 mt-8">{project.longDescription}</p>
                    <div className="ml-8 mt-24 buttons flex">
                        <a target="_blank" href={project.links.website}>
                            <button className="flex justify-center w-32 bg-gradient-to-br p-2 nav-home bg-scale4 from-blue to-teal rounded transition-all duration-300">
                                <img
                                    className="w-4 mr-2"
                                    src="/icons/web.svg"
                                    alt="web icon"
                                />
                                Live Site
                            </button>
                        </a>
                        <a target="_blank" href={project.links.github}>
                            <button className="flex justify-center ml-8 w-32 border-2 border-white p-2 rounded hover:border-gray-300 hover:text-gray-300 transition-all duration-300">
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
                <div className="flex flex-col w-1/2 items-center">
                    <a
                        className="mt-2 flex justify w-4/5"
                        target="_blank"
                        href={project.links.website}
                    >
                        <img
                            className="w-full rounded-lg"
                            src={project.imgPath}
                            alt=""
                        />
                    </a>
                    <div className="stack flex justify-center">
                        {project.techStack.map((item) => {
                            return (
                                <img
                                    className="mt-8 w-8 mx-4"
                                    src={`/icons/${item}.svg`}
                                    alt=""
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* <div className="flex justify-center mt-44">
                <p>back to <a className="text-neon-pink hover:underline" href="#projects">projects</a></p>
            </div> */}
        </div>
    );
}
