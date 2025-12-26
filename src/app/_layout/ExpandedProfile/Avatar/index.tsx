import Image from "next/image";
import { use } from "react";
import { MdHomeWork } from "react-icons/md";
import { tv } from "tailwind-variants";
import { HidingObserver } from "@/app/_layout/ExpandedProfile/Avatar/HidingObserver";

import { GITHUB_USER } from "@/constant/_layout";
import { getGithubProfile } from "@/service/_layout/getGithubProfile";
import type { Profile } from "@/type/_layout/Profile";

const tvStyle = tv({
    slots: {
        outerBox: ["flex flex-row", "justify-center"],
        innerBox: "relative pb-3",
        image: "rounded-full h-40 w-40",
        statusBox: [
            "flex flex-row",
            "justify-center hover:justify-start items-center absolute",
            "bottom-0 left-20",
            "hover:pl-2 rounded-full w-8 h-8 hover:w-40",
            "shadow-md bg-light-bg-ct dark:bg-dark-bg-ct",
            "group hover:cursor-pointer",
        ],
        statusIcon: "text-light-text-ct dark:text-dark-text-ct w-5 h-5",
        statusText: [
            "ml-1 hidden group-hover:inline",
            "text-xs text-light-text-ct dark:text-dark-text-ct",
        ],
    },
});

export function Avatar() {
    const profile = use<Profile>(getGithubProfile(GITHUB_USER));

    const style = tvStyle();

    return (
        <HidingObserver>
            {profile && (
                <div className={style.outerBox()}>
                    <div className={style.innerBox()}>
                        <Image
                            id="image"
                            src={profile.avatar_url}
                            alt="Avatar"
                            width="400"
                            height="400"
                            className={style.image()}
                        />
                        <div className={style.statusBox()}>
                            <MdHomeWork className={style.statusIcon()} />
                            <span className={style.statusText()}>
                                Working from home
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </HidingObserver>
    );
}
