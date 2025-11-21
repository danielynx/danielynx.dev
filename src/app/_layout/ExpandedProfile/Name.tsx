import { use } from "react";

import { GITHUB_USER } from "@/constant/_layout";
import { getGithubProfile } from "@/service/_layout/getGithubProfile";
import type { Profile } from "@/type/_layout/Profile";

export function Name() {
    const profile = use<Profile>(getGithubProfile(GITHUB_USER));

    return (
        <>
            {profile && (
                <div className="mt-5 text-xl font-serif font-bold tracking-wide">
                    {profile.name}
                </div>
            )}
        </>
    );
}
