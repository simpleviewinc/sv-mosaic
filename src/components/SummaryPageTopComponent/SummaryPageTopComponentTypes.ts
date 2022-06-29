import { ButtonProps } from "../Button";
import { FilterSingleSelectProps } from "../FilterSingleSelect";
import { MenuItemProps } from "../MenuItem";

/* interface FilterSingleSelectProps {
	label: string;
	state?: {
		value?: string | undefined;
	};
	args?: {
		required?: boolean;
		color?: string;
		getOptions: () => void;
		getSelected: () => void;
	};
	onRemove?: () => void;
	onChange: () => void;
} */
export interface SummaryPageTopComponentTypes {
    title: string;
    favorite: boolean;
    imageSrc?: string;
	mainActions?: ButtonProps[];
    aditionalActions?: MenuItemProps[];
    contextTexts?: string[];
    textLinks?: ButtonProps[];
    filterSingleSelect: FilterSingleSelectProps;
  }