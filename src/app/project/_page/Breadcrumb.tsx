import type { PropsWithChildren } from "react";
import { MdDeveloperBoard } from "react-icons/md";
import { HomeBreadcrumb } from "@/app/_page/Breadcrumb";
import { Breadcrumb } from "@/component/Breadcrumb";
import { TabEnum } from "@/type/_page/TabEnum";

export function ProjectBreadcrumb({ children }: PropsWithChildren) {
	return (
		<HomeBreadcrumb>
			<Breadcrumb.Item
				Icon={MdDeveloperBoard}
				text="Projects"
				selected={false}
				link={`/?tab=${TabEnum.PROJECTS}`}
			/>
			<Breadcrumb.Separator />
			{children}
		</HomeBreadcrumb>
	);
}
