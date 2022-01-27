import React from "react";

export default function Socials({ mt = 0 }) {
    return (
        <div className={`flex mt-${mt}`}>
            <a target="_blank" href="https://github.com/matteomiceli">
                <img src="/icons/github.svg" alt="github" />
            </a>
            <a
                target="_blank"
                className="ml-24"
                href="https://www.linkedin.com/in/omatteomiceli/"
            >
                <img src="/icons/linkedIn.svg" alt="linkedin" />
            </a>
            <a
                target="_blank"
                className="ml-24"
                href="mailto:omatteomiceli@gmail.com"
            >
                <img src="/icons/mail.svg" alt="email me" />
            </a>
        </div>
    );
}
