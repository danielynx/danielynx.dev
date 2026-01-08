import { SiSymfony } from "react-icons/si";
import { Card } from "@/component/Card";

export function Symfony() {
    return (
        <Card href="https://symfonycasts.com/u/danielynx" target="_blank">
            <Card.Icon Icon={SiSymfony} />
            <Card.Text>
                <div>
                    <span className="font-bold">Symfony</span>
                    <span className="font-normal">Casts</span>
                </div>
            </Card.Text>
        </Card>
    );
}
