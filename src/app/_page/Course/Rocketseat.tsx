import { MdRocketLaunch } from "react-icons/md";
import { tv } from "tailwind-variants";

import { Card } from "@/component/Card";

const tvStyle = tv({
    slots: {
        text: "font-bold",
    },
});

export function CourseRocketseat() {
    const style = tvStyle();

    const lightBgColor = "bg-light-bg-brand-rocketseat";
    const darkTextColor = "dark:text-dark-text-brand-rocketseat";
    const link = "course/rocketseat";

    return (
        <Card.Root
            lightBgColor={lightBgColor}
            darkTextColor={darkTextColor}
            link={link}
        >
            <Card.Header.Root>
                <Card.Header.Icon Icon={MdRocketLaunch} />
                <Card.Header.Text>
                    <div className={style.text()}>Rocketseat</div>
                </Card.Header.Text>
            </Card.Header.Root>
            <Card.Footer />
        </Card.Root>
    );
}
