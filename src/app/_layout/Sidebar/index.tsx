import { Body } from "@/app/_layout/Sidebar/Body";
import { Header } from "@/app/_layout/Sidebar/Header";
import { ProfileIntersectionProvider } from "@/context/_layout/ProfileIntersectionProvider";

export function Sidebar() {
    return (
        <ProfileIntersectionProvider>
            <Header />
            <Body />
        </ProfileIntersectionProvider>
    );
}
