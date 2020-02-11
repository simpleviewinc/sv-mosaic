export interface FilterDateData {
	rangeStart?: Date,
	rangeEnd?: Date
}

export interface FilterDateOnChange {
	(value: FilterDateData): void
}

export interface FilterDateProps {
	label: string
	data: FilterDateData,
	type: string
	onRemove: () => void
	onChange: FilterDateOnChange
}

export interface FilterDateDropdownContentProps {
	rangeStart?: Date
	rangeEnd?: Date
	onChange: FilterDateOnChange
	onClose: () => void
}