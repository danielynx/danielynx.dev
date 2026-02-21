import Image from "next/image";
import Link from "next/link";
import { CgScreenShot } from "react-icons/cg";
import { tv } from "tailwind-variants";
import { SessionHeader } from "@/component/SessionHeader";

const tvStyle = tv({
    slots: {
        container: "space-y-4 leading-relaxed text-base lg:text-lg",
    },
});

export default function Page() {
    const style = tvStyle();

    return (
        <div>
            <div className={style.container()}>
                <Link
                    className="underline decoration-1 hover:decoration-2 underline-offset-2"
                    href="https://learn.mongodb.com/"
                    target="_blank"
                >
                    MongoDB University
                </Link>{" "}
                is the official online training platform by MongoDB offering interactive courses and
                hands-on labs to build skills in MongoDB development and administration.
            </div>
            <SessionHeader Icon={CgScreenShot} title="Screenshots" />
            <Image
                src="/courses/mongodb/proof-of-completion.webp"
                width={800}
                height={400}
                alt="Proof of completion of MongoDB University course"
            />
        </div>
    );
}
