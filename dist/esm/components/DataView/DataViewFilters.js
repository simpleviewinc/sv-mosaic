import * as React from "react";
import { useState, useMemo } from "react";
import styled from "styled-components";
import { pick, xor } from "lodash";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DataViewFilterDropdown from "../DataViewFilterDropdown";
import { DataViewFilterMultiselectDropdownContent } from "../DataViewFilterMultiselect";
import Button from "../Button";
import theme from "../../theme";
import { useMosaicTranslation } from "../../i18n";
const StyledDiv = styled.div `
	margin-bottom: -4px;

	& > .filterRow {
		display: flex;
		align-items: center;
		flex-wrap: wrap;

		& .filter-value {
			max-width: 200px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}

	& > .filterRow > * {
		margin-right: 4px;
		margin-bottom: 4px;
	}
`;
function DataViewFilters(props) {
    const { t, i18n } = useMosaicTranslation();
    console.log(i18n, i18n.options);
    const [state, setState] = useState({
        anchorEl: null,
        dropdownOpen: false
    });
    const activeFilters = props.activeFilters.value || [];
    const primaryFilters = props.filters.filter(val => val.type === "primary");
    const primaryFilterNames = primaryFilters.map(val => val.name);
    const optionalFilters = props.filters.filter(val => val.type !== "primary");
    const active = optionalFilters.filter(val => activeFilters.includes(val.name));
    const options = optionalFilters
        .map((val) => ({ label: val.label, value: val.name }))
        .sort((a, b) => a.label.localeCompare(b.label));
    const optionsSelected = useMemo(() => {
        return options.filter(option => activeFilters.includes(option.value));
    }, [options, activeFilters]);
    const onRemove = (name) => () => {
        const activeFilters = xor(props.activeFilters.value, [name]);
        onActiveFiltersChange({ value: activeFilters });
    };
    const onClick = (event) => {
        setState({
            ...state,
            anchorEl: event.currentTarget
        });
    };
    const onClose = () => {
        setState({
            ...state,
            anchorEl: null
        });
    };
    const onEntered = () => {
        setState({
            ...state,
            dropdownOpen: true
        });
    };
    const onExited = function () {
        setState({
            ...state,
            dropdownOpen: false
        });
    };
    const onActiveFiltersChange = function (activeFiltersParam) {
        const filter = pick(props.filter, [...primaryFilterNames, ...activeFiltersParam.value]);
        // we only want to pass a new filter obj if we have actually removed a key from it, to prevent unnecessary re-fetches of data
        const setFilter = Object.keys(filter).join(",") !== Object.keys(props.filter).join(",");
        props.onActiveFiltersChange({
            activeFilters: activeFiltersParam,
            filter: setFilter === true ? filter : props.filter
        });
        onClose();
    };
    const getOptions = (filter) => {
        const regex = new RegExp(filter.keyword, "i");
        const results = options.filter((option) => option.label.match(regex));
        return {
            docs: results,
            hasMore: false
        };
    };
    return (React.createElement(StyledDiv, null,
        React.createElement("div", { className: "filterRow" },
            primaryFilters.map(filter => {
                const Component = filter.component;
                return (React.createElement(Component, { key: filter.name, label: filter.label, type: filter.type, args: filter.args || {}, data: props.filter[filter.name] || {}, onRemove: onRemove(filter.name), onChange: filter.onChange }));
            }),
            optionalFilters.length > 0 &&
                React.createElement(React.Fragment, null,
                    React.createElement(Button, { label: t("mosaic:DataView.more"), variant: "text", color: "black", size: "small", iconPosition: "right", mIcon: ExpandMoreIcon, mIconColor: theme.colors.gray600, onClick: onClick }),
                    React.createElement(DataViewFilterDropdown, { anchorEl: state.anchorEl, onClose: onClose, onEntered: onEntered, onExited: onExited },
                        React.createElement(DataViewFilterMultiselectDropdownContent, { comparison: "", selected: optionsSelected, getOptions: getOptions, isOpen: state.dropdownOpen, onApply: onActiveFiltersChange, onClose: onClose })))),
        active.length > 0 &&
            React.createElement("div", { className: "filterRow optionalFilters" }, active.map(filter => {
                const Component = filter.component;
                const filterData = props.filter[filter.name] || ((filter.comparisonDefault && filter.name === "title_with_comparisons") ? { comparison: filter.comparisonDefault } : {});
                return (React.createElement(Component, { key: filter.name, label: filter.label, type: filter.type, args: filter.args || {}, data: filterData, onRemove: onRemove(filter.name), onChange: filter.onChange }));
            }))));
}
export default DataViewFilters;
