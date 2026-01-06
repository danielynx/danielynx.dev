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
        <Card link="projects/daniel-portfolio">
            <Card.Icon Icon={ImProfile} />
            <Card.Text>
                <div className={style.text()}>
                    <span className={style.largerSpan()}>
                        Daniel{`'`}s Portfolio
                    </span>
                    <span className={style.smalerSpan()}>(This website)</span>
                </div>
            </Card.Text>
        </Card>
    );
}
