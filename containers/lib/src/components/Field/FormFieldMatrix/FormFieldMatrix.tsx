import * as React from "react";
import { ReactElement, memo } from "react";

import { MosaicFieldProps } from "@root/components/Field";
import { MatrixActions, MatrixWrapper } from "./FormFieldMatrix.styled";
import Button from "@root/components/Button";
import DataView from "@root/components/DataView";
import { MatrixData, MatrixInputSettings } from "./FormFieldMatrixTypes";
import ButtonRow from "@root/components/ButtonRow/ButtonRow";

const FormFieldMatrix = (
	props: MosaicFieldProps<"matrix", MatrixInputSettings, MatrixData>,
): ReactElement => {
	const {
		value,
		disabled,
		fieldDef,
	} = props;

	const { buttons, dataView } = fieldDef.inputSettings;
	const data = (dataView.data !== undefined ? dataView.data : value) || [];
	const hasValue = data.length > 0;

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
