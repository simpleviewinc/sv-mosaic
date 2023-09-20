import React, { useState } from "react";
import { memo, useEffect, useMemo, useRef, useCallback } from "react";
import { StyledForm, StyledContainerForm } from "./Form.styled";
import { FormProps } from "./FormTypes";
import { formActions } from "./formActions";
import FormLayout from "./FormLayout";
import TopComponent from "@root/forms/TopComponent";
import { FormContent, Row } from "@root/forms/TopComponent/TopComponent.styled";
import { useViewResizer, ViewProvider } from "@root/utils/formViewUtils";
import { MosaicObject } from "@root/types";
import Dialog from "@root/components/Dialog";
import { Views } from "@root/theme/theme";
import evaluateShow from "@root/utils/show/evaluateShow";
import { ButtonProps } from "../Button";
import { useRefsDispatch } from "../../forms/shared/refsContext/RefsContext";
import SideNav, { Item, SideNavArgs } from "../SideNav";
import useScrollSpy from "@root/utils/hooks/useScrollSpy";
import Snackbar from "../Snackbar/Snackbar";

const Form = (props: FormProps) => {
	const {
		buttons,
		state,
		title,
		onBack,
		fields,
		sections,
		dispatch,
		dialogOpen = false,
		description,
		getFormValues,
		handleDialogClose,
		tooltipInfo,
		showActive,
		scrollSpyThreshold = 0.15
	} = props;

	const [sectionRefs, setSectionRefs] = useState<HTMLElement[]>([]);
	const formContainerRef = useRef<HTMLDivElement>();
	const topComponentRef = useRef<HTMLDivElement>();
	const formContentRef = useRef<HTMLDivElement>();

	const {
		activeSection,
		setActiveSection,
	} = useScrollSpy({
		refs: sectionRefs,
		container: formContentRef.current,
		threshold: scrollSpyThreshold
	});

	const dispatchRef = useRefsDispatch();
	const { view } = useViewResizer({ formContainerRef });

	useEffect(() => {
		dispatchRef && topComponentRef.current && dispatchRef({
			type: "update",
			ref: {
				topComponentDrawerRef: topComponentRef.current
			}
		});

	}, [topComponentRef.current?.offsetHeight, view]);

	useEffect(() => {
		dispatchRef && formContentRef.current?.children[0] &&
			dispatchRef({
				type: "update",
				ref: {
					formLayoutRef: formContentRef.current.children[0]
				}
			});

	}, [formContentRef.current?.children[0], view]);

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

	if (!view) {
		return null;
	}

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

	const isBigDesktopWithSections =
		view === Views.bigDesktop &&
		sections &&
		sections?.length > 1;

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
		if (!isBigDesktopWithSections) return;

		return sections?.map((section, idx) => evaluateShow(section.show, {data: state.data}) && ({
			label: section.title,
			name: idx.toString(),
		})).filter(Boolean);
	}, [sections, state.data, view]);

	const topComponentSections = useMemo(() => {
		return sections?.filter(section => evaluateShow(section.show, {data: state.data}))
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
			<ViewProvider value={view}>
				<StyledContainerForm
					data-testid="form-test-id"
					style={{ position: "relative", height: "100%" }}
					ref={formContainerRef}
					className={state.disabled ? "disabled" : ""}
					aria-busy={isBusy ? "true" : "false"}
					role="form"
					aria-label={title}
				>
					<StyledForm autoComplete="off">
						{title &&
						<TopComponent
							ref={topComponentRef}
							title={title}
							onBack={onBack}
							description={description}
							sections={topComponentSections}
							view={view}
							buttons={filteredButtons}
							activeSection={activeSection}
							tooltipInfo={tooltipInfo}
							showActive={showActive}
							onSectionSelect={setActiveSection}
						/>
						}
						<Row className={view} isBigDesktopWithSections={isBigDesktopWithSections}>
							{sections && isBigDesktopWithSections &&
								<SideNav
									items={[items]}
									active={String(activeSection)}
									onNav={onNav}
								/>
							}
							<FormContent view={view} sections={sections} ref={formContentRef}>
								<FormLayout
									// ref={sectionsRef}
									registerRef={registerRef}
									state={state}
									dispatch={dispatch}
									fields={fields}
									sections={sections}
									view={view}
								/>
							</FormContent>
						</Row>
					</StyledForm>
				</StyledContainerForm>
			</ViewProvider>
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
