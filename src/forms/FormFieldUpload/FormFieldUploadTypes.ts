import { FieldDefBase } from "@root/components/Field";
import { MosaicObject } from "@root/types";

export type TransformedFile = {
		data: MosaicObject,
		percent: number,
		error: string | undefined,
		rawData: File,
}

export type UploadFieldInputSettings = {
	onFileDelete: (deletedData: OnFileDeleteData) => Promise<void>;
	onFileAdd: (addedData: OnFileAddData) => Promise<void>;
	limit?: number;
};

export type UploadData =  {
	id: string | number;
	attachmentUrl?: string;
	thumbnailUrl?: string;
	size: number;
	name: string;
};

type OnError = (message: string) => Promise<void>;

type OnFileAddData = {
	file: File;
	onChunkComplete: (data: {percent: number}) => Promise<void>;
	onUploadComplete: (data: UploadData) => Promise<void>;
	onError: OnError;
}

type OnFileDeleteData = {
	id: UploadData["id"];
}

export type FieldDefUpload = FieldDefBase<"upload", UploadFieldInputSettings, UploadData[]>;
