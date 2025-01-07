import type { PropsWithChildren, ReactElement } from "react";

import React from "react";

import testIds from "@root/utils/testIds";
import { StyledPrimaryToolbar } from "../FormFieldTextEditor.styled";

function PrimaryToolbar({ children, focus }: PropsWithChildren<{focus?: boolean}>): ReactElement {
	return (
		<StyledPrimaryToolbar $focus={focus} data-testid={testIds.TEXT_EDITOR_PRIMARY_TOOLBAR}>
			{children}
		</StyledPrimaryToolbar>
	);
}

export default PrimaryToolbar;
