import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { IoMdMore } from "react-icons/io";
import { tv } from "tailwind-variants";
import { Company } from "@/app/_layout/Profile/Company";
import { Contacts } from "@/app/_layout/Profile/Contacts";
import { Description } from "@/app/_layout/Profile/Description";
import { Location } from "@/app/_layout/Profile/Location";

const tvStyle = tv({
    slots: {
        container: ["relative"],
        buttonIcon: ["h-4 xs:h-5 sm:h-6 md:h-7", "w-4 xs:w-5 sm:w-6 md:w-7"],
        panel: [
            "absolute left-2 lg:left-4 -translate-x-10",
            "flex w-screen max-w-max",
            "bg-transparent",
            "transition",
            "z-10 mt-3 px-4",
            "data-closed:translate-y-1 data-closed:opacity-0",
            "data-enter:duration-200 data-enter:ease-out",
            "data-leave:duration-150 data-leave:ease-in",
        ],
        inner: [
            "flex-auto overflow-hidden",
            "w-screen max-w-md",
            "p-4",
            "bg-light-bg-hg dark:bg-dark-bg-hg",
            "border dark:border-0 border-light-border",
            "rounded-xl shadow-xl",
        ],
        divider: [
            "mt-3 mb-3",
            "border-t border-light-border dark:border-dark-border",
        ],
    },
});

export function ProfileDetail() {
    const style = tvStyle();

    return (
        <Popover className={style.container()}>
            <PopoverButton>
                <IoMdMore className={style.buttonIcon()} />
            </PopoverButton>

            <PopoverPanel transition className={style.panel()}>
                <div className={style.inner()}>
                    <Description />
                    <Company />
                    <Location />
                    <hr className={style.divider()} />
                    <Contacts />
                </div>
            </PopoverPanel>
        </Popover>
    );
}
