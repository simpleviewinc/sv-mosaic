import * as React from "react";
import { memo, ReactElement } from "react";
import { BrowseOptionProps } from "..";
import { startCase } from "lodash";

// Styles
import {
	BrowseOptionContainer,
	BrowseOptionSpan,
	RoundBackground,
	StyledImageIcon,
	StyledLinkIcon,
	StyledDocumentIcon,
	StyledVideoIcon,
} from "../ImageVideoLinkDocumentBrowsing.styled";

const iconComponentMap = {
	document: StyledDocumentIcon,
	image: StyledImageIcon,
	link: StyledLinkIcon,
	video: StyledVideoIcon,
};

const BrowseOption = (props: BrowseOptionProps): ReactElement => {
	const { disabled, handleBrowse, assetType } = props;

	const IconComponent = iconComponentMap[assetType];

	return (
		<BrowseOptionContainer>
			<RoundBackground
				disabled={disabled}
				onClick={async (e) => await handleBrowse(e, assetType)}
				data-testid={`browse-${assetType}-test`}
			>
				<IconComponent />
			</RoundBackground>
			<BrowseOptionSpan>{startCase(assetType)}</BrowseOptionSpan>
		</BrowseOptionContainer>
	);
};

export default memo(BrowseOption);
