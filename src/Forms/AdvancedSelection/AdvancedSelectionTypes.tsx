import { FieldProps } from '@root/components/Field';

export type optionsWithCategory = { category?: string, label: string, value:string};

export interface AdvancedSelectionProps extends FieldProps {
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
  /**
   * Used to get the selected options on the parent component.
   */
  onChange: (selectedOptions: optionsWithCategory[]) => void; 
}
