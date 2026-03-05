import React, { useLayoutEffect } from "react";
import { memo, useEffect, useMemo, useRef, useCallback } from "react";

import type { MosaicCSSContainer } from "@root/types";
import type { AutofocusOptions, FormProps } from "./FormTypes";
import type { ButtonProps } from "../Button";
import type { Item, SideNavProps } from "../SideNav";

import {
	StyledFormContent,
	StyledForm,
	StyledContainerForm,
	StyledFormPrimary,
	StyledSideNav,
} from "./Form.styled";
import Layout from "./Layout/Layout";
import Top from "./Top";
import Dialog from "@root/components/Dialog";
import Snackbar from "../Snackbar/Snackbar";
import { useWrappedToggle } from "@root/utils/toggle";
import { generateLayout } from "./Layout/layoutUtils";
import { FormContext } from "./FormContext";
import sanitizeFieldDefs from "./useForm/utils/sanitizeFieldDefs";
import getFieldPaths from "./useForm/utils/getFieldPaths";
import { useScrollSpy } from "@root/utils/hooks";

const topCollapseContainer: MosaicCSSContainer = {
	name: "FORM",
	minWidth: "sm",
};

const sidebarCollapseContainer: MosaicCSSContainer = {
	name: "FORM",
	minWidth: "xl",
};

const Form = ({
	buttons,
	state,
	title,
	onBack,
	backLabel,
	fields: providedFields,
	sections,
	dialogOpen = false,
	description,
	handleDialogClose,
	scrollSpyThreshold = 0.15,
	fullHeight = true,
	spacing = "normal",
	onSubmit,
	methods,
	stable,
	autoFocus,
	bottomSlot = null,
	hideSectionNav,
}: FormProps) => {
	const formContextValue = useMemo(() => ({ methods, state }), [methods, state]);
	const fields = useMemo(() => sanitizeFieldDefs(providedFields, sections), [providedFields, sections]);
	const layout = useMemo(() => {
		return generateLayout({ sections, fields });
	}, [sections, fields]);
	const { init, setSubmitWarning } = methods;
	const { errors, disabled } = state;
	const { moveToError } = stable;

	const formContainerRef = useRef<HTMLDivElement>(undefined);
	const formContentRef = useRef<HTMLDivElement>(undefined);

	const {
		registerRef,
		goToSection,
		activeSection,
	} = useScrollSpy({
		container: formContentRef,
		intersectionRatioThreshold: scrollSpyThreshold,
	});

	const onNav: SideNavProps["onNav"] = ({ item: { name } }) => {
		goToSection(name);
	};

	useEffect(() => {
		if (!moveToError || !Object.keys(errors).filter(Boolean).length) {
			return;
		}

		const firstErrorPath = getFieldPaths(stable.fields)
			.map(path => path.join("."))
			.find(path => stable.mounted[path] && errors[path]);

		if (!firstErrorPath) {
			return;
		}

		const mount = stable.mounted[firstErrorPath];

		if (!mount) {
			return;
		}

		mount.fieldRef.scrollIntoView({
			behavior: "smooth",
		});
	}, [errors, moveToError, stable.fields, stable.mounted]);

	const doneAutoFocus = useRef(false);

	useEffect(() => {
		if (disabled || state.skeleton || !autoFocus || doneAutoFocus.current) {
			return;
		}

		const autoFocusOptions: AutofocusOptions = typeof autoFocus === "object" ? autoFocus : {
			selectAll: false,
		};

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

		window.requestAnimationFrame(() => {
			mount.inputRef.focus();

			if (autoFocusOptions.selectAll && "select" in mount.inputRef) {
				mount.inputRef.select();
			}
		});
	}, [disabled, state.skeleton, autoFocus, stable.fields, stable.mounted]);

	const shownSections = useWrappedToggle(layout, state, "show");

	/**
	 * In order to use the SideNav on a big desktop we need to transform
	 * the sections array into an array of Items objects. The name will
	 * be the index of the section since this index corresponds to the
	 * section id.
	 */
	const sideNavItems: Item[] = useMemo(() => shownSections.map(({ title, id }) => ({
		label: title,
		name: id,
	})), [shownSections]);

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
			intent: "secondary",
			variant: "contained",
		},
		{
			label: "Yes, leave",
			onClick: () => handleDialogClose(true),
			intent: "primary",
			variant: "contained",
		},
	];

	useLayoutEffect(() => {
		init({ fields, sections });
	}, [init, fields, sections]);

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
		<FormContext.Provider value={formContextValue}>
			<StyledContainerForm
				data-testid="form-test-id"
				ref={formContainerRef}
				aria-busy={state.skeleton}
				role="form"
				aria-label={title}
				$fullHeight={fullHeight}
				className="Mos-Form"
			>
				<StyledForm
					autoComplete="off"
					onSubmit={onSubmitProxy}
					noValidate
				>
					{title && (
						<Top
							title={title}
							onBack={onBack}
							backLabel={backLabel}
							description={description}
							buttons={buttonsWithDisable}
							bottomBorder={sideNavItems.length < 2}
							hideSectionNav={hideSectionNav}
							collapse={topCollapseContainer}
							skeleton={state.skeleton}
						/>
					)}
					<StyledFormPrimary className="form-primary">
						{!hideSectionNav && sideNavItems.length > 1 && (
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
								fields={fieldsWithDisable}
								sections={shownSections}
								spacing={spacing}
								methods={methods}
								skeleton={state.skeleton}
							/>
						</StyledFormContent>
					</StyledFormPrimary>
					{bottomSlot}
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
		</FormContext.Provider>
	);
};

export default memo(Form);
