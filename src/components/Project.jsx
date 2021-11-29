import React from "react";

export default function Project({ project, i }) {
    return (
        <div className="pt-8 h-full" id={`project-${i}`}>
            <h2 className="text-neon-blue text-3xl">{`0${i}. ${project.name}`}</h2>
            <div className="flex">
                <div className="mt-10 w-1/2 text-sm">
                    <div className="absolute w-px bg-neon-blue h-3/6"></div>
                    <p className="ml-4 mt-4">
                        <span className="text-neon-blue">Role: </span>
                        {project.role}
                    </p>
                    <p className="ml-4 mt-8">{project.longDescription}</p>
                    <div className="ml-4 mt-24 buttons flex">
                        <a target="_blank" href={project.links.website}>
                            <button className="flex justify-center w-32 bg-dark-pink p-2 border-2 border-dark-pink hover:bg-dark-pink-hover hover:border-dark-pink-hover rounded transition-all duration-200">
                                <img
                                    className="w-4 mr-2"
                                    src="/icons/web.svg"
                                    alt="web icon"
                                />
                                Live Site
                            </button>
                        </a>
                        <a target="_blank" href={project.links.github}>
                            <button className="flex justify-center ml-8 w-32 border-2 border-white p-2 rounded hover:border-gray-300 hover:text-gray-300 transition-all duration-200">
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
                    <a className="mt-2 flex justify-center" target="_blank" href={project.links.website}>
                        <img className="w-4/5 rounded-lg" src={project.imgPath} alt="" />
                    </a>
                    <div className="stack flex w-4/6 justify-around">
                        {project.techStack.map((item) => {
                            return <img className="mt-8 w-8" src={`/icons/${item}.svg`} alt="" />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
