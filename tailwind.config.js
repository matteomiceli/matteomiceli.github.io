module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            body: "Nunito, sans-serif",
            header: "Ubuntu, serif",
            monaco: "Monaco, monospace",
        },
        extend: {
            colors: {
                // redesign colors
                "dark-purple": "#705cd1",
                blue: "#188aca",
                "light-purple": "#4528cb",
                teal: "#17BBBB",
                "gradient-end": "#cd316f",
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
