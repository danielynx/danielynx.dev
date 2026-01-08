import "@/app/globals.css";

import type { ReactNode } from "react";
import { tv } from "tailwind-variants";
import { Font } from "@/app/_layout/Font";
import { Footer } from "@/app/_layout/Footer";
import { Sidebar } from "@/app/_layout/Sidebar";
import { StickyHeader } from "@/app/_layout/StickyHeader";
import { HighlightFrame } from "@/component/HighlightFrame";
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
            slots: ["stickyHeader", "sidebar"],
            class: ["w-full lg:w-32/100 xl:w-28/100 2xl:w-26/100"],
        },
        {
            slots: ["navigation", "content"],
            class: ["w-full lg:w-68/100 xl:w-72/100 2xl:w-74/100"],
        },
    ],
    slots: {
        body: "font-sans",
        viewport: [
            "flex flex-col",
            "items-center",
            "min-h-screen",
            "text-copy",
            "bg-background",
        ],
        header: [
            "flex flex-row",
            "justify-center",
            "sticky top-0 z-1",
            "w-full h-30 lg:h-18",
            "border-b border-outline",
            "bg-surface",
        ],
        middle: ["flex flex-row", "justify-center", "w-full grow", "py-4"],
        footer: [
            "flex flex-row",
            "justify-center items-center",
            "w-full",
            "border-t border-outline",
            "bg-surface",
        ],
        headerContainer: [
            "flex flex-col lg:flex-row",
            "items-center lg:items-end",
            "h-full",
        ],
        middleContainer: [
            "flex flex-col lg:flex-row",
            "items-center lg:items-start",
        ],
        stickyHeader: [
            "flex flex-row justify-center",
            "items-center lg:justify-end",
            "h-full",
        ],
        navigation: [
            "flex flex-row",
            "justify-center items-end lg:justify-start",
            "h-full",
            "border-t lg:border-0 border-outline",
        ],
        sidebar: [
            "flex flex-col",
            "justify-start items-center",
            "hidden lg:block",
            "p-4",
            "mr-2",
            "mb-0",
            "bg-surface",
            "border border-outline",
            "rounded-xl",
        ],
        content: [
            "flex flex-row",
            "justify-start items-start",
            "grow w-full h-full",
            "ml-0 lg:ml-2",
            "py-2 lg:py-6 px-4 lg:px-10",
            "bg-surface",
            "border border-outline",
            "rounded-xl",
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
                                    <div className={style.stickyHeader()}>
                                        <StickyHeader />
                                    </div>
                                    <div className={style.navigation()}>
                                        {navigation}
                                    </div>
                                </div>
                            </header>
                            <div className={style.middle()}>
                                <div className={style.middleContainer()}>
                                    <aside className={style.sidebar()}>
                                        <HighlightFrame>
                                            <Sidebar />
                                        </HighlightFrame>
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
