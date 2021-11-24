import React from "react";
import projectList from "../content/projects";

export default function Projects() {
    return (
        <div className="h-screen w-full">
            <h2 className="text-white text-3xl font-header font-bold">
                {">"} Projects
            </h2>
            {projectList.map((proj, i) => {
                return (
                <div className="flex flex-wrap mt-28 ">
                    <div className="w-96">
                        <h3 className="text-neon-blue text-xl">0{i}. {proj.name}</h3>
                        <p>{proj.description}</p>
                    </div>
                </div>);
            })}
        </div>
    );
}
