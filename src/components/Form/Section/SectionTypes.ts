import { MosaicGridConfig, MosaicShow } from "@root/types";
import { FieldDef } from "../FormTypes";

export interface SectionPropTypes {
	title: string;
	sectionIdx: number;
	description: string | JSX.Element;
	fieldsDef: FieldDef[];
	rows: MosaicGridConfig;
	dispatch: any;
	state: any;
	collapsed?: boolean;
	show?: MosaicShow;
	registerRef?: (ref: HTMLElement) => () => void;
}
