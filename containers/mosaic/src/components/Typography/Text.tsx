import type { ReactElement } from "react";
import React from "react";

import Typography from "./Typography";
import type { TypographyProps } from "./TypographyTypes";

const Text = (props: Omit<TypographyProps<"text">, "variant">): ReactElement => {
	return <Typography {...props} variant="text" />;
};

export default Text;
