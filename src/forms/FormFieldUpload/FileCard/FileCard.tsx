import Button from "@root/components/Button";
import * as React from "react";
import { memo, useMemo } from "react";
import { FileCardProps } from "./FileCardTypes";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownload from "@mui/icons-material/CloudDownload";
import DoNotDisturb from "@mui/icons-material/DoNotDisturb";
import Spinner from "@root/components/Spinner";
import { StyledFileCard } from "./FileCard.styled";
import HelperText from "@root/components/Field/HelperText";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";
import Tooltip from "@root/components/Tooltip";
import ButtonRow from "@root/components/ButtonRow/ButtonRow";
import pretty from "pretty-bytes";
import Downloader from "@root/components/Downloader/Downloader";

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
		error,
		percent,
		disabled,
	} = props;

	const downloadStrategy = providedDownloadStrategy !== undefined ? providedDownloadStrategy : downloadUrl ? "iframe" : "anchor";

	const renderImg = useMemo(() => {
		if (error) {
			return (
				<div>
					<DoNotDisturb />
				</div>
			);
		}

		if (!thumbnailUrl) {
			if (percent !== undefined && percent < 100) {
				return (
					<div>
						<Spinner progress={percent} />
					</div>
				);
			}

			return (
				<div>
					<InsertDriveFile />
				</div>
			);
		}

		return <img src={thumbnailUrl} />
	}, [percent, thumbnailUrl, error]);

	const sizeHuman = useMemo(() => pretty(size), [size]);

	return (
		<div data-testid="file-card-container">
			<StyledFileCard error={error}>
				<div className='file-img' data-testid="file-img">
					{fileUrl ? (
						<a href={fileUrl} rel="noreferrer" target="_blank">{renderImg}</a>
					) : (
						renderImg
					)}
				</div>
				<div className='file-data' data-testid="file-data">
					<Tooltip type="advanced" text={name ?? "File title"}>
						{fileUrl ? (
							<a href={fileUrl} rel="noreferrer" target="_blank" className='file-name' data-testid="file-name">{name ?? "File title"}</a>
						) : (
							<p className='file-name' data-testid="file-name">{name ?? "File title"}</p>
						)}
					</Tooltip>
					<p className='file-size' data-testid="file-size">{sizeHuman ?? "File size"}</p>
				</div>
				<ButtonRow separator gap="small">
					{(downloadUrl || fileUrl) && (
						<div className="file-download-btn">
							{downloadStrategy === "anchor" ? (
								<Button
									muiAttrs={{download: true}}
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
					{onFileDelete && !disabled &&
						<div className='file-delete-btn'>
							<Button
								color="gray"
								variant="icon"
								mIcon={DeleteIcon}
								onClick={(e) => onFileDelete({id: id})}
							/>
						</div>
					}
				</ButtonRow>
			</StyledFileCard>
			{error &&
				<HelperText error={error !== undefined}>{error}</HelperText>
			}
		</div>
	);
};

export default memo(FileCard);
