import * as React from "react";

const Chevron = (props) => (
    <svg
        width={12.006}
        height={9.242}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-up ml-0.5"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            transform="matrix(.85756 0 0 1.15528 -4.288 -9.242)"
            style={{
                stroke: "#181818",
                strokeOpacity: 1,
            }}
            d="m18 15-6-6-6 6"
        />
    </svg>
);

export default Chevron;
