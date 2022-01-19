module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            body: 'Nunito, sans-serif', 
            header: 'Ubuntu, serif',
            monaco: 'Monaco, monospace',
        },
        extend: {
            colors: {
                "neon-pink": "#EE69B2",
                "neon-blue": "#00C4D0",
                "dark-blue": "#00838B",
                "dark-pink-hover": "#f50087",

                // redesign colors 
                "purple": "#896898",
                "light-purple": "#B06BAE",
                "dark-pink": "#B1437F",
                "bg-dark": "#181818",
                "dark-grey": "#393939",

            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
