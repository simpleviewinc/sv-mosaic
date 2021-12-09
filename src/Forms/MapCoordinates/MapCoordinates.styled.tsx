import styled from 'styled-components';
import theme from '@root/theme';

export const FlexRow = styled.div`
  display: flex;
`;

export const StyledSpan = styled.span`
  color: ${theme.colors.gray600};
  font-family: ${theme.fontFamily};
  font-size: 14px;
`;

export const MapContainer = styled.div`
  margin-bottom: 18px;
`;

export const CoordinatesCard = styled.div`
  border: 2px solid ${theme.colors.gray200};
  border-radius: 4px;
  display: flex;
  font-family: ${theme.fontFamily};
  height: 204px;
  padding: 16px;
  position: relative;
  width: 414px;
`;

export const ButtonsWrapper = styled.div`
  bottom: 16px;
  display: flex;
  right: 16px;
  position: absolute;

  button:first-child {
    border-right: 2px solid ${theme.colors.gray200};
    padding-right: 16px;
  }

  button:last-child {
    padding-left: 16px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MapImageColumn = styled(Column)`
  margin-right: 16px;
`;

export const LatLngLabel = styled.span`
  color: ${theme.colors.gray600};
  font-size: 14px;
  font-weight: ${theme.fontWeight.semiBold};
`;

export const CoordinatesValues = styled.span`
  color: ${theme.colors.almostBlack};
  font-size: 14px;
`;

export const LatitudeValue = styled(CoordinatesValues)`
  margin-bottom: 24px;
`;

export const MapImage = styled.div`
  background-color: gray;
  height: 153px;
  width: 252px;
`;
