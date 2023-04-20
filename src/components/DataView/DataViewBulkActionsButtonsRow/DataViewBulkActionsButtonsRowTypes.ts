import { MosaicObject } from "@root/types"
import { DataViewBulkAction } from "../DataViewTypes"

export interface DataViewBulkActionsButtonsRowProps {
	bulkActions: DataViewBulkAction[]
	data: MosaicObject[]
	checked: boolean[]
	checkedAllPages: boolean
}
