import { ButtonProps } from "../Button";

export interface CardProps {
	bottomAction?: ButtonProps;
	content: JSX.Element[];
	title: JSX.Element;
	titleIcon?: JSX.Element;
	topAction?: ButtonProps;
}
