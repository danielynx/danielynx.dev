import { PiDesktopTowerLight } from "react-icons/pi";
import { SiGithub } from "react-icons/si";
import { tv } from "tailwind-variants";

import { Card } from "@/component/Card";
import { SessionHeader } from "@/component/SessionHeader";

const tvStyle = tv(
    {
        slots: {
            container: "grid",
        },
        variants: {
            size: {
                initial: {
                    container: "grid-cols-1 gap-3",
                },
                md: {
                    container: "grid-cols-2 gap-4",
                },
                xl: {
                    container: "grid-cols-3",
                },
                "2xl": {
                    container: "gap-5",
                },
            },
        },
        defaultVariants: {
            size: "initial",
        },
    },
    {
        responsiveVariants: ["md", "xl", "2xl"],
    },
);

export function DanielPortfolioRepository() {
    const style = tvStyle({
        size: { md: "md", xl: "xl", "2xl": "2xl" },
    });

    return (
        <>
            <SessionHeader Icon={SiGithub} title="GitHub Repository" />
            <div className={style.container()}>
                <Card.Root
                    lightBgColor="bg-light-bg-ct"
                    link="https://github.com/danielynx/danielynx.dev"
                    target="_blank"
                >
                    <Card.Header.Root>
                        <Card.Header.Icon Icon={PiDesktopTowerLight} />
                        <Card.Header.Text>Web</Card.Header.Text>
                    </Card.Header.Root>
                    <Card.Footer />
                </Card.Root>
            </div>
        </>
    );
}
