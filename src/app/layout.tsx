import "@/app/globals.css";

import type { ReactNode } from "react";
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
            slots: ["headerContainer", "middleContainer"],
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
                "w-full sm:w-50/100 md:w-40/100 lg:w-32/100 xl:w-28/100 2xl:w-26/100",
            ],
        },
        {
            slots: ["navigation", "content"],
            class: ["w-full lg:w-68/100 xl:w-72/100 2xl:w-74/100"],
        },
    ],
    slots: {
        body: "font-sans",
        viewport: [
            "flex flex-co",
            "items-center",
            "min-h-screen",
            "text-light-text dark:text-dark-text",
            // "bg-blue-300",
        ],
        header: [
            "flex flex-row",
            "justify-center",
            "sticky top-0 z-1",
            "w-full h-30 lg:h-18",
            "border-b border-light-border dark:border-dark-border",
            "bg-light-bg-hg dark:bg-dark-bg-hg",
        ],
        middle: ["flex flex-row", "justify-center", "w-full grow", "py-4"],
        footer: [
            "flex flex-row",
            "justify-center items-center",
            "w-full",
            "border-t dark:border-0 border-light-border",
            "bg-light-bg dark:bg-dark-bg-hg",
        ],
        headerContainer: [
            "flex flex-col lg:flex-row",
            "items-center lg:items-end",
            "h-full",
            // "bg-cyan-300",
        ],
        middleContainer: [
            "flex flex-col lg:flex-row",
            "items-center lg:items-start",
            // "bg-cyan-300",
        ],
        profile: [
            "flex flex-row justify-center",
            "items-center lg:justify-end",
            "h-full",
            // "bg-cyan-600",
        ],
        navigation: [
            "flex flex-row",
            "justify-center items-end lg:justify-start",
            "h-full",
            // "bg-cyan-800",
        ],
        sidebar: [
            "flex flex-col",
            "justify-start items-center",
            "sm:w-50/100 md:w-40/100",
            "mr-0 lg:mr-2 mb-4 lg:mb-0",
            "bg-light-bg-hg dark:bg-dark-bg-hg",
            // "bg-cyan-800",
            "border dark:border-0 border-light-border",
            "rounded-xl shadow-xl",
        ],
        content: [
            "flex flex-row",
            "justify-start items-start",
            "grow w-full h-full",
            "ml-0 lg:ml-2",
            "py-2 lg:py-6 px-4 lg:px-10",
            "bg-light-bg-hg dark:bg-dark-bg-hg",
            "border dark:border-0 border-light-border",
            "rounded-xl shadow-xl",
        ],
    },
});

export default function RootLayout({
    navigation,
    children,
}: {
    navigation: ReactNode;
    children: ReactNode;
}) {
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
                                        {navigation}
                                    </div>
                                </div>
                            </header>
                            <div className={style.middle()}>
                                <div className={style.middleContainer()}>
                                    <aside className={style.sidebar()}>
                                        <ExpandedProfile />
                                    </aside>
                                    <main className={style.content()}>
                                        {children}
                                    </main>
                                </div>
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
