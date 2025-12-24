import { Repositories } from "@/app/@children/projects/daniel-portfolio/_page/Repositories";
import { Technologies } from "@/app/@children/projects/daniel-portfolio/_page/Technologies";

export default function Page() {
    return (
        <div>
            <div className="space-y-4 leading-relaxed text-base lg:text-lg">
                <p>
                    The {`Daniel's`} Portfolio project is this web application,
                    and its proposal is show my career as a Software Developer.
                </p>
                <p>
                    I was wanting to learn the NextJS framework, so I decided to
                    build my own portfolio to learn by developing a real
                    project. I took this opportunity to learn Tailwind too and
                    to improve my skills in build responsive layout, create page
                    design and create pages with the color scheme chooser.
                </p>
                <p>
                    {`It's`} important to mentionate that the layout was
                    inspired in the GitHub page, but the entire application was
                    built by myself. I learn a lot by trying many times, until I
                    was able of developing everything that I intending to do.
                </p>
            </div>
            <Technologies />
            <Repositories />
        </div>
    );
}
