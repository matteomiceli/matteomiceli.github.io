import React from "react"

export default function SectionBlock({children}) {
    return (
        <div className="flex h-screen">
            {console.log(children)}
           {children}
        </div>
    )
}