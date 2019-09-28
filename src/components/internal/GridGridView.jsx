import React from "react";
import styled from "styled-components";

import ButtonRow from "../ButtonRow.jsx";
import Button from "../Button.jsx";
import { transformColumn } from "../../utils/gridTools.js";
import theme from "../../utils/theme.js";

const StyledDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-column-gap: 8px;
	grid-row-gap: 20px;
	
	& > .cell {
		min-width: 0;
	}
	
	& > .cell > img {
		max-width: 100%;
		min-width: 100%;
	}
	
	& > .cell h2 {
		margin: 0;
		font-size: 14px;
		font-weight: normal;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	& > .cell h3 {
		margin: 0;
		font-weight: normal;
		font-size: 12px;
		color: ${theme.colors.lightGray};
	}
	
	& > .cell .info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 100%;
	}
`

function GridGridView(props) {
	const imageColumn = props.columns.find(val => val.name === "image");
	const primaryColumn = props.columns.find(val => val.name === "primary");
	const secondaryColumn = props.columns.find(val => val.name === "secondary");
	
	const actionClick = (action, row) => () => {
		props.onActionClick(action, row);
	}
	
	return (
		<StyledDiv>
			{
				props.data.map(row => {
					return (
						<div
							className="cell"
							key={row.id}
						>
							{transformColumn(row, imageColumn)}
							<div className="info">
								<div className="left">
									<h2>{transformColumn(row, primaryColumn)}</h2>
									<h3>{transformColumn(row, secondaryColumn)}</h3>
								</div>
								<div className="right">
									<ButtonRow>
										{
											props.primaryActions && 
											props.primaryActions.map((action, i) => {
												return (
													<Button
														key={`primary_{i}`}
														{ ...action }
														onClick={actionClick(action, row)}
													/>
												)
											})
										}
									</ButtonRow>
								</div>
							</div>
						</div>
					)
				})
			}
		</StyledDiv>
	)
}

export default GridGridView;