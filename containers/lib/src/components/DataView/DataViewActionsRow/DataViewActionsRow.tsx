import * as React from "react";
import { ReactElement, useMemo } from "react";
import DataViewColumnControl from "../DataViewColumnControl";
import DataViewControlDisplay from "../DataViewControlDisplay";
import DataViewControlLimit from "../DataViewLimit";
import DataViewPager from "../DataViewPager";
import { DataViewActionsRowWrapper, LeftControlsContainer } from "./DataViewActionsRow.styled";
import { DataViewActionsRowProps } from "./DataViewActionsRowTypes";
import Checkbox from "../../Checkbox";
import DataViewBulkActionsButtonsRow from "../DataViewBulkActionsButtonsRow";
import DataViewDisplayGridSortControl from "../DataViewDisplayGridSortControl";
import ButtonRow from "@root/components/ButtonRow/ButtonRow";

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
		<DataViewActionsRowWrapper className={`${display}`}>
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
			<ButtonRow separator>
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
				{onLimitChange !== undefined && (
					<DataViewControlLimit
						limit={limit}
						options={limitOptionsValue}
						onLimitChange={onLimitChange}
					/>
				)}
				{onSkipChange !== undefined && (
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
