import { ButtonProps } from "../Button";
import { FilterSingleSelectProps } from "../FilterSingleSelect";
import { MenuItemProps } from "../MenuItem";

export interface SummaryPageTopComponentTypes {
    /**
	 * Mandatory title.
	 */
    title: string;
    /**
	 * Mandatory favorite to show favorite icon or no favorite icon.
	 */
	favorite: {
		checked: boolean;
		onClick: (checked: boolean) => void;
	};
    /**
	 * Optional src to show an image.
	 */
    img?: string;
    /**
	 * Optional array of buttons, max three items.
	 */
	mainActions?: ButtonProps[];
    /**
	 * Optional array of buttons, could have infinite items.
	 */
    additionalActions?: MenuItemProps[];
    /**
	 * Optional array of strings.
	 */
    descriptionTexts?: string[];
    /**
	 * Optional array of buttons, max three items.
	 */
    textLinks?: {
		label: string;
		mIcon?: ButtonProps["mIcon"];
		href: ButtonProps["href"];
		onClick?: ButtonProps["onClick"];
	}[];
    /**
	 * Optional button.
	 */
    filter: {
		label: string;
		args: FilterSingleSelectProps["args"];
		//probably will also require the data/value prop;
		defaultValue?: any;
	};
  }