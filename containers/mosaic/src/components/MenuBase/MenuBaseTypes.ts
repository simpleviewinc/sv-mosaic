export interface MenuBaseProps {
	open: boolean;
	anchorEl?: HTMLElement;
	onClose(): void;
	children: React.ReactNode;
}
