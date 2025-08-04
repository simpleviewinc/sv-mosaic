import type { MosaicLabelValue } from "@root/types";
import type { PageHeaderProps } from "../PageHeader";
import type { ReactNode } from "react";

export interface PickerPanelProps extends Pick<PageHeaderProps, "title" | "onBack" | "backLabel"> {
	className?: string;
	fullHeight?: boolean;
	optionsSubtitle?: string;
	options?: MosaicLabelValue[];
	checked?: MosaicLabelValue[];
	disabled?: boolean;
	activePanel?: ReactNode;
	onLoadMore?: () => void;
	onSave?: (options: MosaicLabelValue[]) => void;
	onCancel?: () => void;
	onCreateNew?: (value: string) => void;
	onChange?: (options: MosaicLabelValue[]) => void;
	onKeywordChange?: (keyword: string) => void;
	isLoading?: boolean;
	noOptions?: string;
	saveText?: string;
	rounded?: boolean;
}
