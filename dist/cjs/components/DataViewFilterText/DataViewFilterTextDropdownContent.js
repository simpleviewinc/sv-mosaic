"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var jsvalidator_1 = __importDefault(require("jsvalidator"));
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var Button_1 = __importDefault(require("../Button"));
var DataViewFilterDropdownButtons_1 = __importDefault(require("../DataViewFilterDropdownButtons"));
var theme_1 = __importDefault(require("../../theme"));
var i18n_1 = require("../../i18n");
var StyledContents = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t& > .inputRow {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\t\n\t& > .inputRow > .disabled {\n\t\tbackground: #eee;\n\t}\n\t\n\t& > .inputRow > .comparisonButton {\n\t\tmargin-top: 8px;\n\t\tmargin-bottom: 4px;\n\t\tmargin-left: 10px;\n\t}\n\t\n\t& .MuiOutlinedInput-root.Mui-focused fieldset {\n\t\tborder-color: ", ";\n\t}\n\n\t& .MuiInputBase-input {\n\t\tfont-size: 16px;\n\t}\n\t\n\t& .comparisonContainer {\n\t\tborder-left: 1px solid #ccc;\n\t\tmargin: 5px;\n\t\tpadding-left: 5px;\n\t\tflex-shrink: 0;\n\t}\n"], ["\n\t& > .inputRow {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\t\n\t& > .inputRow > .disabled {\n\t\tbackground: #eee;\n\t}\n\t\n\t& > .inputRow > .comparisonButton {\n\t\tmargin-top: 8px;\n\t\tmargin-bottom: 4px;\n\t\tmargin-left: 10px;\n\t}\n\t\n\t& .MuiOutlinedInput-root.Mui-focused fieldset {\n\t\tborder-color: ", ";\n\t}\n\n\t& .MuiInputBase-input {\n\t\tfont-size: 16px;\n\t}\n\t\n\t& .comparisonContainer {\n\t\tborder-left: 1px solid #ccc;\n\t\tmargin: 5px;\n\t\tpadding-left: 5px;\n\t\tflex-shrink: 0;\n\t}\n"])), theme_1["default"].colors.blue);
var existsComparisons = ["exists", "not_exists"];
function DataViewFilterTextDropdownContent(props) {
    jsvalidator_1["default"].validate(props, {
        type: "object",
        schema: [
            {
                name: "value",
                type: "string",
                required: true
            },
            {
                name: "placeholder",
                type: "string",
                required: false
            },
            {
                name: "onChange",
                type: "function",
                required: true
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
                name: "onClose",
                type: "function",
                required: true
            }
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    var _a = (0, react_1.useState)({
        value: props.value,
        comparison: props.comparison
    }), state = _a[0], setState = _a[1];
    var t = (0, i18n_1.useMosaicTranslation)().t;
    var activeComparison = props.comparisons ? props.comparisons.find(function (val) { return val.value === state.comparison; }) : undefined;
    var onApply = function () {
        var cleanValue = state.value.trim();
        if (existsComparisons.includes(state.comparison)) {
            // for these the value is not relevant
            props.onChange({
                comparison: state.comparison
            });
        }
        else if (cleanValue === "") {
            // if the state is empty we wipe the whole object
            props.onChange(undefined);
        }
        else {
            // set both values
            props.onChange({
                value: cleanValue,
                comparison: state.comparison
            });
        }
        props.onClose();
    };
    var onClear = function () {
        setState(__assign(__assign({}, state), { value: "", comparison: "equals" }));
    };
    var onInputChange = function (event) {
        setState(__assign(__assign({}, state), { value: event.target.value }));
    };
    var onKeyPress = function (event) {
        if (event.key === "Enter") {
            onApply();
        }
    };
    var disabled = existsComparisons.includes(state.comparison);
    var comparisonButton;
    if (props.comparisons) {
        var menuItems = props.comparisons.map(function (comparison) {
            return {
                label: comparison.label,
                onClick: function () {
                    var stateChange = __assign({}, state);
                    // for exists and not_exists we want to clear the value
                    if (existsComparisons.includes(comparison.value) === true) {
                        stateChange.value = "";
                    }
                    stateChange.comparison = comparison.value;
                    setState(stateChange);
                }
            };
        });
        comparisonButton = (react_1["default"].createElement(Button_1["default"], { className: "comparisonButton", label: activeComparison.label, variant: "text", color: "black", iconPosition: "right", mIcon: ExpandMore_1["default"], menuItems: menuItems }));
    }
    return (react_1["default"].createElement(StyledContents, null,
        react_1["default"].createElement("div", { className: "inputRow" },
            react_1["default"].createElement(TextField_1["default"], { autoFocus: true, className: disabled ? "disabled" : "", disabled: disabled, placeholder: props.placeholder || t("mosaic:common.filter___"), margin: "dense", value: state.value, variant: "outlined", onChange: onInputChange, onKeyPress: onKeyPress }),
            comparisonButton),
        react_1["default"].createElement(DataViewFilterDropdownButtons_1["default"], { onApply: onApply, onClear: onClear, onCancel: props.onClose })));
}
exports["default"] = DataViewFilterTextDropdownContent;
var templateObject_1;
