import * as React from "react";
import { memo, ReactElement } from "react";

// Utils
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { BackButton } from "./TitleWrapper.styled";
import { TitleBackButtonProps } from "./TitleWrapperTypes";

const TitleBackButton = ({
	collapse,
	label = "Go back",
	...props
}: TitleBackButtonProps): ReactElement => {

	return (
		<BackButton
			$collapse={collapse}
			{...props}
			className="back-button"
			color="gray"
			variant="icon"
			mIcon={ChevronLeftIcon}
			muiAttrs={{ "aria-label": label }}
		/>
	);
};

export default memo(TitleBackButton);
