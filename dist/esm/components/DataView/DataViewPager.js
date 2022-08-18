import * as React from "react";
import { memo } from "react";
import styled from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "../Button";
import DataViewPagerPopover from "./DataViewPagerPopover";
import { useMosaicTranslation } from "../../i18n";
const StyledSpan = styled.span `
	display: inline-flex;
	align-items: center;
	white-space: nowrap;

	& > .pagerText { line-height: 100%; }
`;
function DataViewPager(props) {
    const { t } = useMosaicTranslation();
    const totalPages = Math.ceil(props.count / props.limit);
    const currentPage = (props.skip + props.limit) / props.limit;
    const startItem = (props.skip + 1);
    const endItem = Math.min(props.skip + props.limit, props.count);
    const skipClick = (skip) => () => {
        props.onSkipChange({ skip });
    };
    const previousDisabled = currentPage === 1;
    const nextDisabled = currentPage === totalPages;
    if (totalPages === 0) {
        return null;
    }
    return (React.createElement(StyledSpan, null,
        React.createElement(Button, { color: "black", variant: "icon", size: "small", mIcon: ChevronLeftIcon, onClick: skipClick(props.skip - props.limit), disabled: previousDisabled }),
        React.createElement(Button, { color: "black", variant: "text", size: "small", tooltip: t("mosaic:DataView.jump_to_page"), label: `${startItem}-${endItem} of ${props.count}`, popover: React.createElement(DataViewPagerPopover, { currentPage: currentPage, totalPages: totalPages, limit: props.limit, onSkipChange: props.onSkipChange }) }),
        React.createElement(Button, { color: "black", variant: "icon", size: "small", mIcon: ChevronRightIcon, onClick: skipClick(props.skip + props.limit), disabled: nextDisabled })));
}
export default memo(DataViewPager);
