import NextLink from "next/link";

export function Link() {
    return (
        <NextLink
            className="underline decoration-1 hover:decoration-2 underline-offset-2"
            href="/project/go-barber"
        >
            GoBarber
        </NextLink>
    );
}
