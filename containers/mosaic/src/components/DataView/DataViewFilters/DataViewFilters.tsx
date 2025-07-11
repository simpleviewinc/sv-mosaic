import * as React from "react";
import { useState, useMemo } from "react";
import styled from "styled-components";
import pick from "lodash/pick";
import FilterListIcon from "@mui/icons-material/FilterList";
import DeleteIcon from "@mui/icons-material/Delete";

import testIds from "@root/utils/testIds";
import theme from "@root/theme";
import { useMosaicTranslation } from "@root/i18n";

import DataViewFilterDropdown from "../../DataViewFilterDropdown";
import { DataViewFilterMultiselectDropdownContent } from "@root/components/DataViewFilterMultiselect";
import Button from "../../Button";
import type { DataViewProps } from "../DataViewTypes";
import type { DataViewFiltersProps } from "./DataViewFiltersTypes";

const FiltersRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;

function DataViewFilters(props: DataViewFiltersProps) {
	const { t } = useMosaicTranslation();

	const [state, setState] = useState({
		anchorEl : null,
		dropdownOpen : false,
	});

	const activeFilters = useMemo(() => props.activeFilters || [], [props.activeFilters]);

	const active = activeFilters.map(activeFilter => props.filters.find(filter => filter.name === activeFilter));
	const options = props.filters
		.map((val) => ({ label: val.label, value: val.name }))
		.sort((a, b) => a.label.localeCompare(b.label));

	const optionsSelected = useMemo(() => {
		return activeFilters
			.map(value => options.find(option => option.value === value))
			.filter(Boolean);
	}, [options, activeFilters]);

	const onClick = (event) => {
		setState({
			...state,
			anchorEl : event.currentTarget,
		});
	};

	const onClose = () => {
		setState({
			...state,
			anchorEl : null,
		});
	};

	const onEntered = () => {
		setState({
			...state,
			dropdownOpen : true,
		});
	};

	const onExited = function() {
		setState({
			...state,
			dropdownOpen : false,
		});
	};

	const onActiveFiltersChange = function(activeFiltersParam: { value: DataViewProps["activeFilters"]; comparison?: string }) {
		const cleanFilter = Object.fromEntries(Object.entries(props.filter).filter(value => value[1]));
		const filter = pick(cleanFilter, [...activeFiltersParam.value]);

		// we only want to pass a new filter obj if we have actually removed a key from it, to prevent unnecessary re-fetches of data
		const setFilter = Object.keys(filter).join(",") !== Object.keys(cleanFilter).join(",");

		props.onActiveFiltersChange({
			activeFilters: activeFiltersParam.value,
			filter : setFilter === true ? filter : props.filter,
		});

		onClose();
	};

	const getOptions = (filter) => {
		const regex = new RegExp(filter.keyword, "i");
		const results = options.filter((option) => option.label.match(regex));

		return {
			docs: results,
			hasMore: false,
		};
	};

	const onClearFilters = () => {
		active.forEach(activeFilter => {
			if (props.filter[activeFilter.name] !== undefined)
				activeFilter.onChange(undefined);
		});
	};

	const onChange = (value, filter) => {
		if (value !== undefined || props.filter[filter.name]) {
			filter.onChange(value);
		}

		return onClose();
	};

	return (
		<div
			data-testid={testIds.DATA_VIEW_FILTERS}
			className="filterRow"
		>
			{
				props?.filters?.length > 0 && (
					<FiltersRow data-testid={testIds.DATA_VIEW_FILTER_BAR}>
						<Button
							label={t("mosaic:DataView.filters")}
							variant="contained"
							intent="secondary"
							size="small"
							iconPosition="left"
							mIcon={FilterListIcon}
							mIconColor={theme.newColors.almostBlack["100"]}
							onClick={onClick}
						/>
						<DataViewFilterDropdown
							anchorEl={state.anchorEl}
							onClose={onClose}
							onEntered={onEntered}
							onExited={onExited}
						>
							<DataViewFilterMultiselectDropdownContent
								comparison=""
								selected={optionsSelected}
								getOptions={getOptions}
								isOpen={state.dropdownOpen}
								onApply={onActiveFiltersChange}
							/>
						</DataViewFilterDropdown>
						{
							active?.length > 0 && (
								<>
									{
										active.map(filter => {
											const Component = filter.component;
											return (
												<Component
													key={filter.name}
													label={filter.label}
													args={filter.args || {}}
													data={props.filter[filter.name] || {}}
													onChange={value => onChange(value, filter)}
												/>
											);
										})
									}
								</>
							)
						}
						{
							active?.length > 0 && (
								<Button
									label={t("mosaic:DataView.clear_filters")}
									variant="text"
									size="small"
									intent="secondary"
									mIcon={DeleteIcon}
									onClick={onClearFilters}
								/>
							)
						}
					</FiltersRow>
				)
			}
		</div>
	);
}

export default DataViewFilters;
