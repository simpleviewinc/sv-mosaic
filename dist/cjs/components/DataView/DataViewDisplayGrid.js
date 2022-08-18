"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var Checkbox_1 = __importDefault(require("../Checkbox"));
var DataViewActionsButtonRow_1 = __importDefault(require("./DataViewActionsButtonRow"));
var theme_1 = __importStar(require("../../theme/theme"));
var DataViewBulkActionsButtonsRow_1 = __importDefault(require("./DataViewBulkActionsButtonsRow"));
var DataViewDisplayGridSortControl_1 = __importDefault(require("./DataViewDisplayGridSortControl"));
var dataViewTools_1 = require("../../utils/dataViewTools");
var DataViewBulkAllBar_1 = __importDefault(require("./DataViewBulkAllBar"));
var BIG_SCREEN_BREAKPOINT = theme_1.BREAKPOINTS.topComponent.bigScreenView + "px";
var RESPONSIVE_BREAKPOINT = theme_1.BREAKPOINTS.topComponent.responsiveView + "px";
var MOBILE_BREAKPOINT = theme_1.BREAKPOINTS.mobile + "px";
var StyledDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t& > .topRow {\n\t\tmargin-bottom: 4px;\n\t\tposition: sticky;\n\t\ttop: 0;\n\t\tz-index: 1;\n\t\tbackground: white;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tbackground: ", ";\n\t}\n\n\t& > .topRowBulkAll {\n\t\tmargin-bottom: 5px;\n\t}\n\n\t& > .grid {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(1, 1fr);\n\t\tgrid-column-gap: 8px;\n\t\tgrid-row-gap: 20px;\n\n\t\t@media (min-width: ", ") {\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t};\n\n\t\t@media (min-width: 768px) {\n\t\t\tgrid-template-columns: repeat(3, 1fr);\n\t\t};\n\n\t\t@media (min-width: ", ") {\n\t\t\tgrid-template-columns: repeat(4, 1fr);\n\t\t};\n\n\t\t@media (min-width: 1296px) {\n\t\t\tgrid-template-columns: repeat(5, 1fr);\n\t\t};\n\n\t\t@media (min-width: ", ") {\n\t\t\tgrid-template-columns: repeat(6, 1fr);\n\t\t}\n\t}\n\n\t& > .grid > .cell {\n\t\tmin-width: 0;\n\t}\n\n\t& > .grid > .cell.checked > .image > .checkboxContainer {\n\t\topacity: 1;\n\t}\n\n\t& > .grid > .cell.checked > .image > .checkboxContainer > .mask {\n\t\topacity: 1;\n\t\tborder: 2px solid rgba(255, 255, 255, .5);\n\t\tmargin: 6px;\n\t}\n\n\t& > .grid > .cell > img {\n\t\tmax-width: 100%;\n\t\tmin-width: 100%;\n\t}\n\n\t& > .grid > .cell h2 {\n\t\tmargin: 0;\n\t\tfont-size: 14px;\n\t\tfont-weight: normal;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\toverflow: hidden;\n\t}\n\n\t& > .grid > .cell h3 {\n\t\tmargin: 0;\n\t\tfont-weight: normal;\n\t\tfont-size: 12px;\n\t\tcolor: ", ";\n\t}\n\n\t& > .grid > .cell .image {\n\t\tposition: relative;\n\t}\n\n\t& > .grid > .cell > .image > .checkboxContainer {\n\t\topacity: 0;\n\t\tposition: absolute;\n\t\ttop: 0px;\n\t\tleft: 0px;\n\t\ttransition: opacity 150ms;\n\t}\n\n\t& > .grid > .cell > .image:hover > .checkboxContainer {\n\t\topacity: 1;\n\t}\n\n\t& > .grid > .cell > .image > .checkboxContainer > .mask {\n\t\tposition: absolute;\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tleft: 4px;\n\t\ttop: 4px;\n\t\tmargin: 8px;\n\t\tbackground: white;\n\t\tborder-radius: 3px;\n\t\topacity: .8;\n\t}\n\n\t& > .grid > .cell .image img {\n\t\twidth: 100%;\n\t}\n\n\t& > .grid > .cell .info {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tmax-width: 100%;\n\t}\n\n\t& > .grid > .cell > .info > .left {\n\t\tmin-width: 0;\n\t}\n\n\t& > .grid > .cell > .info > .right {\n\t\tflex-shrink: 0;\n\t}\n"], ["\n\t& > .topRow {\n\t\tmargin-bottom: 4px;\n\t\tposition: sticky;\n\t\ttop: 0;\n\t\tz-index: 1;\n\t\tbackground: white;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tbackground: ", ";\n\t}\n\n\t& > .topRowBulkAll {\n\t\tmargin-bottom: 5px;\n\t}\n\n\t& > .grid {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(1, 1fr);\n\t\tgrid-column-gap: 8px;\n\t\tgrid-row-gap: 20px;\n\n\t\t@media (min-width: ", ") {\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t};\n\n\t\t@media (min-width: 768px) {\n\t\t\tgrid-template-columns: repeat(3, 1fr);\n\t\t};\n\n\t\t@media (min-width: ", ") {\n\t\t\tgrid-template-columns: repeat(4, 1fr);\n\t\t};\n\n\t\t@media (min-width: 1296px) {\n\t\t\tgrid-template-columns: repeat(5, 1fr);\n\t\t};\n\n\t\t@media (min-width: ", ") {\n\t\t\tgrid-template-columns: repeat(6, 1fr);\n\t\t}\n\t}\n\n\t& > .grid > .cell {\n\t\tmin-width: 0;\n\t}\n\n\t& > .grid > .cell.checked > .image > .checkboxContainer {\n\t\topacity: 1;\n\t}\n\n\t& > .grid > .cell.checked > .image > .checkboxContainer > .mask {\n\t\topacity: 1;\n\t\tborder: 2px solid rgba(255, 255, 255, .5);\n\t\tmargin: 6px;\n\t}\n\n\t& > .grid > .cell > img {\n\t\tmax-width: 100%;\n\t\tmin-width: 100%;\n\t}\n\n\t& > .grid > .cell h2 {\n\t\tmargin: 0;\n\t\tfont-size: 14px;\n\t\tfont-weight: normal;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\toverflow: hidden;\n\t}\n\n\t& > .grid > .cell h3 {\n\t\tmargin: 0;\n\t\tfont-weight: normal;\n\t\tfont-size: 12px;\n\t\tcolor: ", ";\n\t}\n\n\t& > .grid > .cell .image {\n\t\tposition: relative;\n\t}\n\n\t& > .grid > .cell > .image > .checkboxContainer {\n\t\topacity: 0;\n\t\tposition: absolute;\n\t\ttop: 0px;\n\t\tleft: 0px;\n\t\ttransition: opacity 150ms;\n\t}\n\n\t& > .grid > .cell > .image:hover > .checkboxContainer {\n\t\topacity: 1;\n\t}\n\n\t& > .grid > .cell > .image > .checkboxContainer > .mask {\n\t\tposition: absolute;\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tleft: 4px;\n\t\ttop: 4px;\n\t\tmargin: 8px;\n\t\tbackground: white;\n\t\tborder-radius: 3px;\n\t\topacity: .8;\n\t}\n\n\t& > .grid > .cell .image img {\n\t\twidth: 100%;\n\t}\n\n\t& > .grid > .cell .info {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tmax-width: 100%;\n\t}\n\n\t& > .grid > .cell > .info > .left {\n\t\tmin-width: 0;\n\t}\n\n\t& > .grid > .cell > .info > .right {\n\t\tflex-shrink: 0;\n\t}\n"])), theme_1["default"].colors.gray200, MOBILE_BREAKPOINT, RESPONSIVE_BREAKPOINT, BIG_SCREEN_BREAKPOINT, theme_1["default"].colors.gray500);
function DataViewDisplayGrid(props) {
    var _a, _b, _c;
    // TODO VALIDATE PROPS
    if (!props.gridColumnsMap) {
        throw new Error("You must specify gridColumnsMap in order to use the grid view.");
    }
    // execute the transforms in the rows
    var transformedData = (0, react_2.useMemo)(function () {
        return (0, dataViewTools_1.transformRows)(props.data, props.columns);
    }, [props.data, props.columns]);
    var checkboxClick = function (i) { return function () {
        props.onCheckboxClick(i);
    }; };
    var allChecked = props.checked.length > 0 && props.checked.every(function (val) { return val === true; });
    var anyChecked = props.checked.length > 0 && props.checked.some(function (val) { return val === true; });
    var hasTopRow = (props === null || props === void 0 ? void 0 : props.bulkActions.length) > 0 || props.onSortChange !== undefined;
    var hasSortControl = props.onSortChange !== undefined && props.sort !== undefined;
    // To show the bulkAll header we need bulkActions/rowCount/count, more rows than are visible, at least one registered onAllClick, and all checkboxes selected
    var showBulkAll = ((_a = props.bulkActions) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
        props.rowCount > 0 &&
        props.count > props.rowCount &&
        props.bulkActions.some(function (action) { return action.onAllClick !== undefined; }) &&
        allChecked;
    return (react_1["default"].createElement(StyledDiv, null,
        hasTopRow &&
            react_1["default"].createElement("div", { className: "topRow" },
                react_1["default"].createElement("div", { className: "left" },
                    ((_b = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _b === void 0 ? void 0 : _b.length) > 0 &&
                        react_1["default"].createElement(Checkbox_1["default"], { checked: allChecked, onClick: props.onCheckAllClick }),
                    ((_c = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _c === void 0 ? void 0 : _c.length) > 0 && anyChecked &&
                        react_1["default"].createElement(DataViewBulkActionsButtonsRow_1["default"], { data: props.data, checked: props.checked, bulkActions: props.bulkActions, checkedAllPages: props.checkedAllPages })),
                hasSortControl &&
                    react_1["default"].createElement("div", { className: "right" },
                        react_1["default"].createElement(DataViewDisplayGridSortControl_1["default"], { columns: props.columns, sort: props.sort, onSortChange: props.onSortChange }))),
        showBulkAll &&
            react_1["default"].createElement("div", { className: "topRowBulkAll" },
                react_1["default"].createElement(DataViewBulkAllBar_1["default"], { rowCount: props.rowCount, count: props.count, checkedAllPages: props.checkedAllPages, onCheckAllPagesClick: props.onCheckAllPagesClick })),
        react_1["default"].createElement("div", { className: "grid" }, transformedData.map(function (row, i) {
            var _a;
            var image = row[props.gridColumnsMap.image];
            var primary = row[props.gridColumnsMap.primary];
            var secondary = row[props.gridColumnsMap.secondary];
            return (react_1["default"].createElement("div", { className: "\n\t\t\t\t\t\t\t\t\tcell\n\t\t\t\t\t\t\t\t\t".concat(props.checked[i] === true ? "checked" : "", "\n\t\t\t\t\t\t\t\t"), key: i },
                image &&
                    react_1["default"].createElement("div", { className: "image" },
                        ((_a = props.bulkActions) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
                            react_1["default"].createElement("div", { className: "checkboxContainer" },
                                react_1["default"].createElement("div", { className: "mask" }),
                                react_1["default"].createElement(Checkbox_1["default"], { className: "checkbox", checked: props.checked[i] === true, onClick: checkboxClick(i) })),
                        image),
                react_1["default"].createElement("div", { className: "info" },
                    react_1["default"].createElement("div", { className: "left" },
                        primary &&
                            react_1["default"].createElement("h2", null, primary),
                        secondary &&
                            react_1["default"].createElement("h3", null, secondary)),
                    react_1["default"].createElement("div", { className: "right" },
                        react_1["default"].createElement(DataViewActionsButtonRow_1["default"], { primaryActions: props.primaryActions, additionalActions: props.additionalActions, originalRowData: row })))));
        }))));
}
exports["default"] = DataViewDisplayGrid;
var templateObject_1;
