import { ImProfile } from "react-icons/im";
import { tv } from "tailwind-variants";
import { Card } from "@/component/Card";

const tvStyle = tv({
    slots: {
        text: ["flex flex-col", "items-start"],
        largerSpan: "font-bold",
        smalerSpan: "font-normal text-base",
    },
});

export function DanielPortfolio() {
    const style = tvStyle();

    return (
        <Card
            lightBgColor="bg-light-bg-project-myportfolio"
            darkTextColor="dark:text-dark-text-project-myportfolio"
            link="projects/daniel-portfolio"
        >
            <Card.Header>
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
            </Card.Header>
            <Card.Footer />
        </Card>
    );
}
