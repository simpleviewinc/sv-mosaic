import { OnFileDelete, UploadData, UploadDataPending, UploadFieldInputSettings } from "../FormFieldUploadTypes";

export type FileCardProps = {
	onFileDelete?: UploadFieldInputSettings["onFileDelete"];
	disabled?: boolean;
} & UploadData;

export type FileCardPendingProps = UploadDataPending & {
	onFileDelete: OnFileDelete;
	disabled?: boolean;
};
