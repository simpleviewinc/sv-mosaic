import { ButtonProps } from "@root/components/Button";
import { FormProps } from "../Form";

export interface PageHeaderProps {
	title?: string;
	buttons?: ButtonProps[];
	onBack?: FormProps["onBack"];
}
