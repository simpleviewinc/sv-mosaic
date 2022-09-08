import * as React from "react";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { StyledDisabledForm, StyledForm } from "./Form.styled";
import { FormProps } from "./FormTypes";
import { formActions } from "./formActions";
import FormLayout from "./FormLayout";
import TopComponent from "@root/forms/TopComponent";
import { FormContent, Row } from "@root/forms/TopComponent/TopComponent.styled";
import FormNav from "@root/forms/FormNav";
import { useWindowResizer } from "@root/utils/useWindowResizer";
import { MosaicObject } from "@root/types";
import { filterAction } from "@root/components/DataView/utils/bulkActionsUtils";
import Dialog from "@root/components/Dialog";

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
		dialogOpen,
		description,
		getFormValues,
		handleDialogClose,
	} = props;

	const { view } = useWindowResizer(type);
	const sectionsRef = useRef<HTMLDivElement[]>([]);
	const contentRef = useRef();
	const [sectionsRefs, setSectionsRefs] = useState<HTMLDivElement[]>([]);

	useEffect(() => {
		setSectionsRefs(sectionsRef.current);
	}, []);

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

			if (values)
				await dispatch(
					formActions.setFormValues({
						values
					})
				);
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

	return (
		<>
			<div data-testid="form-test-id" style={{ position: "relative", height: "100%" }}>
				{state.disabled &&
					<StyledDisabledForm />
				}
				<StyledForm>
					{title &&
						<TopComponent
							title={title}
							type={type}
							description={description}
							onCancel={onCancel ? (e) => cancel(e) : null}
							sections={sections}
							view={view}
							buttons={filteredButtons}
							sectionsRefs={sectionsRefs}
							contentRef={contentRef}
						/>
					}
					{view === "BIG_DESKTOP" && sections ? (
						<Row>
							{sections &&
								<FormNav sectionsRefs={sectionsRefs} contentRef={contentRef} sections={sections} />
							}
							<FormContent view={view} sections={sections} ref={contentRef}>
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
						<FormContent view={view} sections={sections} ref={contentRef}>
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
			{type === "drawer" &&
				<Dialog
					dialogTitle='Are you sure you want to leave?'
					open={dialogOpen}
					primaryAction={() => handleDialogClose(true)}
					primaryBtnLabel='Yes, leave'
					secondaryAction={() => handleDialogClose(false)}
					secondaryBtnLabel='No, stay'

				>
					You have unsaved changes. If you leave all your changes will be lost.
				</Dialog>
			}
		</>
	);
}

export default memo(Form);
