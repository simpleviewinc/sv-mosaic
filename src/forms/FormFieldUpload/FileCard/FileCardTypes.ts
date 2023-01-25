import { UploadData, UploadDef } from "../FormFieldUploadTypes";

export type FileCardProps = {
	onFileDelete?: UploadDef["onFileDelete"];
	percent?: number,
	error?: string,
} & UploadData;
