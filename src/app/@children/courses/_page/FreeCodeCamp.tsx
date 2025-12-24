import { SiFreecodecamp } from "react-icons/si";
import { Card } from "@/component/Card";

export function FreeCodeCamp() {
    return (
        <Card.Root
            lightBgColor="bg-light-bg-brand-freecodecamp"
            darkTextColor="dark:text-dark-text-brand-freecodecamp"
            link="https://www.freecodecamp.org/danielynx"
            target="_blank"
        >
            <Card.Header.Root>
                <Card.Header.Icon Icon={SiFreecodecamp} />
                <Card.Header.Text>
                    <div className="font-bold">freeCodeCamp</div>
                </Card.Header.Text>
            </Card.Header.Root>
            <Card.Footer />
        </Card.Root>
    );
}
