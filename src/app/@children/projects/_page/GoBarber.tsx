import { BsScissors } from "react-icons/bs";

import { Card } from "@/component/Card";

export function GoBarber() {
    return (
        <Card href="projects/go-barber">
            <Card.Icon Icon={BsScissors} />
            <Card.Text>
                <div className="font-bold">GoBarber</div>
            </Card.Text>
        </Card>
    );
}
