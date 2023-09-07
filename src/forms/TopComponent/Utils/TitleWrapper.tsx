import * as React from "react";
import { memo, ReactElement } from "react";

// Utils
import { H1 } from "@root/components/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { BackButton, Description, Title } from "../TopComponent.styled";
import { MosaicCSSContainer } from "@root/types";

export type TitleWrapperProps = {
	title: string;
	description?: string;
	onBack?: (() => void) | ((e: any) => void)
	collapse?: MosaicCSSContainer
}

const backButtonMuiAtts = {
	"data-testid": "icon-button-test"
}

const TitleWrapper = (props: TitleWrapperProps): ReactElement => {
	const {
		title,
		description,
		collapse
	} = props;

	return (
		<>
			<Title>
				{props.onBack && (
					<BackButton
						$collapse={collapse}
						className="back-button"
						color="gray"
						variant="outlined"
						mIcon={ChevronLeftIcon}
						onClick={props.onBack}
						muiAttrs={backButtonMuiAtts}
					/>
				)}
				<H1 attrs={{ title }} >{title}</H1>
			</Title>
			{description && <Description>{description}</Description>}
		</>
	);
};

export default memo(TitleWrapper);
