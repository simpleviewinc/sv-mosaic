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
}

export interface TableProps {
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
  rows: TableRow[];
}
