import { EditorContent } from "@tiptap/react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styled, { css } from "styled-components";

import theme from "@root/theme";
import MenuBase from "@root/components/MenuBase";

const h1Size = css`font-size: font-size: 28px;`;
const h2Size = css`font-size: font-size: 36px;`;
const h3Size = css`font-size: font-size: 22px;`;
const h4Size = css`font-size: font-size: 14px;`;
const h5Size = css`font-size: font-size: 12px;`;
const h6Size = css`font-size: font-size: 12px;`;

export const controlColors = css<{ $active?: boolean }>`
    &:disabled {
        color: ${theme.colors.gray400};
    }

    &:not(:disabled):hover {
        color: ${theme.colors.gray800};
    }

    ${({ $active }) => `
        color: ${$active ? theme.colors.gray700 : theme.colors.gray600};
        background-color: ${$active ? theme.newColors.simplyGold["40"] : "transparent"};
    `}
`;

const selectedNode = css`
    outline: 3px solid #008DA8;
    outline-offset: 1px;
`;

export const StyledTextEditor = styled.div<{ $disabled?: boolean }>`
    font-family: ${theme.fontFamily};

    ${({ $disabled }) => $disabled ? `
        --border-color: ${theme.colors.disableBorder};
        color: ${theme.colors.disabledTextColor};
    ` : `
        --border-color: ${theme.newColors.simplyGrey["100"]};
        color: ${theme.newColors.almostBlack["100"]};
    `}
`;

export const Editor = styled(EditorContent)<{ $minHeight?: string | number; $maxHeight?: string | number }>`
    .tiptap {
        background-color: ${theme.newColors.grey1["100"]};
        border: 1px solid var(--border-color);
        border-top: 0;
        padding: 16px;
        overflow: auto;

        ${({ $minHeight = "4.75em" }) => $minHeight && `
            min-height: ${typeof $minHeight === "number" ? `${$minHeight}px` : $minHeight};
        `}

        ${({ $maxHeight }) => $maxHeight && `
            max-height: ${typeof $maxHeight === "number" ? `${$maxHeight}px` : $maxHeight};
        `}

        &:focus {
			border-color: ${theme.newColors.almostBlack["100"]};
            outline: none;
        }

        * {
            margin: 0;
            padding: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ul,
        ol,
        blockquote,
        pre,
        .script-tag,
        .tiptap-block {
            margin-bottom: 20px;
            line-height: 1.4;
        }

        h1,
        h2,
        h3 {
            line-height: 1.2;
        }

        h1 {
            ${h1Size}
            margin: 28px 0;
        }

        h2 {
            ${h2Size}
            margin: 24px 0;
        }

        h3 {
            ${h3Size}
        }

        h4 {
            ${h4Size}
        }

        h5 {
            ${h5Size}
        }

        h6 {
            ${h6Size}
        }

        :first-child{
            margin-top: 0;
        }

        :last-child{
            margin-bottom: 0;
        }

        .tiptap-flex {
            display: flex;
        }

        .tiptap-pill {
            background-color: ${theme.colors.gray200};
            border-radius: 3px;
            border: 1px solid var(--border-color);
            color: ${theme.colors.gray600};
            padding: 0;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 0 6px;

            svg {
                width: 16px;
            }
        }

        .ProseMirror-selectednode .tiptap-pill{
            ${selectedNode}
        }

        ul,
        ol {
            padding-inline-start: 1.625em;

            > li {
                padding-left: 4px;

                &::marker {
                    color: ${theme.colors.gray400};
                }
            }

            p,
            p:last-child {
                margin-bottom: 8px;
            }
        }

        a {
            color: ${theme.colors.teal};
        }

        pre {
            background-color: ${theme.colors.gray200};
            border-radius: 3px;
            border: 1px solid var(--border-color);
            font-size: 0.85rem;
            line-height: 1.4em;
            padding: 8px 12px;
        }

        blockquote {
            border-left: 3px solid var(--border-color);
            padding: 4px 16px;
        }

        hr {
            border: none;
            border-top: 1px solid var(--border-color);
            margin: 20px 0;
        }

        img {
            vertical-align: bottom;
            height: auto;
            max-width: 100%;

            &.ProseMirror-selectednode {
                ${selectedNode}
            }
        }
    }
`;

export const StyledFloatingToolbar = styled.div<{ $disabled?: boolean }>`
    ${({ $disabled }) => `
        --border-color: ${$disabled ? theme.colors.disableBorder : theme.newColors.simplyGrey["100"]};
    `}

    background: white;
    box-shadow: box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border: 1px solid var(--border-color);
    padding: 4px 0;
`;

export const PrimaryToolbar = styled.div<{ $focus?: boolean }>`
    background: ${theme.newColors.grey1["100"]};
    border: 1px solid var(--border-color);
    border-bottom: 0;
    position: sticky;
    padding: 4px 0;
    top: -25px;
    z-index: 1;

    &::after {
        border-bottom: 1px solid var(--border-color);
        bottom: -1px;
        content: " ";
        left: 16px;
        right: 16px;
        position: absolute;
    }

    ${({ $focus }) => $focus && `
        border-color: ${theme.newColors.almostBlack["100"]};
    `}
`;

export const ControlGroups = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ControlGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 8px;
    padding-right: 8px;
    position: relative;
    margin-left: 1px;
    gap: 2px;

    &::after {
        content: " ";
        position: absolute;
        border-right: 1px solid var(--border-color);
        top: 6px;
        bottom: 6px;
        right: -1px;
    }
`;

export const StyledControlButton = styled.button.attrs<{ $active?: boolean; $square?: boolean }>(props => ({ ...props, type: "button" }))`
    align-items: center;
    background: none;
    border-radius: 4px;
    border: 0;
    display: flex;
    height: 32px;
    justify-content: center;
    position: relative;

    &:not(:disabled) {
        cursor: pointer;
    }

    svg {
        height: 24px;
        width: 24px;
    }

    ${({ $square }) => $square && `
        width: 32px;
    `}

    ${controlColors}
`;

export const StyledTextStyleMenuButton = styled(StyledControlButton)`
    width: 100px;
    text-align: center;
`;

export const MultipleStyles = styled.div`
    font-style: italic;
    color: ${theme.newColors.grey3["100"]};
`;

export const CodeView = styled(TextareaAutosize)`
    background: ${theme.newColors.grey1["100"]};
    border: 1px solid var(--border-color);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 16px;
    margin: 0;
    min-height: 10rem;
    width: 100%;
    resize: vertical;

    &:focus {
        border-color: ${theme.newColors.almostBlack["100"]};
        outline: none;
    }
`;

export const StyledControlMenu = styled(MenuBase)`
    font-family: ${theme.fontFamily};
    padding: 10px;

    h1 {
        ${h1Size}
    }

    h2 {
        ${h2Size}
    }

    h3 {
        ${h3Size}
    }

    h4 {
        ${h4Size}
    }

    h5 {
        ${h5Size}
    }

    h6 {
        ${h6Size}
    }
`;

export const StyledMenuItem = styled.button<{ $active?: boolean }>`
    background: none;
    border: 0;
    border-radius: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 12px;
    width: 100%;
    padding: 8px 12px;

    ${controlColors}



    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
`;

export const MenuItemLabel = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    gap: 4px;
`;

export const MenuItemShortcut = styled.div`
    background: ${theme.colors.gray200};
    font-size: 12px;
    text-align: center;
    padding: 2px 4px;
    border-radius: 3px;
    margin-left: auto;
`;

export const StyledModeSwitch = styled.div`
    background: white;
    border: 1px solid var(--border-color);
    border-bottom: 0;
    justify-content: end;
    align-items: center;
    display: flex;
    padding: 8px 8px 0 8px;
    align-self: end;
    gap: 4px;
    position: relative;
    z-index: 2;
`;

export const ModeButton = styled.button.attrs((props) => ({ ...props, type: "button" }))<{ $active?: boolean; $focus?: boolean }>`
    border-radius: 0;
    border: 1px solid transparent;
    padding: 4px 8px;

    ${({ $active, $focus }) => !$active ? `
        background: white;
        cursor: pointer;
    ` : `
        background: ${theme.newColors.grey1["100"]};
        border-color: ${$focus ? theme.newColors.almostBlack["100"] : theme.colors.gray300};
        border-bottom-color: ${theme.newColors.grey1["100"]};
        padding-bottom: 5px;
        margin-bottom: -1px;
    `}
`;
