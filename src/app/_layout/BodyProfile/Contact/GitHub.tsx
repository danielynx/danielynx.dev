import { SiGithub } from "react-icons/si";

import { ContactItem } from "./Item";

export function ContactGitHub() {
    return (
        <ContactItem.Root
            Icon={SiGithub}
            iconColor="text-light-text-brand-github dark:text-dark-text-brand-github"
            url="https://github.com/danielynx"
            text="GitHub"
        />
    );
}
