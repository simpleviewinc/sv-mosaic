import Chip from "../../components/Chip";
import * as React from "react";
import { memo, useEffect, useState } from "react";
import { ChipsWrapper, OptionsCheckedModalWrapper, ShowHideSpan, StyledExpandLessIcon, StyledExpandMoreIcon } from "./AdvancedSelection.styled";
const MAX_CHIPS_TO_SHOW = 8;
const ChipList = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const { fieldDef, } = props;
    const [showMore, setShowMore] = useState(false);
    const [chipsToRender, setChipsToRender] = useState([]);
    /**
     * Called when the cross icon of a single chip is clicked.
     * @param optionValue is used to filter the chip from the
     * optionsChecked array.
     */
    const onChipDelete = (optionValue) => {
        var _a, _b;
        const filteredChips = (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.selectedOptions.filter((option) => option !== optionValue);
        (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.deleteSelectedOption(filteredChips);
    };
    /**
     * Used to toggle the state of showMore to
     * conditionally display 'X more' or 'Hide'.
     */
    const handleShowMore = () => {
        setShowMore(!showMore);
    };
    /**
     * JSX element with the list of selected options displayed
     * as chips.
     */
    useEffect(() => {
        let isMounted = true;
        const getSelectedOptions = async () => {
            var _a, _b;
            const optionsChecked = await ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.getSelected((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.selectedOptions));
            setChipsToRender(optionsChecked);
        };
        if (isMounted) {
            getSelectedOptions();
        }
        return () => {
            isMounted = false;
        };
    }, [
        fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled,
        (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.getSelected,
        (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.selectedOptions,
    ]);
    return ((_d = (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.selectedOptions) === null || _d === void 0 ? void 0 : _d.length) > 0 && (React.createElement(OptionsCheckedModalWrapper, { isModalOpen: (_e = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _e === void 0 ? void 0 : _e.isModalOpen },
        React.createElement(ChipsWrapper, { isModalOpen: (_f = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _f === void 0 ? void 0 : _f.isModalOpen, isMobileView: (_g = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _g === void 0 ? void 0 : _g.isMobileView, "data-testid": 'as-chiplist' }, showMore ?
            chipsToRender === null || chipsToRender === void 0 ? void 0 : chipsToRender.map((option, idx) => (React.createElement(Chip, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, key: `${option === null || option === void 0 ? void 0 : option.label}-${idx}`, label: option === null || option === void 0 ? void 0 : option.label, onDelete: () => onChipDelete(option === null || option === void 0 ? void 0 : option.value) })))
            :
                chipsToRender === null || chipsToRender === void 0 ? void 0 : chipsToRender.slice(0, MAX_CHIPS_TO_SHOW).map((option, idx) => (React.createElement(Chip, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, key: `${option === null || option === void 0 ? void 0 : option.label}-${idx}`, label: option === null || option === void 0 ? void 0 : option.label, onDelete: () => onChipDelete(option === null || option === void 0 ? void 0 : option.value) })))),
        ((_h = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _h === void 0 ? void 0 : _h.selectedOptions.length) > MAX_CHIPS_TO_SHOW && (React.createElement("div", { onClick: handleShowMore }, showMore ? (React.createElement(ShowHideSpan, null,
            "Hide",
            " ",
            React.createElement(StyledExpandLessIcon, null))) : (React.createElement(ShowHideSpan, null,
            `${((_j = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _j === void 0 ? void 0 : _j.selectedOptions.length) - MAX_CHIPS_TO_SHOW} more`,
            React.createElement(StyledExpandMoreIcon, null)))))));
};
export default memo(ChipList);
