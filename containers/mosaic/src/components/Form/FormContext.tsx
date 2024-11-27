import { createContext } from "react";

import type { FormContextState } from "./FormTypes";

import { getInitialState } from "./useForm/initial";
import throws from "@root/utils/misc/throws";

export const FormContext = createContext<FormContextState>({
	state: getInitialState(),
	methods: {
		addValidator: throws("addValidator requires a FormContext provider"),
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
	},
});
