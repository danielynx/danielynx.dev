import {
    SiGithub,
    SiLinkedin,
    SiProtonmail,
    SiStackoverflow,
} from "react-icons/si";

import { Contact } from "@/app/_layout/Profile/Contact";

export function Contacts() {
    return (
        <>
            <Contact
                Icon={SiProtonmail}
                url="mailto:danielynx@proton.me"
                text="danielynx@proton.me"
            />
            <Contact
                Icon={SiGithub}
                url="https://github.com/danielynx"
                text="GitHub"
            />
            <Contact
                Icon={SiStackoverflow}
                url="https://stackoverflow.com/users/10463549"
                text="Stack Overflow"
            />
            <Contact
                Icon={SiLinkedin}
                url="https://www.linkedin.com/in/daniel-nx-73177224"
                text="LinkedIn"
            />
        </>
    );
}
