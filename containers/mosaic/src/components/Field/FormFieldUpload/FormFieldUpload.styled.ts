import styled from "styled-components";
import theme from "@root/theme";

export const StyledFileList = styled.div`
	margin-top: 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const DragAndDropContainer = styled.label<{ $isOver?: boolean; $disabled?: boolean }>`
  border: 1px dashed transparent;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 204px;
  justify-content: center;
  position: relative;
  max-width: 100%;

  & .button {
    z-index: 1000;
  }

	${({ $isOver, $disabled }) => ($isOver && !$disabled) ? `
		border-color: ${theme.newColors.realTeal["100"]};
		background: ${theme.newColors.realTeal["20"]};
  	` : `
		background: ${theme.newColors.grey2["100"]};
	`}
`;

export const DragAndDropSpan = styled.span<{ $isOver?: boolean }>`
  color: ${({ $isOver }) =>
		$isOver ? theme.newColors.realTeal["100"] : theme.newColors.grey3["100"]};
  font-size: ${theme.fontSize.text.md};
  margin-bottom: ${({ $isOver }) => ($isOver ? "" : "24px")};
`;

export const FileInput = styled.input`
  display: none;
`;
