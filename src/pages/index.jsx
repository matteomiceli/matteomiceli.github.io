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
            <SectionBlock setMouseMove={() => setMouseMove(true)}>
                <Home mouseMove={mouseMove} />
            </SectionBlock>
            <Mountains />
            <About />
            <div id="projects" className="pt-24"></div>
            {projectList.map((project, i) => {
                return (
                    <SectionBlock>
                        <Project project={project} i={i} />
                    </SectionBlock>
                );
            })}
            <Footer />
        </div>
    );
}
