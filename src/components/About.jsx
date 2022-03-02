import React, { useState } from "react";
import Mountains from "./Mountains";
import StackItem from "./StackItem";
import Bio from "./Bio";
import Techstack from "./Techstack";

export default function About() {
    return (
        <div className="pt-28 lg:ml-12 min-h-screen" id="about">
            <div className="w-5/6 lg:w-11/12 xl:w-5/6 mx-auto max-w-7xl">
                <h2 className="text-white text-5xl font-header font-semibold">
                    About
                </h2>
                <div className="mt-12 md:mt-16 lg:mt-20 xl:mt-28 lg:grid lg:grid-cols-2 gap-20 xl:gap-48">
                    <Bio />
                    <Techstack />
                </div>
            </div>
            {/* <Mountains /> */}
        </div>
    );
}
