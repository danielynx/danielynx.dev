"use client";

import { MdDeveloperBoard, MdPieChart, MdSchool } from "react-icons/md";
import { TabNav } from "@/component/TabNav";

export default function Page() {
    return (
        <TabNav>
            <TabNav.Item text="Overview" Icon={MdPieChart} href="/" />
            <TabNav.Item
                Icon={MdDeveloperBoard}
                text="Projects"
                href="/projects"
            />
            <TabNav.Item text="Courses" Icon={MdSchool} href="/courses" />
        </TabNav>
    );
}
