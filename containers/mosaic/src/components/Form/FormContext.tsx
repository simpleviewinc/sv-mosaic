import { createContext } from "react";

import type { FormContextState } from "./FormTypes";

import { getInitialState } from "./useForm/initial";

export const FormContext = createContext<FormContextState>({
	state: getInitialState(),
});
