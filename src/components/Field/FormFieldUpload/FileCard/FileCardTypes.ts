import { UploadData, UploadFieldInputSettings } from "../FormFieldUploadTypes";

export type FileCardProps = {
	onFileDelete?: UploadFieldInputSettings["onFileDelete"];
	percent?: number;
	error?: string;
	disabled?: boolean;
} & UploadData;
