import { ElementType, HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
/**
 * This type is used to defined the keys
 * that each button type must comply
 */
export declare type ButtonStyle = {
    border: string;
    colorText: string;
    colorTextHover: string;
    fontSize: string;
    height: string;
    hover: string;
    minWidth: string;
    textTransform: string;
    regular: string;
    padding: string;
};
/**
 * All the possible button types
 */
export declare type ButtonType = 'primary' | 'secondary' | 'blueText' | 'redText' | 'approve' | 'deny';
export interface FormButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * The content of the button component
     */
    children?: ReactNode;
    /**
     * Flag to indicate whether the button is clickable or not
     */
    disabled?: boolean;
    /**
     * Optional icon element
     */
    icon?: ElementType;
    /**
     * Locates the icon either to the left or right of the button content
     */
    iconPosition?: 'left' | 'right';
    /**
     * Callback fired when the button is clicked
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Flag used to reduce the font size of buttons of type text
     */
    smallerButton?: boolean;
    /**
     * Represent the type of button that is going to be rendered
     */
    buttonType?: ButtonType;
    type?: any;
}
