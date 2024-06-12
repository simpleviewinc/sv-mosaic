import React, { ReactElement } from "react";

import Typography from "./Typography";
import { TypographyProps } from "./TypographyTypes";

const SubtitleText = (props: Omit<TypographyProps, "variant">): ReactElement => {
	return <Typography {...props} variant="subtitle" />;
};

export default SubtitleText;
