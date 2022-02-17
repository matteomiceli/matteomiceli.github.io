import React from "react";
import projectList from "../content/projects";

export default function Projects() {
    return (
        <div className="my-24 w-full">
            <h2
                id="projects"
                className="text-white text-5xl font-header font-bold pt-28"
            >
                Projects
            </h2>
            <div className="mt-12 md:mt-16 grid sm:grid-cols-2">
                {projectList.map((proj, i) => {
                    return (
                        <div
                            key={proj.name}
                            className="flex flex-grow items-center hover:scale-105 transition-all duration-200"
                        >
                            <a
                                className={`mx-4 my-4 w-full h-24 md:h-32 lg:h-36 rounded-lg flex items-center justify-center`}
                                style={{ backgroundColor: proj.color }}
                                href={`#project-${i}`}
                            >
                                <img
                                    className="h-12 w-full object-contain"
                                    src={proj.logo}
                                    alt={proj.name}
                                />
                            </a>
                            {/* <h3 className="text-neon-blue text-2xl">
                                {proj.name}
                            </h3> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
