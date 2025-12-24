import { BsScissors } from "react-icons/bs";

import { Card } from "@/component/Card";

export function GoBarber() {
    return (
        <Card.Root
            lightBgColor="bg-light-bg-project-gobarber"
            darkTextColor="dark:text-dark-text-project-gobarber"
            link="projects/go-barber"
        >
            <Card.Header.Root>
                <Card.Header.Icon Icon={BsScissors} />
                <Card.Header.Text>
                    <div className="font-bold">GoBarber</div>
                </Card.Header.Text>
            </Card.Header.Root>
            <Card.Footer />
        </Card.Root>
    );
}
