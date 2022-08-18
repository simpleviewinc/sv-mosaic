import React, { useState } from "react";
import styled from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Button from "../Button";
import theme from "../../theme";
import CheckboxList from "../CheckboxList";
import DrawerContent from "../DrawerContent";
import { useMosaicTranslation } from "../../i18n";
const StyledWrapper = styled.div `
	display: flex;

	& > div > h2 {
		${theme.h2}
		padding-left: 15px;
		margin: 0 0 1rem 0;
	}

	& > .left {
		flex: 1;
		padding-right: 20px;
		width: 200px;
	}

	& > .left .listItem {
		margin: 3px 0px;
		background: white;
	}

	& > .right {
		flex: 1;
		width: 200px;
	}

	& > .right > .item {
		background: white;
		line-height: 42px;
		margin: 3px 0px;
		display: flex;
		justify-content: space-between;
		padding-left: 15px;
	}

	& > .right > .item > .buttons {
		text-align: right;
	}
`;
function DataViewColumnDrawerContent(props) {
    const [state, setState] = useState({
        activeColumns: props.columns.map(val => val.name)
    });
    const { t } = useMosaicTranslation();
    const saveColumns = function () {
        props.onClose();
        props.onChange(state.activeColumns);
    };
    const onColumnsChange = function (data) {
        setState({
            ...state,
            activeColumns: data
        });
    };
    const orderClick = (name, num) => () => {
        // changing the order is actually just swapping one element for another
        // so we find the elements current position and it's new position and swap the two names
        const index = state.activeColumns.indexOf(name);
        const newIndex = index + num;
        const swapValue = state.activeColumns[newIndex];
        state.activeColumns[index] = swapValue;
        state.activeColumns[newIndex] = name;
        setState({
            ...state,
            activeColumns: [...state.activeColumns]
        });
    };
    const columnOptions = props.allColumns.map(column => {
        return {
            label: column.label,
            value: column.name
        };
    }).sort((a, b) => {
        return a.label.localeCompare(b.label);
    });
    return (React.createElement(DrawerContent, { title: t("mosaic:DataView.table_settings"), background: "gray", onApply: saveColumns, onClose: props.onClose, onCancel: props.onClose },
        React.createElement(StyledWrapper, null,
            React.createElement("div", { className: "left" },
                React.createElement("h2", null, t("mosaic:DataView.columns")),
                React.createElement(CheckboxList, { options: columnOptions, checked: state.activeColumns, onChange: onColumnsChange })),
            React.createElement("div", { className: "right" },
                React.createElement("h2", null, t("mosaic:DataView.column_order")),
                state.activeColumns.map((name, i) => {
                    const column = props.allColumns.find(val => val.name === name);
                    return (React.createElement("div", { className: "item", key: column.name },
                        React.createElement("span", null, column.label),
                        React.createElement("span", { className: "buttons" },
                            React.createElement(Button, { mIcon: ArrowDownwardIcon, variant: "icon", color: "black", disabled: i === state.activeColumns.length - 1, onClick: orderClick(column.name, 1) }),
                            React.createElement(Button, { mIcon: ArrowUpwardIcon, variant: "icon", color: "black", disabled: i === 0, onClick: orderClick(column.name, -1) }))));
                })))));
}
export default DataViewColumnDrawerContent;
