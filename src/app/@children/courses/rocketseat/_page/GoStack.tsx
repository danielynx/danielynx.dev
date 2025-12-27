import { RiSpaceShipLine } from "react-icons/ri";
import { tv } from "tailwind-variants";
import { Link as GoBarberLink } from "@/app/@children/projects/go-barber/_page/Link";
import { SessionHeader } from "@/component/SessionHeader";

const tvStyle = tv({
    slots: {
        container: "space-y-4 leading-relaxed text-base lg:text-lg",
        listOne: "list-decimal list-inside pl-3",
        listTwo: "list-disc list-inside pl-5",
    },
});

export function GoStack() {
    const style = tvStyle();

    return (
        <>
            <SessionHeader Icon={RiSpaceShipLine} title="GoStack" />
            <div className={style.container()}>
                <p>
                    This course covered NodeJS, ReactJS and React Native
                    technologies.
                </p>
                <p>
                    During the course I did many small project to learn some
                    specific topic, but as final project I built a bit bigger
                    project called&nbsp;
                    <GoBarberLink />.
                </p>
                <p>It teach:</p>
                <ul className={style.listOne()}>
                    <li>
                        how use <b>NodeJS</b> to build <b>Headless</b>{" "}
                        applications:
                        <ul className={style.listTwo()}>
                            <li>that provide an API</li>
                            <li>
                                that save the data in a Postgress database using
                                TypeORM
                            </li>
                            <li>that save cache data in the Redis database</li>
                            <li>
                                that save tasks in the MongoDB to be process
                                lather
                            </li>
                            <li>that send e-mails with Amazon SES</li>
                            <li>that save its files with Amazon S3</li>
                            <li>that is tested with Jest</li>
                            <li>
                                that is deployed in the DigitalOcean with Github
                                Actions
                            </li>
                            <li>
                                whom is published with HTTPS provided by CertBot
                            </li>
                        </ul>
                    </li>
                    <li className="mt-3">
                        how use <b>ReactJS</b> to build <b>Web</b> applications:
                        <ul className={style.listTwo()}>
                            <li>
                                that the user can navigate to see the
                                information provided by the API
                            </li>
                            <li>that the user can input data using forms</li>
                            <li>that the user can upload files</li>
                            <li>that is tested with Jest</li>
                            <li>
                                that is deployed in the DigitalOcean with Github
                                Actions
                            </li>
                            <li>
                                that is deployed in the Google Cloud with Github
                                Actions
                            </li>
                            <li>
                                whom is published with HTTPS provided by CertBot
                            </li>
                        </ul>
                    </li>
                    <li className="mt-3">
                        how use <b>React Native</b> to build{" "}
                        <b>Android Mobile</b> applications:
                        <ul className={style.listTwo()}>
                            <li>
                                that the user can navigate to see the
                                information provided by the API
                            </li>
                            <li>that the user can input data using forms</li>
                            <li>that the user can upload files</li>
                            <li>that is tested with Jest</li>
                            <li>
                                that is deployed in the Google Play Store with
                                AppCenter Platform
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}
