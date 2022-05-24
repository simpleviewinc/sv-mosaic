/// <reference types="react" />
import { ButtonProps } from "../Button";
export interface ButtonRowProps {
    buttons?: ButtonProps[];
    children?: React.ReactNode;
    className?: string;
}
