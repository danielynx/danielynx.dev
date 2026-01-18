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
                    href="https://github.com/danielynx/rocketseat-gobarber-api"
                    target="_blank"
                >
                    <Card.Icon Icon={AiOutlineDatabase} />
                    <Card.Text>Headless</Card.Text>
                </Card>
                <Card
                    href="https://github.com/danielynx/rocketseat-gobarber-web"
                    target="_blank"
                >
                    <Card.Icon Icon={PiDesktopTowerLight} />
                    <Card.Text>Web</Card.Text>
                </Card>
                <Card
                    href="https://github.com/danielynx/rocketseat-gobarber-mobile"
                    target="_blank"
                >
                    <Card.Icon Icon={CiMobile3} />
                    <Card.Text>Mobile</Card.Text>
                </Card>
            </div>
        </>
    );
}
