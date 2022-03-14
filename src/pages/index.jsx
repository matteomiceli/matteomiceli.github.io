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
import Menu from "../components/Menu";
import useIsHome from "../hooks/useIsHome";
import ProjectNavigation from "../components/ProjectNavigation";

export default function Index() {
    const [navExtend, setNavExtend] = useState(false);
    const isHome = useIsHome();
    const [isProject, setIsProject] = useState(false);

    function handleMouseEnter() {
        setNavExtend(true);
    }
    function handleMouseLeave() {
        setNavExtend(false);
    }

    return (
        <div className="bg-bg-dark">
            <Menu
                isHome={isHome}
                navExtend={navExtend}
                setNavExtend={setNavExtend}
            />
            <Navbar
                navExtend={navExtend}
                setNavExtend={setNavExtend}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
            />
            <Home />
            <Mountains />
            <About />
            <SectionBlock>
                <Projects />
            </SectionBlock>
            <div className="mt-32"></div>
            <ProjectNavigation />
            {projectList.map((project, i) => {
                return (
                    <SectionBlock key={project.name}>
                        <Project project={project} i={i} />
                    </SectionBlock>
                );
            })}
            <Footer />
        </div>
    );
}
