"use client";

import { MdDeveloperBoard, MdPieChart, MdSchool } from "react-icons/md";
import { TabNav } from "@/component/TabNav";

export default function Page() {
    return (
        <TabNav>
            <TabNav.Item Icon={MdPieChart} text="Overview" href="/" />
            <TabNav.Item
                Icon={MdDeveloperBoard}
                text="Projects"
                href="/projects"
            />
            <TabNav.Item Icon={MdSchool} text="Courses" href="/courses" />
        </TabNav>
    );
}
