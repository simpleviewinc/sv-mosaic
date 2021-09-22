export interface ChipsProps {
  /**
   * Significant name related to its text area.
   */
  label: string;
  /**
   * Indicates whether the text area is required or not.
   */
  required?: boolean;
  /**
   * Indicates whether the text area can be written on or readonly.
   */
  disabled?: boolean;
  /**
   * Indicates if the option has been selected from the list of chips.
   */
  selected?: boolean;
  /**
   * Inherit prop from MUI Chip component. Callback function fired when 
   * the delete icon is clicked. If set, the delete icon will be shown.
   */
  onDelete?: React.EventHandler<any>;
  /**
   * Function to be executed as callback when clicking on a Chip
   */
  onClick?: (...args: any) => void;
}
