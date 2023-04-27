export interface DataViewFilterDropdownProps {
	anchorEl?: HTMLElement;
	onExited?: () => void;
	onClose: () => void;
	onEntered?: () => void;
	children: React.ReactNode;
}
