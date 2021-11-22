import React, {useEffect, useState} from "react";

import Navbar from "../components/Navbar";
import SectionBlock from "../components/SectionBlock";
import Home from "../components/Home";
import About from "../components/About";
import Mountains from "../components/Mountains";
import Projects from "../components/Projects";

export default function Index() {
    const [mouseMove, setMouseMove] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setMouseMove(false)
      }, 500);
    },[mouseMove])

    return (
        <div className="">
            <Navbar />
            <SectionBlock setMouseMove={() => setMouseMove(true)}>
              <Home mouseMove={mouseMove} /> 
            </SectionBlock>
            <About />
            <SectionBlock>
              <Projects />
            </SectionBlock>
        </div>
    );
}
