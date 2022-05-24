/// <reference types="react" />
import { DataViewFilterProps } from "../DataView";
import { MosaicLabelValue } from "../../types";
export interface FilterSingleSelectData {
    value: string;
}
export interface FilterSingleSelectProps extends DataViewFilterProps {
    data: FilterSingleSelectData;
    onChange(value: FilterSingleSelectData): void;
    args: {
        getOptions(): {
            docs: MosaicLabelValue[];
            hasMore?: boolean;
        };
        getSelected(id: string): MosaicLabelValue;
    };
}
export interface FilterSingleSelectContentProps {
    onClose: () => void;
    anchorEl?: HTMLElement;
    children: React.ReactNode;
}
export interface FilterSingleSelectState {
    anchorEl: HTMLElement;
    selected: MosaicLabelValue | undefined;
    options: MosaicLabelValue[];
}
