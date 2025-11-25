"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { MdDeveloperBoard, MdPieChart, MdSchool } from "react-icons/md";
import { MainContent } from "@/app/_layout/MainContent";
import { Navigation } from "@/app/_layout/Navigation";
import { Courses } from "@/app/_page/Courses";
import { Overview } from "@/app/_page/Overview";
import { Projects } from "@/app/_page/Projects";
import { Tab } from "@/component/Tab";
import { TabEnum } from "@/type/_page/TabEnum";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PageContent />
        </Suspense>
    );
}

function PageContent() {
    const searchParams = useSearchParams();

    const tab = searchParams.get("tab");

    const [selectedIndex, setSelectedIndex] = useState(
        tab === TabEnum.PROJECTS ? 1 : tab === TabEnum.COURSES ? 2 : 0,
    );

    return (
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <MainContent>
                <Tab.Panels>
                    <Tab.Panel>
                        <Overview />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Projects />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Courses />
                    </Tab.Panel>
                </Tab.Panels>
            </MainContent>
        </Tab.Group>
    );
}
