import React from "react"

export default function SectionBlock({children, setMouseMove}) {
    return (
        <div className="flex h-screen w-5/6 mx-auto pl-12" onMouseMove={setMouseMove}>
            {console.log(children)}
           {children}
        </div>
    )
}