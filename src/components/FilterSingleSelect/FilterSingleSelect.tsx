import * as React from "react";
import { useState, useEffect, ReactElement } from "react";
import styled from "styled-components";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import FilterSingleSelectContent from "./FilterSingleSelectContent";
import MenuSelect from "../MenuSelect";

import { FilterSingleSelectProps, FilterSingleSelectState } from "./FilterSingleSelectTypes";

const StyledWrapper = styled.span``;

export default function FilterSingleSelect(props: FilterSingleSelectProps): ReactElement {
	const [state, setState] = useState<FilterSingleSelectState>({
		anchorEl : null,
		selected : undefined,
		options: []
	});

	if (props.args.required && !props.data.value) throw new Error("Invalid use-case, a value is required but none was provided")

	const value = props.data.value;

	useEffect(() => {
		async function fetchData() {
			const selected = await props.args.getSelected(value);
			const options = await props.args.getOptions();
			
			setState({
				...state,
				options : options.docs,
				selected
			});
		}

		fetchData();
	}, [props.data]);

	const onClick = function (evt) {
		setState({
			...state,
			anchorEl : evt.currentTarget
		})
	}

	const onClose = function () {
		setState({
			...state,
			anchorEl : null
		})
	}

	let valueString: string;
	if (state.selected !== undefined) {
		valueString = state.selected.label;
	}

	const onChange = function (value: string) {
		props.onChange({
			value : value === "" ? undefined : value
		});
		
		onClose();
	}

	return (
		<StyledWrapper>
			<DataViewPrimaryFilter
				label={props.label}
				value={valueString}
				type={props.type}
				onRemove={props.onRemove}
				onClick={onClick}
				color={props.args.color}
			/>
			
			<FilterSingleSelectContent
				onClose={onClose}
				anchorEl={state.anchorEl}
			>
				<MenuSelect
					placeholder={!props.required ? "Any..." : undefined}
					value={value}
					options={state.options}
					onChange={onChange}
				/>
			</FilterSingleSelectContent>
		</StyledWrapper>
	);
}
