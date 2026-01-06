import { SiFreecodecamp } from "react-icons/si";
import { Card } from "@/component/Card";

export function FreeCodeCamp() {
    return (
        <Card link="https://www.freecodecamp.org/danielynx" target="_blank">
            <Card.Icon Icon={SiFreecodecamp} />
            <Card.Text>
                <div className="font-bold">freeCodeCamp</div>
            </Card.Text>
        </Card>
    );
}
