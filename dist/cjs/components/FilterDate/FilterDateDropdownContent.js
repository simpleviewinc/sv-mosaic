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
var React = __importStar(require("react"));
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var DataViewFilterDropdownButtons_1 = __importDefault(require("../DataViewFilterDropdownButtons"));
var theme_1 = __importDefault(require("../../theme"));
var i18n_1 = require("../../i18n");
var DatePicker_1 = __importDefault(require("../../forms/FormFieldDate/DatePicker"));
var StyledContents = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t& > .inputRow h5 {\n\t\tmargin-top:0;\n\t\tmargin-bottom: 8px;\n\t}\n\n\t& > .inputRow {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t& > .inputRow div.startRange {\n\t\tmargin-right: 10px;\n\t}\n\n\t& .errorMessage h5 {\n\t\tmargin-top: 0;\n\t\tmargin-bottom: 0;\n\t\tcolor: ", ";\n\t}\n"], ["\n\t& > .inputRow h5 {\n\t\tmargin-top:0;\n\t\tmargin-bottom: 8px;\n\t}\n\n\t& > .inputRow {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t& > .inputRow div.startRange {\n\t\tmargin-right: 10px;\n\t}\n\n\t& .errorMessage h5 {\n\t\tmargin-top: 0;\n\t\tmargin-bottom: 0;\n\t\tcolor: ", ";\n\t}\n"])), theme_1["default"].colors.red);
function FilterDateDropdownContent(props) {
    var _a = (0, react_1.useState)({
        rangeStart: props.rangeStart,
        rangeEnd: props.rangeEnd
    }), state = _a[0], setState = _a[1];
    var t = (0, i18n_1.useMosaicTranslation)().t;
    var errorMessage;
    if (state.rangeStart !== undefined && state.rangeEnd !== undefined && state.rangeEnd < state.rangeStart) {
        errorMessage = "End of range cannot be before start of range.";
    }
    var hasError = errorMessage !== undefined;
    var onApply = function () {
        props.onChange({
            rangeStart: state.rangeStart,
            rangeEnd: state.rangeEnd
        });
        props.onClose();
    };
    var onClear = function () {
        setState(__assign(__assign({}, state), { rangeStart: undefined, rangeEnd: undefined }));
    };
    var getOnChange = function (name) { return function (date) {
        var _a;
        if (date !== null) {
            if (name === "rangeStart") {
                // date start should be set to 00:00
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);
            }
            else {
                // date end should be set to 23:59
                date.setHours(23);
                date.setMinutes(59);
                date.setSeconds(59);
            }
        }
        setState(__assign(__assign({}, state), (_a = {}, _a[name] = date === null ? undefined : date, _a)));
    }; };
    return (React.createElement(StyledContents, null,
        React.createElement("div", { className: "inputRow" },
            React.createElement("div", { className: "startRange" },
                React.createElement("h5", null, "".concat(t("mosaic:common.date_from"))),
                React.createElement(DatePicker_1["default"], { onChange: getOnChange("rangeStart"), value: state.rangeStart || null, fieldDef: {
                        name: "",
                        label: "",
                        type: "",
                        inputSettings: {
                            placeholder: t("mosaic:FilterDate.choose_a_date___")
                        }
                    } })),
            React.createElement("div", { className: "endRange" },
                React.createElement("h5", null, "".concat(t("mosaic:common.date_to"))),
                React.createElement(DatePicker_1["default"], { onChange: getOnChange("rangeEnd"), value: state.rangeEnd || null, fieldDef: {
                        name: "",
                        label: "",
                        type: "",
                        inputSettings: {
                            placeholder: t("mosaic:FilterDate.choose_a_date___")
                        }
                    } }))),
        hasError &&
            React.createElement("div", { className: "errorMessage" },
                React.createElement("h5", null,
                    "Error: ",
                    errorMessage)),
        React.createElement(DataViewFilterDropdownButtons_1["default"], { onApply: onApply, onClear: onClear, onCancel: props.onClose, disableApply: hasError })));
}
exports["default"] = FilterDateDropdownContent;
var templateObject_1;
