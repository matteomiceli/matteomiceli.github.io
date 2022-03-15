const projectList = [
    {
        name: "Minerva",
        description: "A performant and extensible markdown editor.",
        type: "Team Project",
        role: "Full Stack Developer",
        longDescription: [
            "A simple, performant, and hackable Markdown editor that provides seamless GitHub integration and real-time collaboration.",
            "Minerva leverages Codemirror 6 and Socket.IO to create a central document authority, allowing for fast, real-time syncing between clients.",
            "*Currently under development*",
        ],
        links: {
            website: "https://minervamd.netlify.app",
            github: "https://github.com/MINERVA-MD",
        },
        imgPath: "/images/minerva.png",
        logo: "/logos/minerva.png",
        color: "#fff",
        techStack: [
            { name: "Electron", path: "electron" },
            { name: "Vue.js", path: "vuedotjs" },
            { name: "Socket.IO", path: "socketdotio" },
            { name: "Tailwind CSS", path: "tailwindcss" },
        ],
    },
    {
        name: "Runik",
        description:
            "Generate custom e-reader dictionaries for your favourite fictional worlds.",
        type: "Team Project",
        role: "Full Stack Developer",
        longDescription: [
            "A web app that allows users to generate custom e-book dictionaries for their favourite fictional worlds. Get in-text definitions of items, characters, and locations on your ereader without breaking immersion.",
            "Runik is composed of three separate APIs, handling the generation, conversion, and storage of ereader dictionaries. Using the recently release File System Access API, users are able to download dictionaries directly to their ereader without leaving the browser.",
        ],
        links: {
            website: "https://runik.app",
            github: "https://github.com/Runik-3",
        },
        imgPath: "/images/runik.png",
        logo: "/logos/runik.svg",
        color: "#f6f6f6",
        techStack: [
            { name: "Next.js", path: "nextdotjs" },
            { name: "Tailwind CSS", path: "tailwindcss" },
            { name: "Node.js", path: "nodedotjs" },
            { name: "Express", path: "express" },
            { name: "Flask", path: "flask" },
            { name: "MongoDB", path: "mongodb" },
            { name: "Docker", path: "docker" },
        ],
    },
    {
        name: "Int-house",
        description:
            "Compete against your friends in custom in house e-sports leagues.",
        type: "Personal Project",
        role: "Full Stack Developer",
        longDescription: [
            "A web app that makes in-house League of Legends games easier to organize through a custom ranked ladder and matchmaking. Make a league with your friends and compete for the int-house crown.",
            "Int-house uses a modified version of the ELO algorithm that allows for a self-balancing matchmaking system that displays live odds.",
        ],
        links: {
            website: "https://int-house.herokuapp.com/",
            github: "https://github.com/matteomiceli/inhouse_O_clock",
        },
        imgPath: "/images/inthouse.png",
        logo: "/logos/inthouse.png",
        color: "#2583FF",
        techStack: [
            { name: "Node.js", path: "nodedotjs" },
            { name: "Tailwind CSS", path: "tailwindcss" },
            { name: "Express", path: "express" },
            { name: "MongoDB", path: "mongodb" },
        ],
    },
    {
        name: "TEDxSFU",
        description: "Website for the 2021 TEDxSFU conference.",
        type: "Team Project",
        role: "Frontend Developer",
        longDescription: [
            "The homepage for TEDxSFU 2021, a Vancouver-based TEDx event hosted by Simon Fraser University. I was the volunteer web developer and worked with a team of designers.",
        ],
        links: {
            website: "https://tedxsfu.com/",
            github: "https://github.com/matteomiceli/tedxsfu",
        },
        imgPath: "/images/tedx.png",
        logo: "/logos/tedx.webp",
        color: "#000",
        techStack: [
            { name: "Gatsby", path: "gatsby" },
            { name: "Tailwind CSS", path: "tailwindcss" },
        ],
    },
    {
        name: "VXP",
        description: "Website for Canada's first design-focused hackathon.",
        type: "Team Project",
        role: "Frontend Developer",
        longDescription: [
            "The event website for Canada's first Protothon (design-focused hackathon). Worked with a team of designers and developers to build out the site on a strict timeline.",
        ],
        links: {
            website: "https://www.vxpdesign.ca/",
            github: "https://github.com/VentureXPerience/vxp-server",
        },
        imgPath: "/images/vxp.png",
        logo: "/logos/vxp.svg",
        color: "#282b56",
        techStack: [
            { name: "Next.js", path: "nextdotjs" },
            { name: "Tailwind CSS", path: "tailwindcss" },
        ],
    },
    {
        name: "Craigslist Redesign",
        description:
            "Browse through a registry of items for sale and post your own ads.",
        type: "Team Project",
        role: "Full Stack Developer",
        longDescription: [
            "A functional redesign of craigslist. Allows users to create listings and browse those made by other users. Worked with a team of designers, implementing their prototype and specifications.",
        ],
        links: {
            website: "https://idsp2380-craigslist.herokuapp.com/",
            github: "https://github.com/khs6226/craigslist_redesign",
        },
        imgPath: "/images/craigslist.png",
        logo: "/logos/craigslist.svg",
        color: "#fff",
        techStack: [
            { name: "Node.js", path: "nodedotjs" },
            { name: "Sass", path: "sass" },
            { name: "Express", path: "express" },
            { name: "MySQL", path: "mysql" },
        ],
    },
    // {
    //     name: "Nammos",
    //     description: "Website for a local restaurant.",
    //     type: "Freelance",
    //     role: "Frontend Developer",
    //     longDescription:
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //     links: {
    //         website: "https://nammos.ca/",
    //         github: "https://github.com/matteomiceli/nammos",
    //     },
    //     imgPath: "/images/nammos.png",
    //     logo: "/logos/nammos.png",
    //     techStack: [
    //         { name: "jQuery", path: "jquery" },
    //         { name: "HTML", path: "html5" },
    //         { name: "CSS", path: "css3" },
    //     ],
    // },
];

export default projectList;
