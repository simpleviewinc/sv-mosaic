import { MenuItemProps } from "../MenuItem";
interface MenuSelectOption {
    label: MenuItemProps["label"];
    value: string;
    mIcon?: MenuItemProps["mIcon"];
    color?: MenuItemProps["color"];
}
export interface MenuSelectProps {
    options: MenuSelectOption[];
    placeholder?: string;
    value: string;
    onChange(value: string): void;
}
export {};
