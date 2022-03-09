import { FormButtonProps } from '@root/forms/Button';
import { FormNavProps } from '@root/forms/FormNav';
import { ReactNode } from 'react';

export interface TopComponentProps extends FormNavProps {
	/**
	 * It should contains the sections
	 */
	children?: ReactNode;
	/**
	 * Mandatory title related with the form.
	 */
	title: string;
	/**
	 * Optional description for the current form.
	 */
	description?: string;
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
	 * If present, the active checkbox is displayed.
	 */
	showActive?: boolean;
	/**
	 * Extra attributes for the submit button.
	 */
	submitButtonAttrs?: FormButtonProps;
	/**
	 * Extra attributes for the cancel button.
	 */
	cancelButtonAttrs?: FormButtonProps;
	/**
	 * If present, the help icon is display with the
	 * string defined with this prop.
	 */
	tooltipInfo?: string;
	/**
	 * Defines the type of form to be working with, which
	 * allows for type-specific styling.
	 */
	type?: 'drawer';
	view: 'MOBILE' | 'RESPONSIVE' | 'DRAWER' | 'DESKTOP' | 'BIG_DESKTOP';
}
