import React, { useState } from "react";
import { memo, useEffect, useMemo, useRef, useCallback } from "react";
import { FormProps } from "./FormTypes";
import { MosaicCSSContainer } from "@root/types";

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
import useScrollTo from "@root/utils/hooks/useScrollTo/useScrollTo";

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
		dialogOpen = false,
		description,
		getFormValues,
		handleDialogClose,
		scrollSpyThreshold = 0.15,
		fullHeight = true,
		spacing = "normal",
		useSectionHash = "section",
		onSubmit,
		methods,
		stable,
		autoFocus,
	} = props;

	const { init, setFormValues, setSubmitWarning, disableForm } = methods;
	const { errors, loadingInitial, disabled } = state;
	const { moveToError } = stable;

	const [sectionRefs, setSectionRefs] = useState<HTMLElement[]>([]);
	const formContainerRef = useRef<HTMLDivElement>();
	const formContentRef = useRef<HTMLDivElement>();

	/**
	 * Sections/layout and scroll spying. Also a callback to set
	 * the hash in the URL based on the active section.
	 */
	const {
		animation: { inProgress: scrollSpyAnimating },
		activeSection,
		setActiveSection,
	} = useScrollSpy({
		refs: sectionRefs,
		container: formContentRef,
		threshold: scrollSpyThreshold,
	});

	const setSectionHash = useCallback((index: number) => {
		const url = new URL(window.location.toString());
		url.hash = `${useSectionHash}-${index}`;
		history.replaceState({}, "", url.toString());
	}, [useSectionHash]);

	/**
	 * When there are errors and the "moveToError" property is true,
	 * scroll the first field with an error into view. This is usually
	 * when the form is submitted.
	 */
	const { scrollTo } = useScrollTo({
		container: formContentRef,
		onComplete: () => {
			stable.moveToError = false;
		},
	});

	useEffect(() => {
		if (!moveToError || !Object.keys(errors).filter(Boolean).length) {
			return;
		}

		const [firstErroneousField] = Object.entries(stable.fields)
			.filter(([, field]) => stable.mounted[field.name] && errors[field.name])
			.map(([, field]) => field)
			.sort(({ order: a }, { order: b }) => a - b);

		const mount = stable.mounted[firstErroneousField.name];

		if (!mount) {
			return;
		}

		scrollTo({
			target: mount.fieldRef,
		});
	}, [errors, moveToError, scrollTo, stable.fields, stable.mounted]);

	const doneAutoFocus = useRef(false);

	useEffect(() => {
		if (disabled || loadingInitial || !autoFocus || doneAutoFocus.current) {
			return;
		}

		const [firstField] = Object.entries(stable.fields)
			.filter(([, field]) => stable.mounted[field.name])
			.map(([, field]) => field)
			.sort(({ order: a }, { order: b }) => a - b);

		if (!firstField) {
			return;
		}

		const mount = stable.mounted[firstField.name];

		if (!mount || typeof mount?.inputRef?.focus !== "function") {
			return;
		}

		doneAutoFocus.current = true;
		mount.inputRef.focus();
	}, [disabled, loadingInitial, autoFocus, stable.fields, stable.mounted]);

	useEffect(() => {
		if (!useSectionHash) {
			return;
		}

		const { hash } = window.location;
		const regexp = new RegExp(`^#${useSectionHash}-(\\d+)`);
		const match = hash && hash.match(regexp);

		if (!match) {
			return;
		}

		const sectionIndex = Number(match[1]);
		setActiveSection(sectionIndex);
	}, [useSectionHash, setActiveSection]);

	useEffect(() => {
		if (!useSectionHash || scrollSpyAnimating()) {
			return;
		}

		setSectionHash(activeSection);
	}, [activeSection, scrollSpyAnimating, setSectionHash, useSectionHash]);

	const layout = useMemo(() => {
		return generateLayout({ sections, fields });
	}, [sections, fields]);

	const shownSections = useWrappedToggle(layout, state, "show");

	const registerRef: ((ref: HTMLElement) => () => void) = useCallback((ref) => {
		setSectionRefs(refs => [...refs, ref]);
		return () => setSectionRefs(refs => refs.filter(r => r !== ref));
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
	const onNav = useCallback((args: SideNavArgs) => {
		const index = Number(args.item.name);

		setSectionHash(index);
		setActiveSection(index);
	}, [setSectionHash, setActiveSection]);

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
	const isBusy = state.disabled || state.waits.length > 0;

	useEffect(() => {
		init({ fields });
	}, [init, fields]);

	useEffect(() => {
		(async () => {
			disableForm({
				disabled: true,
				initial: true,
			});

			const values = getFormValues ? (await getFormValues()) : {};

			setFormValues({
				values,
				initial: true,
			});
		})();
	}, [disableForm, getFormValues, setFormValues]);

	const onSubmitProxy = useCallback<FormProps["onSubmit"]>((e) => {
		e.preventDefault();
		onSubmit && onSubmit(e);
	}, [onSubmit]);

	const buttonsWithDisable = useMemo(() => (buttons || []).map(button => ({
		...button,
		disabled: state.disabled ? true : button.disabled,
	})), [state.disabled, buttons]);

	const fieldsWithDisable = useMemo(() => fields.map(field => ({
		...field,
		disabled: state.disabled ? true : field.disabled,
	})), [state.disabled, fields]);

	return (
		<>
			<StyledContainerForm
				data-testid="form-test-id"
				ref={formContainerRef}
				aria-busy={isBusy ? "true" : "false"}
				role="form"
				aria-label={title}
				$fullHeight={fullHeight}
			>
				<StyledForm autoComplete="off" onSubmit={onSubmitProxy}>
					{title && (
						<Top
							title={title}
							onBack={onBack}
							backLabel={backLabel}
							description={description}
							buttons={buttonsWithDisable}
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
								fields={fieldsWithDisable}
								sections={shownSections}
								spacing={spacing}
								methods={methods}
							/>
						</StyledFormContent>
					</StyledFormPrimary>
				</StyledForm>
			</StyledContainerForm>
			<Dialog
				buttons={dialogButtons}
				dialogTitle="Are you sure you want to leave?"
				open={dialogOpen}
			>
				You have unsaved changes. If you leave all your changes will be lost.
			</Dialog>
			<Snackbar
				label={submitWarningContent}
				open={state.submitWarning.open}
				onClose={() => setSubmitWarning({ ...state.submitWarning, open: false })}
				autoHideDuration={4000}
			/>
		</>
	);
};

export default memo(Form);
