"use client"; // Error boundaries must be Client Components

export interface GlobalErrorParams {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalError({ reset }: GlobalErrorParams) {
    return (
        // global-error must include html and body tags
        <html lang="en">
            <body>
                <h2>Something went wrong! Error</h2>
                <button type="button" onClick={() => reset()}>
                    Try again
                </button>
            </body>
        </html>
    );
}
