import { RiSpaceShipLine } from "react-icons/ri";
import { tv } from "tailwind-variants";
import { Link } from "@/app/@children/courses/rocketseat/_page/Link";
import { Link as GoBarberLink } from "@/app/@children/projects/go-barber/_page/Link";
import { SessionHeader } from "@/component/SessionHeader";

const tvStyle = tv({
    slots: {
        container: "space-y-4 leading-relaxed text-base lg:text-lg",
        listOne: "list-decimal list-inside pl-3",
        listTwo: "list-disc list-inside pl-5",
    },
});

export default function Page() {
    const style = tvStyle();

    return (
        <div>
            <div className="space-y-4 leading-relaxed text-base lg:text-lg">
                <p>
                    {<Link />} is a Brazilian coding school focused on
                    JavaScript technologies.
                </p>
            </div>
            <SessionHeader Icon={RiSpaceShipLine} title="GoStack" />
            <div className={style.container()}>
                <p>
                    GoStack is a full-stack bootcamp covering Node.js, React.js,
                    and React Native.
                </p>
                <p>
                    During the course, I built several small projects to learn
                    specific concepts. As a final project, I developed a larger
                    application called&nbsp;
                    <GoBarberLink />.
                </p>
                <p>Through this project, I learned how to build:</p>
                <ul className={style.listOne()}>
                    <li>
                        Backend – API-first application (<b>Node.js</b>):
                        <ul className={style.listTwo()}>
                            <li>Desing and expose REST APIs</li>
                            <li>
                                Persist data using <b>PostgreSQL</b> with{" "}
                                <b>TypeORM</b>
                            </li>
                            <li>
                                Cache data with <b>Redis</b>
                            </li>
                            <li>
                                Process background jobs stored in <b>MongoDB</b>
                            </li>
                            <li>
                                Send emails via <b>Amazon SES</b>
                            </li>
                            <li>
                                Store files on <b>Amazon S3</b>
                            </li>
                            <li>
                                Write automated tests with <b>Jest</b>
                            </li>
                            <li>
                                Set up CI/CD pipelines to <b>DigitalOcean</b>{" "}
                                via <b>GitHub Actions</b>
                            </li>
                            <li>
                                Configure HTTPS with <b>Certbot</b>
                            </li>
                        </ul>
                    </li>
                    <li className="mt-3">
                        Web application (<b>React.js</b>):
                        <ul className={style.listTwo()}>
                            <li>Consume API data</li>
                            <li>Implement page navigation</li>
                            <li>Handle form submissions</li>
                            <li>Upload files</li>
                            <li>
                                Write automated tests with <b>Jest</b>
                            </li>
                            <li>
                                Set up CI/CD pipelines to <b>DigitalOcean</b>{" "}
                                and <b>Google Cloud</b> via{" "}
                                <b>GitHub Actions</b>
                            </li>
                            <li>
                                Configure HTTPS with <b>Certbot</b>
                            </li>
                        </ul>
                    </li>
                    <li className="mt-3">
                        Mobile application (<b>React Native</b>):
                        <ul className={style.listTwo()}>
                            <li>Consume API data</li>
                            <li>Implement screen navigation</li>
                            <li>Handle form submissions</li>
                            <li>Upload files</li>
                            <li>
                                Write automated tests with <b>Jest</b>
                            </li>
                            <li>
                                Plublish to the <b>Google Play Store</b> using{" "}
                                <b>App Center</b>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
