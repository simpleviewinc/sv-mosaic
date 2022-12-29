import * as React from "react";
import { ReactElement, memo } from "react";

import { MosaicFieldProps } from "@root/components/Field";
import { MatrixDef } from "./FormFieldMatrixTypes";
import { MatrixWrapper, ButtonsWrapper } from "./FormFieldMatrix.styled";
import Button from "@root/components/Button";
import DataView from "@root/components/DataView";

const FormFieldMatrix = (
	props: MosaicFieldProps<MatrixDef>
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
