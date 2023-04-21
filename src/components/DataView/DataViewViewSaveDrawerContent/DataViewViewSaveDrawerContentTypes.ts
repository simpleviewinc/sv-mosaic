import { DataViewProps, DataViewView, SavedViewCallbacks } from "../DataViewTypes";

export interface DataViewViewSaveDrawerContentProps {
	data: DataViewView;
	allowSharedViewSave?: DataViewProps["savedViewAllowSharedViewSave"];
	onSave: SavedViewCallbacks["onSave"];
	onClose: () => void;
}
