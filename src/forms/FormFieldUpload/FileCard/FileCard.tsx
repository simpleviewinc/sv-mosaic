import Button from "@root/components/Button";
import * as React from "react";
import { memo, useMemo } from "react";
import { FileCardProps } from "./FileCardTypes";
import DeleteIcon from "@mui/icons-material/Delete";
import DoNotDisturb from "@mui/icons-material/DoNotDisturb";
import Spinner from "@root/components/Spinner";
import { StyledFileCard } from "./FileCard.styled";
import HelperText from "@root/components/Field/HelperText";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";
import Tooltip from "@root/components/Tooltip";

const FileCard = (props: FileCardProps) => {
	const {
		id,
		name,
		size,
		url,
		onFileDelete,
		error,
		percent,
	} = props;

	const renderImg = useMemo(() => {
		if (error) {
			return (
				<div>
					<DoNotDisturb />
				</div>
			);
		}

		if (!url) {
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

		return <img src={url} />
	}, [percent, url, error]);

	return (
		<div data-testid="file-card-container">
			<StyledFileCard error={error}>
				<div className='file-img' data-testid="file-img">
					{renderImg}
				</div>
				<div className='file-data' data-testid="file-data">
					<Tooltip type="advanced" text={name ?? "File title"}>
						<p className='file-name' data-testid="file-name">{name ?? "File title"}</p>
					</Tooltip>
					<p className='file-size' data-testid="file-size">{size ?? "File size"}</p>
				</div>
				{onFileDelete &&
					<div className='file-delete-btn'>
						<Button
							color="gray"
							variant="icon"
							mIcon={DeleteIcon}
							onClick={(e) => onFileDelete({id: id})}
						/>
					</div>
				}
			</StyledFileCard>
			{error &&
				<HelperText error={error !== undefined}>{error}</HelperText>
			}
		</div>
	);
};

export default memo(FileCard);
