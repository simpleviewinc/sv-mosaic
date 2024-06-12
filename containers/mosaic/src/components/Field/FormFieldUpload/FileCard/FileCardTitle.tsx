import React from "react";

import Typography from "@root/components/Typography";
import { FileCardTitleProps } from "./FileCardTypes";
import Blank from "@root/components/Blank";

function FileCardTitle ({ name }: FileCardTitleProps) {
	return (
		<Typography maxLines={1} breakAll>
			{name ?? <Blank />}
		</Typography>
	);
}

export default FileCardTitle;
