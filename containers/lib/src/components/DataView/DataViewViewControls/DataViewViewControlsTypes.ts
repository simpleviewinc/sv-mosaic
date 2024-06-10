// import {
// 	DataViewProps,
// 	StateViewDef,
// 	SavedViewCallbacks,
// } from "../DataViewTypes";

import { DataViewProps } from "../DataViewTypes";

export type DataViewViewControlsProps = Pick<DataViewProps,
	| "currentView"
	| "onViewSave"
	| "onViewSaveAs"
	| "onViewList"
>;
