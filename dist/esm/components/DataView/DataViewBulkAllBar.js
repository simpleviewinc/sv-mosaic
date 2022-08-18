import * as React from "react";
import { memo, Fragment } from "react";
import styled from "styled-components";
import Button from "../Button";
import theme from "../../theme";
const StyledDiv = styled.div `
	text-align: center;
	font-weight: normal;
	color: ${theme.colors.gray600};
	border-bottom: ${theme.borders.lightGray};
	line-height: 1.75;
	display: flex;
	align-items: center;
	justify-content: center;

	& > .bulkText {
		margin-right: 6px;
	}
`;
function DataViewBulkAllBar(props) {
    return (React.createElement(StyledDiv, null,
        React.createElement("span", { className: "bulkText" },
            props.checkedAllPages &&
                React.createElement(Fragment, null,
                    "All ",
                    React.createElement("b", null, props.count),
                    " records are selected."),
            !props.checkedAllPages &&
                React.createElement(Fragment, null,
                    "All ",
                    React.createElement("b", null, props.rowCount),
                    " records on this page are selected.")),
        React.createElement(Button, { color: "blue", variant: "text", label: !props.checkedAllPages ? `Select All ${props.count} Records` : "Clear Selection", onClick: props.onCheckAllPagesClick })));
}
export default memo(DataViewBulkAllBar);
