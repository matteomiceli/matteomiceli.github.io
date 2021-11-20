import React, {useEffect, useState} from "react";

import Navbar from "../components/Navbar";
import SectionBlock from "../components/SectionBlock";
import Home from "../components/Home";

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
            <SectionBlock></SectionBlock>
        </div>
    );
}
