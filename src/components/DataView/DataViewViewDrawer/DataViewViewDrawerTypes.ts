import { DataViewProps, SavedViewCallbacks } from "../DataViewTypes";

export interface DataViewViewDrawerProps {
	open: boolean;
	onClose: () => void;
	onSave: SavedViewCallbacks["onSave"];
	onRemove: SavedViewCallbacks["onRemove"];
	onChange: SavedViewCallbacks["onChange"];
	onGetOptions: SavedViewCallbacks["onGetOptions"];
	allowSharedViewSave: DataViewProps["savedViewAllowSharedViewSave"];
}
