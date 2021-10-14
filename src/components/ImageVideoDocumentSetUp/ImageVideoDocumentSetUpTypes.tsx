type AssetProperties = {
  label: string;
  value: string;
}

export interface ImageVideoDocumentSetUpProps extends HandleSetImage, HandleSetVideo {
  assetObject: AssetProperties[];
  label?: string;
  handleBrowse?: () => void;
  handleEdit?: () => void;
  handleRemove?: () => void;
  handleSetDocument?: () => void;
  handleTranslate?: () => void;
  src?: string;
}

export interface HandleSetImage {
  handleSetImage?: () => void;
}

export interface HandleSetVideo {
  handleSetVideo?: () => void;
}

//export type ImageVideoDocumentSetUpProps = HandleSetImage | HandleSetVideo;
