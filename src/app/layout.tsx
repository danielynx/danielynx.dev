import "@/app/globals.css";

import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { AppBodyProfile } from "@/app/_layout/BodyProfile";
import { AppColorSchema } from "@/app/_layout/ColorSchema";
import { AppFont } from "@/app/_layout/Font";
import { Footer } from "@/app/_layout/Footer";
import { AppHeaderProfile } from "@/app/_layout/HeaderProfile";
import { AppContainerSidebar } from "@/app/_layout/Sidebar";
import { ColorSchemeProvider } from "@/context/_layout/ColorSchemeProvider";
import { ProfileIntersectionProvider } from "@/context/_layout/ProfileIntersectionProvider";

export const metadata = {
    title: "Daniel's Portfolio",
    description: "Daniel's Portfolio",
};

const tvStyle = tv(
    {
        slots: {
            body: "font-sans",
            viewport: [
                "flex flex-col min-h-screen",
                "text-light-text dark:text-dark-text",
            ],
            growth: "flex justify-center grow",
            sidebar: "flex flex-col",
            content: "flex flex-col",
        },
        variants: {
            size: {
                initial: {
                    growth: "flex-col",
                    sidebar: "items-center w-full",
                    content: "items-center w-full",
                },
                lg: {
                    growth: "flex-row",
                    sidebar: "items-end w-4/12",
                    content: "items-start w-8/12",
                },
            },
        },
        defaultVariants: {
            size: "initial",
        },
    },
    {
        responsiveVariants: ["lg"],
    },
);

export default function RootLayout({ children }: PropsWithChildren) {
    const style = tvStyle({
        size: { lg: "lg" },
    });

    return (
        <html lang="en" className={AppFont.variable}>
            <body className={style.body()}>
                <ColorSchemeProvider>
                    <div className={style.viewport()}>
                        <div className={style.growth()}>
                            <div className={style.sidebar()}>
                                <ProfileIntersectionProvider>
                                    <AppContainerSidebar.Header>
                                        <AppHeaderProfile.Root>
                                            <AppHeaderProfile.Avatar />
                                            <AppHeaderProfile.Name />
                                        </AppHeaderProfile.Root>
                                        <AppColorSchema />
                                    </AppContainerSidebar.Header>
                                    <AppContainerSidebar.Body>
                                        <AppBodyProfile.Root>
                                            <AppBodyProfile.Avatar.IntersectionObserver>
                                                <AppBodyProfile.Avatar.Root />
                                            </AppBodyProfile.Avatar.IntersectionObserver>
                                            <AppBodyProfile.Name />
                                            <AppBodyProfile.Company />
                                            <AppBodyProfile.Location />
                                            <AppBodyProfile.Contact.Root>
                                                <AppBodyProfile.Contact.ProtonMail />
                                                <AppBodyProfile.Contact.GitHub />
                                                <AppBodyProfile.Contact.StackOverflow />
                                                <AppBodyProfile.Contact.LinkedIn />
                                            </AppBodyProfile.Contact.Root>
                                        </AppBodyProfile.Root>
                                    </AppContainerSidebar.Body>
                                </ProfileIntersectionProvider>
                            </div>
                            <div className={style.content()}>{children}</div>
                        </div>
                        <Footer />
                    </div>
                </ColorSchemeProvider>
            </body>
        </html>
    );
}
