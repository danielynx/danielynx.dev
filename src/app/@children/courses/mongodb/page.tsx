import Image from "next/image";
import Link from "next/link";
import { CgScreenShot } from "react-icons/cg";
import { SessionHeader } from "@/component/SessionHeader";

export default function Page() {
    return (
        <div>
            <div className="space-y-4 leading-relaxed text-base lg:text-lg">
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
            <div className="flex flex-col items-center">
                <Image
                    src="/courses/mongodb/proof-of-completion.webp"
                    width={800}
                    height={400}
                    alt="Proof of completion of MongoDB University course"
                />
            </div>
        </div>
    );
}
