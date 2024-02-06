import React, { useState } from "react";
import { memo, useEffect, useMemo, useRef, useCallback } from "react";
import { FormProps } from "./FormTypes";
import { MosaicCSSContainer, MosaicObject } from "@root/types";

import { formActions } from "./formActions";

import {
	StyledFormContent,
	StyledForm,
	StyledContainerForm,
	StyledFormPrimary,
	StyledSideNav,
} from "./Form.styled";
import Layout from "./Layout";
import Top from "./Top";
import Dialog from "@root/components/Dialog";
import { ButtonProps } from "../Button";
import { Item, SideNavArgs } from "../SideNav";
import useScrollSpy from "@root/utils/hooks/useScrollSpy";
import Snackbar from "../Snackbar/Snackbar";
import { useWrappedToggle } from "@root/utils/toggle";
import { generateLayout } from "./Layout/layoutUtils";

const topCollapseContainer: MosaicCSSContainer = {
	name: "FORM",
	minWidth: "sm",
};

const sidebarCollapseContainer: MosaicCSSContainer = {
	name: "FORM",
	minWidth: "xl",
};

const Form = (props: FormProps) => {
	const {
		buttons,
		state,
		title,
		onBack,
		backLabel,
		fields,
		sections,
		dispatch,
		dialogOpen = false,
		description,
		getFormValues,
		handleDialogClose,
		showActive,
		scrollSpyThreshold = 0.15,
		fullHeight = true,
		spacing = "normal",
	} = props;

	/**
	 * Sections/layout and scroll spying
	 */
	const [sectionRefs, setSectionRefs] = useState<HTMLElement[]>([]);
	const formContainerRef = useRef<HTMLDivElement>();
	const formContentRef = useRef<HTMLDivElement>();

	const {
		activeSection,
		setActiveSection,
	} = useScrollSpy({
		refs: sectionRefs,
		container: formContentRef.current,
		threshold: scrollSpyThreshold,
	});

	const layout = useMemo(() => {
		return generateLayout({ sections, fields });
	}, [sections, fields]);

	const shownSections = useWrappedToggle(layout, state, "show");

	const registerRef: ((ref: HTMLElement) => () => void) = useCallback((ref) => {
		setSectionRefs(refs => [...refs, ref]);

		return () => {
			setSectionRefs(refs => refs.filter(r => r !== ref));
		};
	}, []);

	/**
	 * In order to use the SideNav on a big desktop we need to transform
	 * the sections array into an array of Items objects. The name will
	 * be the index of the section since this index corresponds to the
	 * section id.
	 */
	const sideNavItems: Item[] = useMemo(() => shownSections.map((section, idx) => ({
		label: section.title,
		name: idx.toString(),
	})), [shownSections]);

	/**
	 * Highlights and scrolls to the sections which link
	 * was clicked.
	 * @param args
	 */
	const onNav = useCallback((args: SideNavArgs) => setActiveSection(Number(args.item.name)), [setActiveSection]);

	const submitWarningContent = typeof state.submitWarning === "object" ? (
		<>
			<div>{state.submitWarning.lead}</div>
			<ul>
				{state.submitWarning.reasons.map(reason => (
					<li key={reason}>{reason}</li>
				))}
			</ul>
		</>
	) : (
		state.submitWarning
	);

	/**
	 * Unsaved changes dialog
	 */
	const dialogButtons: ButtonProps[] = [
		{
			label: "No, stay",
			onClick: () => handleDialogClose(false),
			color: "gray",
			variant: "outlined",
		},
		{
			label: "Yes, leave",
			onClick: () => handleDialogClose(true),
			color: "yellow",
			variant: "contained",
		},
	];

	/**
	 * Loading state
	 */
	const isBusy = state.disabled || Object.values(state.busyFields).filter(Boolean).length;

	/**
	 * Side effects
	 */
	useEffect(() => {
		let isMounted = true;
		const registerFields = async () => {
			await dispatch(
				formActions.init({
					fields,
				}),
			);
		};

		if (isMounted) {
			registerFields();
		}

		return () => {
			isMounted = false;
		};
	},[fields]);

	useEffect(() => {
		const loadFormValues = async () => {
			let values: MosaicObject;
			await dispatch(formActions.disableForm({ disabled: true }));

			values = getFormValues ? await getFormValues() : undefined;

			if (values === undefined) {
				fields.forEach(field => {
					if ("defaultValue" in field) {
						values = {
							...values,
							[field.name]: field.defaultValue,
						};
					}
				});

			}

			if (values) {
				await dispatch(
					formActions.setFormValues({
						values,
					}),
				);
			}

			await dispatch(formActions.disableForm({ disabled: false }));
		};

		loadFormValues();
	}, [getFormValues]);

	return (
		<>
			<StyledContainerForm
				data-testid="form-test-id"
				ref={formContainerRef}
				className={state.disabled ? "disabled" : ""}
				aria-busy={isBusy ? "true" : "false"}
				role="form"
				aria-label={title}
				$fullHeight={fullHeight}
			>
				<StyledForm autoComplete="off">
					{title && (
						<Top
							title={title}
							onBack={onBack}
							backLabel={backLabel}
							description={description}
							buttons={buttons}
							showActive={showActive}
							bottomBorder={sideNavItems.length < 2}
							collapse={topCollapseContainer}
						/>
					)}
					<StyledFormPrimary className="form-primary">
						{sideNavItems.length > 1 && (
							<StyledSideNav
								items={[sideNavItems]}
								active={String(activeSection)}
								onNav={onNav}
								collapse={sidebarCollapseContainer}
							/>
						)}
						<StyledFormContent ref={formContentRef} $spacing={spacing}>
							<Layout
								registerRef={registerRef}
								state={state}
								dispatch={dispatch}
								fields={fields}
								sections={shownSections}
								spacing={spacing}
							/>
						</StyledFormContent>
					</StyledFormPrimary>
				</StyledForm>
			</StyledContainerForm>
			<Dialog
				buttons={dialogButtons}
				dialogTitle='Are you sure you want to leave?'
				open={dialogOpen}
			>
				You have unsaved changes. If you leave all your changes will be lost.
			</Dialog>
			<Snackbar
				label={submitWarningContent}
				open={Boolean(state.submitWarning)}
				onClose={() => dispatch(formActions.setSubmitWarning({ value: "" }))}
				autoHideDuration={4000}
			/>
		</>
	);
};

export default memo(Form);
