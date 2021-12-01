import { MosaicMIcon } from '@root/types';

export type TableRow = {
  /**
   * Unique identifier. It is used as a value for 
   * the react key prop and as an identifier for the 
   * draggable item.  
   */
  id: string;
  /**
   * Data that is shown in the table.
   */
  items: string[];
};

export type Actions = {
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

export interface TableProps {
  /**
   * Possible actions that the table could execute and display.
   */
  actions?: Actions[];
  /**
   * Disable all clickable elements.
   */
  disabled?: boolean;
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
  /**
   * Row data
   */
  value: TableRow[];
  /**
   * Used to keep track of row data changes
   */
  onChange?: (data: TableRow[]) => void;
}
