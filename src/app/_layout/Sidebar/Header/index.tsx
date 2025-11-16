import { tv } from "tailwind-variants";
import { AppContainerHeader } from "@/app/_layout/container/Header";
import { Avatar } from "@/app/_layout/Sidebar/Header/Avatar";
import { AppColorSchema } from "@/app/_layout/Sidebar/Header/ColorSchema";
import { Content } from "@/app/_layout/Sidebar/Header/Content";
import { Name } from "@/app/_layout/Sidebar/Header/Name";
import { sidebarStyle } from "@/app/_layout/Sidebar/style";

const tvStyle = tv(
    {
        slots: {
            header: "flex flex-row items-center top-0 z-10",
            sidebar: "flex flex-row items-center justify-end py-2",
        },
        variants: {
            size: {
                initial: {
                    header: "justify-center fixed",
                },
                lg: {
                    header: "justify-end sticky",
                },
            },
        },
        defaultVariants: {
            size: "initial",
        },
    },
    {
        responsiveVariants: ["lg"],
    },
);

export function SidebarHeader() {
    const style = tvStyle({
        size: { lg: "lg" },
    });

    return (
        <header
            className={style.header({ className: AppContainerHeader.style() })}
        >
            <nav className={style.sidebar({ className: sidebarStyle() })}>
                <Content>
                    <Avatar />
                    <Name />
                </Content>
                <AppColorSchema />
            </nav>
        </header>
    );
}
