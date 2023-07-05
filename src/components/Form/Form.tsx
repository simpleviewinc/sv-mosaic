import * as React from "react";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { debounce } from "lodash";
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
import { getOuterHeight } from "@root/utils/dom/getOuterHeight";
import { getInnerHeight } from "@root/utils/dom/getInnerHeight";
import { getViewportContentOffset } from "@root/utils/dom/getEdgeDifference";

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

	// const sectionsRef = useRef<HTMLDivElement[]>([]);
	const sectionRefs = useRef<HTMLElement[]>([]);
	const formContainerRef = useRef<HTMLDivElement>();
	const topComponentRef = useRef<HTMLDivElement>();
	const formContentRef = useRef<HTMLDivElement>();
	const [scrollActiveSection, setScrollActiveSection] = useState("0");
	const [userActiveSection, setUserActiveSection] = useState<string | null>(null);
	const activeSection = userActiveSection !== null ? userActiveSection : scrollActiveSection;
	const clearUserActiveSectionDebounced = useRef(debounce(() => setUserActiveSection(null), 100));

	const dispatchRef = useRefsDispatch();

	// const [sectionsRefs, setSectionsRefs] = useState<HTMLDivElement[]>([]);
	const { view } = useViewResizer({ formContainerRef });

	// useEffect(() => {
	// 	setSectionsRefs(sectionsRef.current);
	// }, []);

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

	const registerRef: ((ref: HTMLElement) => () => void) = React.useCallback((ref) => {
		sectionRefs.current.push(ref);

		return () => {
			sectionRefs.current = sectionRefs.current.filter(r => r !== ref);
		}
	}, []);

	const getScrollActiveSection = React.useCallback((container: HTMLElement) => {
		const {scrollTop, scrollHeight} = container;

		const scrollMax = scrollHeight - getInnerHeight(container);
		const scrolled = scrollTop / scrollMax;
		const contentSpan = scrollHeight
			- getViewportContentOffset(container, sectionRefs.current[0], "top")
			- getViewportContentOffset(container, sectionRefs.current[0], "bottom");

		const sectionHeights = sectionRefs.current.map(ref => getOuterHeight(ref));
		const segments = sectionHeights.reduce((acc, height) => [
			...acc,
			(height / contentSpan) + (acc[acc.length - 1] || 0)
		], []);

		for (let i = 0; i < segments.length; i++) {
			const lastPortion = segments[i - 1] || 0;
			const portion = segments[i];

			if (scrolled >= lastPortion && scrolled <= portion) {
				return i
			}
		}

		return 0;
	}, [sectionRefs.current]);

	/**
	 * If the Form view is for a big desktop it will create an
	 * IntersectionObserver the user has scrolled into a section
	 * and highlighting it.
	 */
	useEffect(() => {
		if (!isBigDesktopWithSections) {
			return;
		}

		const formContent = formContentRef.current;

		const onScroll = () => {
			clearUserActiveSectionDebounced.current();
			const section = getScrollActiveSection(formContent);

			setScrollActiveSection(String(section));
		}

		formContent.addEventListener("scroll", onScroll, {passive: true})

		return () => formContent.removeEventListener("scroll", onScroll);
	}, [sectionRefs, sections, view]);

	/**
	 * In order to use the SideNav on a big desktop we need to transform
	 * the sections array into an array of Items objects. The name will
	 * be the index of the section since this index corresponds to the
	 * section id.
	 */
	const items: Item[] = useMemo(() => {
		if (!isBigDesktopWithSections) return;

		return sections?.map((section, idx) => ({
			label: section.title,
			name: idx.toString(),
		}));
	}, [sections, view]);

	/**
	 * Highlights and scrolls to the sections which link
	 * was clicked.
	 * @param args
	 */
	const onNav = (args: SideNavArgs) => {
		const sectionIndex = Number(args.item.name);
		const section = sectionRefs.current[sectionIndex];

		if (!section) {
			return;
		}

		setUserActiveSection(args.item.name)

		section.scrollIntoView({
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
							// sectionsRefs={sectionsRefs}
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
						) : (
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
