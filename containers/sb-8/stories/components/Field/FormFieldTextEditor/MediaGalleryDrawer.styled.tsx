import theme from "#mosaic/theme";
import styled from "styled-components";

export const DrawerWrapper = styled.div`
    width: 600px;
`;

export const MediaGalleryItem = styled.div`
    position: relative;
`;

export const MediaGalleryImage = styled.img<{ $selected?: boolean }>`
    border-radius: 4px;
    height: 200px;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    opacity: 0.8;

    ${({ $selected }) => $selected && `
        opacity: 1;
    `}
`;

export const MediaGalleryChecked = styled.div`
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    background: ${theme.colors.teal};
    border-radius: 3px;
    border: 1px solid white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;
