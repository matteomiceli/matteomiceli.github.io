import React from "react"

export default function SectionBlock({children, setMouseMove}) {
    return (
        <div className="flex h-screen w-5/6 mx-auto" onMouseMove={setMouseMove}>
            {console.log(children)}
           {children}
        </div>
    )
}