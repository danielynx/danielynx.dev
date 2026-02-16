"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import * as motion from "motion/react-client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GrSystem } from "react-icons/gr";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { tv } from "tailwind-variants";
import { HighlightFrame } from "@/component/HighlightFrame";
import { ThemeEnum } from "@/type/ThemeEnum";

const tvStyle = tv({
    slots: {
        container: ["relative"],
        openButton: ["focus:outline-none focus:ring-0"],
        openButtonIcon: [
            "h-4 xs:h-5 sm:h-6 md:h-7",
            "w-4 xs:w-5 sm:w-6 md:w-7",
        ],
        themeButton: ["flex flex-row", "w-full"],
        themeButtonIcon: [
            "h-4 xs:h-5 sm:h-6 md:h-7",
            "w-4 xs:w-5 sm:w-6 md:w-7",
            "mr-2",
        ],
        panel: [
            "absolute -translate-x-70 lg:-translate-x-78",
            "w-80 lg:w-95",
            "mt-3 px-4",
            "data-closed:translate-y-1 data-closed:opacity-0",
            "data-enter:duration-200 data-enter:ease-out",
            "data-leave:duration-150 data-leave:ease-in",
        ],
        inner: [
            "flex-auto overflow-hidden",
            "p-4",
            "bg-surface-elevated",
            "border border-outline",
            "rounded-xl shadow-lg",
        ],
        divider: ["mt-3 mb-3", "border-t border-outline"],
    },
});

export function ThemeSelector() {
    const style = tvStyle();

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Popover className={style.container()}>
            <PopoverButton
                title="Select the theme"
                className={style.openButton()}
            >
                {theme === ThemeEnum.LIGHT ? (
                    <MdLightMode className={style.openButtonIcon()} />
                ) : theme === ThemeEnum.DARK ? (
                    <MdDarkMode className={style.openButtonIcon()} />
                ) : (
                    <GrSystem className={style.openButtonIcon()} />
                )}
            </PopoverButton>

            <PopoverPanel transition className={style.panel()}>
                <div className={style.inner()}>
                    <HighlightFrame>
                        <motion.button
                            className={style.themeButton()}
                            onClick={() => setTheme(ThemeEnum.LIGHT)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 15,
                                mass: 0.5,
                            }}
                        >
                            <MdLightMode className={style.themeButtonIcon()} />
                            Light
                        </motion.button>
                        <hr className={style.divider()} />
                        <motion.button
                            className={style.themeButton()}
                            onClick={() => setTheme(ThemeEnum.DARK)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 15,
                                mass: 0.5,
                            }}
                        >
                            <MdDarkMode className={style.themeButtonIcon()} />
                            Dark
                        </motion.button>
                        <hr className={style.divider()} />
                        <motion.button
                            className={style.themeButton()}
                            onClick={() => setTheme(ThemeEnum.SYSTEM)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 15,
                                mass: 0.5,
                            }}
                        >
                            <GrSystem className={style.themeButtonIcon()} />
                            System
                        </motion.button>
                    </HighlightFrame>
                </div>
            </PopoverPanel>
        </Popover>
    );
}
