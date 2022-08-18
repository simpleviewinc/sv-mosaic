"use strict";
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
// Material UI
var Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
var Chip_styled_1 = require("./Chip.styled");
var Chip = function (props) {
    var label = props.label, required = props.required, disabled = props.disabled, selected = props.selected, onDelete = props.onDelete, onClick = props.onClick;
    return onDelete ? (React.createElement(Chip_styled_1.StyledDeletableChip, { label: React.createElement(Chip_styled_1.StyledLabel, null, label), required: required, disabled: disabled, selected: selected, deleteIcon: React.createElement(Clear_1["default"], { "data-testid": 'delete-icon-test-id' }), onDelete: onDelete })) : (React.createElement(Chip_styled_1.StyledChip, { label: React.createElement(Chip_styled_1.StyledLabel, null, label), required: required, disabled: disabled, selected: selected, clickable: true, disableRipple: true, onClick: onClick }));
};
exports["default"] = Chip;
