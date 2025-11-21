import { RiSpaceShipLine } from "react-icons/ri";
import { tv } from "tailwind-variants";
import { Link as GoBarberLink } from "@/app/project/go-barber/_page/Link";
import { SessionHeader } from "@/component/SessionHeader";

const tvStyle = tv(
    {
        base: "space-y-4 leading-relaxed",
        variants: {
            size: {
                initial: "text-base",
                lg: "text-lg",
            },
        },
        defaultVariants: {
            size: "initial",
        },
    },
    {
        responsiveVariants: ["lg"],
    },
);

export function GoStack() {
    const style = tvStyle({
        size: { lg: "lg" },
    });

    return (
        <>
            <SessionHeader Icon={RiSpaceShipLine} title="GoStack" />
            <div className={style}>
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
                <ul className="list-decimal list-inside pl-3">
                    <li>
                        how use <b>NodeJS</b> to build <b>Headless</b>{" "}
                        applications:
                        <ul className="list-disc list-inside pl-5">
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
                        <ul className="list-disc list-inside pl-5">
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
                        <ul className="list-disc list-inside pl-5">
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
