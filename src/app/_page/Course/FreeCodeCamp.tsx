import { SiFreecodecamp } from "react-icons/si";
import { tv } from "tailwind-variants";

import { Card } from "@/component/Card";

const tvStyle = tv({
    slots: {
        text: "font-bold",
    },
});

export function CourseFreeCodeCamp() {
    const style = tvStyle();

    const lightBgColor = "bg-light-bg-brand-freecodecamp";
    const darkTextColor = "dark:text-dark-text-brand-freecodecamp";
    const link = "https://www.freecodecamp.org/danielynx";

    return (
        <Card.Root
            lightBgColor={lightBgColor}
            darkTextColor={darkTextColor}
            link={link}
            target="_blank"
        >
            <Card.Header.Root>
                <Card.Header.Icon Icon={SiFreecodecamp} />
                <Card.Header.Text>
                    <div className={style.text()}>freeCodeCamp</div>
                </Card.Header.Text>
            </Card.Header.Root>
            <Card.Footer />
        </Card.Root>
    );
}
