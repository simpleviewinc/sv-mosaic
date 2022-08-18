import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import DataViewFilterDropdownButtons from "../DataViewFilterDropdownButtons";
import theme from "../../theme";
import { useMosaicTranslation } from "../../i18n";
import DatePickerCustom from "../../forms/FormFieldDate/DatePicker";
const StyledContents = styled.div `
	& > .inputRow h5 {
		margin-top:0;
		margin-bottom: 8px;
	}

	& > .inputRow {
		display: flex;
		align-items: center;
	}

	& > .inputRow div.startRange {
		margin-right: 10px;
	}

	& .errorMessage h5 {
		margin-top: 0;
		margin-bottom: 0;
		color: ${theme.colors.red};
	}
`;
export default function FilterDateDropdownContent(props) {
    const [state, setState] = useState({
        rangeStart: props.rangeStart,
        rangeEnd: props.rangeEnd
    });
    const { t } = useMosaicTranslation();
    let errorMessage;
    if (state.rangeStart !== undefined && state.rangeEnd !== undefined && state.rangeEnd < state.rangeStart) {
        errorMessage = "End of range cannot be before start of range.";
    }
    const hasError = errorMessage !== undefined;
    const onApply = function () {
        props.onChange({
            rangeStart: state.rangeStart,
            rangeEnd: state.rangeEnd
        });
        props.onClose();
    };
    const onClear = function () {
        setState({
            ...state,
            rangeStart: undefined,
            rangeEnd: undefined
        });
    };
    const getOnChange = (name) => (date) => {
        if (date !== null) {
            if (name === "rangeStart") {
                // date start should be set to 00:00
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);
            }
            else {
                // date end should be set to 23:59
                date.setHours(23);
                date.setMinutes(59);
                date.setSeconds(59);
            }
        }
        setState({
            ...state,
            [name]: date === null ? undefined : date
        });
    };
    return (React.createElement(StyledContents, null,
        React.createElement("div", { className: "inputRow" },
            React.createElement("div", { className: "startRange" },
                React.createElement("h5", null, `${t("mosaic:common.date_from")}`),
                React.createElement(DatePickerCustom, { onChange: getOnChange("rangeStart"), value: state.rangeStart || null, fieldDef: {
                        name: "",
                        label: "",
                        type: "",
                        inputSettings: {
                            placeholder: t("mosaic:FilterDate.choose_a_date___")
                        },
                    } })),
            React.createElement("div", { className: "endRange" },
                React.createElement("h5", null, `${t("mosaic:common.date_to")}`),
                React.createElement(DatePickerCustom, { onChange: getOnChange("rangeEnd"), value: state.rangeEnd || null, fieldDef: {
                        name: "",
                        label: "",
                        type: "",
                        inputSettings: {
                            placeholder: t("mosaic:FilterDate.choose_a_date___")
                        },
                    } }))),
        hasError &&
            React.createElement("div", { className: "errorMessage" },
                React.createElement("h5", null,
                    "Error: ",
                    errorMessage)),
        React.createElement(DataViewFilterDropdownButtons, { onApply: onApply, onClear: onClear, onCancel: props.onClose, disableApply: hasError })));
}
