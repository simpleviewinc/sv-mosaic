import * as React from "react";
import { memo } from "react";
import { startCase } from "lodash";
// Styles
import { BrowseOptionContainer, BrowseOptionSpan, RoundBackground, StyledImageIcon, StyledLinkIcon, StyledDocumentIcon, StyledVideoIcon, } from "../ImageVideoLinkDocumentBrowsing.styled";
const iconComponentMap = {
    document: StyledDocumentIcon,
    image: StyledImageIcon,
    link: StyledLinkIcon,
    video: StyledVideoIcon,
};
const BrowseOption = (props) => {
    const { disabled, handleBrowse, assetType } = props;
    const IconComponent = iconComponentMap[assetType];
    return (React.createElement(BrowseOptionContainer, null,
        React.createElement(RoundBackground, { disabled: disabled, onClick: async (e) => await handleBrowse(e, assetType), "data-testid": `browse-${assetType}-test` },
            React.createElement(IconComponent, null)),
        React.createElement(BrowseOptionSpan, null, startCase(assetType))));
};
export default memo(BrowseOption);
