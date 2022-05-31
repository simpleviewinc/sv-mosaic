import { ButtonProps } from "../Button";

export interface SummaryPageCardProps {
	bottomAction?: ButtonProps;
	content: JSX.Element;
	title: JSX.Element;
	titleIcon?: JSX.Element;
	topAction?: ButtonProps;
	size?: "lg" | "md";
}
