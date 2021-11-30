export interface TableProps {
  handleAddElement: () => void;
  handleEdit: (rowIndex: number) => void;
  handleDelete: (rowIndex: number) => void;
  headers: string[];
  rows: any;
}
