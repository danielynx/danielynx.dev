import type { PropsWithChildren } from "react";

export function ContactRoot({ children }: PropsWithChildren) {
	return (
		<>
			<hr className="mt-3 mb-3 border-t border-light-border dark:border-dark-border" />
			{children}
		</>
	);
}
