import * as React from "react";
import type { ReactElement } from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";

import type { DataViewFilterSingleSelectProps, DataViewFilterSingleSelectState } from "./DataViewFilterSingleSelectTypes";
import Menu from "../Menu";
import Badge from "../Badge";

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
		async function fetchData() {
			const selected = await props.args.getSelected(value);
			const options = await props.args.getOptions();

			setState({
				...state,
				options : options.docs,
				selected,
			});
		}

		fetchData();
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
				value={(state.selected && <Badge>{state.selected.label}</Badge>)}
				onClick={onClick}
			/>
			<Menu
				onClose={onClose}
				anchorEl={state.anchorEl}
				open={Boolean(state.anchorEl)}
				items={state.options}
				onChange={onChange}
				value={value}
				placeholder={!props.args?.required ? "Any..." : undefined}
			/>
		</StyledWrapper>
	);
}
