import { tv } from "tailwind-variants";

const tvStyle = tv({
    slots: {
        footer: [
            "flex flex-col sm:flex-row",
            "justify-center items-center",
            "w-full",
            "gap-1 py-3 sm:py-4",
            "text-xs sm:text-sm",
        ],
        username:
            "font-bold underline decoration-indigo-500 decoration-2 underline-offset-2",
        technology: "font-bold",
    },
});

export function Footer() {
    const style = tvStyle();

    return (
        <div className={style.footer()}>
            <div>
                <span className={style.username()}>@danielynx</span>
                &nbsp; building software since 2010,
            </div>
            <div>
                using &nbsp;
                <span className={style.technology()}>PHP</span>
                &nbsp; and &nbsp;
                <span className={style.technology()}>JavaScript</span>
                &nbsp; 🕵️‍♂️
            </div>
        </div>
    );
}
