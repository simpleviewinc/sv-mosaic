import type { ButtonProps } from "@root/components/Button";
import type { TitleWrapperProps } from "@root/components/Title";
import type { Ref } from "react";

export interface PageHeaderProps {
	title?: string;
	buttons?: ButtonProps[];
	onBack?: TitleWrapperProps["onBack"];
	backLabel?: TitleWrapperProps["backLabel"];
	ref?: Ref<HTMLDivElement>;
}
