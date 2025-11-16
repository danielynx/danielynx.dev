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

    const lightBgColor = "bg-light-bg-brand-mongodb";
    const darkTextColor = "dark:text-dark-text-brand-mongodb";
    const link =
        "https://university.mongodb.com/course_completion/2afe5b18-37c2-4a62-8a32-e1e27256a5bf?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing";

    return (
        <Card.Root
            lightBgColor={lightBgColor}
            darkTextColor={darkTextColor}
            link={link}
            target="_blank"
        >
            <Card.Header.Root>
                <Card.Header.Icon Icon={SiMongodb} />
                <Card.Header.Text>
                    <div className={style.container()}>
                        <span className={style.title()}>MongoDB</span>
                        <span className={style.subtitle()}>University</span>
                    </div>
                </Card.Header.Text>
            </Card.Header.Root>
            <Card.Footer />
        </Card.Root>
    );
}
