import styled from "styled-components";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import theme from "@root/theme";

export const StyledFileList = styled.div`
	margin-top: ${theme.spacing(3)};
	display: flex;
	flex-direction: column;
	gap: ${theme.spacing(2)};
`;

export const DragAndDropContainer = styled.label<{ $isOver?: boolean; $disabled?: boolean }>`
	border-radius: ${theme.rounded.md};
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 186px;
	justify-content: center;
	position: relative;
	gap: ${theme.spacing(3)};

	${({ $isOver, $disabled }) => ($isOver && !$disabled) ? `
		box-shadow: var(--mos-border-medium);
		background: ${theme.color.gray[200]};
	` : `
		background: ${theme.color.gray[100]};
	`}

	&::before {
		content: " ";
		pointer-events: none;
		position: absolute;
		inset: ${theme.spacing(3)};
		border-radius: ${theme.rounded.xs};

		${({ $disabled }) => `
			border: 2px dashed ${$disabled ? theme.color.gray[300] : theme.color.gray[400]};
		`}
	}
`;

export const StyledCloudIcon = styled(CloudUploadIcon)<{ $disabled?: boolean }>`
	${({ $disabled }) => `
		color: ${$disabled ? theme.color.gray[300] : theme.color.gray[500]};
	`}
	font-size: 44px;
	margin-bottom: ${theme.spacing(-2)};
`;

export const DragAndDropText = styled.div<{ $disabled?: boolean }>`
	${({ $disabled }) => !$disabled ? "" : `
		color: ${theme.color.gray[500]};
	`}
`;

export const FileInput = styled.input`
	display: none;
`;
