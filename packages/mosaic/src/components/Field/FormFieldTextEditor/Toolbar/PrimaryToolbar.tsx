import type { PropsWithChildren, ReactElement } from "react";

import React from "react";

import testIds from "@root/utils/testIds";
import { StyledPrimaryToolbar } from "../FormFieldTextEditor.styled";

function PrimaryToolbar({ children }: PropsWithChildren): ReactElement {
	return (
		<StyledPrimaryToolbar data-testid={testIds.TEXT_EDITOR_PRIMARY_TOOLBAR}>
			{children}
		</StyledPrimaryToolbar>
	);
}

export default PrimaryToolbar;
