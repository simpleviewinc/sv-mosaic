type AssetProperties = {
  label: string;
  value: string;
}

export interface ImageVideoDocumentSetUpProps extends HandleSetImage, HandleSetVideo, HandleSetDocument {
  assetObject: AssetProperties[];
  label?: string;
  handleBrowse?: () => void;
  handleEdit?: () => void;
  handleRemove?: () => void;
  handleTranslate?: () => void;
  src?: string;
}

export interface HandleSetImage {
  handleSetImage?: () => void;
}

export interface HandleSetVideo {
  handleSetVideo?: () => void;
}

export interface HandleSetDocument {
  handleSetDocument?: () => void;
}

// export type ImageVideoDocumentSetUpProps = ImageVideoDocumentSetUpBaseProps & (HandleSetImage | HandleSetDocument);
