import Image from "next/image";
import { MdHomeWork } from "react-icons/md";
import { tv } from "tailwind-variants";
import { HidingObserver } from "@/app/_layout/Sidebar/Avatar/HidingObserver";

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
    const style = tvStyle();

    return (
        <HidingObserver>
            <div className={style.outerBox()}>
                <div className={style.innerBox()}>
                    <Image
                        id="image"
                        src="/avatar.png"
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
        </HidingObserver>
    );
}
