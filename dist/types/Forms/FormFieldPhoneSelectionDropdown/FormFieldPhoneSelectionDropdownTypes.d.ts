import { FieldProps } from '@root/components/Field';
import { FormEventHandler } from 'react';
import { PhoneInputProps } from 'react-phone-input-2';
export interface CountryData {
    name: string;
    dialCode: string;
    countryCode: string;
    format: string;
}
export interface FormFieldPhoneSelectionDropdownProps extends FieldProps {
    inputSettings?: {
        /**
         * Phone formatting according to the country selected.
         */
        autoFormat?: boolean;
        /**
         * Initial country. It must be a country code (e.g., us, mx, etc.)
         */
        country?: string;
        /**
         * Example text shown inside of the input field
         * portion of the dropdown
         */
        placeholder?: string;
        /**
         * Input state value
         */
        value?: string;
    };
    /**
     * Function that listens to changes on the selected option.
     */
    onChange?: PhoneInputProps['onChange'];
    onBlur?: FormEventHandler<HTMLInputElement>;
}
