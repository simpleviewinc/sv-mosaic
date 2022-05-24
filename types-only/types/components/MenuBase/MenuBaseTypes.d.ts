/// <reference types="react" />
export interface MenuBaseContextProps {
    onClose(): void;
}
export interface MenuBaseProps {
    open: boolean;
    anchorEl?: HTMLElement;
    onClose(): void;
    children: React.ReactNode;
}
