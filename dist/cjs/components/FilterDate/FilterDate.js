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
var React = __importStar(require("react"));
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var date_fns_1 = require("date-fns");
var DataViewPrimaryFilter_1 = __importDefault(require("../DataViewPrimaryFilter"));
var FilterDateDropdownContent_1 = __importDefault(require("./FilterDateDropdownContent"));
var DataViewFilterDropdown_1 = __importDefault(require("../DataViewFilterDropdown"));
var StyledWrapper = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
function isSame(dateLeft, dateRight) {
    return [date_fns_1.isSameDay, date_fns_1.isSameMonth, date_fns_1.isSameYear].every(function (fn) {
        return fn(dateLeft, dateRight);
    });
}
var dateFormat = "M/d/yyyy";
function FilterDate(props) {
    var _a = (0, react_1.useState)(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var onClick = function (evt) {
        setAnchorEl(evt.currentTarget);
    };
    var onClose = function () {
        setAnchorEl(null);
    };
    var hasStart = props.data.rangeStart !== undefined;
    var hasEnd = props.data.rangeEnd !== undefined;
    var startFormat = hasStart ? (0, date_fns_1.format)(props.data.rangeStart, dateFormat) : undefined;
    var endFormat = hasEnd ? (0, date_fns_1.format)(props.data.rangeEnd, dateFormat) : undefined;
    var valueString = "Any";
    if (isSame(props.data.rangeStart, props.data.rangeEnd)) {
        valueString = startFormat;
    }
    else if (hasStart && hasEnd) {
        valueString = "".concat(startFormat, " - ").concat(endFormat);
    }
    else if (hasStart) {
        valueString = "from ".concat(startFormat);
    }
    else if (hasEnd) {
        valueString = "to ".concat(endFormat);
    }
    return (React.createElement(StyledWrapper, null,
        React.createElement(DataViewPrimaryFilter_1["default"], { label: props.label, value: valueString, type: props.type, onRemove: props.onRemove, onClick: onClick }),
        React.createElement(DataViewFilterDropdown_1["default"], { anchorEl: anchorEl, onClose: onClose },
            React.createElement(FilterDateDropdownContent_1["default"], { onClose: onClose, onChange: props.onChange, rangeStart: props.data.rangeStart, rangeEnd: props.data.rangeEnd }))));
}
exports["default"] = FilterDate;
var templateObject_1;
