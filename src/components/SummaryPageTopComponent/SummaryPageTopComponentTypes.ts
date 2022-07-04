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
    favorite: boolean;
    /**
	 * Optional src to show an image.
	 */
    imageSrc?: string;
    /**
	 * Optional array of buttons, max three items.
	 */
	mainActions?: ButtonProps[];
    /**
	 * Optional array of buttons, could have infinite items.
	 */
    aditionalActions?: MenuItemProps[];
    /**
	 * Optional array of strings.
	 */
    contextTexts?: string[];
    /**
	 * Optional array of buttons, max three items.
	 */
    textLinks?: ButtonProps[];
    /**
	 * Optional button.
	 */
    filterSingleSelect: FilterSingleSelectProps;
  }