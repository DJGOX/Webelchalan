import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#C4120D", // La Leña Red
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#1A1A1A", // Dark Charcoal/Black
                    foreground: "#FFFFFF",
                },
                background: "#F5F5F5", // Light Gray/Cream
                foreground: "#1A1A1A",
                surface: "#FFFFFF",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
        },
    },
    plugins: [],
};
export default config;
