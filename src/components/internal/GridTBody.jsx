import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import GridTr from "./GridTr.jsx";
import theme from "../../utils/theme.js";

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
	
	& > tr > td > .transform_thumbnail {
		display: block;
	}
	
	& > tr > td:last-child {
		text-align: right;
	}
`

function GridTBody(props) {
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
				name : "onActionClick",
				type : "function",
				required : true
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
				props.data.map((row, i) => {
					return (
						<GridTr
							key={row.id || i}
							row={row}
							bulkActions={props.bulkActions}
							primaryActions={props.primaryActions}
							additionalActions={props.additionalActions}
							onActionClick={props.onActionClick}
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

export default GridTBody;