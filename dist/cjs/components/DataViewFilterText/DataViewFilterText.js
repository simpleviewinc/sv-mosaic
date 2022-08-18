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
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var jsvalidator_1 = __importDefault(require("jsvalidator"));
var DataViewPrimaryFilter_1 = __importDefault(require("../DataViewPrimaryFilter"));
var DataViewFilterTextDropdownContent_1 = __importDefault(require("./DataViewFilterTextDropdownContent"));
var DataViewFilterDropdown_1 = __importDefault(require("../DataViewFilterDropdown"));
var StyledWrapper = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\n"], ["\n\t\n"])));
var validComparisons = [
    { label: "Contains", value: "contains" },
    { label: "Not Contains", value: "not_contains" },
    { label: "Equals", value: "equals" },
    { label: "Not Equal", value: "not_equals" },
    { label: "Exists", value: "exists" },
    { label: "Not Exists", value: "not_exists" }
];
var validComparisonNames = validComparisons.map(function (val) { return val.value; });
var comparisonMap = {
    equals: "",
    not_equals: "!=",
    contains: "~",
    not_contains: "!~"
};
function DataViewFilterText(props) {
    var _a;
    jsvalidator_1["default"].validate(props, {
        type: "object",
        schema: [
            {
                name: "label",
                type: "string",
                required: true
            },
            {
                name: "data",
                type: "object",
                schema: [
                    { name: "value", type: "string" },
                    { name: "comparison", type: "string", "enum": validComparisonNames }
                ],
                allowExtraKeys: false,
                required: true
            },
            {
                name: "comparisonDefault",
                type: "string",
                required: false
            },
            {
                name: "type",
                type: "string",
                required: true
            },
            {
                name: "args",
                type: "object",
                schema: [
                    {
                        name: "comparisons",
                        type: "array",
                        schema: {
                            type: "string",
                            "enum": validComparisonNames
                        }
                    },
                    {
                        name: "placeholder",
                        type: "string",
                        required: false
                    }
                ],
                allowExtraKeys: false
            },
            {
                name: "onRemove",
                type: "function",
                required: true
            },
            {
                name: "onChange",
                type: "function",
                required: true
            }
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    var _b = (0, react_1.useState)(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var comparison = props.data.comparison || (props.comparisonDefault || "equals");
    var value = props.data.value || "";
    var onClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var onClose = function () {
        setAnchorEl(null);
    };
    // based on the state lets figure out what our value should be
    var valueString;
    if (comparison === "exists") {
        valueString = "EXISTS";
    }
    else if (comparison === "not_exists") {
        valueString = "NOT EXISTS";
    }
    else if (value === "") {
        valueString = "";
    }
    else {
        valueString = "".concat(comparisonMap[comparison], " \"").concat(value, "\"");
    }
    // filter the valid comparisons based on what the developer is allowing
    var activeComparisons = props.args && props.args.comparisons ? validComparisons.filter(function (val) { return props.args.comparisons.includes(val.value); }) : undefined;
    return (react_1["default"].createElement(StyledWrapper, null,
        react_1["default"].createElement(DataViewPrimaryFilter_1["default"], { label: props.label, value: valueString, type: props.type, onRemove: props.onRemove, onClick: onClick }),
        react_1["default"].createElement(DataViewFilterDropdown_1["default"], { anchorEl: anchorEl, onClose: onClose },
            react_1["default"].createElement(DataViewFilterTextDropdownContent_1["default"], { value: value, onChange: props.onChange, comparison: comparison, comparisons: activeComparisons, onClose: onClose, placeholder: (_a = props.args) === null || _a === void 0 ? void 0 : _a.placeholder }))));
}
exports["default"] = DataViewFilterText;
var templateObject_1;
