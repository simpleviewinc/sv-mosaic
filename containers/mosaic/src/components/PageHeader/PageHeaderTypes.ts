import { ButtonProps } from "@root/components/Button";
import { TitleWrapperProps } from "@root/components/Title";

export interface PageHeaderProps {
	title?: string;
	buttons?: ButtonProps[];
	onBack?: TitleWrapperProps["onBack"];
	backLabel?: TitleWrapperProps["backLabel"];
}
