import { SiProtonmail } from "react-icons/si";

import { ContactItem } from "./Item";

export function ContactProtonMail() {
    return (
        <ContactItem.Root
            Icon={SiProtonmail}
            iconColor="text-light-text-brand-protonmail dark:text-dark-text-brand-protonmail"
            url="mailto:danielynx@proton.me"
            text="danielynx@proton.me"
        />
    );
}
