import styled from 'styled-components';

// Components
import HelpIcon from '@material-ui/icons/Help';

// Utils
import theme from '@root/theme';

export const TopComponentRowWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (min-width: 1718px) {
    box-shadow: 0px 1px 10px #0000001a;
    margin-bottom: 0px;
    padding: 24px 20px 30px 20px;
  }
  //padding: 24px 20px 30px 20px;
`;

export const TopComponentColumnWrapper = styled.div`
  //box-shadow: 0px 1px 10px #0000001a;
  padding: 24px 20px 0px 20px;
`;

export const ActionsWrapper = styled.div`
  align-items: flex-start;
  display: flex;

  button:last-child {
    margin-left: 20px;
  }

  .MuiFormControlLabel-root {
    margin-right: 20px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${theme.fontFamily};
`;

export const FormTitle = styled.span`
  color: ${theme.colors.almostBlack};
  font-size: 28px;
  margin-bottom: 8px;
`;

export const Description = styled.span`
  color: ${theme.colors.gray600};
  font-size: 14px;
`;

export const StyledHelpIcon = styled(HelpIcon)`
  border-right: ${(pr) =>
		pr.showActive ? `2px solid ${theme.colors.gray200}` : ''};
  margin-top: 7px;
  padding-right: ${(pr) => (pr.isResponsiveView ? '' : '16px')};

  @media (max-width: 1075px) {
    border-right: none;
  }
`;

export const CheckboxWrapper = styled.div`
  margin-left: -10px;
`;

export const NavSectionsWrapper = styled.div`
  display: flex;

  @media (max-width: 1718px) {
    flex-direction: column;
  }
`;

export const Row = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const ActionsRow = styled(Row)`
  align-self: ${pr => pr.showActive ? '' : 'flex-end'};
  margin-top: 16px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;  
`;

export const ButtonsWrapper = styled.div`
  display: flex;

  button:first-child {
    margin-right: 20px;
  }
`;
