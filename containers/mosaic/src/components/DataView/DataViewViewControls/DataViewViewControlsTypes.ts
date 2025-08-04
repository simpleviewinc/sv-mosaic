// import {
// 	DataViewProps,
// 	StateViewDef,
// 	SavedViewCallbacks,
// } from "../DataViewTypes";

import type { DataViewProps } from "../DataViewTypes";

export type DataViewViewControlsProps = Pick<DataViewProps,
	| "currentView"
	| "onViewList"
>;

export type DataViewViewButtonProps = Pick<DataViewProps,
	| "currentView"
	| "onViewList"
>

export type DataViewViewListWrapperProps = Pick<DataViewProps,
	| "currentView"
	| "onViewList"
>
