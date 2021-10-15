import styled from 'styled-components';

import theme from '@root/theme';

// Material UI
import Menu from '@material-ui/core/Menu';

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
  padding: 16px;
  position: relative;
  width: 700px;
`;

export const Row = styled.div`
  display: flex;
  font-family: ${theme.fontFamily};
  font-size: 14px;
  margin-bottom: 12px;
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
  flex-shrink: 0;
  margin-right: 24px;
  min-width: 37px;
`;

export const MoreText = styled.span`
  color: ${theme.colors.blueTeal};
  font-size: 14px;
  font-weight: ${theme.fontWeight.bold};
  margin-left: 12px;
`;

export const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    color: ${theme.colors.label};

    & .MuiMenuItem-root {
      font-family: ${theme.fontFamily};
      font-size: 14px;
      padding-bottom: 8px;
      padding-top: 8px;
    }
  }
`;
