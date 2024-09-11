import type { ReactElement } from "react";

import React, { memo } from "react";
import Skeleton from "@mui/material/Skeleton";
import "jodit/build/jodit.min.css";

import type { MosaicFieldProps } from "@root/components/Field";
import type { TextEditorData, TextEditorInputSettings } from "./FormFieldTextEditorTypes";

import { StyledSkeletonWrapper } from "./FormFieldTextEditor.styled";
import JoditEditor from "./JoditEditor";

const FormFieldTextEditor = (
	props: MosaicFieldProps<"textEditor", TextEditorInputSettings, TextEditorData>,
): ReactElement => {
	const { skeleton } = props;

	if (skeleton) {
		return (
			<StyledSkeletonWrapper>
				<Skeleton
					variant="rectangular"
					width="100%"
					height={78}
				/>
				<Skeleton
					variant="rectangular"
					width="100%"
					height={154}
				/>
			</StyledSkeletonWrapper>
		);
	}

	return <JoditEditor {...props} />;
};

export default memo(FormFieldTextEditor);
