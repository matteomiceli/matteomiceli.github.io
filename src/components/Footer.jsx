import React from "react";

export default function Footer() {
    return(
        <div className="h-24 border-t border-white">
            <div className="h-full flex flex-col font-header font-semibold text-lg justify-center items-center">
                <div className="flex">
                    <a target="_blank" href="https://github.com/matteomiceli"><img src="/icons/github.svg" alt="github" /></a>
                    <a target="_blank" className="ml-24" href="https://www.linkedin.com/in/omatteomiceli/"><img src="/icons/linkedIn.svg" alt="linkedin" /></a>
                    <a target="_blank" className="ml-24" href="mailto:omatteomiceli@gmail.com"><img src="/icons/mail.svg" alt="email me" /></a>
                </div>
            </div>
        </div>
    )
}