"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { MdDeveloperBoard, MdPieChart, MdSchool } from "react-icons/md";
import { AppContainerContent } from "@/app/_layout/container/Content";
import { Tab } from "@/component/Tab";
import { TabEnum } from "@/type/_page/TabEnum";
import { AppCourse } from "./_page/Course";
import { AppOverview } from "./_page/Overview";
import { AppProject } from "./_page/Project";

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
            <AppContainerContent.Header>
                <Tab.List>
                    <Tab.Item Icon={MdPieChart} text="Overview" />
                    <Tab.Item Icon={MdDeveloperBoard} text="Projects" />
                    <Tab.Item Icon={MdSchool} text="Courses" />
                </Tab.List>
            </AppContainerContent.Header>
            <AppContainerContent.Body>
                <Tab.Panels>
                    <AppOverview />
                    <AppProject.Root>
                        <AppProject.DanielPortfolio />
                        <AppProject.GoBarber />
                    </AppProject.Root>
                    <AppCourse.Root>
                        <AppCourse.Symfony />
                        <AppCourse.Rocketseat />
                        <AppCourse.MongoDb />
                        <AppCourse.FreeCodeCamp />
                    </AppCourse.Root>
                </Tab.Panels>
            </AppContainerContent.Body>
        </Tab.Group>
    );
}
