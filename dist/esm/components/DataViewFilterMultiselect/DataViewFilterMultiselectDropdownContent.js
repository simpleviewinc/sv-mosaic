import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import InputBase from "@mui/material/InputBase";
import { debounce, xor } from "lodash";
import jsvalidator from "jsvalidator";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
import DataViewFilterDropdownButtons from "../DataViewFilterDropdownButtons";
import Button from "../Button";
import ButtonRow from "../ButtonRow";
import Spinner from "../Spinner";
import CheckboxList from "../CheckboxList";
import theme from "../../theme";
import { H3 } from "../Typography";
import { useMosaicTranslation } from "../../i18n";
const StyledWrapper = styled.div `
	& > .topBlock {
		display: flex;
		height: 400px;
		width: 600px;
	}

	& > .topBlock > .options > .searchBar {
		position: sticky;
		top: 0;
		display: flex;
		align-items: center;
		padding-left: 14px;
		z-index: 1;
		background: white;
	}

	& > .topBlock > .options > .searchBar > svg {
		margin-right: 8px;
		font-size: ${theme.iconFontSize};
	}

	& > .topBlock > .options > .searchBar > .input {
		font-family: ${theme.fontFamily};
		line-height: 2rem;
		font-size: 16px;
	}

	& > .topBlock > .options {
		overflow-y: scroll;
		flex: 2;
		position: relative;
		transition: opacity .5s;
		padding-right: 10px;
	}

	& > .topBlock > .options.disabled {
		opacity: .4;
		pointer-events: none;
	}

	& > .topBlock > .options .listItem {
		padding-top: 0px;
		padding-bottom: 0px;
	}

	& > .topBlock > .options .listItemIcon {
		min-width: auto;
	}

	& > .topBlock > .options > .spinner {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	& > .topBlock > .options .checked {
		color: ${theme.colors.blue};
	}

	& > .topBlock > .selected {
		padding: 0px 0px 0px 15px;
		width: 200px;
		overflow-y: auto;
	}

	& .comparisonDropdown {
		margin-bottom: 1rem;
	}

	& .chip {
		display: flex;
		background-color: ${theme.colors.blue}13;
		margin-bottom: 4px;
		justify-content: space-between;
		font-family: ${theme.fontFamily};
		height: 33px;
	}

	& .chip:focus {
		background-color: ${theme.colors.blue}13;
	}

	& .chip > span {
		flex: 1;
		font-size: 14px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		display: block;
	}
`;
const PopoverP = styled.p `
	margin: 0px;
`;
const limit = 25;
function DataViewFilterMultiselectDropdownContent(props) {
    jsvalidator.validate(props, {
        type: "object",
        schema: [
            {
                name: "value",
                type: "array"
            },
            {
                name: "placeholder",
                type: "string",
                required: false
            },
            {
                name: "comparison",
                type: "string",
                required: true
            },
            {
                name: "comparisons",
                type: "array"
            },
            {
                name: "getOptions",
                type: "function",
                required: true
            },
            {
                name: "selected",
                type: "array",
                required: true
            },
            {
                name: "isOpen",
                type: "boolean",
                required: true
            },
            {
                name: "onClose",
                type: "function",
                required: true
            },
            {
                name: "onApply",
                type: "function",
                required: true
            }
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    const [state, setState] = useState({
        options: [],
        selected: props.selected.map(val => val.value),
        hasMore: false,
        skip: 0,
        keyword: undefined,
        comparison: props.comparison,
        loaded: false
    });
    const { t } = useMosaicTranslation();
    // we need to combine the options we are querying for and the selected options that are passed in
    // since if they have already selected an item not in the current page, it won't be in the queried options
    const allOptions = [...props.selected, ...state.options];
    // mark the active comparison
    const activeComparison = props.comparisons ? props.comparisons.find(val => val.value === state.comparison) : undefined;
    useEffect(() => {
        async function fetchData() {
            const options = await props.getOptions({ limit, skip: state.skip });
            setState({
                ...state,
                options: options.docs,
                hasMore: options.hasMore === true,
                skip: state.skip + limit,
                loaded: true
            });
        }
        fetchData();
    }, []);
    const onClear = function () {
        setState({
            ...state,
            selected: [],
            comparison: "in",
            keyword: undefined,
        });
    };
    const onApply = function () {
        props.onApply({
            value: optionsDisabled ? [] : state.selected,
            comparison: state.comparison
        });
    };
    const handleToggle = option => () => {
        const newSelected = xor(state.selected, [option.value]);
        setState({
            ...state,
            selected: newSelected
        });
    };
    const loadMore = function (e) {
        // stash the target to prevent issues with React event persistence in our async callback
        const target = e.currentTarget;
        async function fetchData() {
            const newOptions = await props.getOptions({
                limit,
                skip: state.skip,
                keyword: state.keyword
            });
            setState({
                ...state,
                options: [...state.options, ...newOptions.docs],
                hasMore: newOptions.hasMore === true,
                skip: state.skip + limit
            });
            // By blurring on the target we prevent the browser from keeping our load more button in view
            // this ensures that our options scrollable maintains it's previous scroll position
            target.blur();
        }
        fetchData();
    };
    const debouncedSetKeyword = debounce(function (value) {
        async function fetchData() {
            const newOptions = await props.getOptions({
                limit,
                skip: 0,
                keyword: value
            });
            setState({
                ...state,
                options: newOptions.docs,
                hasMore: newOptions.hasMore === true,
                keyword: value === "" ? undefined : value,
                skip: limit
            });
        }
        fetchData();
    }, 200);
    const keywordChange = function (e) {
        debouncedSetKeyword(e.target.value);
    };
    let comparisonDropdown;
    if (props.comparisons) {
        const menuItems = props.comparisons.map(comparison => {
            return {
                label: comparison.label,
                onClick: function () {
                    // for exists and not_exists we want to clear the value
                    if (["exists", "not_exists"].includes(comparison.value) === true) {
                        setState({
                            ...state,
                            selected: []
                        });
                    }
                    setState({
                        ...state,
                        comparison: comparison.value
                    });
                }
            };
        });
        const popoverP = {
            "In": "The row must match one of selected option.",
            "Not In": "The row must match none of the selected options.",
            "All": "The row must match all of the selected options.",
            "Exists": "The row must have a value for this filter.",
            "Not Exists": "The row must not have a value for this filter.",
        };
        comparisonDropdown = (React.createElement("div", { className: "comparisonDropdown" },
            React.createElement(H3, null, t("mosaic:DataView.comparison")),
            React.createElement(ButtonRow, null,
                React.createElement(Button, { label: activeComparison.label, variant: "outlined", color: "black", iconPosition: "right", mIcon: ExpandMoreIcon, menuItems: menuItems }),
                React.createElement(Button, { variant: "icon", color: "blue", mIcon: HelpIcon, popover: React.createElement(PopoverP, null, menuItems.map((item, id) => (React.createElement("span", { key: id },
                        React.createElement("b", null, item.label),
                        " - ",
                        popoverP[item.label],
                        React.createElement("br", null))))) }))));
    }
    // if the user has chosen exists or not_exists then we need to disable the left panel since it isn't valid in that case
    const optionsDisabled = ["exists", "not_exists"].includes(state.comparison);
    // we want to avoid showing the list until the dropdown is fully open and the results are loaded from the db
    const showList = props.isOpen && state.loaded;
    const onChange = function (selected) {
        setState({
            ...state,
            selected: selected
        });
    };
    return (React.createElement(StyledWrapper, null,
        React.createElement("div", { className: "topBlock" },
            React.createElement("div", { className: `options ${optionsDisabled ? "disabled" : ""}` },
                React.createElement("div", { className: "searchBar" },
                    React.createElement(SearchIcon, null),
                    React.createElement(InputBase, { className: "input", placeholder: props.placeholder || t("mosaic:common.keyword___"), autoFocus: true, onChange: keywordChange })),
                !showList &&
                    React.createElement(Spinner, { className: "spinner" }),
                showList &&
                    React.createElement(CheckboxList, { checked: optionsDisabled ? [] : state.selected, options: state.options, onChange: onChange }),
                state.hasMore &&
                    React.createElement("div", { className: "loadContainer" },
                        React.createElement(Button, { label: t("mosaic:common.load_more___"), color: "blue", variant: "outlined", fullWidth: true, onClick: loadMore }))),
            React.createElement("div", { className: "selected" },
                comparisonDropdown,
                !optionsDisabled &&
                    React.createElement(React.Fragment, null,
                        React.createElement(H3, null, t("mosaic:DataView.selected_options")),
                        React.createElement("div", { className: "chips" }, showList &&
                            state.selected.map(value => {
                                const option = allOptions.find(val => val.value === value);
                                if (option === undefined) {
                                    return null;
                                }
                                return (React.createElement(Chip, { className: "chip", key: option.value, label: option.label, onDelete: handleToggle(option) }));
                            }))))),
        React.createElement(DataViewFilterDropdownButtons, { onApply: onApply, onClear: onClear, onCancel: props.onClose })));
}
export default DataViewFilterMultiselectDropdownContent;
