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
import ButtonRow from "@root/components/ButtonRow/ButtonRow";
import Downloader from "@root/components/Downloader/Downloader";
import { pretty } from "@root/utils/formatters";
import Typography from "@root/components/Typography";

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

		return <img src={thumbnailUrl} />;
	}, [percent, thumbnailUrl, error]);

	const sizeHuman = useMemo(() => {
		// Support legacy string size, i.e. "123 bytes"
		const sanitized = parseInt(String(size), 10);
		return pretty(sanitized);
	}, [size]);

	return (
		<div data-testid="file-card-container">
			<StyledFileCard $error={!!error}>
				<div className='file-img' data-testid="file-img">
					{fileUrl ? (
						<a href={fileUrl} rel="noreferrer" target="_blank">{renderImg}</a>
					) : (
						renderImg
					)}
				</div>
				<div className='file-data' data-testid="file-data">
					{fileUrl ? (
						<a href={fileUrl} rel="noreferrer" target="_blank" className='file-name' data-testid="file-name">
							<Typography maxLines={1} breakAll>
								{name ?? "File title"}
							</Typography>
						</a>
					) : (
						<p className='file-name' data-testid="file-name">
							<Typography maxLines={1} breakAll>
								{name ?? "File title"}
							</Typography>
						</p>
					)}
					<p className='file-size' data-testid="file-size">{sizeHuman ?? "File size"}</p>
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
					{onFileDelete && !disabled &&
						<div className='file-delete-btn'>
							<Button
								color="gray"
								variant="icon"
								mIcon={DeleteIcon}
								onClick={() => onFileDelete({ id: id })}
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
