import * as React from "react";
import { memo, useMemo, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// Components
import AddIcon from "@mui/icons-material/Add";
import Button from "../../components/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditIcon from "@mui/icons-material/Edit";
// Styles
import { AddButton, AddElementContainer, Container, StyledIconButton, StyledTable, StyledTr, TableContainer, Td, TdDrag, Th, ThDrag, THead, TrHead, } from "./Table.styled";
const FormFieldTable = (props) => {
    var _a, _b;
    const { fieldDef, value, onChange } = props;
    // State varialbles
    const [isDragging, setIsDragging] = useState(false);
    const [rows, setRows] = useState([]);
    useMemo(() => {
        if (value)
            setRows(value);
        else
            setRows([]);
    }, [value]);
    /**
     * When a drag has ended the rows are updated
     * @param e drag event.
     */
    const handleDragEnd = (e) => {
        if (!e.destination)
            return;
        const rowDataCopy = [...rows];
        const [source_data] = rowDataCopy.splice(e.source.index, 1);
        rowDataCopy.splice(e.destination.index, 0, source_data);
        setIsDragging(false);
        setRows(rowDataCopy);
        onChange(rowDataCopy);
    };
    /**
   * When a row is being dragged the dragging state is set to true.
   */
    const handleDragStart = () => {
        setIsDragging(true);
    };
    /**
   * Removes a row and if an external delete callback is passed
   * through the props, it will be executed.
   * @param rowIndex of the row that is going to be deleted.
   */
    const deleteRow = (rowIndex) => {
        var _a, _b;
        if ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.handleDelete) {
            (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.handleDelete(rowIndex);
        }
        let rowDataCopy = [...rows];
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
    const renderEmptyHeaders = useMemo(() => {
        var _a;
        const emptyHeaders = [];
        const itemsLengths = rows === null || rows === void 0 ? void 0 : rows.map((row) => { var _a, _b; return ((_a = row === null || row === void 0 ? void 0 : row.items) === null || _a === void 0 ? void 0 : _a.length) ? (_b = row === null || row === void 0 ? void 0 : row.items) === null || _b === void 0 ? void 0 : _b.length : 0; });
        const maxRowItems = Math.max(...itemsLengths);
        const headersToAdd = maxRowItems - ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.headers.length);
        if (headersToAdd > 0) {
            for (let i = 0; i < headersToAdd; i++) {
                emptyHeaders.push(React.createElement(Th, { key: `empty-header-${i}` }));
            }
        }
        return emptyHeaders;
    }, [(_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.headers, rows]);
    /**
     * Executes the add element callback function
     * when the add button is clicked.
     * @param e onClick event
     */
    const addElement = (e) => {
        var _a;
        e.preventDefault();
        (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.handleAddElement();
    };
    return (React.createElement(React.Fragment, null, (rows === null || rows === void 0 ? void 0 : rows.length) === 0 ? (React.createElement(AddElementContainer, null,
        React.createElement(Button, { color: "gray", variant: "outlined", label: "ADD ELEMENT", muiAttrs: { disableRipple: true }, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, onClick: (e) => addElement(e) }))) : (React.createElement(TableContainer, null,
        React.createElement(AddButton, { color: "teal", variant: "text", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, muiAttrs: { disableRipple: true }, mIcon: AddIcon, onClick: (e) => addElement(e), label: "Add Element" }),
        React.createElement(DragDropContext, { onDragStart: handleDragStart, onDragEnd: handleDragEnd },
            React.createElement(Container, null,
                React.createElement(StyledTable, null,
                    React.createElement(THead, null,
                        React.createElement(TrHead, null,
                            React.createElement(ThDrag, null),
                            React.createElement(Th, null, "Actions"), (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 :
                            _b.headers.map((header, index) => (React.createElement(Th, { key: `${header}-${index}` }, header))),
                            renderEmptyHeaders)),
                    React.createElement(Droppable, { droppableId: "droppable-rows" }, (provider) => (React.createElement("tbody", { ref: provider.innerRef, ...provider.droppableProps }, rows === null || rows === void 0 ? void 0 :
                        rows.map((row, rowIndex) => (React.createElement(Draggable, { key: row.id, draggableId: row.id ? row.id : rowIndex, index: rowIndex, isDragDisabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled }, (provider) => {
                            var _a, _b, _c;
                            return (React.createElement(StyledTr, { ...provider.draggableProps, ref: provider.innerRef, isDragging: isDragging },
                                React.createElement(TdDrag, { ...provider.dragHandleProps },
                                    React.createElement(DragIndicatorIcon, null)),
                                React.createElement(Td, null,
                                    React.createElement(StyledIconButton, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, color: "gray", variant: "icon", mIcon: EditIcon, onClick: () => {
                                            var _a;
                                            return (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.handleEdit(rowIndex);
                                        } }),
                                    React.createElement(StyledIconButton, { color: "gray", variant: "icon", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, mIcon: DeleteIcon, onClick: () => deleteRow(rowIndex) }),
                                    ((_b = (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.extraActions) === null || _b === void 0 ? void 0 : _b.length) >
                                        0 && (React.createElement(React.Fragment, null, (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.extraActions.map((action, index) => (React.createElement(StyledIconButton, { color: "gray", variant: "icon", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, key: `${action.label}-${index}`, mIcon: action.icon, onClick: () => action.actionFnc(rowIndex) })))))),
                                row.items.map((item) => (React.createElement(Td, { key: item }, item)))));
                        }))),
                        provider.placeholder))))))))));
};
export default memo(FormFieldTable);
