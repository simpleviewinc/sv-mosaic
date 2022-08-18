import { ChangeEventHandler } from "react";
import { RadioGroupProps as MUIRadioGroup } from "@mui/material/RadioGroup";
import { MosaicLabelValue } from "@root/types";
export declare type FormFieldRadioDef = {
    /**
     * Function that listens to changes on the selected option.
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
    * Array of objects containing each of the options to be displayed within the radio button.
    */
    options?: MosaicLabelValue[];
    /**
     * Value of the selected radio button.
     */
    value?: MUIRadioGroup["value"];
};
