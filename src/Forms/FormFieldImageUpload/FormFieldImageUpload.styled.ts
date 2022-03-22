import styled from "styled-components";
import theme from "@root/theme";
import {
	AssetCard,
	AssetLabel,
	AssetValue,
	ButtonsWrapper,
} from "../FormFieldImageVideoLinkDocumentBrowsing/ImageVideoLinkDocumentBrowsing.styled";

// Components
import Button from "@root/components/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

export const DragAndDropContainer = styled.div`
  align-items: center;
  border: ${(pr) => (pr.isOver ? `1px dashed ${theme.colors.blueTeal}` : "")};
  background-color: ${(pr) => (pr.isOver ? "#008DA81A" : theme.colors.gray200)};
  display: flex;
  flex-direction: column;
  height: 204px;
  justify-content: center;
  position: relative;
  width: 300px;
`;

export const DragAndDropSpan = styled.span`
  color: ${(pr) => (pr.isOver ? theme.colors.blueTeal : theme.colors.gray600)};
  font-size: 16px;
  margin-bottom: ${(pr) => (pr.isOver ? "" : "24px")};
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

export const ImageCard = styled(AssetCard)``;

export const ButtonsContainer = styled(ButtonsWrapper)``;

export const ImgLoaded = styled.img`
  border: 2px solid ${theme.colors.gray200};
  object-fit: contain;
`;

export const SizeLabel = styled(AssetLabel)``;

export const SizeValue = styled(AssetValue)``;

export const UploadButton = styled(Button)`
  z-index: 1;
`;

export const StyledCircularProgress = styled(CircularProgress)`
  &.MuiCircularProgress-colorPrimary {
    color: ${theme.colors.blueTeal};
  }

  margin-bottom: 24px;
`;

export const SetFocusSpan = styled.span`
  align-self: center;
  color: ${theme.colors.almostBlack};
  font-family: ${theme.fontFamily};
  font-size: 14px;
  margin-left: 18px;
`;

// ImageUploadCanvas component styles

export const StyledCanvas = styled.canvas`
  background-color: ${theme.colors.almostBlack};
  opacity: 0.4;
`;

export const CanvasContainer = styled.div`
  position: absolute;
`;
