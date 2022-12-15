import styled from "styled-components";
import theme from "../../theme";
import StarRateRounded from "@mui/icons-material/StarRateRounded";
import StarBorder from "@mui/icons-material/StarBorderRounded";

export const StyledSummaryPageTopComponent = styled.div`
    background: white;
    border-bottom: 2px solid ${theme.colors.gray200};
    color: ${theme.newColors.almostBlack["100"]};
    font-family: ${theme.fontFamily};
    padding: 24px 24px 16px 24px;
    display: flex;
    gap: 24px;
    align-items: center;

    .img-rounded {
        width: 71px;
        height: 71px;
        border: 2px solid ${theme.colors.grayHover};
        border-radius: 50%;
        opacity: 1;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    flex-wrap: wrap;
`;

export const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const Title = styled.p`
    font-size: 28px;
    font-weight: ${theme.fontWeight.light};
    max-width: 650px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
	margin: 0px;
	padding: 0px;
	font-family: ${theme.museoFont} !important;
`;

export const CheckedStar = styled(StarRateRounded)`
	margin-left: 12px;
    color: ${theme.newColors.simplyGold["100"]};
`;

export const UncheckedStar = styled(StarBorder)`
	margin-left: 12px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
`;

export const ContainerItems = styled.div`
    display: flex;
    flex-wrap: wrap;
	align-items: center;

    div:first-child {
        padding-left: 0px;
    };

    div:last-child {
        border: none;
    };
`;

export const Item = styled.div`
    padding: 0 16px;
    border-right: 2px solid ${theme.colors.gray200};

	& p,
	& h1,
	& h2,
	& h3,
	& h4,
	& h5,
	& h6 {
		margin: 0px;
		font-size: 14px;
		max-width: 280px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;
