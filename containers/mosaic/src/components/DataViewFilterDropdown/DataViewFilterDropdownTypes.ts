import type { GrowProps } from "@mui/material/Grow";

export interface DataViewFilterDropdownProps {
	anchorEl?: HTMLElement;
	onExited?: () => void;
	onClose: () => void;
	onEntered?: () => void;
	children: React.ReactNode;
}

export type DataViewFilterDropdownPopoverProps = Pick<DataViewFilterDropdownProps,
	| "anchorEl"
	| "onClose"
	| "children"
> & {
	isOpen: boolean;
	inTransit: HTMLElement;
	growProps: Omit<GrowProps, "children">;
}
