import styled from "styled-components";
import theme from "@root/theme";
import { StyledTextField } from "@root/forms/FormFieldText/FormFieldText.styled";

// Components
import ClearIcon from "@mui/icons-material/Clear";

// Styles for the MapCoordinates component

export const StyledSpan = styled.span`
  color: ${theme.colors.gray600};
  font-family: ${theme.fontFamily};
  font-size: 14px;
  margin: 0px 20px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: calc(100vw - 40px);
  };
`;

export const CoordinatesCard = styled.div`
  border: 2px solid ${theme.colors.gray200};
  border-radius: 4px;
  display: flex;
  font-family: ${theme.fontFamily};
  height: 204px;
  padding: 16px;
  padding-bottom: ${pr => pr.hasAddress ? "35px" : "16px"};
  position: relative;
  width: 450px;
  background-color: white;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  right: 16px;
  position: absolute;
  bottom: 8px;

  button:first-child {
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
  margin-bottom: 8px;
`;

export const CoordinatesValues = styled.span`
  color: ${theme.colors.almostBlack};
  font-size: 14px;
`;

export const LatitudeValue = styled(CoordinatesValues)`
  margin-bottom: 24px;
`;

export const SwitchContainer = styled.div`
  margin-bottom: 16px;
`;

// Styles for the Map component

export const MapContainer = styled.div`
  margin: 0px 20px 16px 20px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: calc(100vw - 40px);
  };
`;

// Styles for the LocationSearchInput component

export const LocationSearchInputWrapper = styled.div`
  margin-bottom: 8px;
  margin-top: 15px;
`;

export const StyledInputSearch = styled(StyledTextField)`
  min-width: 684px;

  &.MuiTextField-root {
    display: flex;
  }
`;

export const StyledClearIcon = styled(ClearIcon)`
  cursor: pointer;
`;

export const SuggestionsContainer = styled.div`
  border: ${theme.borders.fieldGray};
  font-family: ${theme.fontFamily};
`;

export const SuggestionsDescriptionContainer = styled.div`
  background-color: ${({ isSuggestionActive }) => isSuggestionActive ? theme.colors.gray200 : "white"};
  cursor: pointer;
  width: 683px;
`;

export const SuggestionDescription = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 6px 16px 6px 16px;

  &:active {
    color: ${theme.colors.gray800};
    font-weight: ${theme.fontWeight.bold};
  }
`;

export const ResetButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  visibility: ${({ hasValue }) => hasValue ? "visible" : "hidden"};
  position: relative;


  .reset-button {
    align-self: center;
    position: absolute;
    top: 56px;
    left: 0;
}
`;


export const MapFormWrapper = styled.div`
  width: 1160px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100vw;
  };
`;
