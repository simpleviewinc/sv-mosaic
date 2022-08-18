import * as React from "react";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import Button from "../../components/Button";
import Form, { formActions, useForm } from "../../components/Form";
import { InputWrapper, StyledInput } from "./AdvancedSelection.styled";
import AddIcon from "@mui/icons-material/Add";
import ChipList from "./ChipList";
import LoadMoreButton from "./LoadMoreButton";
import _ from "lodash";
const AdvancedSelectionDrawer = (props) => {
    var _a, _b, _c, _d, _e;
    const { value, fieldDef, onChange, isModalOpen, isMobileView, handleClose, handleUnsavedChanges, dialogOpen, handleDialogClose, } = props;
    const [options, setOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [canLoadMore, setCanLoadMore] = useState(true);
    const [filter, setFilter] = useState({ prev: "options", new: "options" });
    const { state, dispatch } = useForm();
    useEffect(() => {
        var _a;
        if (state.data.checkboxList !== undefined) {
            handleUnsavedChanges(!_.isEqual([...value], (_a = state === null || state === void 0 ? void 0 : state.data) === null || _a === void 0 ? void 0 : _a.checkboxList));
        }
    }, [state.data.checkboxList, value]);
    useEffect(() => {
        let isMounted = true;
        if (value.length > 0 && isModalOpen) {
            isMounted && dispatch(formActions.setFieldValue({
                name: "checkboxList",
                value: value,
            }));
        }
        return () => {
            isMounted = false;
        };
    }, [value, isModalOpen]);
    useEffect(() => {
        let isMounted = true;
        const setInternalOptions = async () => {
            var _a, _b, _c;
            if ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.getOptions) {
                await getMoreOptions();
            }
            else if ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.checkboxOptions) {
                setOptions(options.concat((_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.checkboxOptions));
            }
        };
        if (isMounted) {
            setInternalOptions();
        }
        return () => {
            isMounted = false;
        };
    }, [
        (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.checkboxOptions,
        (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.getOptions,
        (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.getOptionsLimit
    ]);
    const getMoreOptions = async () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.getOptions) {
            const searchInput = (_b = state === null || state === void 0 ? void 0 : state.data) === null || _b === void 0 ? void 0 : _b.searchInput;
            let newOptions = [];
            if (filter.prev === filter.new) {
                newOptions = await ((_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.getOptions({
                    offset: filteredList ? filteredList.length : 0,
                    limit: ((_d = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _d === void 0 ? void 0 : _d.getOptionsLimit) ? +((_e = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _e === void 0 ? void 0 : _e.getOptionsLimit) + 1 : null,
                    filter: (searchInput === null || searchInput === void 0 ? void 0 : searchInput.length) > 0 ? searchInput : undefined,
                }));
            }
            else {
                newOptions = await ((_f = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _f === void 0 ? void 0 : _f.getOptions({
                    offset: 0,
                    limit: ((_g = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _g === void 0 ? void 0 : _g.getOptionsLimit) ? +((_h = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _h === void 0 ? void 0 : _h.getOptionsLimit) + 1 : null,
                    filter: (searchInput === null || searchInput === void 0 ? void 0 : searchInput.length) > 0 ? searchInput : undefined,
                }));
            }
            if (newOptions.length > +((_j = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _j === void 0 ? void 0 : _j.getOptionsLimit)) {
                newOptions.pop();
                setCanLoadMore(true);
            }
            else {
                setCanLoadMore(false);
            }
            if (filter.prev === "filter" && filter.new === "options") {
                setOptions(newOptions);
            }
            if (filter.prev === "options" && filter.new === "options") {
                setOptions(options.concat(newOptions));
            }
            if (filter.prev === "options" && filter.new === "filter") {
                setFilteredOptions(newOptions);
            }
            if (filter.prev === "filter" && filter.new === "filter") {
                setFilteredOptions(filteredOptions.concat(newOptions));
            }
        }
    };
    const getMoreOptionsDebounced = _.debounce(getMoreOptions, 300);
    useEffect(() => {
        let isMounted = true;
        isMounted && getMoreOptionsDebounced();
        return () => {
            isMounted = false;
            getMoreOptionsDebounced.cancel();
        };
    }, [filter]);
    useEffect(() => {
        var _a;
        let isMounted = true;
        if (isMounted) {
            const searchInput = (_a = state === null || state === void 0 ? void 0 : state.data) === null || _a === void 0 ? void 0 : _a.searchInput;
            if (searchInput && (searchInput === null || searchInput === void 0 ? void 0 : searchInput.length) > 0) {
                setFilter({ prev: filter.new, new: "filter" });
            }
            else {
                setFilter({ prev: filter.new, new: "options" });
            }
        }
        return () => {
            isMounted = false;
        };
    }, [(_d = state === null || state === void 0 ? void 0 : state.data) === null || _d === void 0 ? void 0 : _d.searchInput]);
    const loadMoreOptions = () => {
        setFilter({ prev: filter.new, new: filter.new });
    };
    const filteredList = useMemo(() => {
        var _a;
        const searchInput = (_a = state === null || state === void 0 ? void 0 : state.data) === null || _a === void 0 ? void 0 : _a.searchInput;
        if (searchInput) {
            const trimmedFilter = searchInput === null || searchInput === void 0 ? void 0 : searchInput.trim().toLowerCase();
            return filteredOptions.filter((option) => searchInput === "" || option.label.toLowerCase().includes(trimmedFilter));
        }
        return options;
    }, [
        options,
        filteredOptions,
        (_e = state === null || state === void 0 ? void 0 : state.data) === null || _e === void 0 ? void 0 : _e.searchInput,
    ]);
    const searchInput = useCallback((props) => {
        var _a;
        const searchKeyword = props.value.trim();
        /**
         * Handler for the input element
         * @param e input change event
         */
        const onInputChange = (e) => {
            dispatch(formActions.setFieldValue({
                name: "searchInput",
                value: e.target.value
            }));
        };
        /**
         * Adds an options to the list.
         */
        const createOption = async () => {
            var _a;
            const canBeCreated = searchKeyword.length > 0;
            if (canBeCreated) {
                const newOptionValue = await ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.createNewOption(searchKeyword));
                const newOption = {
                    label: searchKeyword,
                    value: newOptionValue,
                };
                setFilteredOptions([...filteredOptions, newOption]);
            }
        };
        return (React.createElement(InputWrapper, { isMobileView: isMobileView },
            React.createElement(StyledInput, { type: 'text', placeholder: 'Search...', onChange: onInputChange, value: props.value ? props.value : "", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled }),
            props.value && ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.createNewOption) && (React.createElement(Button, { label: 'Create', variant: 'text', color: 'teal', disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, mIcon: AddIcon, onClick: createOption }))));
    }, [fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, options]);
    const deleteSelectedOption = (newOptions) => {
        dispatch(formActions.setFieldValue({
            name: "checkboxList",
            value: newOptions,
        }));
    };
    const fields = useMemo(() => {
        var _a, _b;
        return [
            {
                name: "listOfChips",
                type: ChipList,
                disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled,
                inputSettings: {
                    getSelected: (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.getSelected,
                    isModalOpen,
                    isMobileView,
                    selectedOptions: (_b = state === null || state === void 0 ? void 0 : state.data) === null || _b === void 0 ? void 0 : _b.checkboxList,
                    deleteSelectedOption,
                }
            },
            {
                name: "searchInput",
                type: searchInput,
            },
            {
                name: "checkboxList",
                type: "checkbox",
                disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled,
                style: {
                    height: "353px",
                    overflowY: "auto",
                    flexWrap: "nowrap",
                    width: "100%",
                },
                size: "100%",
                inputSettings: {
                    options: filteredList,
                }
            },
            {
                name: "loadMoreButton",
                type: LoadMoreButton,
                disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled,
                inputSettings: {
                    canLoadMore,
                    getMoreOptions: loadMoreOptions,
                    parentInputSettings: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings,
                }
            },
        ];
    }, [
        filteredList,
        searchInput,
        fieldDef,
        canLoadMore,
        getMoreOptions,
        isModalOpen,
        isMobileView,
    ]);
    /**
     * Modal is closed when the Save button is clicked.
     */
    const onSubmit = async () => {
        const { valid } = await dispatch(formActions.submitForm());
        if (!valid)
            return;
        await onChange(state.data.checkboxList);
        handleClose(true);
    };
    const buttons = [
        {
            label: "Cancel",
            onClick: () => handleClose(),
            color: "gray",
            variant: "outlined"
        },
        {
            label: "Save",
            onClick: onSubmit,
            color: "yellow",
            variant: "contained"
        }
    ];
    return (React.createElement(Form, { title: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.label, buttons: buttons, type: 'drawer', state: state, dispatch: dispatch, fields: fields, dialogOpen: dialogOpen, handleDialogClose: handleDialogClose }));
};
export default memo(AdvancedSelectionDrawer);
