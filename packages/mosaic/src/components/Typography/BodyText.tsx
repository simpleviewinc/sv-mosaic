import type { ReactElement } from "react";
import React from "react";

import Typography from "./Typography";
import type { TypographyProps } from "./TypographyTypes";

const BodyText = (props: Omit<TypographyProps<"body">, "variant">): ReactElement => {
	return <Typography {...props} variant="body" />;
};

export default BodyText;
