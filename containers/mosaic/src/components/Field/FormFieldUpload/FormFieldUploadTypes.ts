import type { FieldDefBase } from "@root/components/Field";

export interface UploadDataBase {
	/**
	 * A unique identifier, used as React "key"
	 */
	id: string | number;
	/**
	 * The numerical size of the file in bytes
	 */
	size: number;
	/**
	 * The name of the file, which will be rendered as the file title
	 */
	name: string;
}

export type UploadData = UploadDataBase & {
	/**
	 * The URL to the uploaded file which the uploaded item's
	 * image and title will link to
	 */
	fileUrl?: string;
	/**
	 * The URL of the thumbnail that should be displayed.
	 */
	thumbnailUrl?: string;
	/**
	 * The downloadable URL of the file, it should respond
	 * with a Content-Disposition: attachment header
	 */
	downloadUrl?: string;
	/**
	 * How the file download button should behave:
	 * "anchor" - renders an anchor tag with the "download" attribute
	 * "iframe" - creates an iframe and navigates to the downloadUrl,
	 * 			  then removes the iframe once loaded (or errored)
	 * If this property is omitted, the downloadStrategy will be "anchor"
	 * if no downloadUrl is provided, or "iframe" if it is.
	 */
	downloadStrategy?: "anchor" | "iframe";
	/**
	 * If the file is currently being deleted
	 */
	isDeleting?: boolean;
};

export type UploadDataPending = UploadDataBase & {
	percent?: number;
	error?: string;
	rawData: File;
	isPending: true;
};

export function isPendingUploadData(item: UploadData | UploadDataPending): item is UploadDataPending {
	return "isPending" in item && item.isPending;
}

interface OnFileDeleteData {
	id: UploadData["id"];
}

export type OnFileDelete = (deletedData: OnFileDeleteData) => Promise<void>;

interface OnFileAddData {
	file: File;
	onChunkComplete: (data: { percent: number }) => Promise<void>;
	onUploadComplete: (data: UploadData) => Promise<void>;
}

export type OnFileAdd = (addedData: OnFileAddData) => Promise<void>;

export interface UploadFieldInputSettings {
	onFileDelete: OnFileDelete;
	onFileAdd: OnFileAdd;
	limit?: number;
	accept?: string[];
	/**
	 * Maximum size limit for each file uploaded
	 */
	maxFileSize?: number;
	/**
	 * Maximum size limit for cumulative total
	 * of files uploaded
	 */
	maxTotalSize?: number;
}

export type FieldDefUpload = FieldDefBase<"upload", UploadFieldInputSettings>;
