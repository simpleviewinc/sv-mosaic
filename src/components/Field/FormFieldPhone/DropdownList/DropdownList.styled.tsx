import theme from "@root/theme";
import styled from "styled-components";
import "./flags.css";

export const DropdownListBox = styled.ul`
    list-style: none;
    margin: 0;
    padding: 8px 0;
    max-height: 40vh;
    overflow: auto;

    li {
        font-family: ${theme.fontFamily};
        color: ${theme.newColors.almostBlack["100"]};
        font-size: 14px;
        min-height: 40px;
        display: flex;
        gap: 8px;
        overflow: hidden;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        box-sizing: border-box;
        outline: 0;
        -webkit-tap-highlight-color: transparent;
        padding: 6px 16px;

        &:highlight,
        &:hover {
            background-color: rgba(0, 0, 0, 0.04);
        }

        & .flag {
            width: 25px;
            height: 20px;
            background-repeat: no-repeat;
        }
    }

    li.highlight,
    li:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
`;
