import Link from "next/link";
import { MdLocationPin } from "react-icons/md";

export function Location() {
    return (
        <div className="flex flex-row items-center mt-2 text-base font-light">
            <MdLocationPin className="mr-2 h-5 w-5" />
            <Link
                href={"https://goo.gl/maps/dQ5rWzKNCeYxj6fm8"}
                target={"_blank"}
            >
                Cuiabá, Brasil
            </Link>
        </div>
    );
}
