import styled from 'styled-components';

// Utils
import theme from '@root/theme';

// Components
import Tooltip from '@root/components/Tooltip';
import ImageIcon from '@material-ui/icons/Image';
import VideocamIcon from '@material-ui/icons/Videocam';
import LinkIcon from '@material-ui/icons/Link';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

export const ImageVideoLinkDocumentBrowsingContainer = styled.div`
	width: fit-content;
`;

export const BrowseOptionsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 61px;

	div:last-child {
    margin-right: 0px;
  }
`;

export const BrowsingContainer = styled.div`
  align-items: center;
  background-color: ${theme.colors.gray200};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 204px;
	min-width: 300px;
`;

export const BrowseOptionSpan = styled.div`
	margin-top: 8px;
	color: ${theme.colors.almostBlack};
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
  color: ${theme.colors.gray600};
  font-family: ${theme.fontFamily};
  font-size: 16px;
  margin-bottom: 24px;
  margin-top: 43px;
`;

/**
 * Card styles. The following styles are used also
 * by the FormFieldImageUpload: AssetCard, AssetLabel, 
 * AssetValue and ButtonsWrapper.
 */

export const AssetCard = styled.div`
  display: flex;
  border: 2px solid ${theme.colors.gray200};
  border-radius: 4px;
  padding: 16px;
  position: relative;
  width: 664px;
	min-height: 168px;
`;

export const AssetLabel = styled.span`
  color: ${theme.colors.gray600};
  font-size: 14px;
  font-weight: ${theme.fontWeight.semiBold};
  margin-right: 24px;
`;

export const AssetValue = styled.span`
  color: ${theme.colors.almostBlack};
  font-size: 14px;
`;

export const AssetLabelTooltip = styled(AssetLabel)`
  margin-right: 12px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 16px;
  bottom: 16px;

  .first {
    border-right: 2px solid ${theme.colors.gray200};
    padding-right: 16px;
  }

  span > button:last-child {
    padding-left: 16px;
  }
`;

export const TableRow = styled.tr`
  font-family: ${theme.fontFamily};
  font-size: 14px;
`;

export const Td = styled.td`
  padding-bottom: 12px;
  vertical-align: top;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AssetPropertiesColumn = styled(Column)`
	margin-left: ${({ hasImage }) => hasImage ? '16px' : '0'};
`;

export const MenuColumn = styled(Column)`
  margin-left: auto;
`;

export const MoreText = styled.span`
  color: ${theme.colors.blueTeal};
  font-size: 14px;
  font-weight: ${theme.fontWeight.bold};
  margin-left: 12px;
`;

export const StyledTooltip = styled(Tooltip)`
  .tooltip {
    color: inherit;
    font-weight: inherit;
  }
`;

export const StyledImg = styled.img`
  border: 2px solid ${theme.colors.gray200};
  object-fit: cover;
`;

export const RoundBackground = styled.div`
  align-items: center;
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'auto')};
  background-color: ${theme.colors.blueTeal};
  border-radius: 22px;
  display: flex;
  height: 40px;
  justify-content: center;
	opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
	pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};
  width: 40px;
`;

export const StyledAnchor = styled.a`
  color: ${theme.colors.blueTeal};
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
