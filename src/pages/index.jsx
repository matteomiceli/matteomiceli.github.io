import React, { useEffect, useState, useRef } from "react";

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

export default function Index() {
    const [navExtend, setNavExtend] = useState(false);
    const isHome = useIsHome();

    function handleMouseEnter() {
        setNavExtend(true);
    }
    function handleMouseLeave() {
        setNavExtend(false);
    }

    if (typeof window === `undefined`) {
        return <></>;
    }
    return (
        <div className="bg-bg-dark">
            <Menu isHome={isHome} />
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
