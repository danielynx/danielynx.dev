import { SiMongodb } from "react-icons/si";
import { tv } from "tailwind-variants";
import { Card } from "@/component/Card";

const tvStyle = tv({
    slots: {
        container: "flex flex-col items-start",
        title: "font-bold",
        subtitle: "font-normal",
    },
});

export function MongoDb() {
    const style = tvStyle();

    return (
        <Card href="courses/mongodb">
            <Card.Icon Icon={SiMongodb} />
            <Card.Text>
                <div className={style.container()}>
                    <span className={style.title()}>MongoDB</span>
                    <span className={style.subtitle()}>University</span>
                </div>
            </Card.Text>
        </Card>
    );
}
