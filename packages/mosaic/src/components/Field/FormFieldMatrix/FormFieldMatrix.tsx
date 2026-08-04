import * as React from "react";
import type { ReactElement } from "react";
import { memo } from "react";

import type { MosaicFieldProps } from "@root/components/Field";
import { MatrixActions, MatrixWrapper } from "./FormFieldMatrix.styled";
import Button from "@root/components/Button";
import DataView from "@root/components/DataView";
import type { MatrixData, MatrixInputSettings } from "./FormFieldMatrixTypes";
import ButtonRow from "@root/components/ButtonRow/ButtonRow";
import { FormFieldMatrixSkeleton } from "./FormFieldMatrixSkeleton";

const FormFieldMatrix = (
	props: MosaicFieldProps<"matrix", MatrixInputSettings, MatrixData>,
): ReactElement => {
	const {
		value,
		disabled,
		fieldDef,
		skeleton,
	} = props;

	const { buttons = [], dataView } = fieldDef.inputSettings;
	const data = (dataView.data !== undefined ? dataView.data : value) || [];
	const hasValue = data.length > 0;

	if (skeleton) {
		return (
			<FormFieldMatrixSkeleton
				buttonCount={buttons.length}
			/>
		);
	}

	return (
		<MatrixWrapper>
			<MatrixActions>
				<ButtonRow>
					{buttons.map((button, idx) => (
						<Button
							key={`${button.label}-${idx}`}
							{...button}
							disabled={button.disabled === undefined ? disabled : button.disabled}
						/>
					))}
				</ButtonRow>
			</MatrixActions>
			{hasValue && (
				<DataView
					data={[]}
					{...{ ...dataView, disabled, data }}
				/>
			)}
		</MatrixWrapper>
	);
};

export default memo(FormFieldMatrix);
