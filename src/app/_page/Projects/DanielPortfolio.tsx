import { ImProfile } from "react-icons/im";
import { tv } from "tailwind-variants";

import { Card } from "@/component/Card";

const tvStyle = tv({
    slots: {
        text: "flex flex-col items-start",
        largerSpan: "font-bold",
        smalerSpan: "font-normal text-base",
    },
});

export function DanielPortfolio() {
    const style = tvStyle();

    const lightBgColor = "bg-light-bg-project-myportfolio";
    const darkTextColor = "dark:text-dark-text-project-myportfolio";
    const link = "project/daniel-portfolio";

    return (
        <Card.Root
            lightBgColor={lightBgColor}
            darkTextColor={darkTextColor}
            link={link}
        >
            <Card.Header.Root>
                <Card.Header.Icon Icon={ImProfile} />
                <Card.Header.Text>
                    <div className={style.text()}>
                        <span className={style.largerSpan()}>
                            Daniel{`'`}s Portfolio
                        </span>
                        <span className={style.smalerSpan()}>
                            (This website)
                        </span>
                    </div>
                </Card.Header.Text>
            </Card.Header.Root>
            <Card.Footer />
        </Card.Root>
    );
}
