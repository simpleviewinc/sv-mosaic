// import {
// 	DataViewProps,
// 	StateViewDef,
// 	SavedViewCallbacks,
// } from "../DataViewTypes";

import type { DataViewProps } from "../DataViewTypes";

export type DataViewViewControlsProps = Pick<DataViewProps,
	| "currentView"
	| "onViewSave"
	| "onViewSaveAs"
	| "onViewList"
>;
