import Image from "next/image";
import { use } from "react";

import { GITHUB_USER } from "@/constant/_layout";
import { getGithubProfile } from "@/service/_layout/getGithubProfile";
import type { Profile } from "@/type/_layout/Profile";

export function ProfileAvatar() {
    const profile = use<Profile>(getGithubProfile(GITHUB_USER));

    return (
        <>
            {profile && (
                <Image
                    id="image"
                    src={profile.avatar_url}
                    alt="Avatar"
                    width="50"
                    height="50"
                    className="rounded-full h-12 w-12"
                />
            )}
        </>
    );
}
