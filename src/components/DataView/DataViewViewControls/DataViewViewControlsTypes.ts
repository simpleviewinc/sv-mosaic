import {
	DataViewProps,
	StateViewDef,
	SavedViewCallbacks,
} from "../DataViewTypes";

export interface DataViewViewControlsProps {
	savedView: DataViewProps["savedView"];
	savedViewAllowSharedViewSave: DataViewProps["savedViewAllowSharedViewSave"];
	savedViewCallbacks: SavedViewCallbacks;
	savedViewState: StateViewDef;
}
