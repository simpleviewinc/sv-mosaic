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
var ArrowDownward_1 = __importDefault(require("@mui/icons-material/ArrowDownward"));
var ArrowUpward_1 = __importDefault(require("@mui/icons-material/ArrowUpward"));
var MenuSelect_1 = __importDefault(require("../MenuSelect"));
var Button_1 = __importDefault(require("../Button"));
var StyledDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", "\n\t& > .directionButton svg { font-size: 20px; }\n"], ["\n\t" /* The arrow is comically large without this */, "\n\t& > .directionButton svg { font-size: 20px; }\n"])), /* The arrow is comically large without this */ "");
function DataViewDisplayGridSortControl(props) {
    var sortColumns = (0, react_1.useMemo)(function () {
        return props.columns.filter(function (val) { return val.sortable === true; });
    }, [props.columns]);
    var labelOptions = (0, react_1.useMemo)(function () {
        return sortColumns.map(function (val) {
            return {
                label: val.label,
                value: val.name
            };
        });
    }, [sortColumns]);
    var activeColumn = labelOptions.find(function (val) { return val.value === props.sort.name; });
    var Icon = props.sort.dir === "asc" ? ArrowUpward_1["default"] : ArrowDownward_1["default"];
    var onColumnChange = (0, react_1.useCallback)(function (name) {
        props.onSortChange({
            name: name,
            dir: props.sort.dir
        });
    }, [props.sort, props.onSortChange]);
    var onDirectionChange = (0, react_1.useCallback)(function (dir) {
        var newDir = props.sort.dir === "asc" ? "desc" : "asc";
        props.onSortChange({
            name: props.sort.name,
            dir: newDir
        });
    }, [props.sort, props.onSortChange]);
    return (React.createElement(StyledDiv, null,
        React.createElement(Button_1["default"], { label: activeColumn.label, variant: "text", color: "black", size: "small", menuContent: React.createElement(MenuSelect_1["default"], { options: labelOptions, value: props.sort.name, onChange: onColumnChange }) }),
        React.createElement(Button_1["default"], { className: "directionButton", variant: "icon", color: "black", size: "small", mIcon: Icon, onClick: onDirectionChange })));
}
exports["default"] = (0, react_1.memo)(DataViewDisplayGridSortControl);
var templateObject_1;
