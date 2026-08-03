import type { SvgIconComponent } from "@root/types";

export interface DataViewDisplay {
	name: string;
	label: string;
	component: React.ElementType;
	mIcon: SvgIconComponent;
}
