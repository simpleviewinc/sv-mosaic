import { Options } from "@root/forms/MenuFormFieldCard/MenuFormFieldCardTypes";

export type AssetProperties = {
  /**
   * Name of the asset property.
   */
  label: string;
  /**
   * Value of the asset property.
   */
  value: string;
};

export type ImageVideoDocumentLinkBrowsingDef = {
  /**
   * Callback executed when the remove button is clicked.
   * This function should empty the assetProperties array
   * to go the set up stage.
   */
  handleRemove?: () => void;
  /**
   * Callback executed when the document icon clicked.
   * It should fill the assetProperties array with the document
   * properties.
   */
  handleSetDocument?: () => Promise<void>;
  /**
   * Callback executed when the image icon clicked.
   * It should fill the assetProperties array with the document
   * properties.
   */
  handleSetImage: () => Promise<void>;
  /**
   * Callback executed when the video icon is clicked.
   * It should fill the assetProperties array with the document
   * properties.
   */
  handleSetVideo?: () => Promise<void>;
  /**
   * Callback executed when the link icon is clicked.
   * It should fill the assetProperties array with the document
   * properties.
   */
  handleSetLink?: () => Promise<void>;
  /**
   * List of menu options that can be executed by the component.
   */
  options?: Options[];
  /**
   * If the asset contains an image, its source should be passed
   * via this src prop.
   */
  src?: string;
};

export interface BrowseOptionProps {
	assetType: string;
	disabled: boolean;
	handleBrowse: (e: React.MouseEvent<HTMLElement>, assetType: string) => Promise<void>;
}

/**
 * Return type of the useImageVideoLinkDocumentBrowsing custom hook.
 */
export type UseImageVideoLinkDocumentBrowsingReturn = {
  setImage: ImageVideoDocumentLinkBrowsingDef["handleSetImage"];
  setVideo: ImageVideoDocumentLinkBrowsingDef["handleSetVideo"];
  setDocument: ImageVideoDocumentLinkBrowsingDef["handleSetDocument"];
  setLink: ImageVideoDocumentLinkBrowsingDef["handleSetLink"];
  handleRemove: ImageVideoDocumentLinkBrowsingDef["handleRemove"];
};
