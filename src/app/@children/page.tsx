import { GiClockwork } from "react-icons/gi";
import { TfiThought } from "react-icons/tfi";
import { tv } from "tailwind-variants";
import { SessionHeader } from "@/component/SessionHeader";
import { Timeline } from "@/component/Timeline";

const tvStyle = tv({
    slots: {
        greetings: [
            "font-extralight",
            "text-sm lg:text-base",
            "leading-relaxed lg:leading-loose",
        ],
        name: ["text-secondary-light font-extrabold", "text-2xl lg:text-3xl"],
        author: ["font-normal not-italic", "text-xs lg:text-sm"],
        citations: ["flex flex-col", "items-center", "gap-5 lg:gap-6"],
        citation: [
            "font-extralight italic",
            "w-10/12 lg:w-8/12",
            "text-sm lg:text-base",
        ],
        paragraph: ["mb-1 lg:mb-2"],
    },
});

export default function Page() {
    const style = tvStyle();

    return (
        <div>
            <div className={style.greetings()}>
                <p>
                    Hi, I{`'`}m <span className={style.name()}>Daniel,</span> a
                    Computing Scientist and a Full-Stack Developer.
                </p>
                <p>
                    I{`'`}ve been working with PHP (Symfony) and Javascript for
                    many years, building real-world applications and systems.
                </p>
                <p>
                    Currently, I{`'`}m expanding my stack with Node.js, React,
                    and Next.js, and exploring Generative AI while building a
                    RAG-based assistant.
                </p>
            </div>

            <SessionHeader Icon={TfiThought} title="Thoughts I agree with" />

            <div className={style.citations()}>
                <div className={style.citation()}>
                    “I would rather have questions that can{`'`}t be answered
                    than answers that can{`'`}t be questioned.”&nbsp;-&nbsp;
                    <span className={style.author()}>Richard Feynman</span>
                </div>
                <div className={style.citation()}>
                    “We believe extrinsic motivations – wealth, fame, revenge –
                    are fine as far as they go. But we believe intrinsic
                    motivations – the satisfaction of building something new,
                    the camaraderie of being on a team, the achievement of
                    becoming a better version of oneself – are more fulfilling
                    and more lasting.“&nbsp;-&nbsp;
                    <span className={style.author()}>
                        Techno-Optimist Manifesto
                    </span>
                </div>
                <div className={style.citation()}>
                    “We believe in local knowledge, the people with actual
                    information making decisions, not in playing
                    God.“&nbsp;-&nbsp;
                    <span className={style.author()}>
                        Techno-Optimist Manifesto
                    </span>
                </div>
            </div>

            <SessionHeader
                Icon={GiClockwork}
                title="Experiences"
                className="pb-4"
            />

            <Timeline>
                <Timeline.Time date="Today" />
                <Timeline.Content
                    title="Software Developer / Software Architect / Tech Lead"
                    subtitle="Mato Grosso State Parliament"
                >
                    <p className={style.paragraph()}>
                        I{"'"}m a public servant working as a Software
                        Developer. Over the years, I{"'"}ve evolved into a
                        Software Architect and Tech Lead.
                    </p>
                    <p className={style.paragraph()}>
                        My team is responsible for maintaining the parliament
                        {"'"}s website and several internal systems that support
                        all departments, especially legislative activities.
                    </p>
                    <p className={style.paragraph()}>
                        Most of our systems are web applications, but we also
                        maintain APIs and a storage service. They are primarily
                        built with PHP (Symfony) and MariaDB, with JavaScript
                        used across both frontend and backend services.
                    </p>
                    <p className={style.paragraph()}>
                        We adopted Docker to standardize development
                        environments and enable smoother PHP upgrades across
                        newer applications.
                    </p>
                    <p className={style.paragraph()}>
                        We use GitLab as both our code repository and CI/CD
                        platform, deploying services to environment-specific
                        Docker Swarm clusters, and more recently to k3s with
                        Helm. Our pipelines also run lint checks and TDD against
                        a temporary database created from migrations and data
                        fixtures to ensure schema consistency and application
                        correctness.
                    </p>
                    <p className={style.paragraph()}>
                        We also implemented asynchronous workflows using message
                        queues and background workers, and built pipelines to
                        materialize data from relational databases into MongoDB
                        for downstream processing and search.
                    </p>
                    <p className={style.paragraph()}>
                        More recently, we began integrating Generative AI into
                        our systems using Mastra, implementing RAG pipelines
                        with Qdrant for vector search, and configuring vLLM for
                        local model serving inside our Kubernetes cluster.
                    </p>
                    <p className={style.paragraph()}>
                        The team follows Scrum to manage development, and we
                        introduced code reviews to improve quality and
                        consistency.
                    </p>
                </Timeline.Content>
            </Timeline>

            <Timeline>
                <Timeline.Time date="2014" />
                <Timeline.Content
                    title="PHP Developer"
                    subtitle="Mato Grosso State Government"
                >
                    <p className={style.paragraph()}>
                        As a government employee, I worked at the Civil House,
                        where I was responsible for building an internal system
                        to support daily operations.
                    </p>
                    <p className={style.paragraph()}>
                        The project was a web application developed with PHP and
                        MySQL.
                    </p>
                </Timeline.Content>
            </Timeline>

            <Timeline>
                <Timeline.Time date="2013" />
                <Timeline.Content
                    title="Java Developer"
                    subtitle="Ábaco Software House"
                >
                    <p className={style.paragraph()}>
                        Ábaco is a software house where I worked on a queue
                        management system commissioned by the Mato Grosso State
                        {"'"}s Department of Motor Vehicles. The project was a
                        web application built with Java and Oracle Database.
                    </p>
                    <p className={style.paragraph()}>
                        Later, I was allocated to the Mato Grosso State{"'"}s
                        Court of Auditors under an outsourcing contract. There,
                        I worked in a DevOps-like role, responsible for managing
                        deployments of nine applications across quality
                        assurance and staging environments.
                    </p>
                </Timeline.Content>
            </Timeline>

            <Timeline>
                <Timeline.Time date="2012" />
                <Timeline.Content
                    title="Java Developer"
                    subtitle="Tractors Parts Company"
                >
                    <p className={style.paragraph()}>
                        This was my first role as a Software Developer. I worked
                        on a team responsible for maintaining and improving an
                        Enterprise Resource Planning (ERP) system that supported
                        sales operations.
                    </p>
                    <p className={style.paragraph()}>
                        The system was a desktop application built with Java and
                        Oracle Database.
                    </p>
                    <p className={style.paragraph()}>
                        We followed the Scrum framework to organize and manage
                        our development process.
                    </p>
                </Timeline.Content>
            </Timeline>

            <Timeline>
                <Timeline.Time date="2009" />
                <Timeline.Content
                    title="Computing Scientist"
                    subtitle="Mato Grosso State University"
                >
                    <p className={style.paragraph()}>
                        My journey in IT began in 2005, when I started my
                        Computing Science degree.
                    </p>
                    <p className={style.paragraph()}>
                        This on-campus program gave me a strong foundation in
                        logic and problem-solving. Over time, I realized I had
                        made the right choice — it allowed me to exercise
                        structured thinking and transform ideas into real
                        digital products.
                    </p>
                </Timeline.Content>
            </Timeline>
        </div>
    );
}
