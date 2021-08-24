import { DataViewFilterProps } from "../DataView";
export interface FilterDateData {
    rangeStart?: Date;
    rangeEnd?: Date;
}
export interface FilterDateOnChange {
    (value: FilterDateData): void;
}
export interface FilterDateProps extends DataViewFilterProps {
    data: FilterDateData;
    onChange: FilterDateOnChange;
}
export interface FilterDateDropdownContentProps {
    rangeStart?: Date;
    rangeEnd?: Date;
    onChange: FilterDateOnChange;
    onClose: () => void;
}
