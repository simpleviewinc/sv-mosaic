import * as React from "react";
import { memo, ReactElement } from "react";

// Utils
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { BackButton } from "./TitleWrapper.styled";
import { TitleBackButtonProps } from "./TitleWrapperTypes";
import Tooltip, { useTooltip } from "../Tooltip";

const TitleBackButton = ({
	collapse,
	label = "Go back",
	...props
}: TitleBackButtonProps): ReactElement => {
	const { anchorProps, tooltipProps } = useTooltip();

	return (
		<>
			<BackButton
				$collapse={collapse}
				{...props}
				className="back-button"
				color="gray"
				variant="icon"
				mIcon={ChevronLeftIcon}
				muiAttrs={{ "aria-label": label, ...anchorProps }}
			/>
			<Tooltip {...tooltipProps} >
				{label}
			</Tooltip>
		</>
	);
};

export default memo(TitleBackButton);
