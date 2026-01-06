import { MdRocketLaunch } from "react-icons/md";
import { Card } from "@/component/Card";

export function Rocketseat() {
    return (
        <Card link="courses/rocketseat">
            <Card.Icon Icon={MdRocketLaunch} />
            <Card.Text>
                <div className="font-bold">Rocketseat</div>
            </Card.Text>
        </Card>
    );
}
