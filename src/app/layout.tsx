import "@/app/globals.css";

import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { ExpandedProfile } from "@/app/_layout/ExpandedProfile";
import { Font } from "@/app/_layout/Font";
import { Footer } from "@/app/_layout/Footer";
import { StickyProfile } from "@/app/_layout/StickyProfile";
import { ColorSchemeProvider } from "@/context/_layout/ColorSchemeProvider";
import { ProfileIntersectionProvider } from "@/context/_layout/ProfileIntersectionProvider";

export const metadata = {
    title: "Daniel's Portfolio",
    description: "Daniel's Portfolio",
};

const tvStyle = tv({
    compoundSlots: [
        {
            slots: ["headerContainer", "container"],
            class: [
                "w-96/100 flex-col",
                "sm:w-94/100",
                "md:w-92/100",
                "lg:w-88/100 lg:flex-row",
                "xl:w-80/100",
                "2xl:w-72/100",
            ],
        },
        {
            slots: ["profile", "sidebar"],
            class: [
                "w-full lg:w-32/100 xl:w-28/100 2xl:w-26/100",
                "pr-0 lg:pr-2",
            ],
        },
        {
            slots: ["navigation", "content"],
            class: ["pl-0 lg:pl-2"],
        },
        {
            slots: ["sidebar", "content"],
            class: ["py-4"],
        },
    ],
    slots: {
        body: "font-sans",
        viewport: [
            "flex flex-col items-center",
            "min-h-screen",
            "text-light-text dark:text-dark-text",
            "bg-blue-300",
        ],
        header: [
            "flex flex-row justify-center",
            "sticky top-0 z-1",
            "w-full h-20",
            "border-b border-light-border dark:border-dark-border",
            "bg-light-bg-hg dark:bg-dark-bg-hg",
        ],
        headerContainer: ["flex flex-row", "h-full", "bg-cyan-300"],
        profile: [
            "flex flex-row items-center justify-center lg:justify-end",
            "h-full",
            "bg-cyan-600",
        ],
        navigation: ["flex", "grow", "bg-cyan-800"],
        container: [
            "flex flex-row",
            "grow",
            "bg-green-100 sm:bg-green-200 md:bg-green-300 lg:bg-green-500 xl:bg-green-700 2xl:bg-green-900",
        ],
        sidebar: [
            "flex flex-col justify-start items-center lg:items-end",
            "h-grow",
            "bg-cyan-600",
        ],
        content: ["flex flex-col", "grow", "bg-cyan-800"],
        footer: [
            "flex flex-row justify-center items-center",
            "w-full",
            "border-t dark:border-0 border-light-border",
            "bg-light-bg dark:bg-dark-bg-hg",
        ],
    },
});

export default function RootLayout({ children }: PropsWithChildren) {
    const style = tvStyle();

    return (
        <html lang="en" className={Font.variable}>
            <body className={style.body()}>
                <ColorSchemeProvider>
                    <ProfileIntersectionProvider>
                        <div className={style.viewport()}>
                            <header className={style.header()}>
                                <div className={style.headerContainer()}>
                                    <div className={style.profile()}>
                                        <StickyProfile />
                                    </div>
                                    <div className={style.navigation()}>
                                        <p>Navigation</p>
                                    </div>
                                </div>
                            </header>
                            <div className={style.container()}>
                                <div className={style.sidebar()}>
                                    <ExpandedProfile />
                                </div>
                                <main className={style.content()}>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p> <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p> <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p> <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p> <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p> <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                    <p>Content</p>
                                </main>
                            </div>
                            <footer className={style.footer()}>
                                <Footer />
                            </footer>
                        </div>
                    </ProfileIntersectionProvider>
                </ColorSchemeProvider>
            </body>
        </html>
    );
}
