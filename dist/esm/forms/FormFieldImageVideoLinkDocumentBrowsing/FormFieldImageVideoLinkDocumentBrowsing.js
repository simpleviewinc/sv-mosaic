import * as React from "react";
import { memo, useState, useMemo } from "react";
// Components
import Button from "../../components/Button";
import { AssetCard, AssetLabel, AssetLabelTooltip, AssetPropertiesColumn, AssetValue, BrowseOptionsContainer, BrowseSpan, BrowsingContainer, ButtonsWrapper, Column, ImageVideoLinkDocumentBrowsingContainer, MenuColumn, MoreText, StyledAnchor, StyledImg, StyledTooltip, TableRow, Td, } from "./ImageVideoLinkDocumentBrowsing.styled";
// Components
import MenuFormFieldCard from "../MenuFormFieldCard";
import BrowseOption from "./BrowseOption";
const DOCUMENT = "document";
const IMAGE = "image";
const LINK = "link";
const VIDEO = "video";
const FormFieldImageVideoLinkDocumentBrowsing = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const { fieldDef, value } = props;
    // State variables
    const [assetType, setAssetType] = useState("");
    /**
     * The Browse button should execute the function
     * corresponding to the asset that was loaded.
     */
    const handleBrowse = async (e, asset) => {
        var _a, _b, _c, _d;
        e.preventDefault();
        if (asset === DOCUMENT) {
            try {
                await ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.handleSetDocument());
            }
            catch (error) {
                console.log(error);
            }
        }
        if (asset === VIDEO) {
            try {
                await ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.handleSetVideo());
            }
            catch (error) {
                console.log(error);
            }
        }
        if (asset === LINK) {
            try {
                await ((_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.handleSetLink());
            }
            catch (error) {
                console.log(error);
            }
        }
        if (asset === IMAGE) {
            try {
                await ((_d = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _d === void 0 ? void 0 : _d.handleSetImage());
            }
            catch (error) {
                console.log(error);
            }
        }
        setAssetType(asset);
    };
    /**
     * Executes the remove function that comes from the
     * Form component. This function sets the Form field value
     * to an empty array.
     * @param e click event
     */
    const handleRemove = (e) => {
        var _a;
        e.preventDefault();
        (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.handleRemove();
    };
    const tootltipContent = useMemo(() => Array.isArray(value) &&
        (value === null || value === void 0 ? void 0 : value.map((property) => (React.createElement(TableRow, { key: `${property.label}-${property.value}` },
            React.createElement(Td, null,
                React.createElement(AssetLabelTooltip, null, property.label)),
            React.createElement(Td, null, property.value))))), [value]);
    // Only show the first four asset's properties on the card
    const assetPropertiesRows = useMemo(() => Array.isArray(value) &&
        (value === null || value === void 0 ? void 0 : value.slice(0, 4).map((property, idx) => (React.createElement(TableRow, { key: `${property.label}-${property.value}` },
            React.createElement(Td, null,
                React.createElement(AssetLabel, null, property.label)),
            React.createElement(Td, null,
                property.label === "URL" ? (React.createElement(StyledAnchor, { href: property.value }, property.value)) : (React.createElement(AssetValue, null, property.value)),
                idx === 3 && value.length > 4 && (React.createElement(React.Fragment, null,
                    React.createElement(AssetValue, null, "..."),
                    React.createElement(StyledTooltip, { placement: "top", text: React.createElement("table", null,
                            React.createElement("tbody", null, tootltipContent)), type: "advanced" },
                        React.createElement(MoreText, null, "More"))))))))), [value]);
    const hasOptions = ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.handleSetImage) ||
        ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.handleSetVideo) ||
        ((_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.handleSetDocument) ||
        ((_d = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _d === void 0 ? void 0 : _d.handleSetLink);
    return (React.createElement(ImageVideoLinkDocumentBrowsingContainer, null, (Array.isArray(value) && (value === null || value === void 0 ? void 0 : value.length) === 0) || !value ? (React.createElement(BrowsingContainer, null,
        React.createElement(BrowseSpan, null, !hasOptions ? "No browsing options" : "Browse:"),
        React.createElement(BrowseOptionsContainer, null,
            ((_e = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _e === void 0 ? void 0 : _e.handleSetImage) && (React.createElement(BrowseOption, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, handleBrowse: handleBrowse, assetType: IMAGE })),
            ((_f = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _f === void 0 ? void 0 : _f.handleSetVideo) && (React.createElement(BrowseOption, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, handleBrowse: handleBrowse, assetType: VIDEO })),
            ((_g = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _g === void 0 ? void 0 : _g.handleSetDocument) && (React.createElement(BrowseOption, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, handleBrowse: handleBrowse, assetType: DOCUMENT })),
            ((_h = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _h === void 0 ? void 0 : _h.handleSetLink) && (React.createElement(BrowseOption, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, handleBrowse: handleBrowse, assetType: LINK }))))) : (React.createElement(AssetCard, null,
        ((_j = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _j === void 0 ? void 0 : _j.src) &&
            !(assetType === DOCUMENT || assetType === LINK) && (React.createElement(Column, null,
            React.createElement(StyledImg, { src: (_k = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _k === void 0 ? void 0 : _k.src, "data-testid": "image-test", width: 257, height: 168 }))),
        React.createElement(AssetPropertiesColumn, { hasImage: ((_l = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _l === void 0 ? void 0 : _l.src) &&
                (assetType === IMAGE || assetType === VIDEO) },
            React.createElement("table", null,
                React.createElement("tbody", null, assetPropertiesRows))),
        ((_m = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _m === void 0 ? void 0 : _m.options) && (React.createElement(MenuColumn, null,
            React.createElement(MenuFormFieldCard, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, options: (_o = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _o === void 0 ? void 0 : _o.options }))),
        React.createElement(ButtonsWrapper, null,
            React.createElement(Button, { className: "first", color: "teal", variant: "text", label: "Browse", muiAttrs: { disableRipple: true }, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, onClick: async (e) => await handleBrowse(e, assetType) }),
            React.createElement(Button, { color: "red", variant: "text", label: "Remove", muiAttrs: { disableRipple: true }, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, onClick: (e) => handleRemove(e) }))))));
};
export default memo(FormFieldImageVideoLinkDocumentBrowsing);
