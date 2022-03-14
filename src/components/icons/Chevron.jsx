import * as React from "react";

const Chevron = (props) => (
    <svg
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather pt-0.5 feather-chevron-up"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            transform="translate(-1.74 -2.116)"
            style={{
                stroke: "#181818",
                strokeOpacity: 1,
            }}
            d="m18 15-6-6-6 6"
        />
    </svg>
);

export default Chevron;
