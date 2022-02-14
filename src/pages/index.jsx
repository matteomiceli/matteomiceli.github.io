import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SectionBlock from "../components/SectionBlock";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Project from "../components/Project";
import projectList from "../content/projects";
import Footer from "../components/Footer";
import Mountains from "../components/Mountains";

export default function Index() {
    const [mouseMove, setMouseMove] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMouseMove(false);
        }, 500);
    }, [mouseMove]);

    return (
        <div className="bg-bg-dark">
            <Navbar />

            <Home mouseMove={mouseMove} />

            <Mountains />
            <About />
            <div id="projects">
                {projectList.map((project, i) => {
                    return (
                        <SectionBlock>
                            <Project project={project} i={i} />
                        </SectionBlock>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
}
