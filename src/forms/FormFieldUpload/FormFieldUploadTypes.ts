export type UploadDef = {
	onFileDelete: (deletedData: OnFileDeleteData) => void | Promise<void>;
	onFileAdd: (addedData: OnFileAddData) => void | Promise<void>;
	limit?: number;
};

export type UploadData =  {
	id: string | number;
	url?: string;
	size: string;
	name: string;
};

type OnError = (message: string) => void | Promise<void>;

type OnFileAddData = {
	blob: Blob;
	onChunkComplete: (data: {percent: number}) => void | Promise<void>;
	onUploadComplete: (data: UploadData) => void | Promise<void>;
	onError: OnError;
}

type OnFileDeleteData = {
	id: UploadData["id"];
	onError: OnError;
}
