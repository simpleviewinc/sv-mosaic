/// <reference types="react" />
interface MenuSelectOption {
    label: string | JSX.Element;
    value: string;
}
export interface MenuSelectProps {
    options: MenuSelectOption[];
    placeholder?: string;
    value: string;
    onChange(value: string): void;
}
export {};
