import { DataViewProps, SavedViewCallbacks } from "../DataViewTypes";

export interface DataViewViewDrawerContentProps {
	onGetOptions: SavedViewCallbacks["onGetOptions"];
	allowSharedViewSave: DataViewProps["savedViewAllowSharedViewSave"];
	onChange: SavedViewCallbacks["onChange"];
	onClose: () => void;
	onRemove: SavedViewCallbacks["onRemove"];
	onSave: SavedViewCallbacks["onSave"];
}
