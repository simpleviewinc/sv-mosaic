import { DataViewFilterProps } from "../DataView";

export interface FilterSingleSelectData {
    value: string,
    label: string
}

export interface FilterSingleSelectArgs {
    getOptions: FilterSingleSelectGetOptions
}

export interface FilterSingleSelectOption {
    label : string,
    value : string
}

export interface FilterSingleSelectGetOptions {
    ( filter: object ) : [FilterSingleSelectOption]
}

export interface FilterSingleSelectOnChange {
    ( value: FilterSingleSelectData ): void
}

export interface FilterSingleSelectProps extends DataViewFilterProps {
    data: FilterSingleSelectData,
    onChange: FilterSingleSelectOnChange,
    args: FilterSingleSelectArgs
}

export interface FilterSingleSelectDropdownContentProps {
    value: string,
    label: string,
    getOptions: FilterSingleSelectGetOptions,
    onChange: FilterSingleSelectOnChange,
    onClose: () => void
}