import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import DataViewTr from "./DataViewTr";
import theme from "@root/theme";
// import { MosaicObject } from "@root/types";
// import { DataViewAction, DataViewAdditionalAction } from "./DataViewTypes";

const StyledTBody = styled.tbody`
	& > tr {
		border-bottom: ${theme.borders.lightGray};
	}

	& > tr > td {
		padding: 5px 0px;
	}

	& > tr > td.bold {
		font-weight: 600;
	}

	& > tr > td > div > .transform_thumbnail {
		display: block;
	}
`

interface DataViewTBodyProps {
	onCheckboxClick?: any;
	transformedData?: any;
	data?: any;
	bulkActions?: any;
	primaryActions?: any;
	additionalActions?: any;
	checked?: any;
	columns?: any;
}
// interface DataViewTBodyProps {
// 	onCheckboxClick?: any;
// 	transformedData?: any;
// 	data?: {
// 		[x: string]: MosaicObject;
// 	};
// 	bulkActions?: any;
// 	primaryActions?: DataViewAction[];
// 	additionalActions?: DataViewAdditionalAction[];
// 	checked?: {
// 		[x: string]: boolean;
// 	};
// 	columns?: any;
// }

function DataViewTBody(props: DataViewTBodyProps) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "checked",
				type : "array",
				required : true
			},
			{
				name : "columns",
				type : "array",
				required : true
			},
			{
				name : "data",
				type : "array",
				required : true
			},
			{
				name : "transformedData",
				type : "array",
				required : true
			},
			{
				name : "primaryActions",
				type : "array"
			},
			{
				name : "additionalActions",
				type : "array"
			},
			{
				name : "bulkActions",
				type : "array"
			},
			{
				name : "onCheckboxClick",
				type : "function",
				required : true
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});

	const onCheckboxClick = (i) => () => {
		props.onCheckboxClick(i);
	}

	return (
		<StyledTBody>
			{
				props.transformedData.map((row, i) => {
					return (
						<DataViewTr
							key={i}
							row={row}
							originalRowData={props.data[i]}
							bulkActions={props.bulkActions}
							primaryActions={props.primaryActions}
							additionalActions={props.additionalActions}
							onCheckboxClick={onCheckboxClick(i)}
							checked={props.checked[i]}
							columns={props.columns}
						/>
					)
				})
			}
		</StyledTBody>
	)
}

export default DataViewTBody;
