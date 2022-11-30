import * as React from "react";
import { ReactElement, useMemo } from "react";
import DataViewColumnControl from "../DataViewColumnControl";
import DataViewControlDisplay from "../DataViewControlDisplay";
import DataViewControlLimit from "../DataViewLimit";
import DataViewPager from "../DataViewPager";
import { DataViewActionsRowWrapper } from "./DataViewActionsRow.styled";
import { DataViewActionsRowProps } from "./DataViewActionsRowTypes";

const DataViewActionsRow = (props: DataViewActionsRowProps): ReactElement => {
	const {
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
		allColumns
	} = props;

	const limitOptionsValue = useMemo(() => {
		return limitOptions || [25, 50, 100];
	}, [limitOptions]);

	return (
		<DataViewActionsRowWrapper>
			{onColumnsChange !== undefined && display === "list" && (
				<DataViewColumnControl
					onChange={onColumnsChange}
					columns={activeColumnObjs}
					allColumns={allColumns}
				/>
			)}
			<div>
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
			</div>
		</DataViewActionsRowWrapper>
	);
};

export default DataViewActionsRow;
