import React, { ReactElement } from "react";

import Typography from "./Typography";
import { TypographyProps } from "./TypographyTypes";

const TitleText = (props: Omit<TypographyProps, "variant">): ReactElement => {
	return <Typography {...props} variant="title" />;
};

export default TitleText;
