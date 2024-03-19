import Button from "@root/components/Button";
import * as React from "react";
import { memo, useMemo } from "react";
import { FileCardProps } from "./FileCardTypes";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownload from "@mui/icons-material/CloudDownload";
import { StyledFileCard } from "./FileCard.styled";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";
import ButtonRow from "@root/components/ButtonRow/ButtonRow";
import Downloader from "@root/components/Downloader/Downloader";
import Typography from "@root/components/Typography";
import { useHumanSize } from "@root/utils/hooks/useHumanSize";

const FileCard = (props: FileCardProps) => {
	const {
		id,
		name,
		size,
		fileUrl,
		thumbnailUrl,
		downloadUrl,
		downloadStrategy: providedDownloadStrategy,
		onFileDelete,
		disabled,
	} = props;

	const downloadStrategy = providedDownloadStrategy !== undefined ? providedDownloadStrategy : downloadUrl ? "iframe" : "anchor";

	const renderImg = useMemo(() => {
		if (!thumbnailUrl) {
			return (
				<div>
					<InsertDriveFile />
				</div>
			);
		}

		return <img src={thumbnailUrl} />;
	}, [thumbnailUrl]);

	const sizeHuman = useHumanSize(size);

	return (
		<div data-testid="file-card-container">
			<StyledFileCard>
				<div className="file-img" data-testid="file-img">
					{fileUrl ? (
						<a href={fileUrl} rel="noreferrer" target="_blank">{renderImg}</a>
					) : (
						renderImg
					)}
				</div>
				<div className="file-data" data-testid="file-data">
					{fileUrl ? (
						<a href={fileUrl} rel="noreferrer" target="_blank" className="file-name" data-testid="file-name">
							<Typography maxLines={1} breakAll>
								{name ?? "File title"}
							</Typography>
						</a>
					) : (
						<p className="file-name" data-testid="file-name">
							<Typography maxLines={1} breakAll>
								{name ?? "File title"}
							</Typography>
						</p>
					)}
					<p className="file-size" data-testid="file-size">{sizeHuman ?? "File size"}</p>
				</div>
				<ButtonRow separator>
					{(downloadUrl || fileUrl) && (
						<div className="file-download-btn">
							{downloadStrategy === "anchor" ? (
								<Button
									muiAttrs={{ download: true }}
									href={fileUrl}
									color="gray"
									variant="icon"
									mIcon={CloudDownload}
								/>
							) : (
								<Downloader
									url={downloadUrl || fileUrl}
									color="gray"
									variant="icon"
								/>
							)}
						</div>
					)}
					{onFileDelete && !disabled && (
						<div className="file-delete-btn">
							<Button
								color="gray"
								variant="icon"
								mIcon={DeleteIcon}
								onClick={() => onFileDelete({ id: id })}
							/>
						</div>
					)}
				</ButtonRow>
			</StyledFileCard>
		</div>
	);
};

export default memo(FileCard);
