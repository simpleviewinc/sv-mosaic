import type { OnFileDelete, UploadData, UploadDataPending, UploadFieldInputSettings } from "../FormFieldUploadTypes";

export type FileCardProps = {
	onFileDelete?: UploadFieldInputSettings["onFileDelete"];
	disabled?: boolean;
	error?: string;
} & UploadData;

export type FileCardPendingProps = UploadDataPending & {
	onFileDelete: OnFileDelete;
	disabled?: boolean;
};

export interface FileCardTitleProps {
	name?: string;
}
