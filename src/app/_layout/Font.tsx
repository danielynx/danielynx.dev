import { Public_Sans, Roboto_Serif, Source_Code_Pro } from "next/font/google";

const sans = Public_Sans({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false,
    variable: "--font-sans",
});

const serif = Roboto_Serif({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false,
    variable: "--font-serif",
});

const mono = Source_Code_Pro({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false,
    variable: "--font-mono",
});

export const AppFont = {
    variable: `${sans.variable} ${serif.variable} ${mono.variable}`,
};
