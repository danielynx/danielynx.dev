import { Repositories } from "@/app/@children/projects/daniel-portfolio/_page/Repositories";
import { Technologies } from "@/app/@children/projects/daniel-portfolio/_page/Technologies";

export default function Page() {
    return (
        <div>
            <div className="space-y-4 leading-relaxed text-base lg:text-lg">
                <p>
                    {`Daniel's`} Portfolio is a web application created to
                    showcase my career as a Software Developer.
                </p>
                <p>
                    I wanted to learn Next.js, so I took this opportunity to
                    build my own portfolio as a real-world project and learn by
                    doing. I also used Tailwind CSS to improve my skills in
                    responsive layouts, page design, and implementing a
                    color-scheme switcher.
                </p>
                <p>
                    The layout was inspired by GitHub, but the entire
                    application was built from scratch by me.
                </p>
                <p>
                    I learned a lot through experimentation and iteration —
                    rebuilding parts multiple times until everything worked the
                    way I envisioned.
                </p>
            </div>
            <Technologies />
            <Repositories />
        </div>
    );
}
