import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import type { SpinnerProps } from "./SpinnerTypes";

import theme from "@root/theme";

function Spinner(props: SpinnerProps) {
	return (
		<CircularProgress
			style={{ color: theme.color.gray[500] }}
			size={30}
			className={props.className}
			value={props.progress ?? undefined}
			variant={props.progress >= 0 && props.progress <= 100 ? "determinate" : "indeterminate"}
			data-testid="spinner-test-id"
		/>
	);
}

export default Spinner;
