"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var jsvalidator_1 = __importDefault(require("jsvalidator"));
var ArrowDownward_1 = __importDefault(require("@mui/icons-material/ArrowDownward"));
var ArrowUpward_1 = __importDefault(require("@mui/icons-material/ArrowUpward"));
var Checkbox_1 = __importDefault(require("../Checkbox"));
var DataViewColumnControl_1 = __importDefault(require("./DataViewColumnControl"));
var DataViewBulkActionsButtonsRow_1 = __importDefault(require("../DataView/DataViewBulkActionsButtonsRow"));
var DataViewBulkAllBar_1 = __importDefault(require("../DataView/DataViewBulkAllBar"));
var theme_1 = __importDefault(require("../../theme"));
var i18n_1 = require("../../i18n");
var StyledWrapper = styled_components_1["default"].thead(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ttext-align: left;\n"], ["\n\ttext-align: left;\n"])));
var StyledTh = styled_components_1["default"].th(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tfont-size: 14px;\n\ttext-align: left;\n\tfont-weight: 400;\n\tpadding: 5px 0px;\n\theight: 40px;\n\tcolor: ", ";\n\tposition: sticky;\n\ttop: 0;\n\tz-index: 2;\n\tbackground-color: ", ";\n\twhite-space: nowrap;\n\n\t", "\n\t&:after {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tborder-bottom: ", ";\n\t\tpointer-events: none;\n\t}\n\t\n\t& > .columnHeader {\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t}\n\n\t&.paddingRight {\n\t\tpadding-right: 12px;\n\t}\n\n\t&.paddingLeft {\n\t\tpadding-left: 12px;\n\t}\n\n\t&.sortable > .columnHeader {\n\t\tcursor: pointer;\n\t}\n\t\n\t& > .columnHeader > .icon {\n\t\tvisibility: hidden;\n\t\tfont-size: 18px;\n\t\tmargin-left: 0.25rem;\n\t\tmargin-top: 1px;\n\t}\n\t\n\t&.active {\n\t\tcolor: ", ";\n\t\tfont-weight: 700;\n\t}\n\n\t&.active:after {\n\t\tborder-bottom: 1px solid ", ";\n\t}\n\t\n\t&.active > .columnHeader > .icon {\n\t\tvisibility: visible;\n\t}\n\t\n\t&.active > .columnHeader:hover > .icon {\n\t\tcolor: black;\n\t}\n\t\n\t& > .columnHeader:hover > .icon {\n\t\tvisibility: visible;\n\t\tcolor: ", ";\n\t}\n\t\n\t&.bulk {\n\t\twidth: 52px;\n\t}\n"], ["\n\tfont-size: 14px;\n\ttext-align: left;\n\tfont-weight: 400;\n\tpadding: 5px 0px;\n\theight: 40px;\n\tcolor: ", ";\n\tposition: sticky;\n\ttop: 0;\n\tz-index: 2;\n\tbackground-color: ", ";\n\twhite-space: nowrap;\n\n\t" /* Borders on sticky elements don't carry through, so we put them on the :after element */, "\n\t&:after {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tborder-bottom: ", ";\n\t\tpointer-events: none;\n\t}\n\t\n\t& > .columnHeader {\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t}\n\n\t&.paddingRight {\n\t\tpadding-right: 12px;\n\t}\n\n\t&.paddingLeft {\n\t\tpadding-left: 12px;\n\t}\n\n\t&.sortable > .columnHeader {\n\t\tcursor: pointer;\n\t}\n\t\n\t& > .columnHeader > .icon {\n\t\tvisibility: hidden;\n\t\tfont-size: 18px;\n\t\tmargin-left: 0.25rem;\n\t\tmargin-top: 1px;\n\t}\n\t\n\t&.active {\n\t\tcolor: ", ";\n\t\tfont-weight: 700;\n\t}\n\n\t&.active:after {\n\t\tborder-bottom: 1px solid ", ";\n\t}\n\t\n\t&.active > .columnHeader > .icon {\n\t\tvisibility: visible;\n\t}\n\t\n\t&.active > .columnHeader:hover > .icon {\n\t\tcolor: black;\n\t}\n\t\n\t& > .columnHeader:hover > .icon {\n\t\tvisibility: visible;\n\t\tcolor: ", ";\n\t}\n\t\n\t&.bulk {\n\t\twidth: 52px;\n\t}\n"])), theme_1["default"].colors.gray700, theme_1["default"].colors.gray200, /* Borders on sticky elements don't carry through, so we put them on the :after element */ "", theme_1["default"].colors.gray200, theme_1["default"].colors.gray800, theme_1["default"].colors.gray800, theme_1["default"].colors.gray600);
function flipDir(sort) {
    return sort === "asc" ? "desc" : "asc";
}
function DataViewTHead(props) {
    var _a, _b, _c, _d, _e;
    jsvalidator_1["default"].validate(props, {
        type: "object",
        schema: [
            {
                name: "checked",
                type: "array",
                required: true
            },
            {
                name: "checkedAllPages",
                type: "boolean",
                required: true
            },
            {
                name: "bulkActions",
                type: "array"
            },
            {
                name: "columns",
                type: "array"
            },
            {
                name: "allColumns",
                type: "array"
            },
            {
                name: "data",
                type: "array"
            },
            {
                name: "sort",
                type: "object"
            },
            {
                name: "rowCount",
                type: "number"
            },
            {
                name: "count",
                type: "number"
            },
            {
                name: "onSortChange",
                type: "function"
            },
            {
                name: "onCheckAllClick",
                type: "function"
            },
            {
                name: "onCheckAllPagesClick",
                type: "function"
            },
            {
                name: "onColumnsChange",
                type: "function"
            }
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    var t = (0, i18n_1.useMosaicTranslation)().t;
    var allChecked = props.checked.length > 0 && props.checked.every(function (val) { return val === true; });
    var anyChecked = props.checked.length > 0 && props.checked.some(function (val) { return val === true; });
    var columnCount = (((_a = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _a === void 0 ? void 0 : _a.length) > 0 ? 1 : 0) + 1 + props.columns.length;
    // To show the bulkAll header we need bulkActions/rowCount/count, more rows than are visible, at least one registered onAllClick, and all checkboxes selected
    var showBulkAll = ((_b = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _b === void 0 ? void 0 : _b.length) > 0 &&
        props.rowCount > 0 &&
        props.count > props.rowCount &&
        props.bulkActions.some(function (action) { return action.onAllClick !== undefined; }) &&
        allChecked;
    return (react_1["default"].createElement(StyledWrapper, null,
        react_1["default"].createElement("tr", null,
            ((_c = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _c === void 0 ? void 0 : _c.length) > 0 &&
                react_1["default"].createElement(StyledTh, { key: "_bulk", className: "bulk" },
                    react_1["default"].createElement(Checkbox_1["default"], { checked: allChecked, onClick: props.onCheckAllClick })),
            ((_d = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _d === void 0 ? void 0 : _d.length) > 0 && anyChecked &&
                react_1["default"].createElement(StyledTh, { key: "_bulk_actions", colSpan: props.columns.length + 1 },
                    react_1["default"].createElement(DataViewBulkActionsButtonsRow_1["default"], { data: props.data, checked: props.checked, checkedAllPages: props.checkedAllPages, bulkActions: props.bulkActions })),
            !anyChecked &&
                react_1["default"].createElement(StyledTh, { key: "_actions", className: "\n\t\t\t\t\t\tpaddingRight\n\t\t\t\t\t\t".concat(!((_e = props === null || props === void 0 ? void 0 : props.bulkActions) === null || _e === void 0 ? void 0 : _e.length) ? "paddingLeft" : "", "\n\t\t\t\t\t") },
                    props.onColumnsChange !== undefined &&
                        react_1["default"].createElement(DataViewColumnControl_1["default"], { onChange: props.onColumnsChange, columns: props.columns, allColumns: props.allColumns }),
                    // We need to indent the actions by 11px to align with the buttons underneath
                    !props.onColumnsChange &&
                        react_1["default"].createElement("span", { style: { paddingLeft: "11px" } }, t("mosaic:DataView.actions"))),
            !anyChecked &&
                props.columns.map(function (column) {
                    var onClick = function () {
                        props.onSortChange({
                            name: column.name,
                            dir: clickDir
                        });
                    };
                    var active;
                    var Icon;
                    var clickDir;
                    if (column.sortable) {
                        active = props.sort.name === column.name;
                        Icon = active && props.sort.dir === "desc" ? ArrowDownward_1["default"] : ArrowUpward_1["default"];
                        clickDir = active ? flipDir(props.sort.dir) : "asc";
                    }
                    return (react_1["default"].createElement(StyledTh, { key: column.name, className: "\n\t\t\t\t\t\t\t\t\t".concat(column.sortable ? "sortable" : "", "\n\t\t\t\t\t\t\t\t\t").concat(active ? "active" : "", "\n\t\t\t\t\t\t\t\t\tpaddingRight\n\t\t\t\t\t\t\t\t") },
                        react_1["default"].createElement("span", { className: "columnHeader", onClick: column.sortable ? onClick : undefined },
                            column.label,
                            column.sortable &&
                                react_1["default"].createElement(Icon, { className: "icon" }))));
                })),
        showBulkAll &&
            react_1["default"].createElement("tr", null,
                react_1["default"].createElement("th", { colSpan: columnCount },
                    react_1["default"].createElement(DataViewBulkAllBar_1["default"], { rowCount: props.rowCount, count: props.count, checkedAllPages: props.checkedAllPages, onCheckAllPagesClick: props.onCheckAllPagesClick })))));
}
exports["default"] = DataViewTHead;
var templateObject_1, templateObject_2;
