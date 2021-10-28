import styled from 'styled-components';

// Utils
import theme from '@root/theme';

export const NavItems = styled.div`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  width: 100%;
  white-space: nowrap;

  @media (min-width: 1718px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LinksWrapper = styled.div`
  margin-right: 40px;

  a {
    border-bottom: ${(pr) =>
      pr.idx === pr.selectedTabIdx ? '4px solid #FCB731' : ''};
    color: ${(pr) =>
      pr.idx === pr.selectedTabIdx
        ? theme.colors.almostBlack
        : theme.colors.gray600};
    display: inline-block;
    font-family: ${theme.fontFamily};
    font-size: 14px;
    font-weight: ${(pr) =>
      pr.idx === pr.selectedTabIdx ? theme.fontWeight.medium : ''};
    text-align: center;
    text-decoration: none;
    padding-bottom: 12px;
  }

  @media (min-width: 1718px) {
    background-color: ${pr => pr.idx === pr.selectedTabIdx ? theme.colors.gray200 : ''};
    margin-right: 0;

    a {
      border-bottom: 0px;
      border-left: ${(pr) =>
        pr.idx === pr.selectedTabIdx ? '4px solid #FCB731' : ''};
      padding: 16px 0 16px 24px;
    }
  }
`;

export const Section = styled.div`
  border: 2px solid ${theme.colors.simplyGray};
  height: 500px;
`;

export const SectionsWrapper = styled.div`

`;

export const MainLayout = styled.div`
  display: flex;

  @media (max-width: 1718px) {
    flex-direction: column;
  }
`;

export const FormNavWrapper = styled.div`
  align-items: center;
  display: flex;
  overflow: hidden;
  position: relative;

  /* &:after {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0px;
      pointer-events: none;
      background-image: linear-gradient(to right, rgba(255,255,255,0), red 85%);
      width: 70px;
    } */

  /* svg {
    position: relative;
    z-index: 2;
  } */

  /* svg:first-child {
    background: linear-gradient(to left, #FFFFFF00 0%, #FFFFFF 100%);
  } */

  svg:last-child {
  }

  @media (min-width: 1718px) {
    svg {
      display: none;
    }
  }
`;

export const Row = styled.div`
  overflow: hidden;
`;

export const IconWrapper = styled.div`
  text-align: end;
  height: 24px;
  padding-bottom: 16px;
  /* position: relative;

  &:after {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0px;
      pointer-events: none;
      background-image: linear-gradient(to right, rgba(255,255,255,0), red 85%);
      width: 70px;
    }
 */
  //background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
`;
