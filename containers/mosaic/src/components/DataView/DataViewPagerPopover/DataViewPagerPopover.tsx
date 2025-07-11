import React, { useCallback, useMemo } from "react";
import { useContext, memo } from "react";

import type { DataViewPagerPopoverProps } from "./DataViewPagerPopoverTypes";
import type { FieldDef } from "@root/components/Field/FieldTypes";

import { useForm } from "@root/components/Form/useForm/useForm";
import Form from "@root/components/Form";
import { StyledFormFooter, StyledFormFooterButton } from "@root/components/Form/Form.styled";
import { ButtonPopoverContext } from "@root/components/Button";

const autoFocusOptions = {
	selectAll: true,
};

function DataViewPagerPopover({
	currentPage,
	limit,
	onSkipChange,
	totalPages,
}: DataViewPagerPopoverProps) {
	const { onClose } = useContext(ButtonPopoverContext);
	const controller = useForm({ data: { page: currentPage } });
	const { handleSubmit } = controller;

	const fields = useMemo<FieldDef[]>(() => [
		{
			name: "page",
			label: "Page",
			type: "number",
			required: true,
			inputSettings: {
				suffix: `of ${totalPages}`,
				decimalPlaces: 0,
				sign: "positive",
			},
			validators: [{ fn: "validateNumberRange", options: { maxNum: totalPages, minNum: 1 } }],
		},
	], [totalPages]);

	const onSubmit = handleSubmit(useCallback(({ data: { page } }) => {
		onSkipChange({ skip : (Number(page) - 1) * limit });
		onClose();
	}, [limit, onClose, onSkipChange]));

	return (
		<div style={{ width: 200 }}>
			<Form
				{...controller}
				autoFocus={autoFocusOptions}
				fields={fields}
				spacing="compact"
				onSubmit={onSubmit}
				bottomSlot={(
					<StyledFormFooter $spacing="compact">
						<StyledFormFooterButton
							intent="secondary"
							variant="contained"
							label="Cancel"
							$push="right"
							onClick={onClose}
						/>
						<StyledFormFooterButton
							intent="primary"
							variant="contained"
							label="Go"
							type="submit"
						/>
					</StyledFormFooter>
				)}
			/>
		</div>
	);
}

export default memo(DataViewPagerPopover);
