import type { MenuItemProps } from "../MenuItem";

export interface MenuProps {
	items?: MenuItemProps[];
	anchorEl?: HTMLElement;
	open: boolean;
	onClose: () => void;
	placeholder?: string;
	value?: string;
	onChange?: (value: string) => void;
}
