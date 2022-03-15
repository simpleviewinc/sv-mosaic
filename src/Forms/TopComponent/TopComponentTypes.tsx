import { FormNavProps } from '@root/forms/FormNav';
import { ReactNode } from 'react';
import { ButtonAttrs } from "../Form/FormTypes";

export type BaseTopComponentProps = {
	/**
	 * Mandatory title related with the form.
	 */
	title: string;
	/**
	 * Optional description for the current form.
	 */
	description?: string;
	/**
	 * If present, the help icon is display with the
	 * string defined with this prop.
	 */
	tooltipInfo?: string;
	/**
	 * If present, the active checkbox is displayed.
	 */
	showActive?: boolean;
	/**
	 * All different variants for the top comopnent.
	 */
	view: 'MOBILE' | 'RESPONSIVE' | 'DRAWER' | 'DESKTOP' | 'BIG_DESKTOP';
	/**
	 * Icon to be displayed when developers pass additional instructions
	 * or information for the form.
	 */
	helpIcon?: JSX.Element;
}

export type TopComponentProps = {
	/**
	 * It should contains the sections
	 */
	children?: ReactNode;
	/**
	 * Callback that will be triggered when clicking
	 * on the cancel button.
	 */
	onCancel: (() => void) | ((e: any) => void);
	/**
	 * Callback that will be triggered when clicking
	 * on the save button.
	 */
	onSubmit: (() => void) | ((e: any) => Promise<void>);
	/**
	 * Extra attributes for the submit button.
	 */
	submitButtonAttrs?: ButtonAttrs;
	/**
	 * Extra attributes for the cancel button.
	 */
	cancelButtonAttrs?: ButtonAttrs;
	/**
	 * Defines the type of form to be working with, which
	 * allows for type-specific styling.
	 */
	type?: 'drawer';
} & FormNavProps & BaseTopComponentProps;
