import * as React from "react";
import { memo, ReactElement } from "react";
import { MosaicFieldProps } from "@root/components/Field";
import { StyledSkeletonWrapper } from "./FormFieldTextEditor.styled";
import "jodit/build/jodit.min.css";
import { TextEditorData, TextEditorInputSettings } from "./FormFieldTextEditorTypes";
import { Skeleton } from "@mui/material";
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
