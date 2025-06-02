import type { ReactElement } from "react";
import React from "react";

import Typography from "./Typography";
import type { TypographyProps } from "./TypographyTypes";

const DisplayText = (props: Omit<TypographyProps<"display">, "variant">): ReactElement => {
	return <Typography {...props} variant="display" />;
};

export default DisplayText;
