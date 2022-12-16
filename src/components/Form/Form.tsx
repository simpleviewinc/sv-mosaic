import * as React from "react";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { StyledDisabledForm, StyledForm } from "./Form.styled";
import { FormProps } from "./FormTypes";
import { formActions } from "./formActions";
import FormLayout from "./FormLayout";
import TopComponent, { ViewType } from "@root/forms/TopComponent";
import { FormContent, Row } from "@root/forms/TopComponent/TopComponent.styled";
import FormNav from "@root/forms/FormNav";
import { useViewResizer, ViewProvider } from "@root/utils/useWindowResizer";
import { MosaicObject } from "@root/types";
import { filterAction } from "@root/components/DataView/utils/bulkActionsUtils";
import Dialog from "@root/components/Dialog";
import { ButtonProps } from "../Button";
import { Views } from "@root/theme/theme";

const Form = (props: FormProps) => {
	const {
		buttons,
		type,
		state,
		title,
		fields,
		sections,
		dispatch,
		onCancel,
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
	const formContentRef = useRef();
	const [topComponentHeight, setTopComponentHeight] = useState<number>();
	const [sectionsRefs, setSectionsRefs] = useState<HTMLDivElement[]>([]);
	const { view } = useViewResizer({ type, formContainerRef });

	useEffect(() => {
		setSectionsRefs(sectionsRef.current);
	}, []);

	useEffect(() => {
		setTopComponentHeight(topComponentRef.current?.offsetHeight);
	}, [topComponentRef.current?.offsetHeight]);

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

			if (getFormValues) {
				values = await getFormValues();
			} else {
				fields.forEach(field => {
					if (field.defaultValue) {
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

	const cancel = async (e) => {
		e.preventDefault();
		onCancel && (await onCancel());
	}

	const filteredButtons = useMemo(() => (
		buttons?.filter(button => filterAction(button))
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

	return (
		<>
			<ViewProvider value={view}>
				<div
					data-testid="form-test-id"
					style={{ position: "relative", height: "100%" }}
					ref={formContainerRef}
				>
					{state.disabled &&
					<StyledDisabledForm />
					}
					<StyledForm autoComplete="off">
						{title &&
						<TopComponent
							ref={topComponentRef}
							title={title}
							type={type}
							description={description}
							onCancel={onCancel ? (e) => cancel(e) : null}
							sections={sections}
							view={
								type?.toUpperCase() === Views.drawer ?
									type.toUpperCase() as ViewType
									:
									view
							}
							buttons={filteredButtons}
							sectionsRefs={sectionsRefs}
							formContentRef={formContentRef}
							tooltipInfo={tooltipInfo}
							showActive={showActive}
						/>
						}
						{view === Views.bigDesktop && sections ? (
							<Row className={`${view}`} topComponentHeight={topComponentHeight}>
								{sections &&
								<FormNav
									sectionsRefs={sectionsRefs}
									sections={sections}
									formContentRef={formContentRef}
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
				</div>
			</ViewProvider>
			{type === "drawer" &&
				<Dialog
					buttons={dialogButtons}
					dialogTitle='Are you sure you want to leave?'
					open={dialogOpen}
				>
					You have unsaved changes. If you leave all your changes will be lost.
				</Dialog>
			}
		</>
	);
}

export default memo(Form);
