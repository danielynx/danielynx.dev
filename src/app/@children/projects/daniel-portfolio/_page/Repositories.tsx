import { PiDesktopTowerLight } from "react-icons/pi";
import { SiGithub } from "react-icons/si";
import { tv } from "tailwind-variants";
import { Card } from "@/component/Card";
import { SessionHeader } from "@/component/SessionHeader";

const tvStyle = tv({
    slots: {
        container: [
            "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
            "gap-3 md:gap-4 2xl:gap-5",
        ],
    },
});

export function Repositories() {
    const style = tvStyle();

    return (
        <>
            <SessionHeader Icon={SiGithub} title="GitHub Repository" />
            <div className={style.container()}>
                <Card
                    lightBgColor="bg-light-bg-ct"
                    link="https://github.com/danielynx/danielynx.dev"
                    target="_blank"
                >
                    <Card.Header>
                        <Card.Header.Icon Icon={PiDesktopTowerLight} />
                        <Card.Header.Text>Web</Card.Header.Text>
                    </Card.Header>
                    <Card.Footer />
                </Card>
            </div>
        </>
    );
}
