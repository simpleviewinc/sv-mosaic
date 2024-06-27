import * as React from "react";
import { useState, useEffect, ReactElement } from "react";
import styled from "styled-components";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import DataViewFilterSingleSelectContent from "./DataViewFilterSingleSelectContent";
import MenuSelect from "../MenuSelect";

import { DataViewFilterSingleSelectProps, DataViewFilterSingleSelectState } from "./DataViewFilterSingleSelectTypes";

const StyledWrapper = styled.span``;

export default function DataViewFilterSingleSelect(props: DataViewFilterSingleSelectProps): ReactElement {
	const [state, setState] = useState<DataViewFilterSingleSelectState>({
		anchorEl : null,
		selected : undefined,
		options: [],
	});

	if (props.args.required && !props.data.value) throw new Error("Invalid use-case, a value is required but none was provided");

	const value = props.data?.value;

	useEffect(() => {
		let isMounted = true;
		async function fetchData() {
			const selected = await props.args.getSelected(value);
			const options = await props.args.getOptions();

			setState({
				...state,
				options : options.docs,
				selected,
			});
		}

		if (isMounted) {
			fetchData();
		}

		return () => {
			isMounted = false;
		};
	}, [props.data]);

	const onClick = function (evt) {
		setState({
			...state,
			anchorEl : evt.currentTarget,
		});
	};

	const onClose = function () {
		setState({
			...state,
			anchorEl : null,
		});
	};

	let valueString: string;
	if (state.selected !== undefined) {
		valueString = state.selected.label;
	}

	const onChange = function (value: string) {
		if (value === "" || value === undefined) {
			props.onChange(undefined);
		} else {
			props.onChange({
				value : value,
			});
		}
		onClose();
	};

	return (
		<StyledWrapper>
			<DataViewPrimaryFilter
				label={props.label}
				value={valueString}
				onClick={onClick}
			/>
			<DataViewFilterSingleSelectContent
				onClose={onClose}
				anchorEl={state.anchorEl}
			>
				<MenuSelect
					placeholder={!props.args?.required ? "Any..." : undefined}
					value={value}
					options={state.options}
					onChange={onChange}
				/>
			</DataViewFilterSingleSelectContent>
		</StyledWrapper>
	);
}
