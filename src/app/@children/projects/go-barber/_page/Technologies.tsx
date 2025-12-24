import { GiCircuitry } from "react-icons/gi";
import {
    SiExpress,
    SiGithubactions,
    SiJest,
    SiNodedotjs as SiNodeJs,
    SiReact,
    SiStyledcomponents,
    SiTypescript,
    SiYarn,
} from "react-icons/si";
import { Badge } from "@/component/Badge";
import { SessionHeader } from "@/component/SessionHeader";

export function Technologies() {
    return (
        <>
            <SessionHeader Icon={GiCircuitry} title="Technologies" />
            <div className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-4">
                <Badge Icon={SiNodeJs} title="Node JS" />
                <Badge Icon={SiReact} title="React JS and Native" />
                <Badge Icon={SiExpress} title="Express" />
                <Badge Icon={SiTypescript} title="TypeScript" />

                <Badge Icon={SiYarn} title="Yarn" />
                <Badge Icon={SiJest} title="Jest" />
                <Badge Icon={SiStyledcomponents} title="Styled Components" />
                <Badge Icon={SiGithubactions} title="GitHub Actions" />
            </div>
        </>
    );
}
