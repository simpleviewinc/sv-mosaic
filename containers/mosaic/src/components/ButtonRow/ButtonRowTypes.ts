import React from "react";
import { ButtonProps } from "../Button";

export type ButtonsRowWrapperProps = Pick<ButtonRowProps, "className" | "wrap" | "separator" | "skeleton"> & {
	children: {
		item: ReturnType<typeof React.Children.toArray>[number];
		key: number | string;
	}[];
};

export type ButtonRowWithDefProps = Omit<ButtonRowProps, "children" | "buttons"> & {
	buttons: ButtonRowProps["buttons"];
};

export type ButtonRowWithChildrenProps = Omit<ButtonRowProps, "children" | "buttons"> & {
	children: ButtonRowProps["children"];
};

export interface ButtonRowProps {
	buttons?: ButtonProps[];
	children?: React.ReactNode;
	className?: string;
	separator?: boolean;
	wrap?: boolean;
	skeleton?: boolean;
}
