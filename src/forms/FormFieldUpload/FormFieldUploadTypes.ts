import { FieldDefBase } from "@root/components/Field";

export type UploadFieldInputSettings = {
	onFileDelete: (deletedData: OnFileDeleteData) => Promise<void>;
	onFileAdd: (addedData: OnFileAddData) => Promise<void>;
	limit?: number;
};

export type UploadData =  {
	id: string | number;
	url?: string;
	size: string;
	name: string;
};

type OnError = (message: string) => Promise<void>;

type OnFileAddData = {
	blob: any;
	onChunkComplete: (data: {percent: number}) => Promise<void>;
	onUploadComplete: (data: UploadData) => Promise<void>;
	onError: OnError;
}

type OnFileDeleteData = {
	id: UploadData["id"];
}

export type FieldDefUpload = FieldDefBase<"upload", UploadFieldInputSettings, UploadData[]>;
