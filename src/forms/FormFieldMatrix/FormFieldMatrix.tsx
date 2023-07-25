import * as React from "react";
import { ReactElement, memo } from "react";

import { MosaicFieldProps } from "@root/components/Field";
import { MatrixActions, MatrixWrapper } from "./FormFieldMatrix.styled";
import Button from "@root/components/Button";
import DataView from "@root/components/DataView";
import { MatrixData, MatrixInputSettings } from "./FormFieldMatrixTypes";
import ButtonRow from "@root/components/ButtonRow/ButtonRow";

const FormFieldMatrix = (
	props: MosaicFieldProps<"matrix", MatrixInputSettings, MatrixData>
): ReactElement => {
	const {
		value,
		fieldDef,
	} = props;

	const { buttons, dataView } = fieldDef.inputSettings;
	const data = (dataView.data !== undefined ? dataView.data : value) || [];

	return (
		<MatrixWrapper hasValue>
			<MatrixActions hasValue>
				<ButtonRow>
					{buttons.map((button, idx) => (
						<Button key={`${button.label}-${idx}`} {...button} />
					))}
				</ButtonRow>
			</MatrixActions>
			<DataView
				data={[]}
				{...{...dataView, data}}
			/>
		</MatrixWrapper>
	);
};

export default memo(FormFieldMatrix);
