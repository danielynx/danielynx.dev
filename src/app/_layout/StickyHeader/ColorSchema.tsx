"use client";

import { Switch } from "@headlessui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { tv } from "tailwind-variants";

import { useColorScheme } from "@/hook/_layout/useColorScheme";

const tvStyle = tv({
    compoundSlots: [
        {
            slots: ["darkIcon", "lightIcon"],
            class: [
                "inline-block",
                "transition-transform",
                "transform",
                "h-3 lg:h-4",
                "w-3 lg:w-4",
                "rounded-full",
            ],
        },
    ],
    slots: {
        switch: [
            "relative inline-flex items-center",
            "h-5 lg:h-6",
            "w-10 lg:w-12",
            "bg-primary",
            "rounded-full transition-colors",
        ],
        darkIcon: [
            "translate-x-6 lg:translate-x-7",
            "bg-primary-content text-primary",
        ],
        lightIcon: ["translate-x-1", "bg-primary text-primary-content"],
    },
});

export function AppColorSchema() {
    const { isColorSchemeDark, toggleColorScheme } = useColorScheme();
    const style = tvStyle();

    return (
        <div className="flex items-end">
            <Switch
                title={
                    isColorSchemeDark
                        ? "Switch to Light Theme"
                        : "Switch to Dark Theme"
                }
                checked={isColorSchemeDark}
                onChange={() => toggleColorScheme()}
                className={style.switch()}
            >
                {isColorSchemeDark ? (
                    <MdDarkMode className={style.darkIcon()} />
                ) : (
                    <MdLightMode className={style.lightIcon()} />
                )}
            </Switch>
        </div>
    );
}
