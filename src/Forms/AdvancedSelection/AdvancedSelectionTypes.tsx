export type optionsWithCategory = { category: string, label: string, value:string};

export interface AdvancedSelectionProps {
  /**
   * Options to be display within the Modal.
   */
  checkboxOptions: optionsWithCategory[];
  /**
   * Descriptive title for the modal displayed on the 
   * header.
   */
  modalTitle: string;
  /**
   * If true, displays a checkbox list for each category
   * otherwise displays a single checkbox list with all the
   * checkboxOptions.
   */
  groupByCategory?: boolean;
}
