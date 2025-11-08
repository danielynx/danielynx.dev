import { SiStackoverflow } from "react-icons/si";

import { ContactItem } from "./Item";

export function ContactStackOverflow() {
	return (
		<ContactItem.Root
			Icon={SiStackoverflow}
			iconColor="text-light-text-brand-stackoverflow dark:text-dark-text-brand-stackoverflow"
			url="https://stackoverflow.com/users/10463549"
			text="Stack Overflow"
		/>
	);
}
