import { ButtonProps } from "@root/components/Button";
import { TopComponentProps } from "@root/forms/TopComponent";

export interface DrawerHeaderProps {
	title?: string;
	buttons?: ButtonProps[];
	onCancel?: TopComponentProps["onCancel"];
}
