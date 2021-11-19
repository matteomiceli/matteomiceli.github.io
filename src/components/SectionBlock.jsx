import React from "react"

export default function SectionBlock({children}) {
    return (
        <div className="flex h-screen w-5/6 mx-auto">
            {console.log(children)}
           {children}
        </div>
    )
}