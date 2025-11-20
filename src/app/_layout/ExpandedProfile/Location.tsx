import Link from "next/link";
import { use } from "react";
import { MdLocationPin } from "react-icons/md";

import { GITHUB_USER } from "@/constant/_layout";
import { getGithubProfile } from "@/service/_layout/getGithubProfile";
import type { Profile } from "@/type/_layout/Profile";

export function Location() {
    const profile = use<Profile>(getGithubProfile(GITHUB_USER));

    return (
        <>
            {profile && (
                <div className="flex flex-row items-center mt-2 text-base font-light">
                    <MdLocationPin className="mr-2 h-5 w-5 " />
                    <Link
                        href={"https://goo.gl/maps/dQ5rWzKNCeYxj6fm8"}
                        target={"_blank"}
                    >
                        {profile.location}
                    </Link>
                </div>
            )}
        </>
    );
}
