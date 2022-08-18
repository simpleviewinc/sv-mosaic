import * as React from "react";
import { memo, useMemo } from "react";
import styled from "styled-components";
import { formActions } from "./formActions";
import FormFieldText from "../../forms/FormFieldText";
import FormFieldTextArea from "../../forms/FormFieldTextArea";
import FormFieldCheckbox from "../../forms/FormFieldCheckbox";
import FormFieldChipSingleSelect from "../../forms/FormFieldChipSingleSelect";
import FormFieldDropdownSingleSelection from "../../forms/FormFieldDropdownSingleSelection";
import FormFieldPhoneSelectionDropdown from "../../forms/FormFieldPhoneSelectionDropdown";
import FormFieldRadio from "../../forms/FormFieldRadio";
import FormFieldToggleSwitch from "../../forms/FormFieldToggleSwitch";
import Field from "../Field";
import FormFieldImageVideoLinkDocumentBrowsing from "../../forms/FormFieldImageVideoLinkDocumentBrowsing";
import FormFieldColorPicker from "../../forms/FormFieldColorPicker";
import FormFieldDate from "../../forms/FormFieldDate/DateField";
import FormFieldAddress from "../../forms/FormFieldAddress";
import FormFieldTable from "../../forms/FormFieldTable";
import FormFieldTextEditor from "../../forms/FormFieldTextEditor";
import FormFieldAdvancedSelection from "../../forms/FormFieldAdvancedSelection";
import FormFieldMapCoordinates from "../../forms/FormFieldMapCoordinates";
import FormFieldImageUpload from "../../forms/FormFieldImageUpload";
import { Sizes } from "../../theme";
const StyledCol = styled.div `
	display: flex;
	flex-direction: column;
	width: calc(100% / ${pr => pr.colsInRow});
`;
const Col = (props) => {
    const { col, state, fieldsDef, dispatch, colsInRow, colIdx, rowIdx, sectionIdx } = props;
    const componentMap = useMemo(() => ({
        text: FormFieldText,
        textArea: FormFieldTextArea,
        checkbox: FormFieldCheckbox,
        chip: FormFieldChipSingleSelect,
        dropdown: FormFieldDropdownSingleSelection,
        phone: FormFieldPhoneSelectionDropdown,
        radio: FormFieldRadio,
        toggleSwitch: FormFieldToggleSwitch,
        imageVideoDocumentLink: FormFieldImageVideoLinkDocumentBrowsing,
        color: FormFieldColorPicker,
        date: FormFieldDate,
        address: FormFieldAddress,
        table: FormFieldTable,
        textEditor: FormFieldTextEditor,
        advancedSelection: FormFieldAdvancedSelection,
        mapCoordinates: FormFieldMapCoordinates,
        imageUpload: FormFieldImageUpload,
    }), []);
    const doneTypingInterval = 300;
    let typingTimer;
    const sendValidateField = async (curr) => {
        await dispatch(formActions.validateField({ name: curr.name }));
        if (curr.pairedFields)
            curr.pairedFields.forEach(async (pairedField) => {
                await dispatch(formActions.validateField({ name: pairedField }));
            });
    };
    const onChangeMap = useMemo(() => {
        return fieldsDef.reduce((prev, curr) => {
            prev[curr.name] = async function (value) {
                await dispatch(formActions.setFieldValue({
                    name: curr.name,
                    value,
                }));
                clearTimeout(typingTimer);
                typingTimer = setTimeout(async () => await sendValidateField(curr), doneTypingInterval);
            };
            return prev;
        }, {});
    }, [fieldsDef, state.pairedFields]);
    /* const onBlurMap = useMemo(() => {
        return fieldsDef.reduce((prev, curr) => {
            prev[curr.name] = async function () {
                await dispatch(
                    formActions.validateField({ name: curr.name })
                );

                if (curr.pairedFields)
                    curr.pairedFields.forEach(async pairedField => {
                        await dispatch(
                            formActions.validateField({ name: pairedField })
                        );
                    });
            };

            return prev;
        }, {});
    }, [fieldsDef, state.pairedFields]); */
    return (React.createElement(StyledCol, { colsInRow: colsInRow }, col.map((field, i) => {
        const currentField = fieldsDef === null || fieldsDef === void 0 ? void 0 : fieldsDef.find((fieldDef) => {
            return field === fieldDef.name;
        });
        if (!currentField) {
            throw new Error(`No field declared for field name '${field}' in section ${sectionIdx}, row ${rowIdx}, column ${colIdx}.`);
        }
        const { type, ...fieldProps } = currentField;
        const Component = typeof type === "string" ? componentMap[type] : type;
        if (!Component) {
            throw new Error(`Invalid type ${type}`);
        }
        const onChange = onChangeMap[fieldProps.name];
        // const onBlur = onBlurMap[fieldProps.name];
        const name = fieldProps.name;
        const value = (state === null || state === void 0 ? void 0 : state.data[fieldProps.name]) || "";
        const error = (state === null || state === void 0 ? void 0 : state.errors[fieldProps.name]) || "";
        let maxSize;
        const SizeSelected = Sizes[currentField === null || currentField === void 0 ? void 0 : currentField.size] ? Sizes[currentField === null || currentField === void 0 ? void 0 : currentField.size] : currentField === null || currentField === void 0 ? void 0 : currentField.size;
        if (currentField === null || currentField === void 0 ? void 0 : currentField.size)
            switch (colsInRow) {
                case 1:
                    maxSize = SizeSelected <= Sizes.lg ? SizeSelected : Sizes.lg;
                    break;
                case 2:
                    maxSize = SizeSelected <= Sizes.md ? SizeSelected : Sizes.md;
                    break;
                case 3:
                    maxSize = SizeSelected <= Sizes.sm ? SizeSelected : Sizes.sm;
                    break;
                default:
                    break;
            }
        const children = useMemo(() => (React.createElement(Component, { fieldDef: { ...currentField, size: maxSize }, name: name, value: value, error: error, onChange: onChange, 
            // onBlur={onBlur}
            key: `${name}_${i}` })), [value, error, onChange, currentField]);
        return (typeof type === "string" && componentMap[type]) ? (React.createElement(Field, { key: `${name}_${i}`, fieldDef: { ...currentField, size: maxSize }, value: value, error: error, colsInRow: colsInRow }, children))
            :
                (children);
    })));
};
export default memo(Col);
