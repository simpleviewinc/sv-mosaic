import * as React from "react";
import { useState, useEffect  } from "react";
import styled from "styled-components";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import FilterSingleSelectContent from "./FilterSingleSelectContent";
import MenuSelect from "../MenuSelect";

import { FilterSingleSelectProps } from "./FilterSingleSelectTypes";

const StyledWrapper = styled.span``;

export default function FilterSingleSelect(props: FilterSingleSelectProps) {
	const [anchorEl, setAnchorEl] = useState(null);

	const [state, setState] = useState({
		options: []
	});

	useEffect(() => {
		async function fetchData() {
			const options = await props.args.getOptions({});
			setState({
				...state,
				options: options,
			});
		}

		fetchData();
	}, []);

	const onClick = function (evt) {
		setAnchorEl(evt.currentTarget);
	}

	const onClose = function () {
		setAnchorEl(null);
	}

	let valueString = "any";
	if (props.data.label !== undefined) {
		valueString = props.data.label;
	}

	const onChange = function (value) {
		let option = {
			value : undefined,
			label : "any"
		}

		if(value !== ''){
			option = state.options.find(option => {
				return option.value === value
			});
		}

		props.onChange({
			value : option.value,
			label: option.label
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
			/>
			
			<FilterSingleSelectContent
				onClose={onClose}
				anchorEl={anchorEl}
				options={<MenuSelect
					placeholder="any"
					value={props.data.value}
					options={state.options}
					onChange={onChange}
				/>}
			/>
		</StyledWrapper>
	);
}