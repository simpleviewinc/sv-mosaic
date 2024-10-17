import type { ReactNode } from "react";

import type { TitleWrapperProps } from "@root/components/Title";

export interface DrawerTopBarProps {
	title: string | JSX.Element;
	onBack: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	backLabel?: TitleWrapperProps["backLabel"];
	onCancel?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onSave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onApply?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface DrawerBottomProps {
	background?: string;
	children: ReactNode;
}

export type DrawerContentProps = DrawerTopBarProps & DrawerBottomProps;
