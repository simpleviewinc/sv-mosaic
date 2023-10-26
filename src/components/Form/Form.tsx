import React, { useState } from "react";
import { memo, useEffect, useMemo, useRef, useCallback } from "react";
import { FormProps } from "./FormTypes";
import { MosaicCSSContainer, MosaicObject } from "@root/types";

import { formActions } from "./formActions";
import evaluateShow from "@root/utils/show/evaluateShow";

import {
	StyledFormContent,
	StyledForm,
	StyledContainerForm,
	StyledFormPrimary,
	StyledSideNav
} from "./Form.styled";
import Layout from "./Layout";
import Top from "./Top";
import Dialog from "@root/components/Dialog";
import { ButtonProps } from "../Button";
import { Item, SideNavArgs } from "../SideNav";
import useScrollSpy from "@root/utils/hooks/useScrollSpy";
import Snackbar from "../Snackbar/Snackbar";

const topCollapseContainer: MosaicCSSContainer = {
	name: "FORM",
	minWidth: "sm"
}

const sidebarCollapseContainer: MosaicCSSContainer = {
	name: "FORM",
	minWidth: "xl"
}

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
		tooltipInfo,
		showActive,
		scrollSpyThreshold = 0.15,
		fullHeight = true
	} = props;

	const [sectionRefs, setSectionRefs] = useState<HTMLElement[]>([]);
	const formContainerRef = useRef<HTMLDivElement>();
	const formContentRef = useRef<HTMLDivElement>();

	const {
		activeSection,
		setActiveSection,
	} = useScrollSpy({
		refs: sectionRefs,
		container: formContentRef.current,
		threshold: scrollSpyThreshold
	});

	useEffect(() => {
		let isMounted = true;
		const registerFields = async () => {
			await dispatch(
				formActions.init({
					fields
				})
			);
		}

		// TODO This is always true?
		if (isMounted) {
			registerFields();
		}

		// TODO This is redundant
		return () => {
			isMounted = false;
		}
	},[fields])

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
							[field.name]: field.defaultValue
						};
					}
				});

			}

			if (values) {
				await dispatch(
					formActions.setFormValues({
						values
					})
				);
			}

			await dispatch(formActions.disableForm({ disabled: false }));
		}

		loadFormValues();
	}, [getFormValues]);

	const filteredButtons = useMemo(() => (
		buttons?.filter(button => evaluateShow(button.show))
	) ,[buttons]);

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

	const registerRef: ((ref: HTMLElement) => () => void) = useCallback((ref) => {
		setSectionRefs(refs => [...refs, ref]);

		return () => {
			setSectionRefs(refs => refs.filter(r => r !== ref));
		}
	}, []);

	/**
	 * In order to use the SideNav on a big desktop we need to transform
	 * the sections array into an array of Items objects. The name will
	 * be the index of the section since this index corresponds to the
	 * section id.
	 */
	const items: Item[] = useMemo(() => {
		return (sections || []).map((section, idx) => evaluateShow(section.show, {data: state.data}) && ({
			label: section.title,
			name: idx.toString(),
		})).filter(Boolean);
	}, [sections, state.data]);

	/**
	 * Highlights and scrolls to the sections which link
	 * was clicked.
	 * @param args
	 */
	const onNav = useCallback((args: SideNavArgs) => {
		setActiveSection(Number(args.item.name))
	}, [setActiveSection]);

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

	const isBusy = state.disabled || Object.values(state.busyFields).filter(Boolean).length;

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
							buttons={filteredButtons}
							tooltipInfo={tooltipInfo}
							showActive={showActive}
							bottomBorder={items.length < 2}
							collapse={topCollapseContainer}
						/>
					)}
					<StyledFormPrimary className="form-primary">
						{items.length > 1 && (
							<StyledSideNav
								items={[items]}
								active={String(activeSection)}
								onNav={onNav}
								collapse={sidebarCollapseContainer}
							/>
						)}
						<StyledFormContent ref={formContentRef}>
							<Layout
								registerRef={registerRef}
								state={state}
								dispatch={dispatch}
								fields={fields}
								sections={sections}
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
}

export default memo(Form);
