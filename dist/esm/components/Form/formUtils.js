import { useRef, useCallback, useReducer } from "react";
export function coreReducer(state, action) {
    switch (action.type) {
        case "FIELD_ON_CHANGE":
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.name]: action.value
                }
            };
        case "FIELD_START_VALIDATE":
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.name]: null
                },
                validating: {
                    ...state.validating,
                    [action.name]: true
                }
            };
        case "FIELD_END_VALIDATE":
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.name]: action.value
                },
                validating: {
                    ...state.validating,
                    [action.name]: undefined
                }
            };
        case "FORM_START_DISABLE":
            return {
                ...state,
                disabled: action.value
            };
        case "FORM_END_DISABLE":
            return {
                ...state,
                disabled: action.value
            };
        case "FORM_VALIDATE":
            return {
                ...state,
                validForm: action.value
            };
        case "FORM_RESET":
            return {
                ...state,
                data: {},
                errors: {},
                validating: {},
                custom: {},
                validForm: false,
                disabled: null,
            };
        default:
            return state;
    }
}
export function useForm() {
    const extraArgs = useRef({
        fields: [],
        fieldMap: {},
        onSubmit: () => undefined,
    });
    const [state, dispatch] = useThunkReducer(coreReducer, {
        data: {},
        errors: {},
        validating: {},
        custom: {},
        validForm: false,
        disabled: null,
    }, extraArgs.current);
    return { state, dispatch };
}
const isEmpty = (arr) => {
    return Array.isArray(arr) && (arr.length === 0 || arr.every(isEmpty));
};
export const generateLayout = ({ sections, fields }) => {
    var _a, _b, _c, _d, _e, _f;
    let customLayout = [];
    if (sections) {
        customLayout = JSON.parse(JSON.stringify(sections));
        customLayout.forEach((section, idx) => {
            const nonEmptyRows = section.fields.map(row => {
                const nonEmptyCols = row.filter(col => !isEmpty(col));
                if (nonEmptyCols.length > 0) {
                    return nonEmptyCols;
                }
            }).filter(row => row !== undefined);
            customLayout[idx].fields = nonEmptyRows;
        });
    }
    if (fields) {
        for (const field of fields) {
            if (field.layout) {
                let section = customLayout.length;
                if (field.layout.section !== undefined && field.layout.section >= 0) {
                    section = field.layout.section;
                }
                let row = (_b = (_a = customLayout[section]) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.length;
                if (field.layout.row !== undefined && field.layout.row >= 0) {
                    row = field.layout.row;
                }
                let col = (_d = (_c = customLayout[section]) === null || _c === void 0 ? void 0 : _c.fields[row]) === null || _d === void 0 ? void 0 : _d.length;
                if (field.layout.col !== undefined && field.layout.col >= 0) {
                    col = field.layout.col;
                }
                if (customLayout[section]) {
                    (_f = (_e = customLayout[section]) === null || _e === void 0 ? void 0 : _e.fields[row][col]) === null || _f === void 0 ? void 0 : _f.push(field.name);
                }
                else {
                    customLayout = [
                        ...customLayout,
                        {
                            fields: [[[field.name]]],
                        },
                    ];
                }
            }
            else if (!sections) {
                customLayout = [
                    ...customLayout,
                    {
                        fields: [[[field.name]]],
                    },
                ];
            }
        }
        return customLayout;
    }
};
export function joinReducers(...reducers) {
    return function (state, action) {
        let newState = state;
        for (const reducer of reducers) {
            newState = reducer(newState, action);
        }
        return newState;
    };
}
export function useThunkReducer(reducer, initialState, extraArgs) {
    const lastState = useRef(initialState);
    const getState = useCallback(() => {
        const state = lastState.current;
        return state;
    }, []);
    const enhancedReducer = useCallback((state, action) => {
        const newState = reducer(state, action);
        lastState.current = newState;
        return newState;
    }, [reducer]);
    const [state, dispatch] = useReducer(enhancedReducer, initialState);
    const customDispatch = useCallback((action) => {
        if (typeof action === "function") {
            return action(customDispatch, getState, extraArgs);
        }
        else {
            return dispatch(action);
        }
    }, [getState, extraArgs]);
    return [state, customDispatch];
}
