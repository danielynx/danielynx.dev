import { MdRocketLaunch } from "react-icons/md";
import { Card } from "@/component/Card";

export function Rocketseat() {
    return (
        <Card.Root
            lightBgColor="bg-light-bg-brand-rocketseat"
            darkTextColor="dark:text-dark-text-brand-rocketseat"
            link="courses/rocketseat"
        >
            <Card.Header.Root>
                <Card.Header.Icon Icon={MdRocketLaunch} />
                <Card.Header.Text>
                    <div className="font-bold">Rocketseat</div>
                </Card.Header.Text>
            </Card.Header.Root>
            <Card.Footer />
        </Card.Root>
    );
}
