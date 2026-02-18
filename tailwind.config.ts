import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Playfair Display"', "serif"],
                sans: ['"Inter"', "sans-serif"],
            },
            colors: {
                museum: {
                    background: "#F9F7F2", // Off-white, paper-like
                    text: "#1A1A1A",      // Soft black
                    border: "#E0E0E0",    // Subtle grey
                    accent: "#D4AF37",    // Gold/Bronze hint
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
