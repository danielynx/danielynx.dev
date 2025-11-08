"use client";

import { AppError } from "./_error/Error";

export interface GlobalErrorParams {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function GlobalError({ reset }: GlobalErrorParams) {
	return (
		<html lang="en">
			<body>
				<AppError reset={reset} />
			</body>
		</html>
	);
}
