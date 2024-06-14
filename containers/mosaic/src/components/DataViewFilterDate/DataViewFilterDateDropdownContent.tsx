import * as React from "react";
import { useState, useCallback, useMemo, ReactElement } from "react";
import styled from "styled-components";

import DataViewFilterDropdownButtons from "../DataViewFilterDropdownButtons";
import { DataViewFilterDateDropdownContentProps } from "./DataViewFilterDateTypes";
import MenuItem from "../MenuItem";
import type { FieldDef } from "../Field";
import Form, { SectionDef, useForm } from "../Form";
import theme, { BREAKPOINTS } from "@root/theme/theme";
import { VALIDATE_DATE_RANGE } from "../Form/validators";

const StyledMainContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${BREAKPOINTS.sm};

	& > div .inputRow {
		display: flex;
		align-items: center;
	}
`;

const StyledFilterDate = styled.div`
	display: flex;
	flex-direction: row;
`;

const StyledLeft = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledLeftOptions = styled.ul`
	border-right: 2px solid ${theme.newColors.grey2[100]};
	margin: 0;
	padding: 0;
	flex: 1 1 0%;
	min-height: 0;
	max-width: 130px;
	max-height: 284px;
	overflow-y: auto;
`;

const StyledFooter = styled.div`
	border-top: 2px solid ${theme.newColors.grey2[100]};
`;

const sections: SectionDef[] = [
	{
		fields: [[["rangeStart"], ["rangeEnd"]]],
		gridMinWidth: BREAKPOINTS.sm,
	},
];

export default function DataViewFilterDateDropdownContent(props: DataViewFilterDateDropdownContentProps): ReactElement {
	const controller = useForm();
	const { state, methods: { setFormValues } } = controller;
	const { rangeStart, rangeEnd } = state.data;

	const [selectedOption, setSelectedOption] = useState("selectedOption" in props ? props.selectedOption : undefined);

	const getFormValues = useCallback(async () => {
		if (
			!("rangeStart" in props) ||
			!("rangeEnd" in props)
		) {
			return;
		}

		return {
			rangeStart: props.rangeStart,
			rangeEnd: props.rangeEnd,
		};
	}, [props]);

	const fields = useMemo<FieldDef[]>(() => [
		{
			name: "rangeStart",
			type: "date",
			label: "From",
			size: "full",
			inputSettings: {
				fixedTime: [0, 0, 0, 0],
				maxDate: rangeEnd,
			},
			validators: [
				{ fn: VALIDATE_DATE_RANGE, options: { endDateName: "rangeEnd" } },
			],
			validates: ["rangeEnd"],
		},
		{
			name: "rangeEnd",
			type: "date",
			label: "To",
			size: "full",
			inputSettings: {
				fixedTime: [23, 59, 59, 999],
				minDate: rangeStart,
			},
			validators: [
				{ fn: VALIDATE_DATE_RANGE, options: { startDateName: "rangeStart" } },
			],
			validates: ["rangeStart"],
		},
	], [rangeEnd, rangeStart]);

	const onOptionSelect = useCallback((optionValue: string) => {
		props.onChange({ option: optionValue });
		props.onClose();
	}, [props.onChange, props.onClose]);

	const onClear = useCallback(() => {
		setFormValues({
			values: {
				rangeStart : undefined,
				rangeEnd : undefined,
			},
		});

		setSelectedOption(undefined);
	}, [setFormValues]);

	const onApply = useCallback(() => {
		if (!rangeStart && !rangeEnd) {
			props.onChange(undefined);
		} else {
			props.onChange({
				rangeStart,
				rangeEnd,
			});
		}

		props.onClose();
	}, [props.onChange, props.onClose, rangeStart, rangeEnd]);

	const disableApply = Object.values(state.errors).filter(Boolean).length > 0;

	return (
		<StyledFilterDate data-testid="dataview-filter-date-dropdown-content">
			{"options" in props && props.options && (
				<StyledLeft>
					<StyledLeftOptions data-testid="dataview-filter-date-options-list">
						{props.options.map(option => (
							<MenuItem
								key={option.value}
								label={option.label}
								selected={selectedOption === option.value}
								color="blue"
								onClick={() => onOptionSelect(option.value)}
								truncateText
								title
							/>
						))}
					</StyledLeftOptions>
				</StyledLeft>
			)}
			<StyledMainContent>
				<div data-testid="dataview-filter-date-inputs">
					<Form
						{...controller}
						fields={fields}
						sections={sections}
						fullHeight={false}
						spacing="compact"
						getFormValues={getFormValues}
					/>
				</div>
				<StyledFooter>
					<DataViewFilterDropdownButtons onApply={onApply} onClear={onClear} disableApply={disableApply} />
				</StyledFooter>
			</StyledMainContent>
		</StyledFilterDate>
	);
}
