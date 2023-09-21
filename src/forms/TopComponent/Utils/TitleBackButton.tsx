import * as React from "react";
import { memo, ReactElement } from "react";

// Utils
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { BackButton } from "./TitleWrapper.styled";
import { TitleBackButtonProps } from "./TitleWrapperTypes";

const backButtonMuiAtts = {
	"data-testid": "icon-button-test"
}

const TitleBackButton = ({collapse, ...props}: TitleBackButtonProps): ReactElement => {

	return (
		<BackButton
			$collapse={collapse}
			{...props}
			className="back-button"
			color="gray"
			variant="outlined"
			mIcon={ChevronLeftIcon}
			muiAttrs={backButtonMuiAtts}
		/>
	);
};

export default memo(TitleBackButton);
