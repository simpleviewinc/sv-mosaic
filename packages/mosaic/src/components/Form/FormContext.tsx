import { createContext } from "react";

import type { FormContextState } from "./FormTypes";
import type { FormMethods } from "./useForm";

import { getInitialState } from "./useForm/initial";
import throws from "@root/utils/misc/throws";

export const defaultFormContextMethods: FormMethods = {
	addWait: throws("addWait requires a FormContext provider"),
	disableForm: throws("disableForm requires a FormContext provider"),
	init: throws("init requires a FormContext provider"),
	mountField: throws("mountField requires a FormContext provider"),
	removeWait: throws("removeWait requires a FormContext provider"),
	reset: throws("reset requires a FormContext provider"),
	setFieldBlur: throws("setFieldBlur requires a FormContext provider"),
	setFieldValue: throws("setFieldValue requires a FormContext provider"),
	setFormValues: throws("setFormValues requires a FormContext provider"),
	setSubmitWarning: throws("setSubmitWarning requires a FormContext provider"),
	submitForm: throws("submitForm requires a FormContext provider"),
	addHook: throws("addHook requires a FormContext provider"),
};

export const FormContext = createContext<FormContextState>({
	state: getInitialState(),
	methods: defaultFormContextMethods,
});
