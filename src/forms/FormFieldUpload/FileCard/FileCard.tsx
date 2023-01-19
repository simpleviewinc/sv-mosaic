import Button from "@root/components/Button";
import * as React from "react";
import { memo, useEffect, useMemo, useState } from "react";
import { FileCardProps } from "./FileCardTypes";
import DeleteIcon from "@mui/icons-material/Delete";
import DoNotDisturb from '@mui/icons-material/DoNotDisturb';
import Spinner from "@root/components/Spinner";
import { StyledFileCard } from "./FileCard.styled";
import { UploadData } from "../FormFieldUploadTypes";
import HelperText from "@root/components/Field/HelperText";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";

const FileCard = (props: FileCardProps) => {
	const {
		file,
		onFileDelete,
		onFileAdd,
		handleFileAdded,
	} = props;

	const [progress, setProgress] = useState<number>(0.1);
	const [fileData, setFileData] = useState<UploadData>(undefined);
	const [error, setError] = useState<string>(undefined);

	const onChunkComplete = ({percent}) => {
		setProgress(percent * 100);
	}

	const onUploadComplete = async (data) => {
		setFileData(data);
		await handleFileAdded(data);
	}

	const onError = (message) => {
		setError(message);
	}

	useEffect(() => {
		onFileAdd({blob: file, onChunkComplete, onUploadComplete, onError});
	}, []);

	const renderImg = useMemo(() => {
		if (error) {
			return (
				<div>
					<DoNotDisturb />
				</div>
			);
		}

		if (!fileData?.url) {
			if(progress !== undefined && progress < 100) {
				return (
					<div>
						<Spinner progress={progress} />
					</div>
				);
			}

			return (
				<div>
					<InsertDriveFile />
				</div>
			);
		}

		return <img src={fileData.url} />
	}, [progress, fileData?.url, error]);

	return (
		<div data-testid="file-card-container">
			<StyledFileCard error={error}>
				<div className='file-img'>
					{renderImg}
				</div>
				<div className='file-data'>
					<p className='file-name'>{fileData?.name ?? "File title"}</p>
					<p className='file-size'>{fileData?.size ?? "File size"}</p>
				</div>
				<div className='file-delete-btn'>
					<Button
						color="gray"
						variant="icon"
						mIcon={DeleteIcon}
						onClick={(e) => onFileDelete({id: fileData?.id})}
					/>
				</div>
			</StyledFileCard>
			{error &&
				<HelperText error={error !== undefined}>{error}</HelperText>
			}
		</div>
	);
};

export default memo(FileCard);
