import React, { useState } from "react";
import styled from "styled-components";
import { xor } from "lodash";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from "../Button.jsx";
import CheckboxList from "../CheckboxList.jsx";
import theme from "../../utils/theme.js";

const StyledDiv = styled.div`
	& {
		margin-bottom: 1em;
	}
	
	& > .filterRow {
		display: flex;
		align-items: center;
	}
	
	& > .filterRow > * {
		margin-right: 5px;
	}
`;

function GridFilters(props) {
	const activeFilters = props.activeFilters || [];
	
	const primaryFilters = props.filters.filter(val => val.type === "primary");
	const optionalFilters = props.filters.filter(val => val.type !== "primary");
	
	const active = optionalFilters.filter(val => activeFilters.includes(val.name));
	const options = optionalFilters.map(val => ({ label : val.label, value : val.name }));
	
	const onRemove = (name) => () => {
		props.onActiveFiltersChange(xor(props.activeFilters, [name]));
	}
	
	return (
		<StyledDiv>
			<div className="filterRow">
				{
					primaryFilters.map(filter => {
						const Component = filter.component;
						
						return (
							<Component
								key={filter.name}
								label={filter.label}
								type={filter.type}
								args={filter.args || {}}
								data={props.filter[filter.name] || {}}
								onRemove={onRemove(filter.name)}
								onChange={filter.onChange}
							/>
						)
					})
				}
				<Button
					label="More"
					variant="text"
					color="gray"
					iconPosition="right"
					mIcon={ExpandMoreIcon}
					popover={
						<CheckboxList
							options={options}
							checked={activeFilters}
							onChange={props.onActiveFiltersChange}
						/>
					}
				/>
			</div>
			<div className="filterRow optionalFilters">
				{
					active.map(filter => {
						const Component = filter.component;
						
						return (
							<Component
								key={filter.name}
								label={filter.label}
								type={filter.type}
								args={filter.args || {}}
								data={props.filter[filter.name] || {}}
								onRemove={onRemove(filter.name)}
								onChange={filter.onChange}
							/>
						)
					})
				}
			</div>
		</StyledDiv>
	)
}

export default GridFilters;