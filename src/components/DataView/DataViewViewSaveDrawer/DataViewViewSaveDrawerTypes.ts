import { DataViewProps, DataViewView, SavedViewCallbacks } from "../DataViewTypes";

export interface DataViewViewSaveDrawerProps {
	open: boolean;
	onClose: () => void;
	data: DataViewView;
	onSave: SavedViewCallbacks["onSave"];
	allowSharedViewSave: DataViewProps["savedViewAllowSharedViewSave"];
}
