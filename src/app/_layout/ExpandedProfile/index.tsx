import { Avatar } from "@/app/_layout/ExpandedProfile/Avatar";
import { Company } from "@/app/_layout/ExpandedProfile/Company";
import { Contacts } from "@/app/_layout/ExpandedProfile/Contacts";
import { Location } from "@/app/_layout/ExpandedProfile/Location";
import { Name } from "@/app/_layout/ExpandedProfile/Name";

export function ExpandedProfile() {
    return (
        <div className="p-8">
            <Avatar />
            <Name />
            <Company />
            <Location />
            <Contacts />
        </div>
    );
}
