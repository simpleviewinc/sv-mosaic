import Button from "@root/components/Button";
import * as React from "react";
import { memo } from "react";
import { FileCardPendingProps } from "./FileCardTypes";
import DeleteIcon from "@mui/icons-material/Delete";
import DoNotDisturb from "@mui/icons-material/DoNotDisturb";
import Spinner from "@root/components/Spinner";
import { StyledFileCard } from "./FileCard.styled";
import HelperText from "@root/components/Field/HelperText";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";
import ButtonRow from "@root/components/ButtonRow/ButtonRow";
import { useHumanSize } from "@root/utils/hooks/useHumanSize";
import FileCardTitle from "./FileCardTitle";

const FileCardPending = (props: FileCardPendingProps) => {
	const {
		id,
		name,
		size,
		onFileDelete,
		error,
		percent,
		disabled,
	} = props;

	const sizeHuman = useHumanSize(size);

	return (
		<div data-testid="file-card-container">
			<StyledFileCard $error={!!error}>
				<div className="file-img" data-testid="file-img">
					<div>
						{error ? (
							<DoNotDisturb />
						) : percent !== undefined && percent < 100 ? (
							<Spinner progress={percent} />
						) : (
							<InsertDriveFile />
						)}
					</div>
				</div>
				<div className="file-data" data-testid="file-data">
					<p className="file-name" data-testid="file-name">
						<FileCardTitle name={name} />
					</p>
					<p className="file-size" data-testid="file-size">{sizeHuman ?? "File size"}</p>
				</div>
				<ButtonRow separator>
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
			{error && (
				<HelperText error={error !== undefined}>{error}</HelperText>
			)}
		</div>
	);
};

export default memo(FileCardPending);
