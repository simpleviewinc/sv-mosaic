import type { ButtonProps } from "@simpleview/sv-mosaic/components/Button";
import type { DataViewAction, DataViewBulkAction, DataViewRowData } from "@simpleview/sv-mosaic/components/DataView";

const action: DataViewAction = {
	name: "edit",
	variant: "contained",
	onClick: ({ data }) => { const row: DataViewRowData = data; return void row; },
	show: ({ row }) => Boolean(row.id),
	disabled: [false, ({ row }) => Boolean(row.accountArchived)],
	tooltip: ({ row }) => row.accountArchived ? "This account is archived" : "Edit",
};

const staticAction: DataViewAction = { ...action, disabled: false, tooltip: "Edit" };
const noArgsAction: DataViewAction = { ...action, disabled: () => false };
const optionalTooltip: DataViewAction = { ...action, tooltip: () => undefined };
declare const element: Exclude<ButtonProps["tooltip"], string>;
const elementAction: DataViewAction = { ...action, tooltip: element };
const elementCallback: DataViewAction = { ...action, tooltip: () => element };

const bulkAction: DataViewBulkAction = {
	name: "bulk-edit",
	variant: "contained",
	disabled: [false, () => true],
	tooltip: "Edit selected accounts",
	onClick: ({ data }) => { const rows: DataViewRowData[] = data; return void rows; },
};

const invalidBulkDisabled: DataViewBulkAction = {
	...bulkAction,
	// @ts-expect-error Bulk actions do not supply an individual row to disabled callbacks.
	disabled: ({ row }: { row: DataViewRowData }) => Boolean(row.accountArchived),
};
const invalidBulkTooltip: DataViewBulkAction = {
	...bulkAction,
	// @ts-expect-error Bulk tooltips retain the Button static content contract.
	tooltip: () => "Edit selected accounts",
};
const invalidTooltip: DataViewAction = {
	...action,
	// @ts-expect-error Tooltip callbacks must return supported Button tooltip content.
	tooltip: () => 123,
};

void [staticAction, noArgsAction, optionalTooltip, elementAction, elementCallback, bulkAction, invalidBulkDisabled, invalidBulkTooltip, invalidTooltip];
