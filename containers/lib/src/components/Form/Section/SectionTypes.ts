import { MosaicGridConfig, MosaicToggle } from "@root/types";
import { FieldDef, FormSpacing } from "../FormTypes";
import { FormMethods } from "../useForm/types";

export interface SectionPropTypes {
	title: string;
	sectionIdx: number;
	description: string | JSX.Element;
	fieldsDef: FieldDef[];
	rows: MosaicGridConfig;
	state: any;
	collapsed?: boolean;
	show?: MosaicToggle;
	registerRef?: (ref: HTMLElement) => () => void;
	gridMinWidth?: string;
	spacing?: FormSpacing;
	methods: FormMethods;
	skeleton?: boolean;
}
