import { ButtonProps } from "@root/components/Button";
import { TitleWrapperProps } from "@root/forms/TopComponent/Utils/TitleWrapperTypes";

export interface PageHeaderProps {
	title?: string;
	buttons?: ButtonProps[];
	onBack?: TitleWrapperProps["onBack"];
	backLabel?: TitleWrapperProps["backLabel"]
}
