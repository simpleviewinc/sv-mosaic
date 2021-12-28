import styled from 'styled-components';

// Utils
import theme from '@root/theme';

// Material UI
import Menu from '@material-ui/core/Menu';

// Components
import Label from '@root/components/Field/Label';
import Tooltip from '@root/components/Tooltip';

export const StyledLabel = styled(Label)`
  margin-bottom: 16px;
`;

export const SetUpButtonsWrapper = styled.div`
  align-items: center;
  background-color: ${theme.colors.gray200};
  display: flex;
  justify-content: center;
  min-height: 204px;
  width: ${(pr => pr.multipleActions ? 'fit-content' : '300px')};

  ${pr =>
		pr.multipleActions
			? `
      button:first-child {
        margin-left: 80px;
      }

      button:last-child {
        margin-right: 80px;
      }
    `
			: ''}

  & > :not(:last-child) {
    margin-right: 40px;
  }
`;

export const AssetCard = styled.div`
  display: flex;
  border: 2px solid ${theme.colors.gray200};
  border-radius: 4px;
  padding: 16px;
  position: relative;
  width: 664px;
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
  margin-left: 16px;
`;

export const MenuColumn = styled(Column)`
  margin-left: auto;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 16px;
  bottom: 16px;

  button:first-child {
    border-right: 2px solid ${theme.colors.gray200};
    padding-right: 16px;
  }

  button:last-child {
    padding-left: 16px;
  }
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

export const MoreText = styled.span`
  color: ${theme.colors.blueTeal};
  font-size: 14px;
  font-weight: ${theme.fontWeight.bold};
  margin-left: 12px;
`;

export const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    border: 1px solid ${theme.colors.gray200};
    box-shadow: 0px 1px 3px #1a1a1a26;
    color: ${theme.colors.label};

    & .MuiMenuItem-root {
      font-family: ${theme.fontFamily};
      font-size: 14px;
      padding-bottom: 8px;
      padding-top: 8px;
    }
  }
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
