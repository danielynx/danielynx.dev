import { Link as RocketseatLink } from "@/app/@children/courses/rocketseat/_page/Link";
import { Repositories } from "@/app/@children/projects/go-barber/_page/Repositories";
import { Screenshots } from "@/app/@children/projects/go-barber/_page/Screenshots";
import { Technologies } from "@/app/@children/projects/go-barber/_page/Technologies";

export default function Page() {
    return (
        <div>
            <div className="space-y-4 leading-relaxed text-base lg:text-lg">
                <p>
                    GoBarber is a barbershop scheduling platform composed of an
                    backend API, a web application, and a mobile application.
                </p>
                <p>
                    It was developed during the {<RocketseatLink />}
                    {`'s`} GoStack course, which focuses on building full-stack
                    applications using Node.js, React.js and React Native.
                </p>
            </div>
            <Technologies />
            <Repositories />
            <Screenshots />
        </div>
    );
}
