import styled from "styled-components";
import theme from "../../theme";
import StarRateRounded from "@mui/icons-material/StarRateRounded";

export const SumaryPageTopComponentStyle = styled.div`
    background: white;
    box-shadow: 0px 1px 10px #0000001A;
    color: ${theme.colors.almostBlack};
    font-family: ${theme.fontFamily};
    padding: 24px 24px 32px 24px;
    display: flex;
    gap: 24px;
    align-items: center;

    .img_rounded {
        width: 75px;
        height: 75px;
        border: 2px solid var(---f0f2f5);
        border: 2px solid #F0F2F5;
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
    margin-right: 30px;
`;

export const Title = styled.p`
    font-size: 28px;
    max-width: 650px; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 12px 0 0;
`;

export const StarRateRoundedSimplyGold = styled(StarRateRounded)`
    color: ${theme.colors.simplyGold};
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
`;

export const ContextText = styled.p `
    margin: 0px;
    font-size: 14px;
    max-width: 280px; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const ContainerFilterSingleSelect = styled.div`
    align-self: flex-end;
`