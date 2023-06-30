import * as React from "react";
import { memo, useEffect, useMemo, useRef, useState } from "react";
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
		showActive
	} = props;

	const sectionsRef = useRef<HTMLDivElement[]>([]);
	const formContainerRef = useRef<HTMLDivElement>();
	const topComponentRef = useRef<HTMLDivElement>();
	const formContentRef = useRef<HTMLDivElement>();
	const [activeSection, setActiveSection] = useState("0");

	const dispatchRef = useRefsDispatch();

	const [sectionsRefs, setSectionsRefs] = useState<HTMLDivElement[]>([]);
	const { view } = useViewResizer({ formContainerRef });

	useEffect(() => {
		setSectionsRefs(sectionsRef.current);
	}, []);

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

		if (isMounted) {
			registerFields();
		}

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

	/**
	 * If the Form view is for a big desktop it will create an
	 * IntersectionObserver the user has scrolled into a section
	 * and highlighting it.
	 */
	useEffect(() => {
		if (!isBigDesktopWithSections) {
			return;
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				const sectionId = entry?.target.getAttribute("id");

				if (entry.isIntersecting) {
					setActiveSection(sectionId);
				}
			})
		}, { threshold: 0.5, rootMargin: "-20px 0px -20%", root: formContentRef?.current });

		sectionsRefs?.forEach(section => {
			observer.observe(section);
		})

		return () => observer.disconnect();
	}, [sectionsRefs, sections, view]);

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

	/**
	 * Highlights and scrolls to the sections which link
	 * was clicked.
	 * @param args
	 */
	const onNav = (args: SideNavArgs) => {
		const sectionIndex = Number(args.item.name);
		sectionsRefs[sectionIndex].scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};

	return (
		<>
			<ViewProvider value={view}>
				<StyledContainerForm
					data-testid="form-test-id"
					style={{ position: "relative", height: "100%" }}
					ref={formContainerRef}
					className={state.disabled ? "loading" : ""}
				>
					<StyledForm autoComplete="off">
						{title &&
						<TopComponent
							ref={topComponentRef}
							title={title}
							onBack={onBack}
							description={description}
							sections={sections}
							view={view}
							buttons={filteredButtons}
							sectionsRefs={sectionsRefs}
							formContentRef={formContentRef}
							tooltipInfo={tooltipInfo}
							showActive={showActive}
						/>
						}
						{isBigDesktopWithSections ? (
							<Row className={view}>
								{sections &&
								<SideNav
									items={[items]}
									active={activeSection}
									onNav={onNav}
								/>
								}
								<FormContent view={view} sections={sections} ref={formContentRef}>
									<FormLayout
										ref={sectionsRef}
										state={state}
										dispatch={dispatch}
										fields={fields}
										sections={sections}
										view={view}
									/>
								</FormContent>
							</Row>
						) : (
							<FormContent view={view} sections={sections} ref={formContentRef}>
								<FormLayout
									ref={sectionsRef}
									state={state}
									dispatch={dispatch}
									fields={fields}
									sections={sections}
									view={view}
								/>
							</FormContent>
						)}
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
		</>
	);
}

export default memo(Form);
