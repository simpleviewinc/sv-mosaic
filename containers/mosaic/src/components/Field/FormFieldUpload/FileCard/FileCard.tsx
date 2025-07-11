import Button from "@root/components/Button";
import * as React from "react";
import { memo, useMemo } from "react";
import type { FileCardProps } from "./FileCardTypes";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownload from "@mui/icons-material/CloudDownload";
import { StyledFileCard, StyledSpinner } from "./FileCard.styled";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";
import ButtonRow from "@root/components/ButtonRow/ButtonRow";
import Downloader from "@root/components/Downloader/Downloader";
import { useHumanSize } from "@root/utils/hooks/useHumanSize";
import FileCardTitle from "./FileCardTitle";

const FileCard = (props: FileCardProps) => {
	const {
		id,
		name,
		size,
		dimensions,
		fileUrl,
		thumbnailUrl,
		downloadUrl,
		downloadStrategy: providedDownloadStrategy,
		onFileDelete,
		disabled,
		isDeleting,
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
			<StyledFileCard $isDeleting={isDeleting}>
				<div className="file-img" data-testid="file-img">
					{(fileUrl && !isDeleting) ? (
						<a href={fileUrl} rel="noreferrer" target="_blank">{renderImg}</a>
					) : (
						renderImg
					)}
				</div>
				<div className="file-data" data-testid="file-data">
					{(fileUrl && !isDeleting) ? (
						<a href={fileUrl} rel="noreferrer" target="_blank" className="file-name" data-testid="file-name">
							<FileCardTitle name={name} />
						</a>
					) : (
						<p className="file-name" data-testid="file-name">
							<FileCardTitle name={name} />
						</p>
					)}
					<div>
						<p className="file-size" data-testid="file-size">{sizeHuman ?? "File size"}</p>
						{dimensions && (
							<p className="file-dimensions" data-testid="file-dimensions">
								{`${dimensions.width}px × ${dimensions.height}px`}
							</p>
						)}
					</div>
				</div>
				{isDeleting ? (
					<StyledSpinner />
				) : (
					<ButtonRow separator>
						{(downloadUrl || fileUrl) && (
							<div className="file-download-btn">
								{downloadStrategy === "anchor" ? (
									<Button
										muiAttrs={{ download: true }}
										href={fileUrl}
										intent="secondary"
										variant="text"
										mIcon={CloudDownload}
									/>
								) : (
									<Downloader
										url={downloadUrl || fileUrl}
										intent="secondary"
										variant="text"
									/>
								)}
							</div>
						)}
						{onFileDelete && !disabled && (
							<div className="file-delete-btn">
								<Button
									intent="danger"
									variant="text"
									mIcon={DeleteIcon}
									onClick={() => onFileDelete({ id: id })}
								/>
							</div>
						)}
					</ButtonRow>
				)}
			</StyledFileCard>
		</div>
	);
};

export default memo(FileCard);
