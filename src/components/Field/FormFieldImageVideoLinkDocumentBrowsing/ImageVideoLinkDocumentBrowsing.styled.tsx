import React from "react";
import styled from "styled-components";

// Utils
import theme from "@root/theme";

// Components
import Tooltip from "@root/components/Tooltip";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import LinkIcon from "@mui/icons-material/Link";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { BrowseOptionProps } from "./ImageVideoLinkDocumentBrowsingTypes";
import { TransientProps } from "@root/types";
import ButtonRow from "@root/components/ButtonRow";
import { BREAKPOINTS, CONTAINERS } from "@root/theme/theme";
import { containerQuery } from "@root/utils/css";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageVideoLinkDocumentBrowsingContainer = styled.div`
`;

export const BrowseOptionsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

	div:last-child {
    margin-right: 0px;
  }
`;

export const BrowsingContainer = styled.div`
  align-items: center;
  background-color: ${theme.newColors.grey2["100"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 204px;
  gap: 24px;
`;

export const BrowseOptionSpan = styled.div`
	margin-top: 8px;
	color: ${theme.newColors.almostBlack["100"]};
`;

export const BrowseOptionContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 67px;
  width: 79px;
	margin-right: 8px;
`;

export const BrowseSpan = styled.span`
  color: ${theme.newColors.grey3["100"]};
  font-family: ${theme.fontFamily};
  font-size: 16px;
`;

/**
 * Card styles. The following styles are used also
 * by the FormFieldImageUpload: AssetCard, AssetLabel,
 * AssetValue and ButtonsWrapper.
 */

export const AssetCard = styled.div`
  background-color: white;
  border: 2px solid ${theme.newColors.grey2["100"]};
  border-radius: 4px;

	container-type: inline-size;
	container-name: ${CONTAINERS.ASSET_CARD};
`;

export const AssetCardTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  position: relative;
	min-height: 168px;

  ${containerQuery("sm", "ASSET_CARD")} {
    flex-wrap: nowrap;
  }
`;

export const AssetImage = styled.img`
  border: 2px solid ${theme.newColors.grey2["100"]};
  object-fit: cover;
  max-width: 100%;
  height: auto;
`;

export const AssetInfo = styled.div`
  flex: 1 1 0%;
  align-items: start;
  display: flex;
`;

export const AssetPropertiesColumn = styled(Column)`
  flex: 1 1 0%;

  ${containerQuery(`(max-width: ${parseInt(BREAKPOINTS.sm) - 1}px)`, "ASSET_CARD")} {
    table, thead, tbody, tr, th, td {
      display: block;
    }
    th{
      padding-bottom: 0;
    }
  }
`;

export const AssetLabel = styled.span`
  color: ${theme.newColors.grey3["100"]};
  font-size: 14px;
  font-weight: ${theme.fontWeight.semiBold};
  margin-right: 24px;
`;

export const AssetValue = styled.span`
  color: ${theme.newColors.almostBlack["100"]};
  font-size: 14px;
`;

export const AssetLabelTooltip = styled(AssetLabel)`
  margin-right: 12px;
`;

export const AssetButtons = styled((props) => <ButtonRow {...props} separator />)`
  justify-content: end;
  padding: 16px;
  padding-top: 0;
`;

export const TableRow = styled.tr`
  font-family: ${theme.fontFamily};
  font-size: 14px;
`;

export const Td = styled.td`
  padding-bottom: 12px;
  vertical-align: top;
`;

export const Th = styled.th`
  text-align: start;
  padding-bottom: 12px;
  vertical-align: top;
`;

export const MenuColumn = styled(Column)`
  margin-left: auto;
`;

export const MoreText = styled.button`
  color: ${theme.newColors.realTeal["100"]};
  cursor: pointer;
  font-size: 14px;
  font-weight: ${theme.fontWeight.bold};
  margin-left: 12px;
  font-family: inherit;
  background: none;
  border: 0;
`;

export const StyledTooltip = styled(Tooltip)`
  .tooltip {
    color: inherit;
    font-weight: inherit;
  }
`;

export const RoundBackground = styled.div<TransientProps<BrowseOptionProps, "disabled">>`
  align-items: center;
  cursor: ${({ $disabled }) => (!$disabled ? "pointer" : "auto")};
  background-color: ${theme.newColors.realTeal["100"]};
  border-radius: 22px;
  display: flex;
  height: 40px;
  justify-content: center;
	opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
	pointer-events: ${({ $disabled }) => ($disabled ? "none" : "")};
  width: 40px;
`;

export const StyledAnchor = styled.a`
  color: ${theme.newColors.realTeal["100"]};
  font-size: 16px;
  word-break: break-all;
`;

// Icons

const iconStyle = `
	&.MuiSvgIcon-root {
		color: white;
		height: 16px;
		width: 16px;
	}
`;

export const StyledImageIcon = styled(ImageIcon)`
  ${iconStyle};
`;

export const StyledVideoIcon = styled(VideocamIcon)`
  ${iconStyle};
`;

export const StyledLinkIcon = styled(LinkIcon)`
  ${iconStyle};
`;

export const StyledDocumentIcon = styled(InsertDriveFileIcon)`
  ${iconStyle};
`;
