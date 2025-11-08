import { MdHome } from "react-icons/md";
import { TbError404, TbHandStop } from "react-icons/tb";
import { tv } from "tailwind-variants";
import { AppContainerContent } from "@/app/_layout/container/Content";
import { Breadcrumb } from "@/component/Breadcrumb";

const tvStyle = tv(
    {
        slots: {
            container: [
                "flex flex-col items-center justify-center",
                "text-dark-text-ct dark:text-light-text-ct",
            ],
            icon: "",
            ask: "font-bold",
            message: "font-bold",
        },
        variants: {
            size: {
                initial: {
                    icon: "mt-2 h-28 w-28",
                    ask: "mt-4 text-lg",
                    message: "mt-1 text-lg",
                },
                sm: {
                    icon: "mt-8 h-32 w-32",
                    ask: "mt-10 text-xl",
                    message: "mt-2 text-xl",
                },
                lg: {
                    icon: "mt-20 h-40 w-40",
                    ask: "mt-20 text-3xl",
                    message: "mt-4 text-3xl",
                },
            },
        },
        defaultVariants: {
            size: "initial",
        },
    },
    {
        responsiveVariants: ["sm", "lg"],
    },
);

export default function NotFound() {
    const style = tvStyle({
        size: { sm: "sm", lg: "lg" },
    });

    return (
        <>
            <AppContainerContent.Header>
                <Breadcrumb.Root>
                    <Breadcrumb.Item
                        Icon={MdHome}
                        text="Home"
                        selected={false}
                        link="/"
                    />
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item
                        Icon={TbError404}
                        text="PageNotFound"
                        selected={true}
                    />
                </Breadcrumb.Root>
            </AppContainerContent.Header>
            <AppContainerContent.Body>
                <div className={style.container()}>
                    <TbHandStop className={style.icon()} />
                    <p className={style.ask()}>Where did you want to go? 🤔</p>
                    <p className={style.message()}>
                        There {`isn't`} this page.
                    </p>
                </div>
            </AppContainerContent.Body>
        </>
    );
}
