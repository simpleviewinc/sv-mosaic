import styled from "styled-components";
import theme from "@root/theme";

// Styles for the MapCoordinates component

export const StyledSpan = styled.span`
  color: ${theme.newColors.grey3["100"]};
  font-family: ${theme.fontFamily};
  font-size: 14px;
  margin: 0px 20px 15px 20px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: calc(100vw - 40px);
  };
`;

export const CoordinatesCard = styled.div`
  border: 2px solid ${theme.newColors.grey2["100"]};
  border-radius: 4px;
  font-family: ${theme.fontFamily};
  min-height: 204px;
  padding: 16px;
  padding-bottom: 16px;
  position: relative;
  width: 450px;
  max-width: 100%;
  background-color: white;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: end;

  button:first-child {
    padding-right: 16px;
  }

  button:last-child {
    padding-left: 16px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const MapImageColumn = styled.div`
  margin-right: 16px;
  margin-bottom: 16px;
  height: fit-content;
  border: 2px solid ${theme.newColors.grey2["100"]};

  img {
    display: block;
    width: 230px;
    max-width: 100%;
  }
`;

export const LatLngLabel = styled.span`
  color: ${theme.newColors.grey3["100"]};
  font-size: 14px;
  font-weight: ${theme.fontWeight.semiBold};
  margin-bottom: 8px;
`;

export const CoordinatesValues = styled.span`
  color: ${theme.newColors.almostBlack["100"]};
  font-size: 14px;
  font-weight: ${theme.fontWeight.normal};
`;

export const LatitudeValue = styled(CoordinatesValues)`
  margin-bottom: 12px;
`;

// Styles for the Map component

export const MapContainer = styled.div`
  margin: 0px 20px 16px 20px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: calc(100vw - 40px);
  };
`;

// Styles for the Reset Button

export const ResetButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  position: relative;


  .reset-button {
    align-self: center;
    position: absolute;
    top: 56px;
    left: 0;
}
`;
