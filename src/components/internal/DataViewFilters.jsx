import * as React from "react";
import styled from "styled-components";
import { pick, xor } from "lodash";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from "../Button";
import CheckboxList from "../CheckboxList.jsx";
import theme from "../../utils/theme.js";
import { useMosaicTranslation } from "@root/i18n";

const StyledDiv = styled.div`
	margin-bottom: -4px;

	& > .filterRow {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	& > .filterRow > * {
		margin-right: 4px;
		margin-bottom: 4px;
	}
`;

const PopoverDiv = styled.div`
	&.loading {
		opacity: .5;
		pointer-events: none;
	}
`

function DataViewFilters(props) {
	const { t } = useMosaicTranslation();

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
				{
					optionalFilters.length > 0 &&
					<Button
						label={t("mosaic:DataView.more")}
						variant="text"
						color="black"
						size="small"
						iconPosition="right"
						mIcon={ExpandMoreIcon}
						mIconColor={theme.colors.gray600}
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
				}
			</div>
			{
				active.length > 0 &&
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
			}
		</StyledDiv>
	)
}

export default DataViewFilters;