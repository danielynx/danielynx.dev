import { SiSymfony } from "react-icons/si";
import { Card } from "@/component/Card";

export function Symfony() {
    return (
        <Card.Root
            lightBgColor="bg-light-bg-brand-symfony"
            darkTextColor="dark:text-dark-text-brand-symfony"
            link="https://symfonycasts.com/u/danielynx"
            target="_blank"
        >
            <Card.Header.Root>
                <Card.Header.Icon Icon={SiSymfony} />
                <Card.Header.Text>
                    <div>
                        <span className="font-bold">Symfony</span>
                        <span className="font-normal">Casts</span>
                    </div>
                </Card.Header.Text>
            </Card.Header.Root>
            <Card.Footer />
        </Card.Root>
    );
}
