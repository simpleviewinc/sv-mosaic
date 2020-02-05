// This file declares some types that are re-used throughout the DataView system

export interface DataViewColumnTransform {
	(data: any): any
}

export interface DataViewColumn {
	/** The name of the column */
	name: string
	/** The column from the passed RowData it will display in this column. Defaults to `column.name`. */
	column?: string
	transforms: DataViewColumnTransform[]
}