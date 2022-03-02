import React from "react";

export default function Bio() {
    return (
        <div className="bg-gradient-to-br from-teal to-blue p-0.5 rounded-lg lg:p-0 lg:bg-bg-dark mt-2">
            <div className="bg-bg-dark h-full rounded-lg p-6 lg:p-0 lg:rounded-none text-gray-400 text-lg">
                <p className="">
                    I love to break things apart to see how they work. This has
                    fostered my interest in computers and software development,
                    and it has also driven my interest in research and writing.
                </p>
                <br />
                <p className="">
                    I grew up tinkering with computers, building gaming rigs
                    with friends and discovering the world of linux and open
                    source software. Currently I'm studying to become a full
                    stack web developer at BCIT. I enjoy all aspects of
                    development and my passion is building performant and
                    scaleable applications.
                </p>
            </div>
        </div>
    );
}
