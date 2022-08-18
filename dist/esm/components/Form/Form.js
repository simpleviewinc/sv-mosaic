import * as React from "react";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { StyledDisabledForm, StyledForm } from "./Form.styled";
import { formActions } from "./formActions";
import FormLayout from "./FormLayout";
import TopComponent from "../../forms/TopComponent";
import { FormContent, Row } from "../../forms/TopComponent/TopComponent.styled";
import FormNav from "../../forms/FormNav";
import { useWindowResizer } from "../../utils/useWindowResizer";
import { filterAction } from "../DataView/utils/bulkActionsUtils";
import Dialog from "../Dialog";
const Form = (props) => {
    const { buttons, type, state, title, fields, sections, dispatch, onCancel, dialogOpen, description, getFormValues, handleDialogClose, } = props;
    const { view } = useWindowResizer(type);
    const sectionsRef = useRef([]);
    const [sectionsRefs, setSectionsRefs] = useState([]);
    useEffect(() => {
        setSectionsRefs(sectionsRef.current);
    }, []);
    useEffect(() => {
        let isMounted = true;
        const registerFields = async () => {
            await dispatch(formActions.init({
                fields
            }));
        };
        if (isMounted) {
            registerFields();
        }
        return () => {
            isMounted = false;
        };
    }, [fields]);
    useEffect(() => {
        const loadFormValues = async () => {
            let values;
            if (getFormValues) {
                values = await getFormValues();
            }
            else {
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
                await dispatch(formActions.setFormValues({
                    values
                }));
        };
        loadFormValues();
    }, [getFormValues]);
    const cancel = async (e) => {
        e.preventDefault();
        onCancel && (await onCancel());
    };
    const filteredButtons = useMemo(() => (buttons === null || buttons === void 0 ? void 0 : buttons.filter(button => filterAction(button))), [buttons]);
    if (!view) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { position: "relative" } },
            state.disabled &&
                React.createElement(StyledDisabledForm, null),
            React.createElement(StyledForm, null,
                title &&
                    React.createElement(TopComponent, { title: title, type: type, description: description, onCancel: onCancel ? (e) => cancel(e) : null, sections: sections, view: view, buttons: filteredButtons, sectionsRefs: sectionsRefs }),
                view === "BIG_DESKTOP" && sections ? (React.createElement(Row, null,
                    sections &&
                        React.createElement(FormNav, { sectionsRefs: sectionsRefs, sections: sections }),
                    React.createElement(FormContent, { view: view, sections: sections },
                        React.createElement(FormLayout, { ref: sectionsRef, state: state, dispatch: dispatch, fields: fields, sections: sections })))) : (React.createElement(FormContent, { view: view, sections: sections },
                    React.createElement(FormLayout, { ref: sectionsRef, state: state, dispatch: dispatch, fields: fields, sections: sections }))))),
        type === "drawer" &&
            React.createElement(Dialog, { dialogTitle: 'Are you sure you want to leave?', open: dialogOpen, primaryAction: () => handleDialogClose(true), primaryBtnLabel: 'Yes, leave', secondaryAction: () => handleDialogClose(false), secondaryBtnLabel: 'No, stay' }, "You have unsaved changes. If you leave all your changes will be lost.")));
};
export default memo(Form);
