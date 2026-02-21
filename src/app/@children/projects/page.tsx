import { BsScissors } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { tv } from "tailwind-variants";
import { Card } from "@/component/Card";

const tvStyle = tv({
    base: [
        "grow",
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2",
        "gap-4 xl:gap-5",
        "m-2",
    ],
});

export default function Page() {
    const style = tvStyle();

    return (
        <div className={style}>
            <Card href="projects/portfolio">
                <Card.Icon Icon={ImProfile} />
                <Card.Text>
                    <div className="flex flex-col items-start">
                        <span className="font-bold">Portfolio</span>
                        <span className="font-normal text-base">(This website)</span>
                    </div>
                </Card.Text>
            </Card>
            <Card href="projects/go-barber">
                <Card.Icon Icon={BsScissors} />
                <Card.Text>
                    <div className="font-bold">GoBarber</div>
                </Card.Text>
            </Card>
        </div>
    );
}
