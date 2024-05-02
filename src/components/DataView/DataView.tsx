import * as React from "react";
import { forwardRef, useEffect, useMemo, useRef, ReactElement } from "react";
import styled from "styled-components";

import DataViewTitleBar from "./DataViewTitleBar";
import theme from "@root/theme";
import { DataViewDisplayList, DataViewDisplayGrid } from "./DataViewDisplays";
import { DataViewProps, DataViewRowActions } from "./DataViewTypes";
import DataViewActionsRow from "./DataViewActionsRow";
import { getToggle, useWrappedToggle, wrapToggle } from "@root/utils/toggle";

const StyledWrapper = styled.div`
	font-family: ${theme.fontFamily};
	font-weight: 400;
	font-size: 14px;
	display: flex;
	flex-direction: column;

	& > .noResults {
		margin: 0px 20px;
	}

	& > .headerRow {
		display: flex;
		justify-content: space-between;
		align-items: center;
		-ms-flex: 0 0 auto;
		-webkit-flex: 0 0 auto;
		flex: 0 0 auto;
	}

	& > .headerActions {
		display: flex;
		flex-direction: column;
		padding: 8px 24px;
	}

	& > .headerActions .grid {
		border-bottom: 2px solid ${theme.newColors.grey2["100"]};
		padding-bottom: 8px;
	}

	& > .viewContainer {
		overflow: auto;
		padding: 0 24px;
	}

	&.loading {
		opacity: .5;
		pointer-events: none;
	}

	&.sticky {
		height: 100%;
	}
`;

const DataView = forwardRef<HTMLDivElement, DataViewProps>(function DataView (props, ref): ReactElement {
	/**
	 * Checks if a provided active filter is a
	 * valid filter based on the name.
	 */
	useEffect(() => {
		props?.activeFilters?.forEach(activeFilter => {
			const filterFound = props?.filters?.find(val => val.name === activeFilter);

			if (!filterFound) {
				throw new Error(`Active filter "${activeFilter}" is not a valid filter.`);
			}
		});
	}, [props.activeFilters, props.filters]);

	const { noResults = "No results were found." } = props;

	// set defaults
	const display = props.display || "list";
	const displayOptions = useMemo(() => props.displayOptions || [display], [display, props.displayOptions]);

	const displayControlEnabled = props.onDisplayChange !== undefined && displayOptions.length > 1;

	const bulkActions = useMemo(() => {
		if (!props.bulkActions) {
			return [];
		}

		return props.bulkActions.filter(action => {
			if (props.checkedAllPages) {
				return action.onAllClick;
			}

			return action.onClick;
		});
	}, [props.bulkActions, props.checkedAllPages]);

	const bulkActionsToggleCtx = useMemo(() => ({
		checkedAllPages: props.checkedAllPages,
		data: props.data.filter((_, i) => props.checked?.length > 0 && props.checked[i] === true),
	}), [
		props.checked,
		props.checkedAllPages,
		props.data,
	]);

	const shownBulkActions = useWrappedToggle(
		bulkActions,
		bulkActionsToggleCtx,
		"show",
		true,
	);

	const checkboxEnabled =
		props.checked !== undefined &&
		props.onCheckChange !== undefined
	;

	const onCheckAllClick = function() {
		const allChecked = props.checked.every(val => val === true);
		const checked = props.checked.map(() => !allChecked);
		props.onCheckChange(checked);
		props.onCheckAllPagesChange?.(false);
	};

	const onCheckboxClick = function(i: number) {
		const newChecked = [...props.checked];
		newChecked[i] = !newChecked[i];
		props.onCheckChange(newChecked);
		props.onCheckAllPagesChange?.(false);
	};

	const onCheckAllPagesClick = function() {
		// if the checkedAllPages was previously clicked we also uncheck all of the checkboxes
		const checked = props.checkedAllPages ? props.checked.map(() => false) : props.checked;
		props.onCheckChange?.(checked);
		props.onCheckAllPagesChange?.(!props.checkedAllPages);
	};

	useEffect(() => {
		if (!viewContainerRef.current || !viewContainerRef.current.scrollTo) {
			return;
		}

		viewContainerRef.current.scrollTo(0, 0);
	}, [
		props.limit,
		props.skip,
		props.display,
	]);

	const displayOptionsFull = useMemo(() => {
		return displayOptions.map(val => {
			if (val === "list") {
				return DataViewDisplayList;
			} else if (val === "grid") {
				return DataViewDisplayGrid;
			} else if (typeof val === "string") {
				throw new Error("Unknown view option");
			} else {
				return val;
			}
		});
	}, [displayOptions]);

	const activeDisplay = displayOptionsFull.find(val => val.name === display);
	if (activeDisplay === undefined) {
		throw new Error(`Display '${display}' is not valid in the passed displayOptions.`);
	}

	const Display = activeDisplay.component;

	const viewContainerRef = useRef(null);

	const activeColumns = useMemo(() => {
		return props.activeColumns || props.columns.map(val => val.name);
	}, [props.activeColumns, props.columns]);

	// generate an array of columns based on the ones that are marked active
	const activeColumnObjs = useMemo(() => {
		return activeColumns.map(name => {
			const column = props.columns.find(val => val.name === name);

			if (!column) {
				throw new Error(`Active column "${name}" is not defined in the columns list.`);
			}

			return column;
		});
	}, [activeColumns, props.columns]);

	const shouldRenderTitleBar: boolean = useMemo(() => {
		if (
			props.title ??
			props.buttons ??
			props.filters
		)
			return true;

		return false;
	}, [
		props.title,
		props.buttons,
		props.filters,
	]);

	const shouldRenderActionsRow: boolean = useMemo(() => {
		if (
			shownBulkActions.length > 0 ||
			props.limitOptions ||
			props.onColumnsChange ||
			props.onSortChange ||
			props.sort ||
			displayControlEnabled === true ||
			props.onLimitChange ||
			props.onSkipChange
		)
			return true;

		return false;
	}, [
		shownBulkActions,
		props.limitOptions,
		props.onColumnsChange,
		props.onSortChange,
		props.sort,
		displayControlEnabled,
		props.onLimitChange,
		props.onSkipChange,
	]);

	const allChecked = props.checked !== undefined && props.checked.length > 0 && props.checked.every(val => val === true);
	const anyChecked = props.checked !== undefined && props.checked.length > 0 && props.checked.some(val => val === true);

	// To show the bulkAll header we need bulkActions/rowCount/count, more rows than are visible, at least one registered onAllClick, and all checkboxes selected
	const showBulkAll =
		shownBulkActions?.length > 0 &&
		props.data.length > 0 &&
		props.count > props.data.length &&
		shownBulkActions.some(action => action.onAllClick !== undefined) &&
		allChecked &&
		props.checkedAllPages !== undefined &&
		props.onCheckAllPagesChange !== undefined
	;

	const actionsHidden = (props.checked || []).some(checked => checked);

	const rowActions = useMemo<DataViewRowActions>(() => {
		const primaryActions = props.primaryActions || [];
		const additionalActions = props.additionalActions || [];

		const rows = props.data.reduce<DataViewRowActions>((acc, curr) => ({
			...acc,
			[curr.id]: {
				// First, run through every row item and make it invisible
				// if it should not be shown.
				primary: primaryActions.map(action => {
					const shouldShow = getToggle(wrapToggle(action.show, { row: curr }, true));

					return {
						...action,
						invisible: display === "list" ? !shouldShow : false,
						show: display === "list" ? true : shouldShow,
					};
				}),
				additional: additionalActions.filter(action => getToggle(wrapToggle(action.show, { row: curr }, true))),
			},
		}), {});

		if (display === "grid") {
			return rows;
		}

		const rowKeys = Object.keys(rows);

		// Creates an array of booleans that denote the
		// indexes of primary actions and whether or not they
		// should be rendered. They should not be rendered if
		// they're invisible for every row in the set.
		const primaryActionShow = primaryActions.map((_, index) => {
			return rowKeys.some(key => !rows[key].primary[index].invisible);
		});

		// Now filter away any primary actions that should
		// not be shown based on primaryActionShow
		const result = rowKeys.reduce((acc, curr) => ({
			...acc,
			[curr]: {
				...rows[curr],
				primary: (rows[curr].primary || []).filter((_, i) => Boolean(primaryActionShow[i])),
			},
		}), {});

		return result;
	}, [props.data, props.additionalActions, props.primaryActions]);

	return (
		<StyledWrapper
			aria-busy={props.loading ? true : false}
			className={`
				${props.loading ? "loading" : ""}
				${props.sticky ? "sticky" : ""}
			`}
			ref={ref}
			{...(props.attrs || {})}
		>
			{
				shouldRenderTitleBar && (
					<div className="headerRow title">
						<DataViewTitleBar
							title={props.title}
							onBack={props.onBack}
							backLabel={props.backLabel}
							buttons={props.buttons}
							filter={props.filter}
							filters={props.filters}
							activeFilters={props.activeFilters}
							onActiveFiltersChange={props.onActiveFiltersChange}
							disabled={props.disabled}
						/>
					</div>
				)
			}
			{
				shouldRenderActionsRow && (
					<div className="headerActions">
						<DataViewActionsRow
							activeColumnObjs={activeColumnObjs}
							columns={props.columns}
							bulkActions={shownBulkActions}
							checked={props.checked}
							display={display}
							displayControlEnabled={displayControlEnabled}
							displayOptionsFull={displayOptionsFull}
							limit={props.limit}
							limitOptions={props.limitOptions}
							onLimitChange={props.onLimitChange}
							onDisplayChange={props.onDisplayChange}
							onSkipChange={props.onSkipChange}
							skip={props.skip}
							count={props.count}
							allColumns={props.columns}
							onColumnsChange={props.onColumnsChange}
							onCheckAllClick={checkboxEnabled ? onCheckAllClick : undefined}
							onSortChange={props.onSortChange}
							sort={props.sort}
							data={props.data}
							checkedAllPages={props.checkedAllPages}
							allChecked={allChecked}
							anyChecked={anyChecked}
							disabled={props.disabled}
						/>
					</div>
				)
			}
			<div
				ref={viewContainerRef}
				className={`
					viewContainer
				`}
			>
				<Display
					checked={props.checked}
					checkedAllPages={props.checkedAllPages}
					columns={props.columns}
					bulkActions={shownBulkActions}
					sort={props.sort}
					data={props.data}
					disabled={props.disabled}
					rowActions={rowActions}
					activeColumns={props.activeColumns}
					gridColumnsMap={props.gridColumnsMap}
					limit={props.limit}
					count={props.count}
					rowCount={props.data.length}
					activeColumnObjs={activeColumnObjs}
					onSortChange={props.onSortChange}
					onColumnsChange={props.onColumnsChange}
					onCheckAllClick={checkboxEnabled ? onCheckAllClick : undefined}
					onCheckboxClick={checkboxEnabled ? onCheckboxClick : undefined}
					onCheckAllPagesClick={onCheckAllPagesClick}
					onReorder={props.onReorder}
					showBulkAll={showBulkAll}
					allChecked={allChecked}
					anyChecked={anyChecked}
					actionsHidden={actionsHidden || undefined}
				/>
			</div>
			{!props.loading && !props.data.length && (
				typeof noResults === "string" ? (
					<div className="noResults">
						<p>{noResults}</p>
					</div>
				) : (
					noResults
				)
			)}
		</StyledWrapper>
	);
});

export default DataView;
