import React, { useState } from "react";
import styled from "styled-components";
import { pick, xor } from "lodash";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from "../Button.jsx";
import CheckboxList from "../CheckboxList.jsx";
import theme from "../../utils/theme.js";

const StyledDiv = styled.div`
	& > .filterRow {
		display: flex;
		align-items: center;
	}
	
	& > .filterRow > * {
		margin-right: 5px;
	}
`;

const PopoverDiv = styled.div`
	&.loading {
		opacity: .5;
		pointer-events: none;
	}
`

function DataViewFilters(props) {
	const activeFilters = props.activeFilters || [];
	
	const primaryFilters = props.filters.filter(val => val.type === "primary");
	const primaryFilterNames = primaryFilters.map(val => val.name);
	const optionalFilters = props.filters.filter(val => val.type !== "primary");
	
	const active = optionalFilters.filter(val => activeFilters.includes(val.name));
	const options = optionalFilters.map(val => ({ label : val.label, value : val.name }));
	
	const onRemove = (name) => () => {
		const activeFilters = xor(props.activeFilters, [name]);
		onActiveFiltersChange(activeFilters);
	}
	
	const onActiveFiltersChange = function(activeFilters) {
		const filter = pick(props.filter, [...primaryFilterNames, ...activeFilters]);
		
		// we only want to pass a new filter obj if we have actually removed a key from it, to prevent unnecessary re-fetches of data
		const setFilter = Object.keys(filter).join(",") !== Object.keys(props.filter).join(",");
		
		props.onActiveFiltersChange({
			activeFilters,
			filter : setFilter === true ? filter : props.filter
		});
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
						<PopoverDiv
							className={`
								${ props.loading ? "loading" : "" }
							`}
						>
							<CheckboxList
								options={options}
								checked={activeFilters}
								onChange={onActiveFiltersChange}
							/>
						</PopoverDiv>
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

export default DataViewFilters;