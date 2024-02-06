import styled from "styled-components";
import theme from "@root/theme";
import {
	AssetLabel,
	AssetValue,
} from "../FormFieldImageVideoLinkDocumentBrowsing/ImageVideoLinkDocumentBrowsing.styled";

// Components
import Button from "@root/components/Button";

export const DragAndDropContainer = styled.div<{ $isOver?: boolean }>`
  align-items: center;
  border: ${({ $isOver }) => ($isOver ? `1px dashed ${theme.newColors.realTeal["100"]}` : "")};
  background-color: ${({ $isOver }) => ($isOver ? theme.newColors.realTeal["20"] : theme.newColors.grey2["100"])};
  display: flex;
  flex-direction: column;
  height: 204px;
  justify-content: center;
  position: relative;
`;

export const DragAndDropSpan = styled.span<{ $isOver?: boolean }>`
  color: ${({ $isOver }) => ($isOver ? theme.newColors.realTeal["100"] : theme.newColors.grey3["100"])};
  font-size: 16px;
  margin-bottom: ${({ $isOver }) => ($isOver ? "" : "24px")};
`;

export const FileInput = styled.input`
  height: 100%;
  opacity: 0;
  position: absolute;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  align-items: baseline;
  display: flex;
`;

export const ImageColumn = styled(Column)`
  position: relative;
`;

export const ImagePropertiesColumn = styled(Column)`
  margin-left: 16px;
`;

export const MenuColumn = styled(Column)`
  margin-left: auto;
`;

export const ImgLoaded = styled.img`
  border: 2px solid ${theme.newColors.grey2["100"]};
  object-fit: contain;
`;

export const SizeLabel = styled(AssetLabel)``;

export const SizeValue = styled(AssetValue)``;

export const UploadButton = styled(Button)`
  z-index: 1;
`;

export const SetFocusSpan = styled.span`
  align-self: center;
  color: ${theme.newColors.almostBlack["100"]};
  font-family: ${theme.fontFamily};
  font-size: 14px;
  margin-left: 18px;
`;

// ImageUploadCanvas component styles

export const StyledCanvas = styled.canvas`
  background-color: ${theme.newColors.almostBlack["100"]};
  opacity: 0.4;
`;

export const CanvasContainer = styled.div`
  position: absolute;
`;
