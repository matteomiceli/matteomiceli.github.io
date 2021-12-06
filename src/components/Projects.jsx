import React from "react";
import projectList from "../content/projects";

export default function Projects() {
    return (
        <div className="h-screen w-full">
            <h2
                id="projects"
                className="text-white text-3xl font-header font-bold pt-8"
            >
                {">"} projects
            </h2>
            <div className="mt-28 flex flex-wrap justify-around">
                {projectList.map((proj, i) => {
                    return (
                        <a className="mx-1 my-8 w-2/6" href={`#project-${i}`}>
                            <div className="border-1 hover:border-gray-300 p-4">
                                <h3 className="text-neon-blue text-2xl">
                                    0{i}. {proj.name}
                                </h3>
                                <p>{proj.description}</p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
