import { tv } from "tailwind-variants";
import { Avatar } from "@/app/_layout/StickyProfile/Avatar";
import { AppColorSchema } from "@/app/_layout/StickyProfile/ColorSchema";
import { Content } from "@/app/_layout/StickyProfile/Content";
import { Name } from "@/app/_layout/StickyProfile/Name";

const tvStyle = tv({
    slots: {
        profile: ["flex flex-row", "items-center justify-end", "grow px-6"],
    },
});

export function StickyProfile() {
    const style = tvStyle();

    return (
        <div className={style.profile()}>
            <Content>
                <Avatar />
                <Name />
            </Content>
            <AppColorSchema />
        </div>
    );
}
