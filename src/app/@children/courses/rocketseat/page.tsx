import { GoStack } from "@/app/@children/courses/rocketseat/_page/GoStack";
import { Link } from "@/app/@children/courses/rocketseat/_page/Link";

export default function Page() {
    return (
        <div>
            <div className="space-y-4 leading-relaxed text-base lg:text-lg">
                <p>
                    {<Link />} is a Brazilian coding school that focuses on
                    JavaScript Technologies.
                </p>
            </div>
            <GoStack />
        </div>
    );
}
