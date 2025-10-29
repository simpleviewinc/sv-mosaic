import type { ReactElement } from "react";

import React, { memo } from "react";

import type { CodeFieldData, CodeFieldInputSettings } from "./FormFieldCodeTypes";
import type { MosaicFieldProps } from "@root/components/Field";
import { Wrapper } from "./FormFieldCode.styled";
import MonacoCodeEditor from "./MonacoCodeEditor";

const CodeField = ({
	value,
	onChange,
	fieldDef: {
		inputSettings = {},
	},
	disabled,
	error,
}: MosaicFieldProps<"code", CodeFieldInputSettings, CodeFieldData>): ReactElement => {
	return (
		<Wrapper $error={Boolean(error)}>
			<MonacoCodeEditor
				{...inputSettings}
				disabled={disabled}
				value={value}
				onChange={onChange}
			/>
		</Wrapper>
	);
};

export default memo(CodeField);
