import { createContext } from "react";
import type { FormFieldPhoneContextState } from "./FormFieldPhoneTypes";
import throws from "@root/utils/misc/throws";

const FormFieldPhoneContext = createContext<FormFieldPhoneContextState>({
	autocompleteOpen: false,
	hasFocus: false,
	setContainer: throws("setContainer can only be called within a FormFieldPhoneContext provider."),
	setAutocompleteOpen: throws("setAutocompleteOpen can only be called within a FormFieldPhoneContext provider."),
	setHasFocus: throws("setHasFocus can only be called within a FormFieldPhoneContext provider."),
});

export default FormFieldPhoneContext;
