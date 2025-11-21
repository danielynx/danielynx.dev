import { ExpandedProfile } from "@/app/_layout/ExpandedProfile";
import { StickyProfile } from "@/app/_layout/StickyProfile";
import { ProfileIntersectionProvider } from "@/context/_layout/ProfileIntersectionProvider";

export function Sidebar() {
    return (
        <ProfileIntersectionProvider>
            <StickyProfile />
            <ExpandedProfile />
        </ProfileIntersectionProvider>
    );
}
