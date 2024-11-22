import type { ReactElement } from "react";
import React from "react";

import Typography from "./Typography";
import type { TypographyProps } from "./TypographyTypes";

const TitleText = (props: Omit<TypographyProps, "variant">): ReactElement => {
	return <Typography {...props} variant="title" />;
};

export default TitleText;
