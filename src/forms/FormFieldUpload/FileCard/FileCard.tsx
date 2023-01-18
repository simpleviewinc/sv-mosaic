import Button from "@root/components/Button";
import * as React from "react";
import { memo } from "react";
import { FileCardProps } from "./FileCardTypes";
import DeleteIcon from "@mui/icons-material/Delete";

const FileCard = (props: FileCardProps) => {
	return (
		<div style={{display: "flex", flexDirection: "row"}}>
			<div>
				<img />
			</div>
			<div>
				<p>File title {props.name}</p>
				<p>{props.size}</p>
			</div>
			<div>
				<Button
					color="gray"
					variant="icon"
					mIcon={DeleteIcon}
					onClick={props.onFileDelete}
				/>
			</div>
		</div>
	);
};

export default memo(FileCard);
