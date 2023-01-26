import * as React from "react";
import { ReactElement, memo } from "react";

import { MosaicFieldProps } from "@root/components/Field";
import { MatrixWrapper, ButtonsWrapper } from "./FormFieldMatrix.styled";
import Button from "@root/components/Button";
import DataView from "@root/components/DataView";
import { MatrixData, MatrixInputSettings } from "./FormFieldMatrixTypes";

const FormFieldMatrix = (
	props: MosaicFieldProps<"matrix", MatrixInputSettings, MatrixData>
): ReactElement => {
	const {
		value,
		fieldDef,
	} = props;

	const { buttons, dataView } = fieldDef.inputSettings;

	return (
		<MatrixWrapper hasValue={value}>
			<ButtonsWrapper>
				{buttons.map((button, idx) => (
					<Button key={`${button.label}-${idx}`} {...button} />
				))}
			</ButtonsWrapper>
			{value &&
				<DataView
					data={value}
					{...dataView}
				></DataView>
			}
		</MatrixWrapper>
	);
};

export default memo(FormFieldMatrix);
