import React from "react";

export default function Project({ project, i }) {
    return (
        <div className="pt-8 h-full" id={`project-${i}`}>
            <h2 className="text-neon-blue text-3xl">{`0${i}. ${project.name}`}</h2>
            <div>
                
            </div>
        </div>
    );
}
