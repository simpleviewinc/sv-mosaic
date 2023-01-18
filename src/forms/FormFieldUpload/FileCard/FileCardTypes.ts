import { ButtonProps } from "@root/components/Button";
import { UploadData } from "../FormFieldUploadTypes";

export type FileCardProps = {
	uploadProgress?: number;
	onFileDelete: ButtonProps["onClick"];
} & UploadData;
