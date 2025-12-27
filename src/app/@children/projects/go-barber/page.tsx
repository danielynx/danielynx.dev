import { Link as RocketseatLink } from "@/app/@children/courses/rocketseat/_page/Link";
import { Repositories } from "@/app/@children/projects/go-barber/_page/Repositories";
import { Screenshots } from "@/app/@children/projects/go-barber/_page/Screenshots";
import { Technologies } from "@/app/@children/projects/go-barber/_page/Technologies";

export default function Page() {
    return (
        <div>
            <div className="space-y-4 leading-relaxed text-base lg:text-lg">
                <p>
                    The GoBarber project is a barbershop schedule manager,
                    compound by a headless application, a web application and a
                    mobile application.
                </p>
                <p>
                    It was built during the {<RocketseatLink />}
                    {`'s`} GoStack course, which addressed the stack that is
                    compounded by the NodeJS, ReactJS and React Native
                    technologies.
                </p>
            </div>
            <Technologies />
            <Repositories />
            <Screenshots />
        </div>
    );
}
