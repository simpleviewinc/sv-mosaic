import type { ReactElement } from "react";

import React, { useMemo } from "react";

import type { DataViewActionsRowProps } from "./DataViewActionsRowTypes";

import ButtonRow from "@root/components/ButtonRow/ButtonRow";
import DataViewColumnControl from "../DataViewColumnControl";
import DataViewControlDisplay from "../DataViewControlDisplay";
import DataViewControlLimit from "../DataViewLimit";
import DataViewPager from "../DataViewPager";
import { DataViewActionsRowWrapper, LeftControlsContainer } from "./DataViewActionsRow.styled";
import Checkbox from "../../Checkbox";
import DataViewBulkActionsButtonsRow from "../DataViewBulkActionsButtonsRow";
import DataViewDisplayGridSortControl from "../DataViewDisplayGridSortControl";
import testIds from "@root/utils/testIds";

const DataViewActionsRow = (props: DataViewActionsRowProps): ReactElement => {
	const {
		bulkActions,
		columns,
		checked,
		display,
		displayControlEnabled,
		displayOptionsFull,
		limit,
		limitOptions,
		onLimitChange,
		onDisplayChange,
		onSkipChange,
		skip,
		count,
		onColumnsChange,
		activeColumnObjs,
		allColumns,
		onCheckAllClick,
		onSortChange,
		sort,
		allChecked,
		anyChecked,
	} = props;

	const limitOptionsValue = useMemo(() => {
		return limitOptions || [25, 50, 100];
	}, [limitOptions]);

	const hasSortControl = onSortChange !== undefined && sort !== undefined;

	return (
		<DataViewActionsRowWrapper
			className={`${display}`}
			data-testid={testIds.DATA_VIEW_ACTIONS_ROW}
		>
			{
				display === "grid" && (
					<LeftControlsContainer>
						{onCheckAllClick && (
							<Checkbox
								checked={allChecked}
								indeterminate={!allChecked && anyChecked}
								onClick={onCheckAllClick}
								disabled={props.disabled}
							/>
						)}
						{
							anyChecked && (
								<DataViewBulkActionsButtonsRow
									data={props.data}
									checked={checked}
									bulkActions={bulkActions}
									checkedAllPages={props.checkedAllPages}
								/>
							)
						}
					</LeftControlsContainer>
				)
			}
			{onColumnsChange !== undefined && display === "list" && (
				<DataViewColumnControl
					onChange={onColumnsChange}
					columns={activeColumnObjs}
					allColumns={allColumns}
				/>
			)}
			<ButtonRow>
				{
					hasSortControl && display === "grid" && (
						<DataViewDisplayGridSortControl
							columns={columns}
							sort={sort}
							onSortChange={onSortChange}
						/>
					)
				}
				{displayControlEnabled && (
					<DataViewControlDisplay
						display={display}
						displayOptions={displayOptionsFull}
						onDisplayChange={onDisplayChange}
					/>
				)}
				{onLimitChange !== undefined && limit !== undefined && (
					<DataViewControlLimit
						limit={limit}
						options={limitOptionsValue}
						onLimitChange={onLimitChange}
					/>
				)}
				{onSkipChange !== undefined && skip !== undefined && limit !== undefined && count !== undefined && (
					<DataViewPager
						limit={limit}
						skip={skip}
						count={count}
						onSkipChange={onSkipChange}
					/>
				)}
			</ButtonRow>
		</DataViewActionsRowWrapper>
	);
};

export default DataViewActionsRow;
