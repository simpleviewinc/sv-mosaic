import { MosaicMIcon } from '@root/types';
export declare type TableRow = {
    /**
     * Unique identifier. Used as an
     * identifier for the draggable item.
     */
    id: string;
    /**
     * Data that is shown in the table.
     */
    items: string[];
};
export declare type Actions = {
    /**
     * Name of the menu option.
     */
    label: string;
    /**
     * MUI Icon
     */
    icon: MosaicMIcon;
    /**
     * Callback function that will be triggered
     * when the icon for the respective action is clicked.
     */
    actionFnc: (rowIndex: number) => void;
};
export declare type TableDef = {
    /**
     * Possible actions that the table could execute and display.
     */
    extraActions?: Actions[];
    /**
     * Used to create a new row.
     */
    handleAddElement: () => void;
    /**
     * Used to define how that edition should happen.
     */
    handleEdit: (rowIndex: number) => void;
    /**
     * It can be used to show some kind of confirmation
     * before removing the row.
     */
    handleDelete?: (rowIndex: number) => void;
    /**
     * Table headers.
     */
    headers: string[];
};
export declare type TableDataState = {
    table: TableRow[];
};
export declare type UseTableReturnType = {
    addTableRow: TableDef['handleAddElement'];
    editAction: TableDef['handleEdit'];
    extraActionsTable: TableDef['extraActions'];
};
