"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
// Components
var Add_1 = __importDefault(require("@mui/icons-material/Add"));
var Button_1 = __importDefault(require("../../components/Button"));
var Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
var DragIndicator_1 = __importDefault(require("@mui/icons-material/DragIndicator"));
var Edit_1 = __importDefault(require("@mui/icons-material/Edit"));
// Styles
var Table_styled_1 = require("./Table.styled");
var FormFieldTable = function (props) {
    var _a, _b;
    var fieldDef = props.fieldDef, value = props.value, onChange = props.onChange;
    // State varialbles
    var _c = (0, react_1.useState)(false), isDragging = _c[0], setIsDragging = _c[1];
    var _d = (0, react_1.useState)([]), rows = _d[0], setRows = _d[1];
    (0, react_1.useMemo)(function () {
        if (value)
            setRows(value);
        else
            setRows([]);
    }, [value]);
    /**
     * When a drag has ended the rows are updated
     * @param e drag event.
     */
    var handleDragEnd = function (e) {
        if (!e.destination)
            return;
        var rowDataCopy = __spreadArray([], rows, true);
        var source_data = rowDataCopy.splice(e.source.index, 1)[0];
        rowDataCopy.splice(e.destination.index, 0, source_data);
        setIsDragging(false);
        setRows(rowDataCopy);
        onChange(rowDataCopy);
    };
    /**
   * When a row is being dragged the dragging state is set to true.
   */
    var handleDragStart = function () {
        setIsDragging(true);
    };
    /**
   * Removes a row and if an external delete callback is passed
   * through the props, it will be executed.
   * @param rowIndex of the row that is going to be deleted.
   */
    var deleteRow = function (rowIndex) {
        var _a, _b;
        if ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.handleDelete) {
            (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.handleDelete(rowIndex);
        }
        var rowDataCopy = __spreadArray([], rows, true);
        rowDataCopy.splice(rowIndex, 1);
        if (rowDataCopy.length === 0)
            rowDataCopy = undefined;
        setRows(rowDataCopy);
        onChange(rowDataCopy);
    };
    /**
     * Renders empty row headers when the lenght of
     * the array of headers does not match with the
     * number of cells of a row.
     */
    var renderEmptyHeaders = (0, react_1.useMemo)(function () {
        var _a;
        var emptyHeaders = [];
        var itemsLengths = rows === null || rows === void 0 ? void 0 : rows.map(function (row) { var _a, _b; return ((_a = row === null || row === void 0 ? void 0 : row.items) === null || _a === void 0 ? void 0 : _a.length) ? (_b = row === null || row === void 0 ? void 0 : row.items) === null || _b === void 0 ? void 0 : _b.length : 0; });
        var maxRowItems = Math.max.apply(Math, itemsLengths);
        var headersToAdd = maxRowItems - ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.headers.length);
        if (headersToAdd > 0) {
            for (var i = 0; i < headersToAdd; i++) {
                emptyHeaders.push(React.createElement(Table_styled_1.Th, { key: "empty-header-".concat(i) }));
            }
        }
        return emptyHeaders;
    }, [(_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.headers, rows]);
    /**
     * Executes the add element callback function
     * when the add button is clicked.
     * @param e onClick event
     */
    var addElement = function (e) {
        var _a;
        e.preventDefault();
        (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.handleAddElement();
    };
    return (React.createElement(React.Fragment, null, (rows === null || rows === void 0 ? void 0 : rows.length) === 0 ? (React.createElement(Table_styled_1.AddElementContainer, null,
        React.createElement(Button_1["default"], { color: "gray", variant: "outlined", label: "ADD ELEMENT", muiAttrs: { disableRipple: true }, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, onClick: function (e) { return addElement(e); } }))) : (React.createElement(Table_styled_1.TableContainer, null,
        React.createElement(Table_styled_1.AddButton, { color: "teal", variant: "text", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, muiAttrs: { disableRipple: true }, mIcon: Add_1["default"], onClick: function (e) { return addElement(e); }, label: "Add Element" }),
        React.createElement(react_beautiful_dnd_1.DragDropContext, { onDragStart: handleDragStart, onDragEnd: handleDragEnd },
            React.createElement(Table_styled_1.Container, null,
                React.createElement(Table_styled_1.StyledTable, null,
                    React.createElement(Table_styled_1.THead, null,
                        React.createElement(Table_styled_1.TrHead, null,
                            React.createElement(Table_styled_1.ThDrag, null),
                            React.createElement(Table_styled_1.Th, null, "Actions"), (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 :
                            _b.headers.map(function (header, index) { return (React.createElement(Table_styled_1.Th, { key: "".concat(header, "-").concat(index) }, header)); }),
                            renderEmptyHeaders)),
                    React.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "droppable-rows" }, function (provider) { return (React.createElement("tbody", __assign({ ref: provider.innerRef }, provider.droppableProps), rows === null || rows === void 0 ? void 0 :
                        rows.map(function (row, rowIndex) { return (React.createElement(react_beautiful_dnd_1.Draggable, { key: row.id, draggableId: row.id ? row.id : rowIndex, index: rowIndex, isDragDisabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled }, function (provider) {
                            var _a, _b, _c;
                            return (React.createElement(Table_styled_1.StyledTr, __assign({}, provider.draggableProps, { ref: provider.innerRef, isDragging: isDragging }),
                                React.createElement(Table_styled_1.TdDrag, __assign({}, provider.dragHandleProps),
                                    React.createElement(DragIndicator_1["default"], null)),
                                React.createElement(Table_styled_1.Td, null,
                                    React.createElement(Table_styled_1.StyledIconButton, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, color: "gray", variant: "icon", mIcon: Edit_1["default"], onClick: function () {
                                            var _a;
                                            return (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.handleEdit(rowIndex);
                                        } }),
                                    React.createElement(Table_styled_1.StyledIconButton, { color: "gray", variant: "icon", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, mIcon: Delete_1["default"], onClick: function () { return deleteRow(rowIndex); } }),
                                    ((_b = (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.extraActions) === null || _b === void 0 ? void 0 : _b.length) >
                                        0 && (React.createElement(React.Fragment, null, (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.extraActions.map(function (action, index) { return (React.createElement(Table_styled_1.StyledIconButton, { color: "gray", variant: "icon", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, key: "".concat(action.label, "-").concat(index), mIcon: action.icon, onClick: function () {
                                            return action.actionFnc(rowIndex);
                                        } })); })))),
                                row.items.map(function (item) { return (React.createElement(Table_styled_1.Td, { key: item }, item)); })));
                        })); }),
                        provider.placeholder)); }))))))));
};
exports["default"] = (0, react_1.memo)(FormFieldTable);
