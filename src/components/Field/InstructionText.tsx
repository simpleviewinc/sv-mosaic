import * as React from "react";
import { ReactElement, ReactNode, forwardRef } from "react";
import {
	InstructionTextWrapper,
	StyledInstructionText,
} from "./InstructionText.styled";

interface InstructionText {
	children: ReactNode;
	tooltip?: boolean;
	labelMargin?: string;
}

const InstructionText = forwardRef((props: InstructionText, ref): ReactElement => {
	const { children, tooltip, labelMargin } = props;
	return (
		<InstructionTextWrapper
			labelMargin={labelMargin}
			className={`instruction-text-${!tooltip ? "right" : "tooltip"}`}
			ref={ref}
		>
			<StyledInstructionText>{children}</StyledInstructionText>
		</InstructionTextWrapper>
	);
});

InstructionText.displayName = "InstructionText";

export default InstructionText;
