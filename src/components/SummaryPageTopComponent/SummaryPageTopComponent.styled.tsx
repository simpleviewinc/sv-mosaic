import styled from "styled-components";
import theme from "../../theme";

export const SumaryPageTopComponentStyle = styled.nav`
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
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const Title = styled.p`
    font-size: 28px;
    max-width: 650px; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 12px 0 0;
`

export const ContainerContext = styled.div`
    display: flex;
    
    div:first-child {
        padding-left: 0px;
    }

    div:last-child {
        border: none;
    }
`

export const ContextItem = styled.div`
    padding: 0 16px;
    border-right: 2px solid ${theme.colors.gray200};

    p {
        margin: 0px;
        font-size: 14px;
        max-width: 280px; 
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`