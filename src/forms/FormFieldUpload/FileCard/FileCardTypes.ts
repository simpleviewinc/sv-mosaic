import { /*UploadData, */UploadDef } from "../FormFieldUploadTypes";

export type FileCardProps = {
	// onFileDelete: UploadDef["onFileDelete"];
	onFileAdd: UploadDef["onFileAdd"];
	file: any;
	// handleFileAdded: (data: UploadData) => void | Promise<void>;
};
