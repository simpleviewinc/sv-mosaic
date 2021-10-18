type AssetProperties = {
  /**
   * Name of the asset property
   */
  label: string;
  /**
   * Value of the asset property
   */
  value: string;
}

export interface ImageVideoDocumentSetUpProps {
  /**
   * Array of properties that an asset like an image,
   * document or video may contain.
   */
  assetProperties: AssetProperties[];
  /**
  * Meaningful name related to the field.
  */
  label?: string;
  /**
   * Callback executed when the option of edit is clicked.
   */
  handleBrowse?: () => void;
  /**
   * Callback executed when the edit option is clicked.
   */
  handleEdit?: () => void;
  /**
   * Callback executed when the remove button is clicked.
   * This function should empty the assetProperties array
   * to go the set up stage.
   */
  handleRemove?: () => void;
  /**
   * Callback executed when the set document button is clicked.
   * It should fill the assetProperties array with the document
   * properties.
   */
  handleSetDocument?: () => void;
  /**
   * Callback executed when the set document button is clicked.
   * It should fill the assetProperties array with the document
   * properties.
   */
  handleSetImage: () => void;
  /**
   * Callback executed when the set document button is clicked.
   * It should fill the assetProperties array with the document
   * properties.
   */
  handleSetVideo?: () => void;
  /**
   * Callback executed when the translate option is clicked.
   */
  handleTranslate?: () => void;
  /**
   * If the asset contains an image, its source should be passed
   * via this src prop.
   */
  src?: string;
}
