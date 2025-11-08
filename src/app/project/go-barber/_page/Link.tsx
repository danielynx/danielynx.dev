import Link from "next/link";

export function GoBarberLink() {
	return (
		<Link
			className="underline decoration-1 hover:decoration-2 underline-offset-2"
			href="/project/go-barber"
		>
			GoBarber
		</Link>
	);
}
