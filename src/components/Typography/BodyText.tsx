import React, { ReactElement } from "react";

import Typography from "./Typography";
import { TypographyProps } from "./TypographyTypes";

const BodyText = (props: Omit<TypographyProps, "variant">): ReactElement => {
	return <Typography {...props} variant="body" />;
};

export default BodyText;
