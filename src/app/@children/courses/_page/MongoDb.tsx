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
        <Card
            href="https://university.mongodb.com/course_completion/2afe5b18-37c2-4a62-8a32-e1e27256a5bf?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing"
            target="_blank"
        >
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
