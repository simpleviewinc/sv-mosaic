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
// Components
var Col_1 = __importDefault(require("./Col"));
var StyledRow = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tmargin: 0px -20px;\n"], ["\n\tdisplay: flex;\n\tmargin: 0px -20px;\n"])));
var Row = function (props) {
    var row = props.row, rowIdx = props.rowIdx, state = props.state, fieldsDef = props.fieldsDef, dispatch = props.dispatch, sectionIdx = props.sectionIdx;
    return (React.createElement(StyledRow, null, row.map(function (col, i) {
        return (React.createElement(Col_1["default"], { key: "col-".concat(i), colIdx: i, rowIdx: rowIdx, sectionIdx: sectionIdx, col: col, state: state, fieldsDef: fieldsDef, dispatch: dispatch, colsInRow: row.length }));
    })));
};
exports["default"] = (0, react_1.memo)(Row);
var templateObject_1;
