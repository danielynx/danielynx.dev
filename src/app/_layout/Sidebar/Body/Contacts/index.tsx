import {
    SiGithub,
    SiLinkedin,
    SiProtonmail,
    SiStackoverflow,
} from "react-icons/si";

import { Item } from "@/app/_layout/Sidebar/Body/Contacts/Item";

export function Contacts() {
    return (
        <>
            <hr className="mt-3 mb-3 border-t border-light-border dark:border-dark-border" />
            <Item
                Icon={SiProtonmail}
                iconColor="text-light-text-brand-protonmail dark:text-dark-text-brand-protonmail"
                url="mailto:danielynx@proton.me"
                text="danielynx@proton.me"
            />
            <Item
                Icon={SiGithub}
                iconColor="text-light-text-brand-github dark:text-dark-text-brand-github"
                url="https://github.com/danielynx"
                text="GitHub"
            />
            <Item
                Icon={SiStackoverflow}
                iconColor="text-light-text-brand-stackoverflow dark:text-dark-text-brand-stackoverflow"
                url="https://stackoverflow.com/users/10463549"
                text="Stack Overflow"
            />
            <Item
                Icon={SiLinkedin}
                iconColor="text-light-text-brand-linkedin dark:text-dark-text-brand-linkedin"
                url="https://www.linkedin.com/in/daniel-nx-73177224"
                text="LinkedIn"
            />
        </>
    );
}
