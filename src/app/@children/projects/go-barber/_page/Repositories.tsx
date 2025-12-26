import { AiOutlineDatabase } from "react-icons/ai";
import { CiMobile3 } from "react-icons/ci";
import { PiDesktopTowerLight } from "react-icons/pi";
import { SiGithub } from "react-icons/si";
import { Card } from "@/component/Card";
import { SessionHeader } from "@/component/SessionHeader";

export function Repositories() {
    return (
        <>
            <SessionHeader Icon={SiGithub} title="GitHub Repositories" />
            <div className="grid grid-cols-1 gap-3 md:gap-4 2xl:gap-5 md:grid-cols-2 lg:grid-cols-3">
                <Card
                    link="https://github.com/danielynx/rocketseat-gobarber-api"
                    target="_blank"
                >
                    <Card.Header>
                        <Card.Header.Icon Icon={AiOutlineDatabase} />
                        <Card.Header.Text>Headless</Card.Header.Text>
                    </Card.Header>
                    <Card.Footer />
                </Card>
                <Card
                    lightBgColor="bg-light-bg-ct"
                    link="https://github.com/danielynx/rocketseat-gobarber-web"
                    target="_blank"
                >
                    <Card.Header>
                        <Card.Header.Icon Icon={PiDesktopTowerLight} />
                        <Card.Header.Text>Web</Card.Header.Text>
                    </Card.Header>
                    <Card.Footer />
                </Card>
                <Card
                    link="https://github.com/danielynx/rocketseat-gobarber-mobile"
                    target="_blank"
                >
                    <Card.Header>
                        <Card.Header.Icon Icon={CiMobile3} />
                        <Card.Header.Text>Mobile</Card.Header.Text>
                    </Card.Header>
                    <Card.Footer />
                </Card>
            </div>
        </>
    );
}
